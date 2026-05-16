import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Shield, Zap, Globe, Code2, Database, Smartphone, BarChart3 } from "lucide-react";
import Link from "next/link";

const services = {
  "algorithmic-trading-software-development": {
    title: "Algorithmic Trading Software Development",
    desc: "Custom high-frequency trading systems built for speed and precision.",
    icon: Zap,
    features: ["Low-latency execution", "Custom strategy integration", "Multi-broker support", "Risk management modules"],
    content: "We specialize in building robust algorithmic trading infrastructures that handle millions of requests per second. Our systems are designed for professional traders who need zero-latency execution and high-reliability data feeds."
  },
  "shoonya-api-trading-software": {
    title: "Shoonya API Trading Software",
    desc: "Optimize your trading on the Shoonya platform with our custom API bridges.",
    icon: Code2,
    features: ["Zero-brokerage automation", "Real-time MTM tracking", "Auto-login system", "Multi-account management"],
    content: "Leverage the power of Shoonya's zero-brokerage model with our professional-grade API automation. We provide secure, fast, and stable bridges that turn your manual strategies into automated cash cows."
  },
  "zerodha-kite-connect-development": {
    title: "Zerodha Kite Connect Development",
    desc: "Seamlessly integrate your strategies with India's largest broker.",
    icon: BarChart3,
    features: ["Kite Connect V3 integration", "Historical data backfill", "WebSocket streaming", "Order management system"],
    content: "Our Zerodha experts build high-performance applications using the Kite Connect API. Whether you need a simple bridge or a complex multi-client dashboard, we deliver excellence."
  },
  "white-label-trading-platform": {
    title: "White Label Trading Platform",
    desc: "Launch your own branded trading platform in days, not months.",
    icon: Globe,
    features: ["Complete rebranding", "Admin dashboard", "User management", "Broker agnostic"],
    content: "Scale your trading business with our fully customizable white-label solutions. We provide the technology, you provide the brand. Perfect for sub-brokers and educational institutions."
  },
  "backtesting-engine-development": {
    title: "Backtesting Engine Development",
    desc: "Validate your strategies with millisecond precision before going live.",
    icon: Database,
    features: ["Tick-by-tick data analysis", "Slippage simulation", "Optimization algorithms", "Detailed performance reports"],
    content: "Don't gamble with your capital. Our custom backtesting engines allow you to run years of data in minutes, simulating real-market conditions including slippage and brokerage."
  },
  "forex-trading-software-development": {
    title: "Forex Trading Software Development",
    desc: "Global currency trading automation with MetaTrader and custom integrations.",
    icon: Globe,
    features: ["MT4/MT5 bridges", "24/5 execution", "Economic calendar alerts", "Global liquidity access"],
    content: "Expand your reach into the global Forex markets. We develop custom EAs, indicators, and standalone trading terminals for currency pairs and global indices."
  },
  "options-trading-automation": {
    title: "Options Trading Automation",
    desc: "Automate complex Greeks-based strategies and multi-leg spreads.",
    icon: Zap,
    features: ["Delta-neutral automation", "Iron Condor/Straddle bots", "Greeks monitoring", "Dynamic hedging"],
    content: "Take the emotion out of options trading. Our bots monitor the Greeks in real-time and execute complex adjustments automatically to maintain your desired risk profile."
  },
  "web-development": {
    title: "Professional Web Development",
    desc: "High-performance web applications built with Next.js and React.",
    icon: Code2,
    features: ["SEO optimized", "Responsive design", "Secure architecture", "Cloud integration"],
    content: "We build modern, fast, and secure websites that convert visitors into customers. Specializing in fintech and trading dashboards."
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile solutions for Android and iOS.",
    icon: Smartphone,
    features: ["React Native / Flutter", "Real-time notifications", "Biometric security", "Offline mode"],
    content: "Put your trading platform in your users' pockets. We develop high-quality mobile applications with real-time data streaming and secure order execution."
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services[params.slug as keyof typeof services];
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | FoxPlayer Algo Technologies`,
    description: service.desc,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];

  if (!service) notFound();

  const Icon = service.icon;

  return (
    <main className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Expert Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
              {service.title}
            </h1>
            <p className="text-lg text-white/40 leading-relaxed mb-10 max-w-xl">
              {service.content}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://wa.me/919983168522" target="_blank">
                <button className="bg-white text-background px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2">
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                Download Brochure
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] -z-10" />
            <div className="glass-card p-8 md:p-12 border-white/5">
              <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-tight">Technical Specifications</h3>
              <div className="grid grid-cols-1 gap-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-white/60 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lead Capture Section */}
        <section className="p-8 md:p-16 bg-gradient-to-br from-primary/20 via-background to-secondary/10 border border-primary/20 rounded-[3rem] relative overflow-hidden group">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight">Ready to start your<br /><span className="text-primary">Next Big Project?</span></h2>
              <p className="text-white/50 text-lg mb-8">Join 65+ institutional clients who trust FoxPlayer for their trading technology needs.</p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-white/5" />
                  ))}
                </div>
                <p className="text-xs font-bold text-white/30 uppercase tracking-widest">Join our community</p>
              </div>
            </div>
            <div className="glass-card p-8 border-white/10">
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-primary/50 transition-all" />
                <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-primary/50 transition-all" />
                <textarea placeholder="Project Details" rows={4} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-primary/50 transition-all resize-none" />
                <button type="submit" className="w-full py-5 bg-primary text-background font-black uppercase tracking-widest rounded-2xl hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all">
                  Book Free Consultation
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
