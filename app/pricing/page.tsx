import { Metadata } from "next";
import PricingClient from "@/components/pricing/PricingClient";

export const metadata: Metadata = {
  title: "FoxPlayer Pricing — Retail to Institutional Algo Trading Plans",
  description: "Compare FoxPlayer's Retail (₹1,999/mo), Professional (₹4,999/mo), and Institutional (Custom) plans for algo trading in India.",
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
        "description": "Unlimited active strategies, white-label options, multi-client management, 24/7 dedicated support, custom API development. Custom pricing — contact sales."
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
