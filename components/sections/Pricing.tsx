"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";

const tiers = [
  {
    name: "Free Trial",
    price: "Free",
    description: "Experience the power of automated trading with paper trading.",
    features: [
      "Paper trading enabled",
      "Basic TradingView Webhooks",
      "1 Active strategy",
      "Community support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Basic",
    price: "₹499",
    period: "/mo",
    description: "Perfect for beginner algo traders.",
    features: [
      "Live trading execution",
      "Advanced Webhook support",
      "5 Active strategies",
      "Email support",
      "Basic risk management",
    ],
    cta: "Choose Basic",
    popular: true,
  },
  {
    name: "Pro",
    price: "₹999",
    period: "/mo",
    description: "For serious traders and copy trading.",
    features: [
      "Strategy Marketplace access",
      "Copy trading enabled",
      "Unlimited active strategies",
      "Priority WhatsApp support",
      "Advanced python execution",
    ],
    cta: "Choose Pro",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "₹1999",
    period: "/mo",
    description: "White-label & custom requirements.",
    features: [
      "Custom branding & White-label",
      "Dedicated account manager",
      "Custom API integrations",
      "Server-side execution",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-32 bg-background border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
            No hidden fees. Automate your trades with India&apos;s best algo platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard className={`flex flex-col h-full ${tier.popular ? 'border-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-primary/5' : ''}`}>
                {tier.popular && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-cyan-400" />
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    {tier.period && <span className="text-white/50 font-medium">{tier.period}</span>}
                  </div>
                  <p className="text-sm text-white/50 min-h-[40px] font-light">{tier.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="http://app.foxplayer.co.in" className="block w-full mt-auto">
                  <Button variant={tier.popular ? "primary" : "outline"} className="w-full">
                    {tier.cta}
                  </Button>
                </a>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* White Label CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Need White Label or Custom Trading Software?</h3>
          <p className="text-white/50 mb-6 max-w-2xl mx-auto">We provide full-scale custom trading infrastructure, white-label platforms, and API bridge solutions for sub-brokers and developers.</p>
          <a href="tel:9983168522" className="inline-flex items-center gap-3 text-xl font-bold text-primary hover:text-white transition-colors">
            Contact us: +91 9983168522
          </a>
        </div>
      </div>
    </section>
  );
}
