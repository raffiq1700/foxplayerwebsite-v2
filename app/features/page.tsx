import { Features } from "@/components/sections/Features";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algo Trading Features — Python, Webhooks & Risk Tools",
  description: "Explore FoxPlayer's algo trading features: Python strategy execution, TradingView webhooks, Option Greeks auto-hedging, and multi-broker risk management.",
  alternates: {
    canonical: "/features",
  },
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      <Features />
      <FinalCTA />
    </div>
  );
}
