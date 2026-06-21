import { Metadata } from "next";
import AcademyIndexClient from "@/components/academy/AcademyIndexClient";

export const metadata: Metadata = {
  title: "FoxPlayer Academy — Learn Algo Trading in India",
  description: "Free educational resources on algorithmic trading, backtesting, and broker API integration for Indian retail traders.",
  alternates: {
    canonical: "/academy",
  },
};

export default function AcademyPage() {
  return <AcademyIndexClient />;
}
