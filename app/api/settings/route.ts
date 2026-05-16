import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getSession } from "@/lib/auth";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const { username, newPassword } = await request.json();

    const updateData: any = {};
    if (username) updateData.username = username;
    if (newPassword) {
      updateData.password = await bcrypt.hash(newPassword, 10);
    }

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ message: "Nothing to update" }, { status: 400 });
    }

    await prisma.admin.update({
      where: { username: session.username },
      data: updateData,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ message: "Error updating settings" }, { status: 500 });
  }
}
