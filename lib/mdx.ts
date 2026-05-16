import prisma from "./db";

export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  readTime: string;
  content: string;
}

export async function getPostSlugs() {
  const posts = await prisma.post.findMany({
    select: { slug: true },
    where: { published: true }
  });
  return posts.map(p => p.slug);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) return null;

  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    date: post.date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    excerpt: post.excerpt || "",
    author: post.author,
    category: post.category,
    readTime: post.readTime || "5 min read",
    content: post.content,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { date: "desc" },
  });

  return posts.map(post => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    date: post.date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    excerpt: post.excerpt || "",
    author: post.author,
    category: post.category,
    readTime: post.readTime || "5 min read",
    content: post.content,
  }));
}
