import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, addDoc, serverTimestamp, doc, deleteDoc, updateDoc } from "firebase/firestore/lite";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const postsQuery = query(collection(db, "posts"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(postsQuery);
    const posts = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      date: doc.data().date?.toDate() || new Date(),
    }));
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Fetch blogs error:", error);
    return NextResponse.json({ message: "Error fetching posts" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const data = await request.json();
    const docRef = await addDoc(collection(db, "posts"), {
      slug: data.slug,
      title: data.title,
      content: data.content,
      excerpt: data.excerpt,
      author: data.author || "Raffiq SR",
      category: data.category || "Trading",
      date: data.date ? new Date(data.date) : new Date(),
      readTime: data.readTime || "5 min read",
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      published: data.published ?? true,
      createdAt: new Date(),
    });
    
    return NextResponse.json({ id: docRef.id });
  } catch (error) {
    console.error("Create blog error details:", error);
    return NextResponse.json({ message: "Error creating post", error: error.message }, { status: 500 });
  }
}

