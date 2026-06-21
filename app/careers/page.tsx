"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Loader2, Sparkles } from "lucide-react";
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
    stipend: "Paid Internship",
    description: "Work on low-latency trading integrations, custom Python strategy execution, and API bridges.",
    requirements: "Strong foundation in Python programming language.\nFamiliarity with data structures, algorithms, and REST APIs.\nInterest in stock markets, algorithmic trading, and quantitative systems.",
    benefits: "Stipend + performance-based bonuses.\nCertificate of internship and LOR.\nPossibility of conversion to a full-time role.",
    published: true,
  },
  {
    id: "video-editor-internship",
    slug: "video-editor-internship",
    title: "Video Editor (Internship)",
    location: "Remote / Hybrid (Coimbatore)",
    type: "Internship",
    duration: "3-6 Months",
    stipend: "Paid Internship",
    description: "Create engaging stock market content, video tutorials, social media shorts, and academy guides.",
    requirements: "Proficiency in video editing tools (Adobe Premiere Pro, After Effects, or DaVinci Resolve).\nAbility to create animations, subtitles, and engaging graphics.\nFamiliarity with financial themes and trading concepts is a plus.",
    benefits: "Stipend + creative freedom.\nProfessional portfolio enrichment.\nPossibility of conversion to a full-time role.",
    published: true,
  }
];

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch("/api/jobs");
      if (res.ok) {
        const data = await res.json();
        const activeJobs = data.filter((j: Job) => j.published);
        
        // Clean up stipend data if loaded from DB to not show specific amounts
        const sanitizedJobs = activeJobs.map((job: Job) => ({
          ...job,
          stipend: job.stipend && job.stipend.includes("₹") ? "Paid Internship" : (job.stipend || "Paid Internship")
        }));
        
        setJobs(sanitizedJobs.length > 0 ? sanitizedJobs : DEFAULT_JOBS);
      } else {
        setJobs(DEFAULT_JOBS);
      }
    } catch (err) {
      setJobs(DEFAULT_JOBS);
    } finally {
      setLoading(false);
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
                        <span className="text-white/30 font-medium">Stipend:</span> {job.stipend}
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
                  <a 
                    href={`mailto:raffiq_sr@yahoo.co.in?subject=Job Application: ${job.title}`}
                    className="inline-flex items-center justify-center btn-primary w-full md:w-auto py-3.5 px-8 text-xs uppercase tracking-widest text-black hover:text-black hover:scale-105 transition-all duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      <FinalCTA />
    </div>
  );
}
