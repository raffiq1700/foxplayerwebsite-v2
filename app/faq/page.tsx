import { Trust as FAQ } from "@/components/sections/Trust";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Foxplayer Algo Technologies",
  description: "Frequently Asked Questions about our algo trading platform.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      <FAQ />
      <FinalCTA />
    </div>
  );
}
