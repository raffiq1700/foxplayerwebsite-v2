import { NextResponse } from "next/server";
import prisma from "@/lib/db";
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

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const enquiry = await prisma.enquiry.create({
      data: {
        name,
        email,
        subject,
        message,
        status: "new",
      },
    });

    try {
      await transporter.sendMail({
        from: '"FoxPlayer Website" <raffiq_sr@yahoo.co.in>',
        to: "raffiq_sr@yahoo.co.in", // Send to self
        subject: `New Website Enquiry: ${subject}`,
        html: `
          <h3>New Enquiry from FoxPlayer Website</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    } catch (emailErr) {
      console.error("Failed to send admin notification email:", emailErr);
    }

    return NextResponse.json({ success: true, data: enquiry }, { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Failed to submit enquiry" },
      { status: 500 }
    );
  }
}
