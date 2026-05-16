import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function GET() {
  try {
    const articles = await prisma.academyArticle.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching articles" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  try {
    const data = await request.json();
    const article = await prisma.academyArticle.create({
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
        faqJson: data.faqJson || "[]",
        author: data.author || "Raffiq SR",
        readingTime: data.readingTime || "5 min read",
        status: data.status || "published",
        publishedAt: data.status === "published" ? new Date() : null,
      },
    });
    return NextResponse.json(article);
  } catch (error) {
    console.error("Error creating article:", error);
    return NextResponse.json({ message: "Error creating article" }, { status: 500 });
  }
}
