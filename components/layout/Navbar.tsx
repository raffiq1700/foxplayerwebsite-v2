"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-background/90 backdrop-blur-2xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-32 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group shrink-0">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border border-white/10 group-hover:border-primary/40 transition-colors">
            <Image src="/logo.png" alt="Foxplayer Algo Technologies" fill className="object-cover" />
          </div>
          <span className="text-[20px] font-bold text-white leading-tight tracking-tight">Foxplayer Algo Technologies</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 text-[13px] font-medium text-white/50">
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="text-white hover:text-primary transition-colors">Pricing</Link>
            <Link href="/disclaimer" className="text-white/60 hover:text-white transition-colors">Disclaimer</Link>
            <Link href="/marketplace" className="text-white hover:text-primary transition-colors">Marketplace</Link>
            <Link href="/academy" className="text-white hover:text-primary transition-colors">Academy</Link>
            <Link href="/blog" className="text-white hover:text-primary transition-colors">Blog</Link>
          </div>
          <div className="flex items-center gap-3 pl-8 border-l border-white/5">
            <a href="https://app.foxplayer.co.in/login" className="text-[13px] font-medium text-white/50 hover:text-white transition-colors px-3 py-1.5">
              Dashboard
            </a>

            <Link href="/contact" className="text-[13px] font-bold bg-primary text-background px-5 py-2.5 rounded-xl hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all active:scale-95">
              Free Consultation
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white/60">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-white/5 px-6 py-6 space-y-4">
          <Link href="/features" className="block text-sm text-white/60 hover:text-white">Features</Link>
          <Link href="/pricing" className="block text-sm text-white hover:text-primary">Pricing</Link>
          <Link href="/disclaimer" className="block text-sm text-amber-500 font-medium">⚠️ Disclaimer</Link>
          <Link href="/marketplace" className="block text-sm text-white/60 hover:text-white">Marketplace</Link>
          <Link href="/academy" className="block text-sm text-white hover:text-primary">Academy</Link>
          <Link href="/blog" className="block text-sm text-white hover:text-primary">Blog</Link>
          <div className="pt-4 border-t border-white/5 space-y-3">
            <a href="https://app.foxplayer.co.in/login" className="block text-sm text-white/50">Log in</a>

            <a href="https://app.foxplayer.co.in/register" className="w-full text-center block text-sm font-semibold bg-white text-background px-5 py-2.5 rounded-lg">Get Started</a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
