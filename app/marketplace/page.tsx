import { TechShowcase as MarketplacePreview } from "@/components/sections/TechShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algo Strategy Marketplace India | FoxPlayer",
  description: "Browse and deploy pre-built, backtested trading strategies on FoxPlayer's strategy marketplace for Indian stock and options markets.",
  alternates: {
    canonical: "/marketplace",
  },
};

export default function MarketplacePage() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      <MarketplacePreview />
      <FinalCTA />
    </div>
  );
}
