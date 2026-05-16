"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919983168522"
      target="_blank"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center group"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-2xl animate-ping opacity-20 group-hover:opacity-0 transition-opacity" />
      <MessageCircle className="w-7 h-7 relative z-10" />
      <span className="absolute right-full mr-4 bg-white text-background px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-xl">
        Chat with Expert
      </span>
    </motion.a>
  );
}
