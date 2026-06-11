import { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "FoxPlayer Algo Technologies | Automated Trading Platform India",
  description: "Advanced automated trading platform in India. Execute Python strategies, use TradingView webhooks, and copy trade with AliceBlue, Shoonya, Angel One, and Upstox.",
  keywords: ["algo trading platform India", "copy trading software India", "TradingView webhook India", "automated trading platform India", "strategy marketplace India", "Shoonya API trading", "Zerodha Kite Connect automation"],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}
