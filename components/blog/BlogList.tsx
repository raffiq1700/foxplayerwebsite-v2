"use client";

import { GlowCard } from "@/components/ui/GlowCard";
import { ArrowRight, Clock, Search, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

interface BlogListProps {
  posts: Post[];
  featuredPost?: Post;
}

const categories = ["All", "Beginner Guide", "Strategy", "Tutorial", "Industry", "Psychology", "Engineering"];

export function BlogList({ posts, featuredPost }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || 
      post.category?.trim().toLowerCase() === activeCategory.trim().toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 relative z-10 mb-24">
      <div className="max-w-3xl mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-6"
        >
          <BookOpen className="w-4 h-4" /> Academy Hub
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]"
        >
          LEARN. TRADE. <br />
          <span className="text-gradient">AUTOMATE.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-white/50 font-medium leading-relaxed"
        >
          Master the architecture of algorithmic trading with our developer-centric guides and market insights.
        </motion.p>
      </div>

      {/* Search & Category Bar */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-24 glass p-2 rounded-full">
        <div className="flex gap-2 px-4 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-primary text-background shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full md:max-w-sm pr-2">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 w-4 h-4" />
          <input
            type="text"
            placeholder="Search the Academy..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full bg-white/5 border border-white/5 text-xs font-bold text-white focus:outline-none focus:border-primary/30 transition-all placeholder:text-white/20"
          />
        </div>
      </div>

      {/* Featured Article */}
      {featuredPost && (
        <div className="mb-32">
          <Link href={`/blog/${featuredPost.slug}`}>
            <GlowCard className="group overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center bg-background">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <Sparkles className="w-24 h-24 text-primary opacity-20 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                    <span className="text-primary">Featured</span>
                    <span className="text-white/20">|</span>
                    <span className="text-white/40">{featuredPost.category}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-white/50 font-medium mb-10 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                    Read Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </GlowCard>
          </Link>
        </div>
      )}


      {/* Articles Grid */}
      <h2 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-12">
        All Academy Guides — {filteredPosts.length} articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, idx) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <Link href={`/blog/${post.slug}`} className="block h-full">
              <div className="glass-card p-8 flex flex-col h-full group border-white/5">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1 rounded border border-primary/10">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/30 uppercase tracking-widest">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-white/40 font-medium mb-8 flex-1 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-white/30 group-hover:text-primary transition-colors uppercase tracking-widest">
                  Read Report <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
