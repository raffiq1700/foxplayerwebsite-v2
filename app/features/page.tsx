import { Features } from "@/components/sections/Features";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | Foxplayer Algo Technologies",
  description: "Explore the powerful automation features of Foxplayer Algo Technologies.",
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
