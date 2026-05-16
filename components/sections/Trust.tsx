"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you need my broker password?",
    answer: "No. We connect via API keys provided by your broker. We never ask for your broker login password or transaction PIN.",
  },
  {
    question: "Is there any latency in trade execution?",
    answer: "Our servers are co-located in Mumbai near the exchange servers. For TradingView webhooks, execution latency is typically under 50ms.",
  },
  {
    question: "Can I test my strategy before going live?",
    answer: "Yes, our Free Trial and basic plans include paper trading mode. You can forward-test your strategies using real-time market data without risking actual capital.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Since we provide a 7-day free trial with paper trading, we do not offer refunds on paid subscriptions. We encourage you to fully test the platform during the trial.",
  },
  {
    question: "How do I become a marketplace creator?",
    answer: "If you have a profitable strategy with at least 3 months of live trading history, you can apply from your dashboard to become a verified creator and earn from subscribers.",
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
