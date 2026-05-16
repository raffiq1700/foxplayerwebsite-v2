import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { date: "desc" },
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching posts" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const data = await request.json();
    const post = await prisma.post.create({
      data: {
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
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    console.error("Create blog error:", error);
    return NextResponse.json({ message: "Error creating post" }, { status: 500 });
  }
}
