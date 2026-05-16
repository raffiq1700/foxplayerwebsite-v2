import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { login } from "@/lib/auth";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // 1. Check if admin exists in DB
    let admin = await prisma.admin.findUnique({
      where: { username },
    });

    // 2. If no admin in DB, check for initial credentials
    // Note: In a real app, you'd seed the DB. For now, we allow the initial credentials.
    const INITIAL_USERNAME = "raffiq_sr";
    const INITIAL_PASSWORD = "Tree_sr9";

    if (!admin && username === INITIAL_USERNAME && password === INITIAL_PASSWORD) {
      // Create the admin in DB if it's the first login
      const hashedPassword = await bcrypt.hash(password, 10);
      admin = await prisma.admin.create({
        data: {
          username: INITIAL_USERNAME,
          password: hashedPassword,
        },
      });
    }

    if (!admin) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // 3. Verify password
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // 4. Create session
    await login(admin.username);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
