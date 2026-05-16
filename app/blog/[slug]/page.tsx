import { Metadata } from "next";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Clock, User, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let post = null;
  try {
    post = await prisma.post.findUnique({
      where: { slug: params.slug },
    });
  } catch (error) {
    console.error("Blog metadata error:", error);
  }

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      type: "article",
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  let post = null;
  try {
    post = await prisma.post.findUnique({
      where: { slug: params.slug },
    });
  } catch (error) {
    console.error("Blog post page error:", error);
  }

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.featuredImage,
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "datePublished": post.date,
    "dateModified": post.updatedAt,
  };

  return (
    <main className="min-h-screen pt-40 pb-24 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/blog" className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-[10px] font-black text-primary uppercase tracking-widest">
              {post.category}
            </span>
            <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" /> {new Date(post.date).toLocaleDateString()}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 py-8 border-y border-white/5">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <User className="w-5 h-5 text-white/40" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Published By</p>
              <p className="text-sm font-bold text-white">{post.author}</p>
            </div>
          </div>
        </header>

        <div className="prose prose-invert max-w-none prose-p:text-white/60 prose-p:leading-relaxed prose-headings:text-white prose-headings:tracking-tight">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
