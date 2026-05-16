import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: params.id },
    });
    if (!post) return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json(post);
  } catch (error) {
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
    const post = await prisma.post.update({
      where: { id: params.id },
      data: {
        slug: data.slug,
        title: data.title,
        content: data.content,
        excerpt: data.excerpt,
        author: data.author,
        category: data.category,
        date: data.date ? new Date(data.date) : undefined,
        readTime: data.readTime,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        published: data.published,
      },
    });
    return NextResponse.json(post);
  } catch (error) {
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
    await prisma.post.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting post" }, { status: 500 });
  }
}
