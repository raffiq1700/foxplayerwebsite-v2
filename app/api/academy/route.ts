import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, addDoc, serverTimestamp, doc, deleteDoc, updateDoc } from "firebase/firestore/lite";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, "academy"));
    const articles = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : new Date(),
      };
    });
    
    // Sort in JS to avoid "missing field" exclusion
    articles.sort((a: any, b: any) => b.createdAt.getTime() - a.createdAt.getTime());
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
      publishedAt: data.status === "published" ? new Date() : null,
      createdAt: new Date(),
    });
    return NextResponse.json({ id: docRef.id });
  } catch (error) {
    console.error("Error creating article:", error);
    return NextResponse.json({ message: "Error creating article" }, { status: 500 });
  }
}

