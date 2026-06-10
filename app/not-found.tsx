"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Home, Search, MessageCircle, Zap } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] animate-pulse" />
      </div>

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-[12rem] md:text-[18rem] font-black text-white/5 leading-none tracking-tighter mb-8 select-none">
            404
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
            Signal <span className="text-primary">Lost</span>
          </h1>
          
          <p className="text-white/40 text-lg mb-12 max-w-md mx-auto leading-relaxed font-medium">
            The page you are looking for has been moved or doesn't exist in our current trading pipeline.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="https://app.foxplayer.co.in/login">
              <button className="w-full bg-white text-background px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                <Home className="w-4 h-4" /> Log In to Dashboard
              </button>
            </a>
            <a href="https://app.foxplayer.co.in/register">
              <button className="w-full bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                <Zap className="w-4 h-4" /> Start Free Trial
              </button>
            </a>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex items-center justify-center gap-8">
            <Link href="/academy" className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] hover:text-primary transition-colors">Academy</Link>
            <Link href="/pricing" className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] hover:text-primary transition-colors">Pricing</Link>
            <Link href="/blog" className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] hover:text-primary transition-colors">Blog</Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
