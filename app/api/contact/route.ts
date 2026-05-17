import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore/lite";
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

    // 1. Send Email Notification First
    let emailSent = false;
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
      emailSent = true;
    } catch (emailErr) {
      console.error("Failed to send admin notification email:", emailErr);
    }

    // 2. Save to Firebase Firestore
    let docRef = null;
    try {
      docRef = await addDoc(collection(db, "enquiries"), {
        name,
        email,
        subject,
        message,
        status: "new",
        createdAt: new Date(),
      });
    } catch (dbErr) {
      console.error("Firebase save failed:", dbErr);
    }

    if (!emailSent && !docRef) {
      throw new Error("Both email and database failed");
    }

    return NextResponse.json({ success: true, id: docRef?.id }, { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Failed to submit enquiry" },
      { status: 500 }
    );
  }
}

