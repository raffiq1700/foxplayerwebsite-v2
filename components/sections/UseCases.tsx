"use client";

import { motion } from "framer-motion";

const brokers = [
  {
    id: "aliceblue",
    name: "AliceBlue",
    description: "Execute high-speed trades with AliceBlue's ANT API. Preferred partner.",
    color: "group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
  },
  {
    id: "shoonya",
    name: "Shoonya",
    description: "Zero brokerage automated trading through Shoonya API integration.",
    color: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]",
  },
  {
    id: "angelone",
    name: "Angel One",
    description: "Seamless integration with SmartAPI for robust execution.",
    color: "group-hover:border-orange-500/50 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]",
  },
  {
    id: "upstox",
    name: "Upstox",
    description: "Connect your Upstox account for reliable option selling automation.",
    color: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
  },
];

export function UseCases() {
  return (
    <section className="py-32 bg-background relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Supported Brokers</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
            Connect your existing Demat account securely. We never ask for your broker password.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brokers.map((broker, index) => (
            <motion.div
              key={broker.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-8 rounded-2xl glass transition-all duration-300 flex flex-col items-center text-center group cursor-pointer ${broker.color}`}
            >
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center font-bold text-xl shadow-inner mb-6 border border-white/10 text-white">
                {broker.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{broker.name}</h3>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                {broker.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <a href="https://ekyc.aliceblueonline.com/?source=CBT61" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black text-lg font-bold rounded-xl hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] active:scale-95 transition-all">
            Open AliceBlue Account Now
          </a>
        </div>
      </div>
    </section>
  );
}
