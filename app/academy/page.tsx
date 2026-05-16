"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, BookOpen, Clock, Tag, LayoutGrid, ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function AcademyIndex() {
  const [articles, setArticles] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [articlesRes, categoriesRes] = await Promise.all([
          fetch("/api/academy"),
          fetch("/api/academy/categories")
        ]);
        
        const articlesData = await articlesRes.json();
        const categoriesData = await categoriesRes.json();
        
        setArticles(Array.isArray(articlesData) ? articlesData : []);
        setCategories(Array.isArray(categoriesData) ? categoriesData : []);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentCategoryData = categories.find(c => c.name.toLowerCase() === activeCategory.toLowerCase()) || categories.find(c => c.name === "All");

  // Schema Generation
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.foxplayer.co.in" },
      { "@type": "ListItem", "position": 2, "name": "Academy", "item": "https://www.foxplayer.co.in/academy" },
      activeCategory !== "All" ? { "@type": "ListItem", "position": 3, "name": activeCategory, "item": `https://www.foxplayer.co.in/academy?category=${activeCategory.toLowerCase()}` } : null
    ].filter(Boolean)
  };

  const articleSchema = currentCategoryData ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": currentCategoryData.metaTitle || currentCategoryData.name,
    "description": currentCategoryData.metaDescription,
    "author": { "@type": "Organization", "name": "FoxPlayer Algo Technologies" },
    "publisher": { "@type": "Organization", "name": "FoxPlayer Algo Technologies", "logo": { "@type": "ImageObject", "url": "https://www.foxplayer.co.in/logo.png" } },
    "datePublished": currentCategoryData.createdAt,
    "dateModified": currentCategoryData.updatedAt
  } : null;

  return (
    <main className="min-h-screen pt-48 pb-24 bg-background relative overflow-hidden">
      {articleSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
          >
            <div className="max-w-2xl">
              <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-6 inline-block">
                FoxPlayer Academy
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-6">
                Master the <span className="text-primary">Markets.</span>
              </h1>
              <p className="text-lg text-white/40 leading-relaxed font-medium">
                Professional trading education, from foundational basics to advanced algorithmic strategies.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-96 group">
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center bg-[#0A0A0A] border border-white/10 rounded-2xl px-5 py-4 focus-within:border-primary/50 transition-all">
                <Search className="w-5 h-5 text-white/20 mr-4" />
                <input 
                  type="text" 
                  placeholder="Search trading guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-white text-sm w-full font-medium"
                />
              </div>
            </div>
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {["All", "Options", "Candlesticks", "Automation", "Methodology", "Concepts", "Methods", "Risk Management", "Basics"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? "bg-white text-black shadow-lg shadow-white/10" 
                    : "bg-white/5 text-white/40 border border-white/5 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Category Description Content (SEO Rich) */}
        {currentCategoryData && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={activeCategory}
            className="mb-24 p-10 md:p-16 bg-white/[0.01] border border-white/5 rounded-[3rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 pointer-events-none opacity-5">
               <BookOpen className="w-64 h-64 text-white" />
            </div>
            
            <div className="prose prose-invert max-w-none prose-p:text-white/60 prose-p:leading-relaxed prose-headings:text-white prose-headings:tracking-tight prose-li:text-white/60 prose-strong:text-white">
              <ReactMarkdown>{currentCategoryData.description}</ReactMarkdown>
            </div>

            {filteredArticles.length === 0 && (
              <div className="mt-12 p-8 bg-primary/5 border border-primary/10 rounded-2xl flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Coming Soon: New Sector Guides</h4>
                  <p className="text-white/40 text-sm">New articles are being added regularly. Explore our educational guides and check back soon for more in-depth content.</p>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Article Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <LayoutGrid className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-white tracking-tight">{activeCategory} Guides</h2>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-80 bg-white/[0.02] rounded-3xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, i) => (
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
              ))}
            </div>
          )}
        </div>

        {/* Global CTA Section */}
        <section className="mt-20 p-8 md:p-16 bg-gradient-to-br from-primary/20 via-background to-secondary/10 border border-primary/20 rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12">
            <ArrowRightCircle className="w-32 h-32 text-primary/10 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter">Ready to Automate Your Success?</h3>
            <p className="text-white/50 mb-10 text-lg leading-relaxed">
              Don't let emotions dictate your trades. Get institutional-grade algorithmic software tailored to your specific strategy.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/919983168522" target="_blank" className="bg-white text-black px-10 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] flex items-center gap-3 hover:scale-105 transition-transform">
                Consult an Expert <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/contact" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
