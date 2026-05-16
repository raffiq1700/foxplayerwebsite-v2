import { Metadata } from "next";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { notFound } from "next/navigation";
import { Clock, User, ChevronRight, Share2, Shield, Globe, ArrowRight, FileText, MessageCircle, ExternalLink } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export const dynamic = "force-dynamic";

interface Props {
  params: { slug: string };
}

async function getArticleBySlug(slug: string) {
  try {
    const q = query(collection(db, "academy"), where("slug", "==", slug), limit(1));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) return null;
    const doc = querySnapshot.docs[0];
    return { id: doc.id, ...doc.data() } as any;
  } catch (error) {
    console.error("Firestore fetch error:", error);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) return { title: "Article Not Found" };

  const baseUrl = "https://www.foxplayer.co.in";
  
  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.excerpt,
    alternates: {
      canonical: `${baseUrl}/academy/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt,
      url: `${baseUrl}/academy/${article.slug}`,
      type: "article",
      images: article.featuredImage ? [{ url: article.featuredImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt,
      images: article.featuredImage ? [article.featuredImage] : [],
    },
  };
}

export default async function AcademyArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);

  if (!article) notFound();

  let faqs = [];
  try {
    faqs = JSON.parse(article.faqJson || "[]");
  } catch (e) {}

  const postDate = article.publishedAt?.toDate ? article.publishedAt.toDate() : (article.createdAt?.toDate ? article.createdAt.toDate() : new Date());

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Person",
      "name": article.author,
    },
    "datePublished": postDate.toISOString(),
    "dateModified": article.updatedAt?.toDate ? article.updatedAt.toDate().toISOString() : postDate.toISOString(),
    "category": article.category,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f: any) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  };

  return (
    <main className="bg-background min-h-screen pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/academy" className="hover:text-primary transition-colors">Academy</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/40 truncate">{article.title}</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-[10px] font-black text-primary uppercase tracking-widest">
              {article.category}
            </span>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest flex items-center gap-1.5">
              <Clock className="w-3 h-3" /> {article.readingTime}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-white/5">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <User className="w-5 h-5 text-white/40" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Expert Analyst</p>
                  <p className="text-sm font-bold text-white">{article.author}</p>
                </div>
              </div>
              <div className="hidden sm:block">
                <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Last Updated</p>
                <p className="text-sm font-bold text-white">{postDate.toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20 mr-2">Share Strategy</span>
              <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-white/20 transition-all">
                <Globe className="w-4 h-4" />
              </button>
              <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-white/20 transition-all">
                <ExternalLink className="w-4 h-4" />
              </button>
              <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-white/20 transition-all">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none prose-p:text-white/60 prose-p:leading-relaxed prose-headings:text-white prose-headings:tracking-tight prose-strong:text-white prose-li:text-white/60">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="mt-20 pt-20 border-t border-white/5">
            <h2 className="text-3xl font-black text-white tracking-tighter mb-10 flex items-center gap-3">
              <MessageCircle className="w-8 h-8 text-primary" /> Strategy FAQ
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {faqs.map((faq: any, i: number) => (
                <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                  <p className="text-white/40 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="mt-20 p-8 md:p-12 bg-gradient-to-br from-primary/20 via-background to-secondary/10 border border-primary/20 rounded-[2.5rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8">
            <Shield className="w-24 h-24 text-primary/10 -rotate-12" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tighter">Need automated trading software?</h3>
            <p className="text-white/50 mb-8 max-w-xl text-lg">
              FoxPlayer Algo Technologies provides institutional-grade bridges, custom strategy development, and zero-latency execution engines.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/919983168522" target="_blank" className="bg-white text-background px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-transform">
                Consult an Expert <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/pricing" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

