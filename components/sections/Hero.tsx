"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-32 pb-32 overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Live market execution enabled
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Automate Trades <br className="hidden md:block" />
            <span className="text-gradient">Without Limits.</span>
          </h1>
          <p className="text-lg text-white/60 mb-8 max-w-xl leading-relaxed font-light">
            Our core business is Trading Automation. We build customized strategies for individuals, businesses, and their clients. We are experts in Custom Python, Web-based Platforms, and Windows Applications.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <a href="https://app.foxplayer.co.in/register" className="w-full sm:w-auto">
              <Button size="lg" className="w-full gap-2">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <Link href="/features" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full">
                View Features
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-white/40 border-t border-white/10 pt-8">
            <div className="flex flex-col">
              <span className="font-bold text-white text-xl">10k+</span>
              <span>Active Traders</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="font-bold text-white text-xl">₹500Cr+</span>
              <span>Volume Executed</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="font-bold text-white text-xl">99.9%</span>
              <span>Uptime SLA</span>
            </div>
          </div>
        </motion.div>
        
        {/* Dynamic Image Display */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:ml-4"
        >
          <div className="relative rounded-2xl border border-white/10 glass shadow-2xl overflow-hidden aspect-[4/3]">
             <Image 
               src="/hero_chart.png" 
               alt="Indian Trading Chart Dashboard" 
               fill 
               className="object-cover opacity-90"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl border border-white/10 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-xs font-bold text-white/50 mb-1">TradingView Alert</div>
            <div className="text-sm font-medium text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-market-up shadow-[0_0_8px_rgba(16,185,129,0.8)]" /> BUY NIFTY CE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
