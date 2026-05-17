import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, deleteDoc, serverTimestamp } from "firebase/firestore/lite";
import { getSession } from "@/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const docRef = doc(db, "academy", params.id);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    
    return NextResponse.json({ id: docSnap.id, ...docSnap.data() });
  } catch (error) {
    console.error("Fetch academy detail error:", error);
    return NextResponse.json({ message: "Error fetching article" }, { status: 500 });
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
    const docRef = doc(db, "academy", params.id);
    
    await updateDoc(docRef, {
      title: data.title,
      slug: data.slug,
      category: data.category,
      excerpt: data.excerpt,
      content: data.content,
      featuredImage: data.featuredImage,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      focusKeyword: data.focusKeyword,
      faqJson: data.faqJson,
      author: data.author,
      readingTime: data.readingTime,
      status: data.status,
      updatedAt: new Date(),
      publishedAt: data.status === "published" ? new Date() : null,
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update academy error:", error);
    return NextResponse.json({ message: "Error updating article" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const docRef = doc(db, "academy", params.id);
    await deleteDoc(docRef);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete academy error:", error);
    return NextResponse.json({ message: "Error deleting article" }, { status: 500 });
  }
}
