import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const article = await prisma.academyArticle.findUnique({
      where: { id: params.id },
    });
    if (!article) return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching article" }, { status: 500 });
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
    const article = await prisma.academyArticle.update({
      where: { id: params.id },
      data: {
        title: data.title,
        slug: data.slug,
        category: data.category,
        excerpt: data.excerpt,
        content: data.content,
        featuredImage: data.featuredImage,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        focusKeyword: data.focusKeyword,
        faqJson: data.faqJson,
        author: data.author,
        readingTime: data.readingTime,
        status: data.status,
        publishedAt: data.status === "published" && !data.publishedAt ? new Date() : data.publishedAt,
      },
    });
    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json({ message: "Error updating article" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    await prisma.academyArticle.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting article" }, { status: 500 });
  }
}
