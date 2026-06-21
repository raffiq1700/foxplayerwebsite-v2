import { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "FoxPlayer — Algo Trading Platform India | 12ms Execution",
  description: "Automate trading with Python, Pine Script & TradingView webhooks. Connects to AliceBlue, Shoonya, Angel One & Zerodha. Sub-15ms execution.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "FoxPlayer Algo Technologies",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "description": "Automated algorithmic trading platform for Indian stock markets. Execute Python strategies, TradingView webhooks, and copy trading across AliceBlue, Shoonya, Angel One, and Upstox.",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <HomeClient />
    </>
  );
}
