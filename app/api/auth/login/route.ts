import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { login } from "@/lib/auth";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // 1. Check if admin exists in DB (Wrapped in try/catch for Vercel SQLite compatibility)
    let admin = null;
    try {
      admin = await prisma.admin.findUnique({
        where: { username },
      });
    } catch (dbError) {
      console.log("Database connection failed, falling back to stateless mode.");
    }

    // 2. Initial Credential Bypass (Vercel SQLite Read-Only fix)
    const INITIAL_USERNAME = "raffiq_sr";
    const INITIAL_PASSWORD = "Tree_sr9";

    let isAuthorized = false;

    if (admin) {
      isAuthorized = await bcrypt.compare(password, admin.password);
    } else if (username === INITIAL_USERNAME && password === INITIAL_PASSWORD) {
      isAuthorized = true;
      // Try to seed the admin in DB, but don't crash if it fails (Vercel read-only)
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await prisma.admin.create({
          data: { username: INITIAL_USERNAME, password: hashedPassword },
        });
      } catch (e) {
        console.log("DB Seed skipped - running in stateless mode");
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
