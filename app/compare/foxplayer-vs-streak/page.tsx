import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FoxPlayer vs Streak: Algo Trading Platform Comparison",
  description: "Factual, objective comparison between FoxPlayer and Streak for algorithmic trading in India. Compare latency, webhook bridges, Python strategies, and pricing.",
  alternates: {
    canonical: "https://www.foxplayer.co.in/compare/foxplayer-vs-streak",
  },
};

export default function CompareStreakPage() {
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
        "name": "FoxPlayer vs Streak",
        "item": "https://www.foxplayer.co.in/compare/foxplayer-vs-streak"
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
          <span className="text-white/85">FoxPlayer vs Streak</span>
        </div>

        {/* Hero Section */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-6">
            FoxPlayer <span className="text-primary/70">vs</span> Streak
          </h1>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
            An honest, factual comparison between FoxPlayer and Streak for traders evaluating automated trading systems in India.
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
                    <th className="py-4 px-4">Streak</th>
                    <th className="py-4 px-4 text-primary">FoxPlayer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white/70">
                  <tr>
                    <td className="py-4 px-4 font-bold text-white">Target Audience</td>
                    <td className="py-4 px-4">Retail traders, no-code indicator builders</td>
                    <td className="py-4 px-4 text-primary font-semibold">Retail, Professional, sub-brokers & PMS firms</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold text-white">Strategy Custom Coding</td>
                    <td className="py-4 px-4">No-code (strictly scanner criteria math)</td>
                    <td className="py-4 px-4 text-primary font-semibold">Supported (Custom Python, Pine Script, APIs)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold text-white">External Webhooks</td>
                    <td className="py-4 px-4">Limited or requires third-party bridges</td>
                    <td className="py-4 px-4 text-primary font-semibold">Native TradingView webhook engine</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold text-white">Average Latency</td>
                    <td className="py-4 px-4">Variable broker-native speeds</td>
                    <td className="py-4 px-4 text-primary font-semibold">Sub-15ms execution (approx. 12ms average)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold text-white">Multi-leg Options & Greeks</td>
                    <td className="py-4 px-4">Basic order flow</td>
                    <td className="py-4 px-4 text-primary font-semibold">Auto-hedging of Delta, Gamma, Theta, Vega</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold text-white">White Labeling</td>
                    <td className="py-4 px-4">No</td>
                    <td className="py-4 px-4 text-primary font-semibold">Yes (Full sub-broker & PMS layouts)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed Breakdown */}
        <section className="mb-16 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">No-Code Scanner vs Open Developer Platform</h2>
            <p className="text-white/50 leading-relaxed font-light">
              Streak is primarily built as a broker-native no-code strategy planner that helps retail investors create scanners and deploy simple automated indicator setups on supported brokers (like Zerodha or Angel One). It excels at ease-of-use for beginners who do not want to program.
            </p>
            <p className="text-white/50 leading-relaxed font-light mt-4">
              FoxPlayer is built as a high-speed execution bridge and development stack. It offers full support for custom-written Python scripts, native webhook integrations (allowing any Pine Script on TradingView to route straight to your broker), co-located low latency hardware, and SEBI-aligned audit/risk infrastructure for professional teams, PMS managers, and sub-brokers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Options Greeks and Auto-Hedging</h2>
            <p className="text-white/50 leading-relaxed font-light">
              While Streak lets you place basic derivative orders, FoxPlayer provides advanced Greeks monitoring. FoxPlayer continuously calculates Delta, Gamma, Theta, and Vega on your multi-leg option strategies (like straddles or iron condors) using live options chains. If your target thresholds are crossed, FoxPlayer's automated hedging system places adjustments immediately to keep your portfolio risk balanced.
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
