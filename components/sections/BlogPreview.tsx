import Link from "next/link";
import { GlowCard } from "@/components/ui/GlowCard";
import { ArrowRight, Clock } from "lucide-react";
import { BlogPost } from "@/lib/mdx";

export function BlogPreview({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="py-32 bg-surface relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Market Insights</h2>
            <p className="text-white/60 text-lg font-light">
              Stay updated with the latest trading strategies, algorithmic trends, and market news.
            </p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-primary hover:text-primary-hover transition-colors font-medium">
            View All Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <GlowCard className="h-full flex flex-col justify-start">
                <div className="flex items-center gap-3 text-sm mb-6">
                  <span className="px-3 py-1 rounded bg-secondary/20 text-cyan-400 font-bold text-[10px] uppercase tracking-wider border border-secondary/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-white/40">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm mb-8 flex-1 line-clamp-3 font-light leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="text-primary text-sm font-bold flex items-center gap-1 mt-auto group">
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </GlowCard>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center md:hidden">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors font-medium">
            View All Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
