"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Save, Loader2, Layout, Globe, Plus, Trash, HelpCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AcademyEditor() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const isNew = id === "new";

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "Options",
    excerpt: "",
    content: "",
    featuredImage: "",
    metaTitle: "",
    metaDescription: "",
    focusKeyword: "",
    faqJson: "[]",
    author: "Raffiq SR",
    readingTime: "5 min read",
    status: "published",
  });

  const [faqs, setFaqs] = useState<{ q: string; a: string }[]>([]);

  useEffect(() => {
    if (!isNew) {
      fetchArticle();
    }
  }, [id]);

  const fetchArticle = async () => {
    try {
      const res = await fetch(`/api/academy/${id}`);
      if (res.ok) {
        const result = await res.json();
        setFormData(result);
        try {
          setFaqs(JSON.parse(result.faqJson || "[]"));
        } catch (e) {
          setFaqs([]);
        }
      }
    } catch (err) {
      console.error("Error fetching article:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === "title" && isNew) {
      setFormData(prev => ({
        ...prev,
        slug: value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
        metaTitle: value
      }));
    }
  };

  const handleAddFaq = () => {
    setFaqs([...faqs, { q: "", a: "" }]);
  };

  const handleRemoveFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const handleFaqChange = (index: number, field: "q" | "a", value: string) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const submissionData = {
      ...formData,
      faqJson: JSON.stringify(faqs),
    };

    try {
      const url = isNew ? "/api/academy" : `/api/academy/${id}`;
      const method = isNew ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        alert("Error saving article");
      }
    } catch (err) {
      alert("An error occurred");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505]">
        <Loader2 className="w-10 h-10 animate-spin text-primary mb-4" />
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Syncing Interface...</p>
      </div>
    );
  }

  const inputClasses = "w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-primary/20 focus:border-primary/50 outline-none transition-all placeholder:text-white/10 text-sm";
  const labelClasses = "block text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3 ml-1";

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-12">
          <Link href="/admin" className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" /> Back to Terminal
          </Link>
          <div className="flex items-center gap-4">
            <select name="status" value={formData.status} onChange={handleChange} className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white outline-none">
              <option value="published" className="bg-[#050505]">Published</option>
              <option value="draft" className="bg-[#050505]">Draft</option>
            </select>
            <Button onClick={handleSubmit} disabled={saving} className="btn-primary py-3 px-8 text-xs gap-2">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              {isNew ? "Create Article" : "Update Article"}
            </Button>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 md:p-10 border-white/5">
            <h2 className="text-xl font-black text-white mb-10 flex items-center gap-3 uppercase tracking-tight">
              <Layout className="w-5 h-5 text-primary" /> Core Information
            </h2>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <label className={labelClasses}>Article Title</label>
                <input name="title" value={formData.title} onChange={handleChange} className={inputClasses} required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className={labelClasses}>Slug</label>
                  <input name="slug" value={formData.slug} onChange={handleChange} className={inputClasses} required />
                </div>
                <div>
                  <label className={labelClasses}>Category</label>
                  <select name="category" value={formData.category} onChange={handleChange} className={inputClasses}>
                    <option className="bg-[#050505]">Options</option>
                    <option className="bg-[#050505]">Candlesticks</option>
                    <option className="bg-[#050505]">Automation</option>
                    <option className="bg-[#050505]">Methodology</option>
                    <option className="bg-[#050505]">Concepts</option>
                    <option className="bg-[#050505]">Methods</option>
                    <option className="bg-[#050505]">Risk Management</option>
                    <option className="bg-[#050505]">Basics</option>
                  </select>
                </div>
              </div>
              <div>
                <label className={labelClasses}>Excerpt</label>
                <textarea name="excerpt" value={formData.excerpt} onChange={handleChange} rows={2} className={`${inputClasses} resize-none`} />
              </div>
              <div>
                <label className={labelClasses}>Content (Markdown)</label>
                <textarea name="content" value={formData.content} onChange={handleChange} rows={15} className={`${inputClasses} font-mono text-[13px] leading-relaxed`} required />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 md:p-10 border-white/5">
            <h2 className="text-xl font-black text-white mb-10 flex items-center gap-3 uppercase tracking-tight">
              <HelpCircle className="w-5 h-5 text-amber-400" /> FAQ Section
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4 relative group">
                  <button onClick={() => handleRemoveFaq(index)} className="absolute top-4 right-4 text-white/20 hover:text-red-500 transition-colors">
                    <Trash className="w-4 h-4" />
                  </button>
                  <div>
                    <label className={labelClasses}>Question</label>
                    <input value={faq.q} onChange={(e) => handleFaqChange(index, "q", e.target.value)} className={inputClasses} />
                  </div>
                  <div>
                    <label className={labelClasses}>Answer</label>
                    <textarea value={faq.a} onChange={(e) => handleFaqChange(index, "a", e.target.value)} rows={2} className={`${inputClasses} resize-none`} />
                  </div>
                </div>
              ))}
              <Button type="button" onClick={handleAddFaq} className="w-full py-4 glass border-dashed border-white/10 text-white/40 hover:text-white flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-black">
                <Plus className="w-4 h-4" /> Add FAQ Item
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 md:p-10 border-white/5">
            <h2 className="text-xl font-black text-white mb-10 flex items-center gap-3 uppercase tracking-tight">
              <Globe className="w-5 h-5 text-secondary" /> SEO & Meta
            </h2>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <label className={labelClasses}>Meta Title</label>
                <input name="metaTitle" value={formData.metaTitle} onChange={handleChange} className={inputClasses} />
              </div>
              <div>
                <label className={labelClasses}>Meta Description</label>
                <textarea name="metaDescription" value={formData.metaDescription} onChange={handleChange} rows={3} className={`${inputClasses} resize-none`} />
              </div>
              <div>
                <label className={labelClasses}>Focus Keyword</label>
                <input name="focusKeyword" value={formData.focusKeyword} onChange={handleChange} className={inputClasses} />
              </div>
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
