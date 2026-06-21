"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Save, Loader2, Layout, Briefcase, Award } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function JobEditor() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const isNew = id === "new";

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    location: "Remote / Hybrid (Coimbatore)",
    type: "Internship",
    duration: "3-6 Months",
    stipend: "₹5,000 - ₹12,000 / month",
    description: "",
    requirements: "",
    benefits: "",
    published: true,
  });

  useEffect(() => {
    if (!isNew) {
      fetchJob();
    }
  }, [id]);

  const fetchJob = async () => {
    try {
      const res = await fetch(`/api/jobs/${id}`);
      if (res.ok) {
        const data = await res.json();
        setFormData({
          title: data.title || "",
          slug: data.slug || "",
          location: data.location || "Remote / Hybrid (Coimbatore)",
          type: data.type || "Internship",
          duration: data.duration || "3-6 Months",
          stipend: data.stipend || "₹5,000 - ₹12,000 / month",
          description: data.description || "",
          requirements: data.requirements || "",
          benefits: data.benefits || "",
          published: data.published ?? true,
        });
      }
    } catch (err) {
      console.error("Error fetching job:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (name === "title" && isNew) {
      setFormData(prev => ({
        ...prev,
        slug: value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const url = isNew ? "/api/jobs" : `/api/jobs/${id}`;
      const method = isNew ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        alert("Error saving job listing");
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
      {/* Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-12"
        >
          <Link href="/admin" className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" /> Back to Terminal
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 mr-4">
              <input
                type="checkbox"
                id="published"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="w-5 h-5 rounded-lg border-white/10 bg-white/5 text-primary focus:ring-primary/20 cursor-pointer"
              />
              <label htmlFor="published" className="text-[10px] font-black uppercase tracking-widest text-white/60 cursor-pointer">
                Live Status
              </label>
            </div>
            <Button onClick={handleSubmit} disabled={saving} className="btn-primary py-3 px-8 text-xs gap-2">
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              {isNew ? "Launch Listing" : "Save Changes"}
            </Button>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 md:p-10 border-white/5"
          >
            <h2 className="text-xl font-black text-white mb-10 flex items-center gap-3 uppercase tracking-tight">
              <Layout className="w-5 h-5 text-primary" /> Job Information
            </h2>
            
            <div className="grid grid-cols-1 gap-8">
              <div>
                <label className={labelClasses}>Job Title</label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="e.g. Software Developer (Internship)"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className={labelClasses}>Slug (URL Path)</label>
                  <input
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="software-developer-internship"
                    required
                  />
                </div>
                <div>
                  <label className={labelClasses}>Job Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option className="bg-[#050505]">Internship</option>
                    <option className="bg-[#050505]">Full-time</option>
                    <option className="bg-[#050505]">Part-time</option>
                    <option className="bg-[#050505]">Contract</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <label className={labelClasses}>Location</label>
                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="e.g. Remote / Hybrid (Coimbatore)"
                  />
                </div>
                <div>
                  <label className={labelClasses}>Duration</label>
                  <input
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="e.g. 3-6 Months"
                  />
                </div>
                <div>
                  <label className={labelClasses}>Stipend / Compensation</label>
                  <input
                    name="stipend"
                    value={formData.stipend}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="e.g. ₹5,000 - ₹12,000 / month"
                  />
                </div>
              </div>

              <div>
                <label className={labelClasses}>Main Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className={`${inputClasses} resize-none`}
                  placeholder="Overview of the role and team..."
                  required
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 md:p-10 border-white/5"
          >
            <h2 className="text-xl font-black text-white mb-10 flex items-center gap-3 uppercase tracking-tight">
              <Briefcase className="w-5 h-5 text-secondary" /> Requirements (One per line)
            </h2>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows={6}
              className={`${inputClasses} font-mono text-[13px] leading-relaxed resize-y`}
              placeholder="Strong foundation in React&#10;Basic APIs understanding&#10;Stock market interest"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 md:p-10 border-white/5"
          >
            <h2 className="text-xl font-black text-white mb-10 flex items-center gap-3 uppercase tracking-tight">
              <Award className="w-5 h-5 text-cyan-400" /> Perks & Benefits (One per line)
            </h2>
            <textarea
              name="benefits"
              value={formData.benefits}
              onChange={handleChange}
              rows={6}
              className={`${inputClasses} font-mono text-[13px] leading-relaxed resize-y`}
              placeholder="Stipend + performance bonus&#10;Certificate of completion&#10;Full-time role opportunity"
            />
          </motion.div>
        </form>
      </div>
    </div>
  );
}
