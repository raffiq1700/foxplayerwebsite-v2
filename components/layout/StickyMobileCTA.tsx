"use client";

import { useEffect, useState } from "react";
import { MessageCircle, PhoneCall } from "lucide-react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA only after scrolling past the hero fold (150px) to keep layout clean
      if (window.scrollY > 150) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#050816]/90 backdrop-blur-lg border-t border-white/10 px-4 py-3 flex gap-3 shadow-[0_-8px_30px_rgba(0,0,0,0.6)] animate-fade-in"
      style={{ paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))" }}
    >
      <a
        href="https://wa.me/919983168522?text=Hello%20Foxplayer%2C%20I%20want%20to%20Book%20a%20Free%20Demo%20for%20algo%20trading."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-black text-[15px] font-bold py-3.5 rounded-xl active:scale-95 transition-all shadow-[0_4px_15px_rgba(37,211,102,0.2)] hover:text-black"
        id="cta-mobile-demo"
        title="Book Free Demo"
      >
        <MessageCircle className="w-5 h-5 fill-black text-black" />
        <span>Book Free Demo</span>
      </a>
      <a
        href="https://wa.me/919983168522?text=Hello%20Foxplayer%2C%20I%20want%20to%20Talk%20to%20an%20Expert%20about%20automated%20trading."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#00D4FF] text-black text-[15px] font-bold py-3.5 rounded-xl active:scale-95 transition-all shadow-[0_4px_15px_rgba(0,212,255,0.2)] hover:text-black"
        id="cta-mobile-expert"
        title="Talk To Expert"
      >
        <PhoneCall className="w-4 h-4 fill-black text-black" />
        <span>Talk To Expert</span>
      </a>
    </div>
  );
}
