import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getSession } from "@/lib/auth";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: "raffiq_sr@yahoo.co.in",
    pass: "Tree_sr9", // In a real app, use process.env.YAHOO_SMTP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const { subject, messageTemplate, enquiryIds } = await request.json();

    if (!subject || !messageTemplate || !enquiryIds || !enquiryIds.length) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const enquiries = await prisma.enquiry.findMany({
      where: { id: { in: enquiryIds } },
    });

    if (enquiries.length === 0) {
      return NextResponse.json({ message: "No valid contacts found" }, { status: 400 });
    }

    // Create campaign record
    const campaign = await prisma.emailCampaign.create({
      data: {
        subject,
        messageTemplate,
        recipientsCount: enquiries.length,
        status: "sending",
      },
    });

    // We can run the sending process in the background, but for simplicity
    // in serverless, we'll wait for it if the list isn't huge.
    // NOTE: On Vercel, requests time out after 10-60s depending on the plan.
    let sentCount = 0;
    let failedCount = 0;

    for (const enquiry of enquiries) {
      // Personalize message
      let personalizedHtml = messageTemplate
        .replace(/{name}/g, enquiry.name)
        .replace(/{email}/g, enquiry.email)
        .replace(/{service}/g, enquiry.subject)
        .replace(/{submitted_date}/g, new Date(enquiry.createdAt).toLocaleDateString());

      let deliveryStatus = "failed";
      let errorMessage = null;

      try {
        await transporter.sendMail({
          from: '"FoxPlayer Algo Technologies" <raffiq_sr@yahoo.co.in>',
          to: enquiry.email,
          subject: subject,
          html: personalizedHtml,
        });
        deliveryStatus = "success";
        sentCount++;
      } catch (err: any) {
        console.error(`Failed to send email to ${enquiry.email}:`, err);
        errorMessage = err.message || "Unknown error";
        failedCount++;
      }

      // Log delivery status
      try {
        await prisma.emailCampaignLog.create({
          data: {
            campaignId: campaign.id,
            enquiryId: enquiry.id,
            recipientEmail: enquiry.email,
            recipientName: enquiry.name,
            deliveryStatus,
            errorMessage,
          },
        });
      } catch (logErr) {
        console.error("Failed to save log:", logErr);
      }

      // Short delay to avoid rate limits (200ms)
      await delay(200);
    }

    // Update campaign status
    await prisma.emailCampaign.update({
      where: { id: campaign.id },
      data: {
        sentCount,
        failedCount,
        status: "completed",
        sentAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      total: enquiries.length,
      sent: sentCount,
      failed: failedCount,
    });
  } catch (error) {
    console.error("Campaign error:", error);
    return NextResponse.json({ message: "Failed to send campaign" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const campaigns = await prisma.emailCampaign.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(campaigns);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching campaigns" }, { status: 500 });
  }
}
