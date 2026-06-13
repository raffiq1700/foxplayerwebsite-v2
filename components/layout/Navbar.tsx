"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const tickerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tickerContainerRef.current) return;
    if (tickerContainerRef.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "BSE:SENSEX", title: "S&P BSE SENSEX" },
        { proName: "NSE:NIFTY", title: "NIFTY 50" },
        { proName: "NSE:BANKNIFTY", title: "BANK NIFTY" },
        { proName: "MCX:CRUDEOIL1!", title: "CRUDEOIL FUT" },
        { proName: "MCX:NATURALGAS1!", title: "NATURALGAS FUT" }
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: true,
      displayMode: "adaptive",
      locale: "en"
    });
    
    tickerContainerRef.current.appendChild(script);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-[#050816]/75 backdrop-blur-md border-b border-white/[0.06]"
    >
      {/* TradingView Ticker Tape Widget */}
      <div className="w-full h-12 border-b border-white/[0.06] bg-black/40 overflow-hidden relative z-50 flex items-center">
        <div ref={tickerContainerRef} className="tradingview-widget-container w-full">
          <div className="tradingview-widget-container__widget w-full"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-32 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-4 group shrink-0">
          <div className="relative w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden border border-white/10 group-hover:border-primary/40 transition-colors">
            <Image src="/logo.webp" alt="Foxplayer Algo Technologies" fill sizes="80px" className="object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-[20px] font-bold text-white leading-tight tracking-tight">Foxplayer</span>
            <span className="text-[10px] md:text-sm font-medium text-white/40 leading-none">Algo Technologies</span>
          </div>
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

            <Link href="/contact" className="text-[13px] font-bold bg-primary text-black px-5 py-2.5 rounded-xl hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all active:scale-95">
              Free Consultation
            </Link>
          </div>
        </div>

        {/* Mobile Toggle & Direct Login */}
        <div className="flex items-center gap-3 md:hidden">
          <a href="https://app.foxplayer.co.in/login" className="text-xs font-bold bg-primary text-black px-4 py-2 rounded-lg hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all active:scale-95">
            Dashboard
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white/60 p-2">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0F172A]/95 backdrop-blur-xl border-t border-white/[0.08] px-6 py-6 space-y-4">
          <Link href="/features" className="block text-sm text-white/60 hover:text-white">Features</Link>
          <Link href="/pricing" className="block text-sm text-white hover:text-primary">Pricing</Link>
          <Link href="/disclaimer" className="block text-sm text-amber-500 font-medium">⚠️ Disclaimer</Link>
          <Link href="/marketplace" className="block text-sm text-white/60 hover:text-white">Marketplace</Link>
          <Link href="/academy" className="block text-sm text-white hover:text-primary">Academy</Link>
          <Link href="/blog" className="block text-sm text-white hover:text-primary">Blog</Link>
          <div className="pt-4 border-t border-white/[0.08] space-y-3">
            <a href="https://app.foxplayer.co.in/login" className="block text-sm text-white/50">Log in</a>

            <a href="https://app.foxplayer.co.in/login" className="w-full text-center block text-sm font-semibold bg-white text-black px-5 py-2.5 rounded-lg">Get Started</a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
