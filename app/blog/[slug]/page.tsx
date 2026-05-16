import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Bookmark, Share2 } from "lucide-react";
import { Metadata } from "next";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { Newsletter } from "@/components/blog/Newsletter";
import { generateArticleSchema } from "@/lib/seo";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Foxplayer Academy`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author],
      publishedTime: post.date,
      siteName: "Foxplayer Algo Technologies",
    },
  };
}

const components = {
  h1: (props: any) => <h1 className="text-3xl md:text-5xl font-black text-white mt-16 mb-8 tracking-tighter" {...props} />,
  h2: (props: any) => <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 tracking-tight" {...props} />,
  h3: (props: any) => <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4" {...props} />,
  p: (props: any) => <p className="text-white/60 leading-relaxed mb-8 text-lg font-medium" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 text-white/50 mb-8 space-y-4 font-medium text-lg" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 text-white/50 mb-8 space-y-4 font-medium text-lg" {...props} />,
  li: (props: any) => <li className="text-white/60" {...props} />,
  a: (props: any) => <a className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4 decoration-primary/30" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-2 border-primary pl-8 py-4 my-12 italic text-white/40 text-2xl bg-white/[0.02] rounded-r-2xl font-medium" {...props} />
  ),
  code: (props: any) => <code className="bg-white/10 rounded-md px-2 py-0.5 font-mono text-sm text-primary/80" {...props} />,
  pre: (props: any) => (
    <pre className="bg-[#050505] border border-white/5 p-8 rounded-2xl overflow-x-auto mb-12 shadow-2xl">
      <code className="bg-transparent text-white/70 text-sm font-mono leading-relaxed" {...props} />
    </pre>
  ),
  table: (props: any) => (
    <div className="overflow-x-auto mb-12 rounded-2xl border border-white/5">
      <table className="w-full text-left border-collapse bg-white/[0.02]" {...props} />
    </div>
  ),
  th: (props: any) => <th className="p-4 border-b border-white/10 text-xs font-black uppercase tracking-widest text-primary" {...props} />,
  td: (props: any) => <td className="p-4 border-b border-white/5 text-sm text-white/50 font-medium" {...props} />,
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const schema = generateArticleSchema(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ReadingProgress />
      <div className="min-h-screen pt-48 bg-background relative">
        {/* Background Mesh */}
        <div className="absolute top-0 left-0 w-full h-screen pointer-events-none z-0">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 mb-32">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/30 hover:text-white transition-colors mb-16 text-xs font-bold uppercase tracking-[0.2em]">
            <ArrowLeft className="w-4 h-4" /> Return to Intelligence
          </Link>
          
          <header className="mb-24">
            <div className="flex items-center gap-6 mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.95]">
              {post.title}
            </h1>
            
            <p className="text-2xl text-white/40 leading-relaxed mb-16 font-medium max-w-2xl">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between py-10 border-y border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary font-black">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase tracking-wider">{post.author}</div>
                  <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Platform Analyst</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-white transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-white transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </header>

          <article className="max-w-none">
            <MDXRemote source={post.content} components={components} />
          </article>
          
          <ShareButtons title={post.title} slug={params.slug} />
        </div>
        
        <Newsletter />
      </div>
    </>
  );
}
