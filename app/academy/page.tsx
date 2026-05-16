"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, BookOpen, Clock, Tag, LayoutGrid } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Options", "Candlesticks", "Automation", "Methodology", "Concepts", "Methods", "Risk Management", "Basics"];

export default function AcademyIndex() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await fetch("/api/academy");
      if (res.ok) {
        const data = await res.json();
        setArticles(data.filter((a: any) => a.status === "published"));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4">Trading Academy</p>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">Master the <span className="text-white/40">Market</span></h1>
            <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore our comprehensive library of institutional trading strategies, technical analysis, and automation guides.
            </p>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full md:max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search strategies..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white outline-none focus:border-primary/50 transition-all text-sm font-medium"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${selectedCategory === cat ? "bg-primary text-background" : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white border border-white/5"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Article Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-80 bg-white/[0.02] rounded-3xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.length === 0 ? (
              <div className="col-span-full py-20 text-center">
                <p className="text-white/20 font-bold uppercase tracking-widest">No articles found in this sector</p>
              </div>
            ) : (
              filteredArticles.map((article, i) => (
                <motion.div 
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 transition-all flex flex-col"
                >
                  <div className="p-8 flex-1">
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-[10px] font-black text-primary uppercase tracking-widest">
                        {article.category}
                      </span>
                      <span className="text-[10px] text-white/20 font-bold uppercase flex items-center gap-1.5">
                        <Clock className="w-3 h-3" /> {article.readingTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed line-clamp-3 mb-6">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="px-8 pb-8">
                    <Link href={`/academy/${article.slug}`} className="flex items-center justify-between py-4 border-t border-white/5 text-xs font-black uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">
                      Begin Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>
    </main>
  );
}
