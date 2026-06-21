import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore/lite";
import { getSession } from "@/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const docRef = doc(db, "jobs", params.id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({ id: docSnap.id, ...docSnap.data() });
  } catch (error) {
    console.error("Fetch job detail error:", error);
    return NextResponse.json({ message: "Error fetching job details" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const data = await request.json();
    const docRef = doc(db, "jobs", params.id);

    await updateDoc(docRef, {
      title: data.title,
      slug: data.slug,
      location: data.location,
      type: data.type,
      duration: data.duration,
      stipend: data.stipend,
      description: data.description,
      requirements: data.requirements,
      benefits: data.benefits,
      status: data.status,
      published: data.published,
      updatedAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update job error:", error);
    return NextResponse.json({ message: "Error updating job" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const docRef = doc(db, "jobs", params.id);
    await deleteDoc(docRef);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete job error:", error);
    return NextResponse.json({ message: "Error deleting job" }, { status: 500 });
  }
}
