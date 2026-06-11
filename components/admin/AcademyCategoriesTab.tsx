"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Edit, Save, Loader2, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Category {
  id: string;
  name: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  description?: string;
}

export default function AcademyCategoriesTab() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/academy/categories");
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
        if (data.length > 0) setSelectedCategory(data[0]);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    setSaving(true);
    setMessage({ text: "", type: "" });
    try {
      const res = await fetch("/api/academy/categories", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedCategory),
      });
      if (res.ok) {
        setMessage({ text: "Category updated successfully!", type: "success" });
        fetchCategories();
      } else {
        setMessage({ text: "Failed to update category", type: "error" });
      }
    } catch {
      setMessage({ text: "An error occurred", type: "error" });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
        <p className="text-xs font-bold text-white/20 uppercase tracking-widest">Loading Categories...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Category List */}
        <div className="xl:col-span-1">
          <div className="glass-card border-white/5 overflow-hidden">
            <div className="p-6 border-b border-white/5">
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Select Category</h3>
            </div>
            <div className="p-2 flex flex-col gap-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center justify-between px-6 py-4 rounded-xl font-bold transition-all text-xs uppercase tracking-wider ${
                    selectedCategory?.id === cat.id 
                      ? "bg-primary/10 text-primary border border-primary/20" 
                      : "text-white/30 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {cat.name}
                  <Edit className="w-3.5 h-3.5 opacity-40" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="xl:col-span-2">
          {selectedCategory && (
            <motion.div 
              key={selectedCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card border-white/5"
            >
              <div className="p-8 border-b border-white/5 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black text-white tracking-tight mb-1">Editing {selectedCategory.name}</h3>
                  <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Slug: {selectedCategory.slug}</p>
                </div>
                <Button 
                  onClick={handleUpdate}
                  disabled={saving}
                  className="btn-primary py-3 px-8 text-[10px] uppercase tracking-widest gap-2"
                >
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  Save Changes
                </Button>
              </div>

              <div className="p-8 space-y-8">
                {message.text && (
                  <div className={`p-4 rounded-xl text-xs font-bold uppercase tracking-widest ${message.type === "success" ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-red-500/10 text-red-500 border border-red-500/20"}`}>
                    {message.text}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-1">Meta Title</label>
                    <input 
                      type="text"
                      value={selectedCategory.metaTitle || ""}
                      onChange={(e) => setSelectedCategory({ ...selectedCategory, metaTitle: e.target.value })}
                      className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-2xl text-sm font-medium text-white outline-none focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-1">Meta Description</label>
                    <input 
                      type="text"
                      value={selectedCategory.metaDescription || ""}
                      onChange={(e) => setSelectedCategory({ ...selectedCategory, metaDescription: e.target.value })}
                      className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-2xl text-sm font-medium text-white outline-none focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-1">Category Introduction (Markdown)</label>
                    <span className="text-[10px] font-bold text-white/10 italic">Supports full Markdown and HTML</span>
                  </div>
                  <textarea 
                    rows={20}
                    value={selectedCategory.description || ""}
                    onChange={(e) => setSelectedCategory({ ...selectedCategory, description: e.target.value })}
                    className="w-full px-6 py-6 bg-white/[0.03] border border-white/10 rounded-3xl text-sm leading-relaxed text-white/80 outline-none focus:border-primary/50 transition-all font-mono"
                  />
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-4">
                   <Info className="w-5 h-5 text-primary shrink-0 mt-1" />
                   <div className="text-[11px] text-white/40 leading-relaxed">
                     <p className="font-bold text-white/60 mb-1 uppercase tracking-widest">SEO Tips:</p>
                     Ensure the introduction is at least 500 words to improve search engine rankings. Use clear H2 and H3 headings to structure your content. Include relevant keywords like &quot;Algorithmic Trading&quot;, &quot;Indian Stock Market&quot;, and &quot;Options Strategies&quot; naturally within the text.
                   </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
