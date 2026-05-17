import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, where, addDoc, serverTimestamp, doc, updateDoc, getDoc } from "firebase/firestore/lite";
import { getSession } from "@/lib/auth";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 587,
  secure: false, // TLS
  auth: {
    user: "raffiq_sr@yahoo.co.in",
    pass: "Tree_sr9",
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

    // Fetch enquiries from Firestore
    const enquiries: any[] = [];
    for (const id of enquiryIds) {
      try {
        const docSnap = await getDoc(doc(db, "enquiries", id));
        if (docSnap.exists()) {
          enquiries.push({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (err) {
        console.error(`Error fetching enquiry ${id}:`, err);
      }
    }

    if (enquiries.length === 0) {
      return NextResponse.json({ message: "No valid contacts found" }, { status: 400 });
    }

    // Create campaign record in Firestore
    const campaignRef = await addDoc(collection(db, "campaigns"), {
      subject,
      messageTemplate,
      recipientsCount: enquiries.length,
      status: "sending",
      createdAt: new Date(),
    });

    let sentCount = 0;
    let failedCount = 0;

    for (const enquiry of enquiries) {
      let personalizedHtml = messageTemplate
        .replace(/{name}/g, enquiry.name || "")
        .replace(/{email}/g, enquiry.email || "")
        .replace(/{service}/g, enquiry.subject || "")
        .replace(/{submitted_date}/g, enquiry.createdAt && typeof enquiry.createdAt.toDate === 'function' ? enquiry.createdAt.toDate().toLocaleDateString() : new Date().toLocaleDateString());

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

      // Log delivery status in Firestore
      try {
        await addDoc(collection(db, "campaign_logs"), {
          campaignId: campaignRef.id,
          enquiryId: enquiry.id,
          recipientEmail: enquiry.email,
          recipientName: enquiry.name,
          deliveryStatus,
          errorMessage,
          sentAt: new Date(),
        });
      } catch (logErr) {
        console.error("Failed to save log:", logErr);
      }

      await delay(200);
    }

    // Update campaign status in Firestore
    await updateDoc(doc(db, "campaigns", campaignRef.id), {
      sentCount,
      failedCount,
      status: "completed",
      sentAt: new Date(),
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
    const campaignsQuery = query(collection(db, "campaigns"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(campaignsQuery);
    const campaigns = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
    }));
    return NextResponse.json(campaigns);
  } catch (error) {
    console.error("Fetch campaigns error:", error);
    return NextResponse.json({ message: "Error fetching campaigns" }, { status: 500 });
  }
}

