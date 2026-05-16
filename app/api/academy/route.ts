import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, addDoc, serverTimestamp, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const academyQuery = query(collection(db, "academy"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(academyQuery);
    const articles = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
    }));
    return NextResponse.json(articles);
  } catch (error) {
    console.error("Fetch academy error:", error);
    return NextResponse.json({ message: "Error fetching articles" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const data = await request.json();
    const docRef = await addDoc(collection(db, "academy"), {
      title: data.title,
      slug: data.slug,
      category: data.category,
      excerpt: data.excerpt,
      content: data.content,
      featuredImage: data.featuredImage,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      focusKeyword: data.focusKeyword,
      faqJson: data.faqJson || "[]",
      author: data.author || "Raffiq SR",
      readingTime: data.readingTime || "5 min read",
      status: data.status || "published",
      publishedAt: data.status === "published" ? serverTimestamp() : null,
      createdAt: serverTimestamp(),
    });
    return NextResponse.json({ id: docRef.id });
  } catch (error) {
    console.error("Error creating article:", error);
    return NextResponse.json({ message: "Error creating article" }, { status: 500 });
  }
}

