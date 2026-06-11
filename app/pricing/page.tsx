import { Metadata } from "next";
import PricingClient from "@/components/pricing/PricingClient";

export const metadata: Metadata = {
  title: "Pricing | FoxPlayer Algo Technologies",
  description: "Affordable systematic trading platform pricing. Choose a plan that fits your trading volume: Retail, Professional, or Institutional.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
