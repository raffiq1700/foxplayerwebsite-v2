import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, BookOpen, Key, DollarSign, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Shoonya API Algo Trading — Free Setup Guide | FoxPlayer",
  description: "Connect your Shoonya account to FoxPlayer for automated algo trading. Step-by-Step API setup, supported order types, and free vs paid access compared.",
  alternates: {
    canonical: "https://www.foxplayer.co.in/integrations/shoonya-api-algo-trading",
  },
};

export default function ShoonyaIntegrationPage() {
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
        "name": "Integrations",
        "item": "https://www.foxplayer.co.in/brokers"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Shoonya API Algo Trading",
        "item": "https://www.foxplayer.co.in/integrations/shoonya-api-algo-trading"
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
        {/* Breadcrumb text link */}
        <div className="text-xs text-white/40 uppercase tracking-widest font-black mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/brokers" className="hover:text-primary transition-colors">Integrations</Link>
          <span>/</span>
          <span className="text-white/80">Shoonya</span>
        </div>

        {/* Hero Section */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-6">
            Shoonya API Algo Trading <br />
            <span className="text-primary">with FoxPlayer</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
            Shoonya, the discount broking platform from Finvasia, offers one of the few genuinely free trading APIs in India — making it a popular starting point for retail algo traders. FoxPlayer connects directly to the Shoonya API so you can run automated strategies without writing your own broker integration layer.
          </p>
        </header>

        {/* Section 1: Why connect */}
        <section className="mb-16">
          <div className="glass-card p-8 border-white/5 relative overflow-hidden">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <BookOpen className="text-primary w-6 h-6" /> Why traders pair Shoonya with FoxPlayer
            </h2>
            <p className="text-white/60 leading-relaxed mb-6 font-light">
              Shoonya's API gives you free, direct market access, but it doesn't include a strategy builder, webhook bridge, or risk management layer on its own — you'd need to build that yourself. FoxPlayer sits on top of the Shoonya API and adds:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "A TradingView webhook bridge, so Pine Script alerts route straight to your Shoonya account",
                "A Python strategy runner for custom logic beyond what Pine Script supports",
                "Automated stop-loss, trailing stop, and daily drawdown limits",
                "Real-time order alerts on Telegram, Discord, or WhatsApp",
                "A unified dashboard if you're also running strategies on AliceBlue, Angel One, or Upstox alongside Shoonya"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 2: How to connect */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Key className="text-primary w-6 h-6" /> How to connect Shoonya to FoxPlayer
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {[
              { step: "1", title: "Open Account", text: "Open a trading account with Shoonya (Finvasia) if you don't already have one." },
              { step: "2", title: "Generate API Keys", text: "Generate your Shoonya API key and secret from your Shoonya account settings." },
              { step: "3", title: "Configure Broker", text: "Log in to your FoxPlayer dashboard and go to Broker Connections." },
              { step: "4", title: "Enter Credentials", text: "Select Shoonya and enter your API credentials. FoxPlayer encrypts and stores these locally — they are never shared with third parties." },
              { step: "5", title: "Paper Trade", text: "Run a paper-trading test to confirm the connection before deploying live capital." }
            ].map((s) => (
              <div key={s.step} className="flex gap-6 p-6 bg-white/[0.01] border border-white/5 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-black text-primary shrink-0 text-sm">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed font-light">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Supported orders & Free vs Paid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-8 border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">Supported order types</h2>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              FoxPlayer's Shoonya integration supports market, limit, stop-loss, and bracket orders across equity, F&O, and currency segments, with automatic square-off rules you configure once per strategy.
            </p>
          </div>
          <div className="glass-card p-8 border-white/5">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" /> Free vs Paid access
            </h2>
            <p className="text-sm text-white/50 leading-relaxed font-light mb-4">
              Shoonya's API access itself is free — there's no brokerage-side subscription fee to place algorithmic orders. The cost difference comes from the tooling layer on top of it.
            </p>
            <p className="text-xs text-white/40 leading-relaxed font-light">
              FoxPlayer's <Link href="/pricing" className="text-primary hover:underline font-bold">Retail Basic plan (free)</Link> lets you run one live strategy on Shoonya with full paper trading; the <Link href="/pricing" className="text-primary hover:underline font-bold">Professional plan (₹1,999/month)</Link> unlocks five concurrent strategies, unlimited TradingView webhooks, and Option Greeks auto-hedging.
            </p>
          </div>
        </section>

        {/* Section 4: FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <HelpCircle className="text-primary w-6 h-6" /> FAQ
          </h2>
          <div className="space-y-6">
            {[
              { q: "Is the Shoonya API free?", a: "Yes, Shoonya does not charge for API access itself, though standard brokerage and exchange charges apply to executed trades." },
              { q: "Can I run multiple strategies on Shoonya at once through FoxPlayer?", a: "Yes, depending on your FoxPlayer plan — Retail Basic supports one active strategy, Professional supports five, and Enterprise is unlimited." },
              { q: "Does FoxPlayer store my Shoonya API credentials securely?", a: "Yes, credentials are encrypted at rest and never shared with third parties." }
            ].map((f, idx) => (
              <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <h3 className="font-bold text-white mb-3 text-base flex items-start gap-2">
                  <span className="text-primary">Q:</span> {f.q}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-light pl-6">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTAs */}
        <section className="border-t border-white/5 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-white text-lg">Ready to automate your Shoonya trading?</h3>
            <p className="text-sm text-white/50 font-light mt-1">Get started in paper trading or setup a live execution strategy.</p>
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
