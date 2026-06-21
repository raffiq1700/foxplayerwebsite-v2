import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Zap, Globe, Code2, Database, Smartphone, BarChart3 } from "lucide-react";
import Link from "next/link";

const services = {
  "algorithmic-trading-software-development": {
    title: "Algo Trading Software Development India | FoxPlayer",
    desc: "Custom algorithmic trading software development for brokers, PMS firms, and fintechs — broker API integration, backtesting engines, and execution systems.",
    icon: Zap,
    features: ["Low-latency execution", "Custom strategy integration", "Multi-broker support", "Risk management in algorithmic trading"],
    content: "We are a premier algo trading software company specializing in algorithmic trading software development India. Our team builds institutional-grade automated trading software and custom trading bots tailored for NSE, BSE, and MCX trading automation. Whether you need C++ trading software development or Python algo trading development, we provide the best algo trading platforms for professional traders."
  },
  "shoonya-api-trading-software": {
    title: "Shoonya API Trading Software | FoxPlayer",
    desc: "Optimize your trading on the Shoonya platform with our custom Shoonya free algo trading bridges.",
    icon: Code2,
    features: ["Zero-brokerage automation", "Real-time MTM tracking", "Auto-login system", "Multi-account management"],
    content: "Leverage the power of Shoonya's zero-brokerage model with our professional-grade Shoonya free algo trading automation. We provide secure, fast, and stable broker API integrations that turn your best trading strategy into an automated revenue stream. Ideal for intraday trading automation and options trading automation."
  },
  "zerodha-kite-connect-development": {
    title: "Zerodha Kite Connect Development | FoxPlayer",
    desc: "Seamlessly integrate your strategies with Zerodha free algo trading solutions.",
    icon: BarChart3,
    features: ["Kite Connect V3 integration", "Historical data backfill", "WebSocket streaming", "Order management system"],
    content: "Our Zerodha experts build high-performance Zerodha free algo trading applications using the Kite Connect API. Whether you need a simple bridge for TradingView webhook automation or a complex multi-client dashboard, we deliver institutional trading software for the Indian market."
  },
  "white-label-trading-platform": {
    title: "White Label Trading Platform India | FoxPlayer",
    desc: "White-label algo trading platforms for sub-brokers and PMS firms — your brand, FoxPlayer's execution infrastructure.",
    icon: Globe,
    features: ["White label brokerage software", "Admin dashboard", "User management", "PMS software development"],
    content: "Scale your trading business with our fully customizable white label trading platform and white label brokerage software. Our solutions are ideal for sub-brokers, PMS managers, SEBI registered research analysts, and RIAs looking to launch professional trading platforms without developing the technology from scratch. We provide RIA software development and trading software for advisors that are fully compliant and scalable."
  },
  "backtesting-algo-development": {
    title: "Backtesting Algo Development | FoxPlayer",
    desc: "Validate your best trading strategy with our custom backtesting algo development.",
    icon: Database,
    features: ["Tick-by-tick data analysis", "Slippage simulation", "Optimization algorithms", "Strategy backtesting software"],
    content: "Don't gamble with your capital. Our custom backtesting algo development allows you to run years of data in minutes. We build robust strategy backtesting software that simulates real-market conditions including slippage and brokerage, perfect for quantitative trading software requirements."
  },
  "forex-trading-software-development": {
    title: "Forex Trading Software Development | FoxPlayer",
    desc: "Global currency trading automation with MetaTrader and custom integrations.",
    icon: Globe,
    features: ["MT4/MT5 bridges", "24/5 execution", "Economic calendar alerts", "Global liquidity access"],
    content: "Expand your reach into the global Forex markets. We develop custom EAs, indicators, and standalone trading terminals for currency pairs and global indices."
  },
  "options-trading-automation": {
    title: "Options Trading Automation India | FoxPlayer",
    desc: "Automate multi-leg options strategies — straddles, iron condors, and spreads — with real-time Greeks and auto-hedging.",
    icon: Zap,
    features: ["Delta-neutral automation", "Iron Condor/Straddle bots", "Greeks monitoring", "Dynamic hedging"],
    content: "Take the emotion out of options trading. Our bots monitor the Greeks in real-time and execute complex adjustments automatically to maintain your desired risk profile."
  },
  "web-development": {
    title: "Professional Web Development | FoxPlayer",
    desc: "High-performance web applications built with Next.js and React.",
    icon: Code2,
    features: ["SEO optimized", "Responsive design", "Secure architecture", "Cloud integration"],
    content: "We build modern, fast, and secure websites that convert visitors into customers. Specializing in fintech and trading dashboards."
  },
  "mobile-app-development": {
    title: "Mobile App Development | FoxPlayer",
    desc: "Native and cross-platform mobile solutions for Android and iOS.",
    icon: Smartphone,
    features: ["React Native / Flutter", "Real-time notifications", "Biometric security", "Offline mode"],
    content: "Put your trading platform in your users' pockets. We develop high-quality mobile applications with real-time data streaming and secure order execution."
  },
  "pms-software-development": {
    title: "PMS Software Development India | FoxPlayer",
    desc: "Custom PMS software development in India for SEBI-registered portfolio management services. Automate client onboarding, trading, and reporting.",
    icon: Database,
    features: ["Multi-client trade allocation", "Model portfolio tracking", "Real-time client reporting", "SEBI compliance guidelines support"],
    content: "We build high-performance PMS software development India solutions for SEBI-registered Portfolio Managers. Streamline operations with automated trade routing, custom model portfolios, and real-time execution across multiple brokers."
  },
  "ria-software-development": {
    title: "RIA Software Development India | FoxPlayer",
    desc: "Automated execution and client management platforms for SEBI Registered Investment Advisors (RIAs) in India.",
    icon: Globe,
    features: ["Consent-based trade execution", "Client risk profiling tools", "One-click basket order execution", "Secure advisor console"],
    content: "Empower your advisory firm with our advanced RIA software development India solutions. We design secure, custom portals for SEBI Registered Investment Advisors (RIAs) to distribute research, manage client portfolios, and execute basket orders with one-click approval."
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services[params.slug as keyof typeof services];
  if (!service) return { title: "Service Not Found" };
  const baseUrl = "https://www.foxplayer.co.in";
  return {
    title: service.title.includes("FoxPlayer") ? service.title : `${service.title} | FoxPlayer Algo Technologies`,
    description: service.desc,
    alternates: {
      canonical: `${baseUrl}/services/${params.slug}`,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];

  if (!service) notFound();

  const Icon = service.icon;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.desc,
    "provider": {
      "@type": "Organization",
      "name": "FoxPlayer Algo Technologies",
      "url": "https://www.foxplayer.co.in"
    }
  };

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
        "name": "Services",
        "item": "https://www.foxplayer.co.in/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://www.foxplayer.co.in/services/${params.slug}`
      }
    ]
  };

  return (
    <main className="bg-background pt-40 pb-24 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
              {service.title.split(" | ")[0]}
            </h1>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              {service.content}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://wa.me/919983168522" target="_blank">
                <button className="bg-white text-background px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2">
                  Get a Free Quote <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <a href="/brochure.pdf" download className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center">
                Download Brochure
              </a>
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

        {/* Custom Section for White Label Page */}
        {params.slug === "white-label-trading-platform" && (
          <div className="mt-24 mb-24 space-y-24">
            {/* Comparison Table */}
            <section className="glass-card p-8 md:p-12 border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
              <h2 className="text-3xl font-black text-white mb-8 tracking-tight">Building In-House vs FoxPlayer White-Label</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-white/50 uppercase tracking-wider text-xs">
                      <th className="py-4 px-4">Feature</th>
                      <th className="py-4 px-4">Building In-House</th>
                      <th className="py-4 px-4 text-primary">FoxPlayer White-Label</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/70">
                    <tr>
                      <td className="py-4 px-4 font-bold text-white">Time to Market</td>
                      <td className="py-4 px-4">6 - 12 Months development</td>
                      <td className="py-4 px-4 text-primary font-semibold">Immediate deployment (under 7 days)</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-white">Upfront Dev Cost</td>
                      <td className="py-4 px-4">₹15L - ₹30L+ for team & infrastructure</td>
                      <td className="py-4 px-4 text-primary font-semibold">Fractional setup fee & simple monthly plan</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-white">Broker API Maintenance</td>
                      <td className="py-4 px-4">Requires dedicated dev team for API changes</td>
                      <td className="py-4 px-4 text-primary font-semibold">Fully managed & updated by FoxPlayer</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-white">Infrastructure Latency</td>
                      <td className="py-4 px-4">Variable, depends on cloud hosting setup</td>
                      <td className="py-4 px-4 text-primary font-semibold">Sub-15ms execution via co-located gateways</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold text-white">Compliance Readiness</td>
                      <td className="py-4 px-4">Must build custom audit logs & risk checks</td>
                      <td className="py-4 px-4 text-primary font-semibold">SEBI-aligned audit logs & risk controls built-in</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Pricing / Engagement Model */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 border-white/5">
                <h3 className="text-xl font-black text-white mb-4">PMS Engagement Model</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  Designed for SEBI-registered Portfolio Management Services (PMS). Manage client sub-accounts seamlessly with automated asset allocation, master-child copying, and compliance-ready logging.
                </p>
                <ul className="text-xs text-white/50 space-y-2">
                  <li>• Custom percentage-based or multiplier trade copying</li>
                  <li>• Multi-broker allocations from a single master account</li>
                  <li>• Dynamic compliance controls (daily drawdown limits, asset-level ceilings)</li>
                </ul>
              </div>
              <div className="glass-card p-8 border-white/5">
                <h3 className="text-xl font-black text-white mb-4">Sub-Broker Setup</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  Empower your authorized sub-brokers with customized strategy dashboards. Offer algorithmic trading tools directly under your brand name while keeping full administrative control.
                </p>
                <ul className="text-xs text-white/50 space-y-2">
                  <li>• White-labeled client portals with custom domain hosting</li>
                  <li>• Tiered client dashboard permission controls</li>
                  <li>• Dedicated tech support and server maintenance SLA</li>
                </ul>
              </div>
            </section>

            {/* Testimonial Section */}
            <section className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 relative overflow-hidden">
              <div className="relative z-10 max-w-3xl">
                <p className="text-lg md:text-xl text-white/80 leading-relaxed italic mb-6">
                  "As a retail sub-broker, I white-labeled FoxPlayer's platform for 50+ clients. System uptime is consistent, and the developer support team resolved all broker token issues rapidly."
                </p>
                <div>
                  <h4 className="font-bold text-white">Mohit Mehta</h4>
                  <p className="text-xs text-primary uppercase font-bold tracking-widest mt-1">Financial Technology Partner, Coimbatore</p>
                </div>
              </div>
            </section>
          </div>
        )}

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
