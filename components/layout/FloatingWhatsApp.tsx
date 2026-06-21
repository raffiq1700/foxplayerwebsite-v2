"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const whatsappNumber = "919983168522";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-8 left-8 z-[100] hidden md:block"
    >
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] group transition-all active:scale-90"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:animate-none" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-white/20 blur-md scale-0 group-hover:scale-125 transition-transform" />
        
        <MessageCircle className="w-8 h-8 text-white fill-current relative z-10" />
        
        {/* Label on Hover */}
        <div className="absolute left-full ml-4 bg-white text-background text-xs font-bold px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-black/5">
          Chat with Support
        </div>
      </a>
    </motion.div>
  );
}
