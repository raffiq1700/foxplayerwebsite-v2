import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FoxPlayer vs Tradetron: Algo Trading Platform Comparison",
  description: "Factual, objective comparison between FoxPlayer and Tradetron for algorithmic trading in India. Compare latency, B2B white labeling, and pricing.",
  alternates: {
    canonical: "https://www.foxplayer.co.in/compare/foxplayer-vs-tradetron",
  },
};

export default function CompareTradetronPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.foxplayer.co.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Compare",
        "item": "https://www.foxplayer.co.in"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "FoxPlayer vs Tradetron",
        "item": "https://www.foxplayer.co.in/compare/foxplayer-vs-tradetron"
      }
    ]
  };

  return (
    <main className="bg-background min-h-screen pt-40 pb-24 text-white relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-xs text-white/40 uppercase tracking-widest font-black mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white/80">Compare</span>
          <span>/</span>
          <span className="text-white/85">FoxPlayer vs Tradetron</span>
        </div>

        {/* Hero Section */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-6">
            FoxPlayer <span className="text-primary/70">vs</span> Tradetron
          </h1>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
            An honest, factual comparison between FoxPlayer and Tradetron for traders and sub-brokers in India.
          </p>
        </header>

        {/* Comparison Table */}
        <section className="mb-16">
          <div className="glass-card p-8 border-white/5 relative overflow-hidden">
            <h2 className="text-2xl font-bold mb-8">Feature Grid</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-white/50 uppercase tracking-wider text-xs">
                    <th className="py-4 px-4">Feature</th>
                    <th className="py-4 px-4">Tradetron</th>
                    <th className="py-4 px-4 text-primary">FoxPlayer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white/70">
                  <tr>
                    <td className="py-4 px-4 font-bold text-white">Execution Infrastructure</td>
                    <td className="py-4 px-4">Shared cloud servers, queueing delay risks</td>
                    <td className="py-4 px-4 text-primary font-semibold">Mumbai co-located gateways, bare-metal servers</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold text-white">Execution Latency</td>
                    <td className="py-4 px-4">Variable, depend on queues (often several hundred ms)</td>
                    <td className="py-4 px-4 text-primary font-semibold">Sub-15ms execution (approx. 12ms average)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold text-white">Strategy Creation</td>
                    <td className="py-4 px-4">Visual drag-and-drop conditions builder</td>
                    <td className="py-4 px-4 text-primary font-semibold">Python SDK runner, TradingView webhooks, custom coding</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold text-white">B2B White Labeling</td>
                    <td className="py-4 px-4">Standard sub-broker configuration</td>
                    <td className="py-4 px-4 text-primary font-semibold">Yes (Custom brand layouts & dedicated servers)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold text-white">Pricing Model</td>
                    <td className="py-4 px-4">Tiered by strategies/clients & variables</td>
                    <td className="py-4 px-4 text-primary font-semibold">Simple flat pricing (Retail ₹1,999/mo, Pro ₹4,999/mo)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed Breakdown */}
        <section className="mb-16 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Execution Latency and Slippage</h2>
            <p className="text-white/50 leading-relaxed font-light">
              Tradetron routes orders through shared cloud servers. Under peak market conditions (like market open or weekly options expiry), shared queues can introduce processing delays that increase order slippage.
            </p>
            <p className="text-white/50 leading-relaxed font-light mt-4">
              FoxPlayer resolves this latency risk by deploying strategies on dedicated bare-metal servers physically located near exchange gateways in Mumbai. This results in an average execution latency of approximately 12ms, allowing options sellers and scalpers to receive highly consistent fill prices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">No-Code Logic vs Custom Programming</h2>
            <p className="text-white/50 leading-relaxed font-light">
              Tradetron offers a visual condition builder, making it suitable for retail traders who prefer drag-and-drop strategy creation without writing code.
            </p>
            <p className="text-white/50 leading-relaxed font-light mt-4">
              FoxPlayer targets professional developers, quant funds, and advanced retail traders. We provide direct execution runners for Python scripts, high-speed TradingView webhook integration, and options Greeks auto-hedging, allowing infinite strategy flexibility.
            </p>
          </div>
        </section>

        {/* CTAs */}
        <section className="border-t border-white/5 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-white text-lg">Compare FoxPlayer pricing and features</h3>
            <p className="text-sm text-white/50 font-light mt-1">Deploy a strategy today or explore our features list.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link href="/pricing">
              <button className="bg-primary text-black font-black uppercase tracking-wider text-xs px-6 py-3.5 rounded-xl hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all">
                View Pricing
              </button>
            </Link>
            <Link href="/features">
              <button className="bg-white/5 border border-white/10 hover:bg-white/10 font-black uppercase tracking-wider text-xs px-6 py-3.5 rounded-xl transition-all">
                Explore Features
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
