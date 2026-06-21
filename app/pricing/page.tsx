import { Metadata } from "next";
import PricingClient from "@/components/pricing/PricingClient";

export const metadata: Metadata = {
  title: "FoxPlayer Pricing — Free to Enterprise Algo Trading Plans",
  description: "Compare FoxPlayer's Retail Basic (free), Professional (₹1,999/mo), and Enterprise Custom plans for algo trading in India.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
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
        "name": "Retail Basic",
        "price": "0",
        "priceCurrency": "INR",
        "description": "1 active strategy, paper trading simulator, all supported Indian brokers, basic Discord alerts."
      },
      {
        "@type": "Offer",
        "name": "Professional",
        "price": "1999",
        "priceCurrency": "INR",
        "description": "5 active strategies, live broker execution, unlimited TradingView webhooks, Option Greeks auto-hedges, priority WhatsApp support."
      },
      {
        "@type": "Offer",
        "name": "Enterprise Custom",
        "price": "0",
        "priceCurrency": "INR",
        "description": "Unlimited active strategies, white-label brand layouts, dedicated bare-metal servers, multi-client copy trading bridge, 24/7 dedicated support desk. Custom pricing — contact sales."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <PricingClient />
    </>
  );
}
