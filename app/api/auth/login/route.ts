import { NextResponse } from "next/server";
import { login } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where, addDoc, limit } from "firebase/firestore/lite";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // 1. Initial Credentials for first-time setup
    const INITIAL_USERNAME = "raffiq_sr";
    const INITIAL_PASSWORD = "Tree_sr9";

    interface AdminUser {
      id: string;
      username: string;
      password?: string;
      role?: string;
    }

    // 2. Check Firestore for user
    let admin: AdminUser | null = null;
    try {
      const usersQuery = query(collection(db, "users"), where("username", "==", username), limit(1));
      const querySnapshot = await getDocs(usersQuery);
      
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        admin = { id: userDoc.id, ...userDoc.data() } as AdminUser;
      }
    } catch (dbError) {
      console.error("Firebase connection error:", dbError);
    }

    let isAuthorized = false;

    if (admin) {
      isAuthorized = await bcrypt.compare(password, admin.password || "");
    } else if (username === INITIAL_USERNAME && password === INITIAL_PASSWORD) {
      isAuthorized = true;
      // Seed the admin in Firestore
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await addDoc(collection(db, "users"), {
          username: INITIAL_USERNAME,
          password: hashedPassword,
          role: "admin",
          createdAt: new Date()
        });
      } catch (e) {
        console.error("Firebase seed failed:", e);
      }
    }

    if (!isAuthorized) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // 4. Create session
    await login(username);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

