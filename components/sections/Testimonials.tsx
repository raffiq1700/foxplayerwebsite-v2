"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/GlowCard";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "AntiGravity's sandbox let us simulate 6 months of field tests in 2 weeks. The accuracy of their magnetic modeling is simply unmatched.",
    author: "Dr. Priya Nair",
    title: "Lead Researcher, IIT Bombay",
    initials: "PN",
  },
  {
    quote: "We integrated their industrial pods into our automated sorting facility. It cut our warehouse energy costs by 34% and eliminated maintenance downtime.",
    author: "Arjun Mehta",
    title: "CTO, LogiFloat Inc",
    initials: "AM",
  },
  {
    quote: "Best-in-class API for magnetic compensation modeling. The zero-latency WebSocket connection allows our control systems to react instantly.",
    author: "NASA Ames Research",
    title: "Propulsion Laboratory",
    initials: "NA",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-syne text-3xl md:text-5xl font-bold text-white mb-4">Trusted by Pioneers</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Hear from the engineers and researchers building the future on our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <GlowCard className="h-full">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex gap-1 mb-6 text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary" />
                      ))}
                    </div>
                    <p className="text-white/80 leading-relaxed mb-8">&quot;{test.quote}&quot;</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-background font-bold text-sm">
                      {test.initials}
                    </div>
                    <div>
                      <div className="text-white font-medium">{test.author}</div>
                      <div className="text-white/50 text-sm">{test.title}</div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
