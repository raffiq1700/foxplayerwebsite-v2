import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const prisma = new PrismaClient();
const contentDir = path.join(process.cwd(), "content/blog");

async function migrate() {
  console.log("Starting migration...");

  if (!fs.existsSync(contentDir)) {
    console.log("Content directory not found.");
    return;
  }

  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".mdx"));

  for (const file of files) {
    const slug = file.replace(".mdx", "");
    const fullPath = path.join(contentDir, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    console.log(`Migrating: ${slug}`);

    await prisma.post.upsert({
      where: { slug },
      update: {
        title: data.title,
        content: content,
        excerpt: data.excerpt,
        author: data.author,
        category: data.category,
        date: data.date ? new Date(data.date) : new Date(),
        readTime: data.readTime,
        metaTitle: data.title,
        metaDescription: data.excerpt,
      },
      create: {
        slug,
        title: data.title,
        content: content,
        excerpt: data.excerpt,
        author: data.author || "Raffiq SR",
        category: data.category || "Trading",
        date: data.date ? new Date(data.date) : new Date(),
        readTime: data.readTime || "5 min read",
        metaTitle: data.title,
        metaDescription: data.excerpt,
      },
    });
  }

  console.log("Migration finished!");
  await prisma.$disconnect();
}

migrate().catch(e => {
  console.error(e);
  process.exit(1);
});
