import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy, where, doc, deleteDoc } from "firebase/firestore/lite";
import { getSession } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    let enquiriesQuery;
    if (status && status !== "all") {
      enquiriesQuery = query(collection(db, "enquiries"), where("status", "==", status), orderBy("createdAt", "desc"));
    } else {
      enquiriesQuery = query(collection(db, "enquiries"), orderBy("createdAt", "desc"));
    }

    const querySnapshot = await getDocs(enquiriesQuery);
    const enquiries = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
    }));

    return NextResponse.json(enquiries);
  } catch (error) {
    console.error("Fetch enquiries error:", error);
    return NextResponse.json({ message: "Error fetching enquiries" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) return NextResponse.json({ message: "ID is required" }, { status: 400 });

    await deleteDoc(doc(db, "enquiries", id));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting enquiry" }, { status: 500 });
  }
}

