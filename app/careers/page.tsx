"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Briefcase, MapPin, Clock, DollarSign, X, CheckCircle, Send, Loader2, Sparkles } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface Job {
  id: string;
  title: string;
  slug: string;
  location: string;
  type: string;
  duration?: string;
  stipend?: string;
  description: string;
  requirements: string;
  benefits?: string;
  published: boolean;
}

const DEFAULT_JOBS: Job[] = [
  {
    id: "software-developer-internship",
    slug: "software-developer-internship",
    title: "Software Developer (Internship)",
    location: "Remote / Hybrid (Coimbatore)",
    type: "Internship",
    duration: "3-6 Months",
    stipend: "₹5,000 - ₹12,000 / month",
    description: "Work on low-latency trading integrations, APIs, and beautiful Next.js frontends.",
    requirements: "Strong foundation in React, Next.js, TypeScript and Tailwind CSS.\nBasic understanding of REST APIs, databases, and version control (Git).\nInterest in financial markets and quantitative trading automation.",
    benefits: "Stipend + performance-based bonuses.\nCertificate of internship and LOR.\nPossibility of conversion to a full-time role based on performance.",
    published: true,
  },
  {
    id: "video-editor-internship",
    slug: "video-editor-internship",
    title: "Video Editor (Internship)",
    location: "Remote / Hybrid (Coimbatore)",
    type: "Internship",
    duration: "3-6 Months",
    stipend: "₹5,000 - ₹10,000 / month",
    description: "Create engaging stock market content, video tutorials, social media shorts, and academy guides.",
    requirements: "Proficiency in video editing tools (Adobe Premiere Pro, After Effects, or DaVinci Resolve).\nAbility to create animations, subtitles, and engaging graphics.\nFamiliarity with financial themes and trading concepts is a plus.",
    benefits: "Stipend + creative freedom.\nProfessional portfolio enrichment.\nPossibility of conversion to a full-time role.",
    published: true,
  }
];

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  
  // Application Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resumeLink: "",
    message: "",
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch("/api/jobs");
      if (res.ok) {
        const data = await res.json();
        const activeJobs = data.filter((j: Job) => j.published);
        setJobs(activeJobs.length > 0 ? activeJobs : DEFAULT_JOBS);
      } else {
        setJobs(DEFAULT_JOBS);
      }
    } catch (err) {
      setJobs(DEFAULT_JOBS);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;
    setFormSubmitting(true);

    try {
      const subject = `Job Application: ${selectedJob.title} - ${formData.name}`;
      const messageBody = `
        Candidate Phone: ${formData.phone}
        Resume/Portfolio Link: ${formData.resumeLink}
        
        Cover Note:
        ${formData.message}
      `;

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: subject,
          message: messageBody,
        }),
      });

      if (res.ok) {
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          resumeLink: "",
          message: "",
        });
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (err) {
      alert("An error occurred during submission.");
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Work at FoxPlayer
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Build the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Trading Automation</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed font-light">
              Join a team of builders, creators, and quant minds. We democratize high-speed execution systems and custom strategy interfaces for the Indian markets.
            </p>
          </motion.div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider text-center md:text-left">Open Positions</h2>
          
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
              <p className="text-xs font-bold text-white/20 uppercase tracking-widest">Loading career options...</p>
            </div>
          ) : (
            jobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-8 border-white/5 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(0,212,255,0.02)] transition-all flex flex-col md:flex-row md:items-start justify-between gap-6"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      {job.type}
                    </span>
                    {job.duration && (
                      <span className="text-xs font-bold text-white/40 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-white/40" /> {job.duration}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-white/40 mb-6 font-light">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-white/30" /> {job.location}
                    </div>
                    {job.stipend && (
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-white/30" /> {job.stipend}
                      </div>
                    )}
                  </div>

                  <p className="text-white/60 font-light mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 border-t border-white/5 pt-6">
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">Requirements</h4>
                      <ul className="space-y-2.5">
                        {job.requirements.split("\n").map((req, i) => (
                          <li key={i} className="text-xs text-white/50 leading-relaxed font-light flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {job.benefits && (
                      <div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">Perks & Benefits</h4>
                        <ul className="space-y-2.5">
                          {job.benefits.split("\n").map((ben, i) => (
                            <li key={i} className="text-xs text-white/50 leading-relaxed font-light flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                              {ben}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:self-start shrink-0 mt-2">
                  <Button 
                    onClick={() => {
                      setSelectedJob(job);
                      setFormSubmitted(false);
                    }} 
                    className="btn-primary w-full md:w-auto py-3 px-8 text-xs uppercase tracking-widest"
                  >
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      <FinalCTA />

      {/* Application Modal Popup */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#0F172A] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {!formSubmitted ? (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Internship Application</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">{selectedJob.title}</h3>

                  <form onSubmit={handleApplySubmit} className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white outline-none focus:border-primary/50 text-sm font-medium transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white outline-none focus:border-primary/50 text-sm font-medium transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white outline-none focus:border-primary/50 text-sm font-medium transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Resume / Portfolio Link</label>
                      <input 
                        type="url" 
                        name="resumeLink"
                        value={formData.resumeLink}
                        onChange={handleInputChange}
                        required
                        placeholder="Google Drive, Github, or Dropbox URL"
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white outline-none focus:border-primary/50 text-sm font-medium transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Why do you want to join us?</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        required
                        placeholder="Tell us about your skills, experience, and interest in algo trading..."
                        className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white outline-none focus:border-primary/50 text-sm font-medium transition-all resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={formSubmitting} 
                      className="btn-primary w-full py-4 uppercase tracking-widest text-xs gap-2 mt-2"
                    >
                      {formSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Submitting Application...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Submit Application
                        </>
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Application Submitted!</h3>
                  <p className="text-sm text-white/50 leading-relaxed font-light max-w-sm mb-8">
                    Thanks for applying, {formData.name}. We have received your application for the {selectedJob.title} role and will get back to you shortly.
                  </p>
                  <Button 
                    onClick={() => setSelectedJob(null)} 
                    className="btn-secondary py-3 px-8 text-xs uppercase tracking-widest"
                  >
                    Close Window
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
