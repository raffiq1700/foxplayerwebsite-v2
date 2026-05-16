"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/GlowCard";
import { Activity, Code, Copy, ShieldCheck, Landmark, Building } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "TradingView Webhooks",
    description: "Connect your TradingView indicators and pine script strategies directly to your broker with zero latency execution.",
    icon: Activity,
  },
  {
    title: "Python Strategy Engine",
    description: "Write custom complex algorithms in Python. We handle the infrastructure, you focus on the logic.",
    icon: Code,
  },
  {
    title: "Copy Trading Network",
    description: "Become a master trader and let others copy your trades automatically, or subscribe to profitable strategies.",
    icon: Copy,
  },
  {
    title: "Multi-Broker Support",
    description: "Execute trades simultaneously across AliceBlue, Angel One, Shoonya, and Upstox from a single dashboard.",
    icon: Landmark,
  },
  {
    title: "Advanced Risk Management",
    description: "Set global M2M stop losses, max daily orders, and trailing stops to protect your capital automatically.",
    icon: ShieldCheck,
  },
  {
    title: "White-Label SaaS",
    description: "Start your own algo trading business. We provide the complete frontend and backend infrastructure under your brand.",
    icon: Building,
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-surface relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Powerful <span className="text-gradient">Automation</span> <br /> For Serious Traders
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Built for retail traders and institutional desks. Foxplayer gives you the edge you need in the Indian markets with institutional-grade infrastructure.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative rounded-2xl border border-white/10 glass shadow-2xl overflow-hidden aspect-video"
          >
             <Image 
               src="/algo_code.png" 
               alt="Python Algo Trading Code" 
               fill 
               className="object-cover opacity-80"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard>
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed font-light">{feature.description}</p>
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
