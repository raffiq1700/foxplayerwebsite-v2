"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Connect Broker", desc: "Link your AliceBlue, Angel One, or Shoonya account securely." },
  { num: "02", title: "Create Strategy", desc: "Use TradingView alerts or write a custom Python script." },
  { num: "03", title: "Set Risk Limits", desc: "Define your max loss, target profit, and position sizing." },
  { num: "04", title: "Go Live", desc: "Deploy your strategy and watch trades execute automatically." },
];

export function HowItWorks() {
  return (
    <section className="py-32 bg-background relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Trading in 4 Steps</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
            No complicated installations. Fully cloud-based execution.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2" />
          
          <div className="flex flex-col lg:flex-row justify-between gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex-1 relative glass p-8 rounded-2xl lg:bg-transparent lg:border-none lg:shadow-none lg:p-0"
              >
                <div className="flex lg:flex-col items-center lg:items-start gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-background border border-white/20 flex items-center justify-center text-white/50 font-bold text-xl group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] relative z-10">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3 lg:mt-6">{step.title}</h4>
                    <p className="text-sm text-white/50 font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
