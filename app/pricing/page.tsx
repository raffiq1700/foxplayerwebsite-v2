import { Pricing } from "@/components/sections/Pricing";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Foxplayer Algo Technologies",
  description: "Transparent pricing for algo trading in India. From beginners to enterprise desks, we scale with your needs.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      <Pricing />
      <FinalCTA />
    </div>
  );
}
