import { Trust as FAQ } from "@/components/sections/Trust";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algo Trading FAQs — FoxPlayer",
  description: "Answers to common questions about algo trading legality, broker support, pricing, and execution speed on FoxPlayer.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is algo trading legal in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Algorithmic trading is legal in India when executed through SEBI-registered brokers using approved APIs. FoxPlayer is a technology provider that connects your strategies to SEBI-regulated broker APIs — it does not place trades outside regulatory channels."
        }
      },
      {
        "@type": "Question",
        "name": "Which brokers does FoxPlayer support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FoxPlayer currently integrates with AliceBlue, Shoonya, Angel One, and Upstox, with Zerodha Kite Connect automation also supported. Multiple brokers can be connected simultaneously from a single dashboard."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to know how to code to use FoxPlayer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. You can connect TradingView Pine Script alerts via webhook without writing backend code. Traders who do code can deploy custom Python strategies directly for more advanced logic."
        }
      },
      {
        "@type": "Question",
        "name": "What is FoxPlayer's average order execution latency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FoxPlayer routes orders through dedicated bare-metal broker gateways with an average execution latency of approximately 12 milliseconds, reducing slippage on high-frequency entries."
        }
      },
      {
        "@type": "Question",
        "name": "Does FoxPlayer offer a free trial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. FoxPlayer offers a free trial on both Retail and Professional plans. You can sign up and test the platform with full features before starting your subscription."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="flex flex-col min-h-screen pt-10">
        <FAQ />
        <FinalCTA />
      </div>
    </>
  );
}
