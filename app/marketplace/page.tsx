import { TechShowcase as MarketplacePreview } from "@/components/sections/TechShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategy Marketplace | Foxplayer Algo Technologies",
  description: "Subscribe to top-performing verified trading strategies and copy their trades automatically.",
};

export default function MarketplacePage() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      <MarketplacePreview />
      <FinalCTA />
    </div>
  );
}
