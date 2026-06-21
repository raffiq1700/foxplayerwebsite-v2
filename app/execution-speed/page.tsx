import { Metadata } from "next";
import Link from "next/link";
import { Zap, Clock, ShieldAlert, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Low Latency Order Execution Speed | FoxPlayer India",
  description: "Learn how FoxPlayer achieves sub-15ms order execution latency using co-located gateways in Mumbai for automated trading with Indian brokers.",
  alternates: {
    canonical: "https://www.foxplayer.co.in/execution-speed",
  },
};

export default function ExecutionSpeedPage() {
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
        "name": "Execution Speed",
        "item": "https://www.foxplayer.co.in/execution-speed"
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
          <span className="text-white/80">Execution Speed</span>
        </div>

        {/* Hero Section */}
        <header className="mb-16">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
            <Zap className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-6">
            Low Latency Algo Trading: <br />
            <span className="text-primary">Sub-15ms Execution</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
            "Low latency" gets thrown around a lot in algo trading marketing, often without much explanation of why it matters or how it's measured. Here's a concrete breakdown of FoxPlayer's infrastructure.
          </p>
        </header>

        {/* Section 1: What it measures */}
        <section className="mb-16">
          <div className="glass-card p-8 border-white/5 relative overflow-hidden">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Clock className="text-primary w-6 h-6" /> What the number actually measures
            </h2>
            <p className="text-white/60 leading-relaxed font-light mb-6">
              Execution latency, as FoxPlayer measures it, is the time between your strategy's signal firing (a webhook alert or a Python script's order call) and the order being acknowledged by the broker's system.
            </p>
            <p className="text-white/60 leading-relaxed font-light">
              FoxPlayer's infrastructure averages approximately <span className="text-primary font-bold">12 milliseconds</span> end-to-end, using dedicated bare-metal servers connected directly to broker gateways in Mumbai rather than routing through shared cloud infrastructure with variable network hops.
            </p>
          </div>
        </section>

        {/* Section 2: Why it matters */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Why it matters more for options than equity</h2>
          <p className="text-white/50 leading-relaxed font-light mb-6">
            Options prices move in discrete steps, and bid-ask spreads on less liquid strikes can widen quickly during volatile moves. A few hundred milliseconds of delay between your signal and your fill can mean the difference between getting filled near your intended price and chasing a strike that's already moved against you — especially when selling premium into a fast-moving market, where the cost of a delayed exit is asymmetric.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl">
              <h3 className="font-bold text-white mb-2">Slippage Reduction</h3>
              <p className="text-white/40 text-xs leading-relaxed font-light">Minimize the gap between signal generation price and real order fill price.</p>
            </div>
            <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl">
              <h3 className="font-bold text-white mb-2">Options Scalping</h3>
              <p className="text-white/40 text-xs leading-relaxed font-light">Execute multi-leg spreads instantly before broker orderbooks shift.</p>
            </div>
            <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl">
              <h3 className="font-bold text-white mb-2">Risk Avoidance</h3>
              <p className="text-white/40 text-xs leading-relaxed font-light">Trigger emergency strategy square-offs instantly when drawdowns are breached.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Technical Setup */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">What slows execution down (and what doesn't)</h2>
          <p className="text-white/50 leading-relaxed font-light mb-8">
            Network hops between your strategy and the broker, queueing delays on shared infrastructure, and inefficient order-routing logic are the main contributors to latency. Your strategy's own decision-making time (the Pine Script or Python logic evaluating conditions) is usually negligible compared to network and routing latency — so the infrastructure layer matters more than how "fast" your code looks on paper.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white">Mumbai Gateways</h4>
                <p className="text-white/40 text-xs leading-relaxed font-light">Co-located physical servers in close proximity to the exchange gateways to decrease geographical fiber-routing latency.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white">Bare-metal Broker Links</h4>
                <p className="text-white/40 text-xs leading-relaxed font-light">Direct TCP connections rather than high-overhead virtualized environments that introduce random CPU delays.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Testing & Limitations */}
        <section className="mb-16 p-8 bg-white/[0.02] border border-white/5 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[50px] rounded-full pointer-events-none" />
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-500" /> A realistic expectation
          </h2>
          <p className="text-sm text-white/55 leading-relaxed font-light mb-6">
            No platform can guarantee zero slippage — market conditions, liquidity, and order size all affect your actual fill versus your intended price, regardless of execution speed. What low latency infrastructure does is remove unnecessary delay from the parts of the process that are controllable, so the only slippage you're dealing with is the market's, not the platform's.
          </p>
          <h3 className="font-bold text-white text-sm mb-2">Testing it yourself:</h3>
          <p className="text-xs text-white/40 leading-relaxed font-light">
            Before relying on any platform's latency claims for live capital, run your strategy in paper trading and compare logged signal times against logged fill times over a few sessions. That gives you a real, strategy-specific number rather than a marketing average.
          </p>
        </section>

        {/* CTAs */}
        <section className="border-t border-white/5 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-white text-lg">Ready to experience sub-15ms execution?</h3>
            <p className="text-sm text-white/50 font-light mt-1">Get started with a free basic account or upgrade to Professional.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link href="/pricing">
              <button className="bg-primary text-black font-black uppercase tracking-wider text-xs px-6 py-3.5 rounded-xl hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all">
                Compare Plans
              </button>
            </Link>
            <Link href="/features">
              <button className="bg-white/5 border border-white/10 hover:bg-white/10 font-black uppercase tracking-wider text-xs px-6 py-3.5 rounded-xl transition-all">
                View Features
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
