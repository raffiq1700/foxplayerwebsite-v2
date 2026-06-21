import { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "FoxPlayer — Algo Trading Platform India | 12ms Execution",
  description: "Algo Trading Software India: Custom Algo Development, Broker API Integration & advanced Automated Trading Solutions.",
  alternates: {
    canonical: "https://www.foxplayer.co.in/",
    languages: {
      "en-IN": "https://www.foxplayer.co.in/",
      "x-default": "https://www.foxplayer.co.in/",
    },
  },
};

export default function Home() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "FoxPlayer Algo Technologies",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "description": "Automated algorithmic trading platform for Indian stock markets. Execute Python strategies, TradingView webhooks, and copy trading across AliceBlue, Shoonya, Angel One, Upstox, Groww, Motilal Oswal, Zerodha, and Dhan.",
    "offers": [
      {
        "@type": "Offer",
        "name": "Retail",
        "price": "1999",
        "priceCurrency": "INR",
        "description": "1 active strategy, TradingView webhooks, 1 broker connection, standard support."
      },
      {
        "@type": "Offer",
        "name": "Professional",
        "price": "4999",
        "priceCurrency": "INR",
        "description": "5 active strategies, Python strategy bridge, 3 broker connections, priority support, backtesting access."
      },
      {
        "@type": "Offer",
        "name": "Institutional",
        "price": "0",
        "priceCurrency": "INR",
        "description": "Unlimited strategies, white label options, multi-client management, 24/7 dedicated support, custom API development."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is FoxPlayer Algorithmic Trading Platform India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FoxPlayer is an advanced automated trading platform in India designed for retail and institutional traders. It enables custom algo development, strategy automation, and seamless broker API integration for rapid order execution."
        }
      },
      {
        "@type": "Question",
        "name": "Can I automate options trading using FoxPlayer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, FoxPlayer provides options trading automation. You can deploy multi-leg options strategies, execute Nifty Algo Trading and Bank Nifty Algo Trading, and implement auto-hedging with real-time Option Greeks calculations."
        }
      },
      {
        "@type": "Question",
        "name": "Which brokers are supported for API trading solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support major Indian stockbrokers including AliceBlue, Shoonya, Angel One, Upstox, Groww, Motilal Oswal, Zerodha, and Dhan. Our automated trading software processes orders in less than 15ms."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide custom algo development services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in custom algo development. Our team of quant developers can build, backtest, and optimize your proprietary trading strategies in Python or Pine Script to connect directly with your broker APIs."
        }
      },
      {
        "@type": "Question",
        "name": "How does TradingView Webhook Integration work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our broker API integration lets you send instant webhook alerts from TradingView directly to our execution engine, turning your indicators into live trades instantly."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.foxplayer.co.in/"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HomeClient />
    </>
  );
}
