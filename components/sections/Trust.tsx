"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is algo trading legal in India?",
    answer: "Yes. Algorithmic trading is legal in India when executed through SEBI-registered brokers using approved APIs. FoxPlayer is a technology provider that connects your strategies to SEBI-regulated broker APIs — it does not place trades outside regulatory channels.",
  },
  {
    question: "Which brokers does FoxPlayer support?",
    answer: "FoxPlayer currently integrates with AliceBlue, Shoonya, Angel One, and Upstox, with Zerodha Kite Connect automation also supported. Multiple brokers can be connected simultaneously from a single dashboard.",
  },
  {
    question: "Do I need to know how to code to use FoxPlayer?",
    answer: "No. You can connect TradingView Pine Script alerts via webhook without writing backend code. Traders who do code can deploy custom Python strategies directly for more advanced logic.",
  },
  {
    question: "What is FoxPlayer's average order execution latency?",
    answer: "FoxPlayer routes orders through dedicated bare-metal broker gateways with an average execution latency of approximately 12 milliseconds, reducing slippage on high-frequency entries.",
  },
  {
    question: "Does FoxPlayer offer a free trial?",
    answer: "Yes. FoxPlayer offers a free trial on both Retail and Professional plans. You can sign up and test the platform with full features before starting your subscription.",
  },
  {
    question: "Does FoxPlayer offer white-label solutions?",
    answer: "Yes, the Institutional plan includes white-label brand layouts, dedicated infrastructure, and a multi-client copy trading bridge, built for sub-brokers and PMS firms.",
  },
  {
    question: "Does FoxPlayer provide investment advice?",
    answer: "No. FoxPlayer is a technology provider offering strategy automation software. It does not provide investment advice, tips, or guaranteed returns.",
  },
];

export function Trust() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-background border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-white/60 text-lg font-light">
            Everything you need to know about Foxplayer Algo Technologies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass rounded-xl overflow-hidden transition-all duration-300">
              <button
                className="w-full px-6 py-5 flex items-center justify-between font-bold text-left text-white hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <ChevronDown className={`w-5 h-5 text-white/50 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-2 text-white/60 leading-relaxed font-light border-t border-white/10 bg-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
