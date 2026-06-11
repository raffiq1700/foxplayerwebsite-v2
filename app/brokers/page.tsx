import { UseCases as SupportedBrokers } from "@/components/sections/UseCases";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supported Brokers | Foxplayer Algo Technologies",
  description: "Connect your Demat account securely to Foxplayer Algo Technologies. We support AliceBlue, Angel One, Shoonya, and Upstox.",
  alternates: {
    canonical: "/brokers",
  },
};

export default function BrokersPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 pt-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Integrate with Top Brokers</h1>
        <p className="text-xl text-white/60 mb-8 font-light">
          We provide seamless, zero-latency API integrations with India&apos;s leading stock brokers. Execute trades instantly without ever sharing your broker passwords.
        </p>
      </div>
      
      {/* We reuse the Supported Brokers section from the landing page */}
      <div className="-mt-16">
        <SupportedBrokers />
      </div>
      
      <FinalCTA />
    </div>
  );
}
