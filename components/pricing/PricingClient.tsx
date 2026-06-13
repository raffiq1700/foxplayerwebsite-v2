"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Retail",
    price: "₹1,999",
    period: "/month",
    desc: "Perfect for individual traders starting with automation.",
    features: ["1 Active Strategy", "TradingView Webhooks", "1 Broker Connection", "Standard Support"],
    color: "text-primary",
    border: "border-white/[0.08]"
  },
  {
    name: "Professional",
    price: "₹4,999",
    period: "/month",
    desc: "For serious traders managing multiple strategies.",
    features: ["5 Active Strategies", "Python Strategy Bridge", "3 Broker Connections", "Priority Support", "Backtesting Access"],
    popular: true,
    color: "text-primary",
    border: "border-primary/45"
  },
  {
    name: "Institutional",
    price: "Custom",
    period: "",
    desc: "Custom infrastructure for sub-brokers and firms.",
    features: ["Unlimited Strategies", "White Label Options", "Multi-client Management", "24/7 Dedicated Support", "Custom API Development"],
    color: "text-secondary",
    border: "border-white/[0.08]"
  }
];

export default function PricingClient() {
  return (
    <main className="bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">Transparent Pricing</p>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">Invest in <span className="text-white/40">Precision</span></h1>
            <p className="text-white/40 max-w-2xl mx-auto text-lg font-light">Choose a plan that fits your trading volume and complexity.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 items-stretch">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative glass-card p-10 flex flex-col justify-between transition-all duration-300 ${plan.popular ? "bg-[#0F172A]/70 border-2 border-primary/45 shadow-[0_0_35px_rgba(0,212,255,0.06)] scale-105 z-10" : "bg-[#0F172A]/40 border border-white/[0.08]"}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,212,255,0.3)]">
                  Most Popular
                </div>
              )}
              <div>
                <div className="mb-8">
                  <h3 className={`text-xl font-black uppercase tracking-widest mb-2 ${plan.color}`}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-white/20 text-sm font-bold">{plan.period}</span>
                  </div>
                  <p className="text-white/40 text-sm mt-4 font-medium leading-relaxed font-light">{plan.desc}</p>
                </div>
                
                <div className="w-full h-px bg-white/[0.08] mb-8" />
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-white/60 font-light">
                      <Check className={`w-5 h-5 ${plan.color}`} /> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a href={plan.name === "Institutional" ? "https://wa.me/919983168522" : "https://app.foxplayer.co.in/login"} className="block w-full">
                <button className={`w-full py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${plan.popular ? "bg-primary text-black hover:bg-primary/95 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] font-bold" : "bg-[#050816] text-white hover:bg-slate-900 border border-white/[0.08]"}`}>
                  {plan.name === "Institutional" ? "Contact Sales" : "Start Free Trial"}
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
