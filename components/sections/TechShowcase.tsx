"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/GlowCard";
import { TrendingUp, Users, Activity } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const strategies = [
  {
    name: "Nifty Alpha Trend",
    creator: "AlgoMaster",
    roi: "+45.2%",
    drawdown: "-8.4%",
    subscribers: 1240,
    tags: ["Options", "Intraday"],
  },
  {
    name: "BankNifty Straddle Bot",
    creator: "Foxplayer Labs",
    roi: "+32.1%",
    drawdown: "-5.2%",
    subscribers: 850,
    tags: ["Options Selling", "Positional"],
  },
  {
    name: "Equity Momentum Tracker",
    creator: "TradePro",
    roi: "+28.5%",
    drawdown: "-12.0%",
    subscribers: 530,
    tags: ["Equity", "Swing"],
  },
];

export function TechShowcase() {
  return (
    <section id="marketplace" className="py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative rounded-2xl border border-white/10 glass shadow-[0_0_50px_rgba(16,185,129,0.1)] overflow-hidden aspect-video"
          >
             <Image 
               src="/dashboard.png" 
               alt="Premium Trading Dashboard" 
               fill 
               className="object-cover opacity-90"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
          </motion.div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Strategy <span className="text-gradient">Marketplace</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8 font-light">
              Don&apos;t want to build your own algorithms? Subscribe to top-performing verified strategies and copy their trades automatically with zero slippage.
            </p>
            <a href="https://app.foxplayer.co.in/login">
              <Button size="lg">Explore Marketplace</Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1">{strategy.name}</h3>
                    <div className="text-sm text-white/40">by {strategy.creator}</div>
                  </div>
                  <div className="flex gap-1">
                    {strategy.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold rounded uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <div className="text-xs text-white/40 mb-1 flex items-center gap-1"><TrendingUp className="w-3 h-3"/> Yearly ROI</div>
                    <div className="font-bold text-market-up text-lg">{strategy.roi}</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                    <div className="text-xs text-white/40 mb-1 flex items-center gap-1"><Activity className="w-3 h-3"/> Max DD</div>
                    <div className="font-bold text-market-down text-lg">{strategy.drawdown}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <Users className="w-4 h-4" /> {strategy.subscribers} Subs
                  </div>
                  <a href="https://app.foxplayer.co.in/login" className="text-primary text-sm font-bold hover:text-white transition-colors">
                    Subscribe
                  </a>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
