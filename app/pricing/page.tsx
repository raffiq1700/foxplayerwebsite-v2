"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, Globe } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Retail",
    price: "₹1,999",
    period: "/month",
    desc: "Perfect for individual traders starting with automation.",
    features: ["1 Active Strategy", "TradingView Webhooks", "1 Broker Connection", "Standard Support"],
    color: "text-blue-400",
    border: "border-blue-400/20"
  },
  {
    name: "Professional",
    price: "₹4,999",
    period: "/month",
    desc: "For serious traders managing multiple strategies.",
    features: ["5 Active Strategies", "Python Strategy Bridge", "3 Broker Connections", "Priority Support", "Backtesting Access"],
    popular: true,
    color: "text-primary",
    border: "border-primary/40"
  },
  {
    name: "Institutional",
    price: "Custom",
    period: "",
    desc: "Custom infrastructure for sub-brokers and firms.",
    features: ["Unlimited Strategies", "White Label Options", "Multi-client Management", "24/7 Dedicated Support", "Custom API Development"],
    color: "text-secondary",
    border: "border-secondary/20"
  }
];

export default function PricingPage() {
  return (
    <main className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">Transparent Pricing</p>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">Invest in <span className="text-white/40">Precision</span></h1>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">Choose a plan that fits your trading volume and complexity.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative glass-card p-10 flex flex-col ${plan.border} ${plan.popular ? "bg-white/[0.03] scale-105 z-10" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-background text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className={`text-xl font-black uppercase tracking-widest mb-2 ${plan.color}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-white/20 text-sm font-bold">{plan.period}</span>
                </div>
                <p className="text-white/40 text-sm mt-4 font-medium">{plan.desc}</p>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/60 font-medium">
                    <Check className={`w-5 h-5 ${plan.color}`} /> {feature}
                  </li>
                ))}
              </ul>

              <a href={plan.name === "Institutional" ? "https://wa.me/919983168522" : "https://app.foxplayer.co.in/register"}>
                <button className={`w-full py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${plan.popular ? "bg-primary text-background hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]" : "bg-white/5 text-white hover:bg-white/10 border border-white/10"}`}>
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
