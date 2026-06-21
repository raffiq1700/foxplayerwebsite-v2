import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore/lite";
import { getSession } from "@/lib/auth";

interface JobData {
  id: string;
  createdAt: Date;
  [key: string]: unknown;
}

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, "jobs"));
    const jobs = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : new Date(),
      } as JobData;
    });

    // Sort by createdAt descending
    jobs.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("Fetch jobs error:", error);
    return NextResponse.json({ message: "Error fetching jobs" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const data = await request.json();
    const docRef = await addDoc(collection(db, "jobs"), {
      title: data.title,
      slug: data.slug,
      location: data.location || "Remote / Coimbatore",
      type: data.type || "Internship",
      duration: data.duration || "3-6 Months",
      stipend: data.stipend || "Unpaid",
      description: data.description,
      requirements: data.requirements || "",
      benefits: data.benefits || "",
      status: data.status || "published",
      published: data.published ?? true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return NextResponse.json({ id: docRef.id });
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json({ message: "Error creating job" }, { status: 500 });
  }
}
