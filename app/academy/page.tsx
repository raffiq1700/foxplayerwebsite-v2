import { Metadata } from "next";
import AcademyIndexClient from "@/components/academy/AcademyIndexClient";

export const metadata: Metadata = {
  title: "Academy | FoxPlayer Algo Technologies",
  description: "Learn algorithmic trading strategies, stock market automation concepts, Options strategy guides, and Pine Script bridges in India.",
  alternates: {
    canonical: "/academy",
  },
};

export default function AcademyPage() {
  return <AcademyIndexClient />;
}
