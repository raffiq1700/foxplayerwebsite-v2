import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, doc, updateDoc } from "firebase/firestore/lite";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const categoriesQuery = query(collection(db, "academy_categories"), orderBy("name", "asc"));
    const querySnapshot = await getDocs(categoriesQuery);
    const categories = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json(categories);
  } catch (error) {
    console.error("Fetch academy categories error:", error);
    return NextResponse.json({ message: "Error fetching categories" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const data = await request.json();
    if (!data.slug) return NextResponse.json({ message: "Slug is required" }, { status: 400 });

    const docRef = doc(db, "academy_categories", data.slug);
    await updateDoc(docRef, {
      ...data,
      updatedAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update academy category error:", error);
    return NextResponse.json({ message: "Error updating category" }, { status: 500 });
  }
}
