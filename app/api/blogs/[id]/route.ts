import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, getDoc, updateDoc, deleteDoc, serverTimestamp } from "firebase/firestore";
import { getSession } from "@/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const docRef = doc(db, "posts", params.id);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }
    
    return NextResponse.json({ id: docSnap.id, ...docSnap.data() });
  } catch (error) {
    console.error("Fetch blog detail error:", error);
    return NextResponse.json({ message: "Error fetching post" }, { status: 500 });
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
    const docRef = doc(db, "posts", params.id);
    
    await updateDoc(docRef, {
      slug: data.slug,
      title: data.title,
      content: data.content,
      excerpt: data.excerpt,
      author: data.author,
      category: data.category,
      date: data.date ? new Date(data.date) : serverTimestamp(),
      readTime: data.readTime,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      published: data.published,
      updatedAt: serverTimestamp(),
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update blog error:", error);
    return NextResponse.json({ message: "Error updating post" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const docRef = doc(db, "posts", params.id);
    await deleteDoc(docRef);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete blog error:", error);
    return NextResponse.json({ message: "Error deleting post" }, { status: 500 });
  }
}
