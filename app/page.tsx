"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, BarChart3, Globe, Code2, Users, Layers, Check, ArrowUpRight, TrendingUp, Clock, Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

export default function Home() {
  return (
    <main className="bg-background">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[140px] animate-pulse-slow" />
          <div className="absolute top-[40%] right-[10%] w-[30%] h-[40%] bg-accent/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-28 pb-24 md:pt-40 md:pb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-7">
              <motion.p initial="hidden" animate="visible" custom={0} variants={fadeUp} className="text-primary text-sm font-semibold mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Algorithmic Trading Infrastructure
              </motion.p>

              <motion.h1 initial="hidden" animate="visible" custom={1} variants={fadeUp} className="text-[2.8rem] md:text-[3.8rem] lg:text-[4.5rem] font-extrabold text-white leading-[1.05] tracking-tight mb-8">
                Stop guessing.<br />
                <span className="text-white/40">Start automating.</span>
              </motion.h1>

              <motion.p initial="hidden" animate="visible" custom={2} variants={fadeUp} className="text-[17px] text-white/45 leading-relaxed max-w-xl mb-10">
                Foxplayer Algo Technologies connects your broker, your strategy, and the Indian stock market into one seamless automated pipeline. No coding required to start.
              </motion.p>

              <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp} className="flex flex-wrap gap-4 mb-14">
                <Link href="/pricing">
                  <button className="group bg-white text-background text-sm font-semibold px-7 py-3.5 rounded-lg hover:bg-white/90 transition-all active:scale-[0.98] flex items-center gap-2">
                    Start Your Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </Link>
                <Link href="/blog">
                  <button className="text-sm font-medium text-white/50 hover:text-white px-7 py-3.5 rounded-lg border border-white/10 hover:border-white/20 transition-all">
                    Read the Academy
                  </button>
                </Link>
              </motion.div>

              {/* Social proof */}
              <motion.div initial="hidden" animate="visible" custom={4} variants={fadeUp} className="flex items-center gap-6 text-sm">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-white/10 to-white/5 border-2 border-background flex items-center justify-center text-[10px] text-white/40 font-bold">
                      {["MR", "SK", "AP", "RN"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-white/30 text-xs">Trusted by 600+ traders across India</p>
                </div>
              </motion.div>
            </div>

            {/* Right: Live Stats Panel */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="lg:col-span-5">
              <div className="bg-[#0A0A0A] border border-white/[0.06] rounded-2xl overflow-hidden">
                <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs font-medium text-white/40">Live Platform Status</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-400/10 px-2 py-0.5 rounded-full">All Systems Operational</span>
                </div>
                <div className="p-5 space-y-3">
                  {[
                    { label: "API Bridge Uptime", value: "99.97%", sub: "Last 90 days", color: "text-emerald-400" },
                    { label: "Avg. Order Latency", value: "0.02ms", sub: "p99 percentile", color: "text-primary" },
                    { label: "Active Strategies", value: "97", sub: "Running now", color: "text-secondary" },
                    { label: "Supported Brokers", value: "7", sub: "Indian exchanges", color: "text-amber-400" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between py-3 border-b border-white/[0.03] last:border-0">
                      <div>
                        <p className="text-sm text-white/50">{s.label}</p>
                        <p className="text-[11px] text-white/20">{s.sub}</p>
                      </div>
                      <span className={`text-lg font-bold ${s.color}`}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Broker Integration Section */}
      <section className="bg-[#080B14] border-y border-white/[0.03] py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="shrink-0">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Broker Integration</p>
              <p className="text-sm text-white/60 font-medium">4 Active | 3 Live Soon</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {["AliceBlue", "Angel One", "Shoonya", "Groww"].map((b) => (
                <span key={b} className="text-[15px] font-bold text-white transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {b}
                </span>
              ))}
              {["Upstox", "IIFL", "5Paisa"].map((b) => (
                <span key={b} className="text-[15px] font-bold text-white/20 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/10" /> {b} (Coming Soon)
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities Section */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">Platform Capabilities</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Built for every type of trader.
            </h2>
            <p className="text-base text-white/40 leading-relaxed">
              Whether you use TradingView, write Python, or just want to copy a proven strategy — we have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="md:col-span-4 bg-gradient-to-br from-primary/[0.07] to-transparent border border-primary/10 rounded-2xl p-8 md:p-10 group hover:border-primary/25 transition-colors">
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary"><Zap className="w-6 h-6" /></div>
                <ArrowUpRight className="w-5 h-5 text-white/10 group-hover:text-primary/40 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">TradingView Webhooks</h3>
              <p className="text-sm text-white/40 leading-relaxed max-w-md">Turn any Pine Script alert into a live trade. Paste our webhook URL into your TradingView alert — your strategy is live in 60 seconds. No coding needed.</p>
            </div>
            <div className="md:col-span-2 bg-[#0A0A0A] border border-white/[0.06] rounded-2xl p-8 group hover:border-secondary/20 transition-colors">
              <Code2 className="w-8 h-8 text-secondary mb-6" />
              <h3 className="text-lg font-bold text-white mb-2">Python SDK</h3>
              <p className="text-sm text-white/35 leading-relaxed">Build complex bots with our Python SDK. Access tick data, option Greeks, and multi-leg execution.</p>
            </div>
            <div className="md:col-span-2 bg-[#0A0A0A] border border-white/[0.06] rounded-2xl p-8 group hover:border-accent/20 transition-colors">
              <Users className="w-8 h-8 text-accent mb-6" />
              <h3 className="text-lg font-bold text-white mb-2">Copy Trading</h3>
              <p className="text-sm text-white/35 leading-relaxed">Browse verified strategies. Subscribe with one click and mirror trades in your own account.</p>
            </div>
            <div className="md:col-span-2 bg-[#0A0A0A] border border-white/[0.06] rounded-2xl p-8 group hover:border-amber-500/20 transition-colors">
              <Shield className="w-8 h-8 text-amber-400 mb-6" />
              <h3 className="text-lg font-bold text-white mb-2">Risk Engine</h3>
              <p className="text-sm text-white/35 leading-relaxed">Daily loss limits, max order caps, and auto-square off. Your capital stays protected.</p>
            </div>
            <div className="md:col-span-2 bg-[#0A0A0A] border border-white/[0.06] rounded-2xl p-8 group hover:border-pink-500/20 transition-colors">
              <Layers className="w-8 h-8 text-pink-400 mb-6" />
              <h3 className="text-lg font-bold text-white mb-2">Multi-Broker</h3>
              <p className="text-sm text-white/35 leading-relaxed">One dashboard for AliceBlue, Angel One, Shoonya, and 15+ more. Switch brokers in seconds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Library Section */}
      <section className="py-28 px-6 bg-[#06080F] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03),transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-emerald-400 mb-3 uppercase tracking-wider">Education & Strategies</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-5">Professional Trading Library</h2>
            <p className="text-base text-white/40 max-w-2xl mx-auto">Master the markets with our comprehensive collection of advanced strategies and institutional trading concepts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Short Straddle Strategy", type: "Options", desc: "A popular delta-neutral strategy involving selling both ATM call and put options of the same expiry.", slug: "short-straddle-strategy" },
              { name: "Iron Condor Strategy", type: "Options", desc: "A range-bound strategy with limited risk and limited profit, ideal for low volatility markets.", slug: "iron-condor-strategy" },
              { name: "Bull Call Spread", type: "Options", desc: "A bullish strategy using two call options to reduce the cost of the trade while capping maximum profit.", slug: "bull-call-spread" },
              { name: "Renko Candle Trading", type: "Candlesticks", desc: "Price-based charting that filters out noise and focuses solely on price movement trends.", slug: "renko-candle-trading" },
              { name: "Heikin Ashi Trading", type: "Candlesticks", desc: "A unique charting technique that averages price data to create a smoother, trend-focused view.", slug: "heikin-ashi-trading" },
              { name: "Price Action Trading", type: "Methodology", desc: "The art of making trading decisions based on raw price movement without lagging indicators.", slug: "price-action-trading" },
              { name: "Option Buying vs Selling", type: "Concepts", desc: "Understanding the probability of profit, theta decay, and capital requirements for both styles.", slug: "option-buying-vs-selling" },
              { name: "Scalping Strategy", type: "Methods", desc: "High-frequency trading method focusing on profiting from small price changes throughout the day.", slug: "scalping-strategy" },
              { name: "Swing Trading Strategy", type: "Methods", desc: "Identifying medium-term trends and holding positions for days or weeks to capture price 'swings'.", slug: "swing-trading-strategy" },
              { name: "Hedging in Trading", type: "Risk Management", desc: "Strategic use of instruments to offset potential losses and protect your overall portfolio capital.", slug: "hedging-in-trading" },
              { name: "Risk Management in Algo", type: "Automation", desc: "Implementing automated stops, position sizing, and exposure limits in algorithmic systems.", slug: "risk-management-in-algo" },
              { name: "What is Algo Trading", type: "Basics", desc: "An entry-level guide to understanding automated execution, APIs, and systematic trading rules.", slug: "what-is-algo-trading" },
              { name: "TradingView Automation", type: "Automation", desc: "How to use webhooks to bridge TradingView alerts directly to your broker for instant execution.", slug: "tradingview-automation" },
              { name: "Intraday Trading Basics", type: "Basics", desc: "Master the fundamental rules of day trading, including margin usage, liquid stocks, and timing.", slug: "intraday-trading-basics" },
              { name: "Futures vs Options", type: "Concepts", desc: "A deep dive into the structural differences, risks, and leverage of derivative instruments.", slug: "futures-vs-options" }
            ].map((strategy) => (
              <div key={strategy.name} className="group bg-[#0A0A0A] border border-white/[0.06] rounded-2xl p-6 hover:border-primary/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-md">{strategy.type}</span>
                    <Link href={`/academy/${strategy.slug}`}>
                      <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-primary transition-colors" />
                    </Link>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{strategy.name}</h3>
                  <p className="text-sm text-white/35 leading-relaxed mb-6">{strategy.desc}</p>
                </div>
                <Link href={`/academy/${strategy.slug}`} className="text-xs font-semibold text-white/50 group-hover:text-white flex items-center gap-1.5 transition-colors">
                  View Academy Guide <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-28 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-xs font-semibold text-accent mb-3 uppercase tracking-wider">Getting Started</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Live in three steps. <br className="hidden md:block" />No complexity.
              </h2>
              <p className="text-base text-white/40 leading-relaxed mb-10">
                You don't need a CS degree. If you can follow three steps, you can automate your trading with Foxplayer Algo Technologies.
              </p>
              <Link href="/blog/how-to-start-algo-trading-for-beginners">
                <button className="text-sm font-medium text-primary hover:text-white transition-colors flex items-center gap-2">
                  Read the full guide <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            <div className="space-y-6">
              {[
                { n: "01", title: "Connect your broker", desc: "Link your AliceBlue, Angel One, or any supported broker using your API keys. Takes 2 minutes.", border: "border-primary/20", text: "text-primary" },
                { n: "02", title: "Choose your strategy", desc: "Pick from the Marketplace, paste a TradingView webhook, or upload your own Python bot.", border: "border-secondary/20", text: "text-secondary" },
                { n: "03", title: "Go live", desc: "Paper trade first to validate. When ready, flip the switch to live execution. We handle the rest.", border: "border-accent/20", text: "text-accent" },
              ].map((step) => (
                <div key={step.n} className={`flex gap-6 p-6 rounded-xl border ${step.border} bg-white/[0.01] hover:bg-white/[0.03] transition-colors`}>
                  <span className={`text-3xl font-black ${step.text} shrink-0 w-12`}>{step.n}</span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-white/35 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-28 px-6 border-t border-white/5 bg-[#070A14] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.05),transparent_50%)]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-secondary mb-3 uppercase tracking-wider">Pricing</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Simple, transparent pricing.</h2>
            <p className="text-base text-white/35">No hidden fees. No surprises. Cancel anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: "Starter", price: "Free", desc: "For learning and paper trading.", features: ["1 Strategy", "Paper Trading", "Community Forum", "Basic Logs"], cta: "Start Free", highlight: false },
              { name: "Pro", price: "₹999/mo", desc: "For serious retail traders.", features: ["Unlimited Strategies", "Live Execution", "All 20+ Brokers", "Python SDK", "Priority Support"], cta: "Go Pro", highlight: true },
              { name: "Enterprise", price: "Custom", desc: "For sub-brokers and businesses.", features: ["White-Label Platform", "Dedicated Servers", "Custom API Development", "SLA Guarantee", "24/7 Phone Support"], cta: "Contact Sales", highlight: false },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-7 flex flex-col ${plan.highlight ? "bg-white/[0.04] border-2 border-primary/30 ring-1 ring-primary/10" : "bg-white/[0.02] border border-white/[0.06]"}`}>
                {plan.highlight && <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">Most Popular</span>}
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                <p className="text-xs text-white/30 mb-5">{plan.desc}</p>
                <div className="text-3xl font-extrabold text-white mb-6">{plan.price}</div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/45">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? "text-primary" : "text-white/20"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/pricing" className="block">
                  <button className={`w-full py-3 rounded-lg text-sm font-semibold transition-all active:scale-[0.98] ${plan.highlight ? "bg-primary text-background hover:bg-primary/90" : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"}`}>
                    {plan.cta}
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* White Label CTA */}
          <div className="mt-16 p-10 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-white/5 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-3">Need White Label or Custom Trading Software?</h3>
              <p className="text-white/40 mb-8 max-w-2xl mx-auto">We specialize in building institutional-grade custom trading solutions, multi-broker bridges, and automated strategy execution engines tailored to your specific requirements.</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <a href="tel:9983168522" className="text-2xl font-black text-primary hover:scale-105 transition-transform flex items-center gap-3">
                  <span className="text-white/20 text-sm font-medium">Call:</span> +91 9983168522
                </a>
                <a href="mailto:raffiq_sr@yahoo.co.in" className="text-2xl font-black text-primary hover:scale-105 transition-transform flex items-center gap-3">
                  <span className="text-white/20 text-sm font-medium">Email:</span> raffiq_sr@yahoo.co.in
                </a>
              </div>
              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Available for consultation 10 AM - 6 PM IST</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SUPPORT SECTION ─── */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#05070A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Need help?</h2>
              <p className="text-lg text-white/40 max-w-md">Contact FoxPlayer support anytime. We usually respond within 2 hours during market sessions.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/919983168522" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:scale-105 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp Support
              </a>
              <a href="mailto:raffiq_sr@yahoo.co.in" className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                raffiq_sr@yahoo.co.in
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-28 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ready to automate?
          </h2>
          <p className="text-base text-white/40 mb-10 leading-relaxed">
            Join thousands of Indian traders who have moved from manual screens to automated execution with Foxplayer Algo Technologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pricing">
              <button className="group bg-white text-background text-sm font-semibold px-8 py-3.5 rounded-lg hover:bg-white/90 transition-all active:scale-[0.98] flex items-center gap-2 justify-center">
                Start Your Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>
            <Link href="/blog">
              <button className="text-sm font-medium text-white/50 hover:text-white px-8 py-3.5 rounded-lg border border-white/10 hover:border-white/20 transition-all">
                Explore Academy
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
