"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { pricingPlans } from "@/lib/pricing";
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Globe, 
  Code2, 
  Layers, 
  Check, 
  Activity, 
  Play, 
  Star,
  Search,
  LineChart,
  SlidersHorizontal,
  ShieldAlert,
  PlayCircle,
  Cpu,
  MessageCircle
} from "lucide-react";

function MarketOverviewWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      showChart: false,
      locale: "en",
      isTransparent: true,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: "100%",
      height: "220",
      tabs: [
        {
          name: "Live Rates",
          symbols: [
            { s: "NSE:NIFTY", d: "NIFTY 50" },
            { s: "NSE:BANKNIFTY", d: "BANK NIFTY" },
            { s: "MCX:CRUDEOIL1!", d: "CRUDE OIL" },
            { s: "MCX:NATURALGAS1!", d: "NATURAL GAS" }
          ]
        }
      ]
    });
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div ref={containerRef} className="tradingview-widget-container w-full h-[220px]">
      <div className="tradingview-widget-container__widget w-full h-full"></div>
    </div>
  );
}

function MarketMoversWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (containerRef.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      exchange: "NSE",
      showChart: false,
      locale: "en",
      isTransparent: true,
      showSymbolLogo: true,
      width: "100%",
      height: "220"
    });
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div ref={containerRef} className="tradingview-widget-container w-full h-[220px]">
      <div className="tradingview-widget-container__widget w-full h-full"></div>
    </div>
  );
}

export default function HomeClient() {
  const [livePnl, setLivePnl] = useState(124530);

  // Initialize with correct rates so they render instantly on load
  const [marketData, setMarketData] = useState({
    rates: {
      nifty: { price: 23539.60, change: 0.45, dir: "up" },
      banknifty: { price: 51357.53, change: 0.62, dir: "up" },
      crudeoil: { price: 6862.21, change: 0.18, dir: "up" },
      naturalgas: { price: 211.53, change: -1.24, dir: "down" }
    },
    gainers: [
      { name: "RELIANCE", change: "+2.45%" },
      { name: "TCS", change: "+1.89%" }
    ],
    losers: [
      { name: "INFOSYS", change: "-1.76%" },
      { name: "HDFC BANK", change: "-1.24%" }
    ]
  });

  // Load live correct data from Yahoo Finance API endpoint instantly
  useEffect(() => {
    async function loadMarketData() {
      try {
        const res = await fetch("/api/market-data");
        const data = await res.json();
        if (data && data.rates) {
          setMarketData(data);
        }
      } catch (err) {
        console.error("Error loading market data:", err);
      }
    }
    loadMarketData();
    const interval = setInterval(loadMarketData, 10000);
    return () => clearInterval(interval);
  }, []);

  // Subtle live P&L tick effect for premium dashboard look
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePnl((prev) => prev + (Math.random() > 0.4 ? 120 : -80));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Testimonials list
  const testimonials = [
    {
      quote: "FoxPlayer's TradingView webhook bridge completely resolved my execution lag issues. My options strategy straddles fill instantly with minimal slippage. Highly recommended.",
      author: "Anirudh Sharma",
      role: "Proprietary Fund Trader, Bangalore",
      stars: 5
    },
    {
      quote: "I automated my custom Python strategy using FoxPlayer's SDK bridge. Order execution takes under 12 milliseconds. The security and encryption protocols give me peace of mind.",
      author: "Karthik Raja",
      role: "Independent Options Strategist, Chennai",
      stars: 5
    },
    {
      quote: "As a retail sub-broker, I white-labeled FoxPlayer's platform for 50+ clients. System uptime is consistent, and the developer support team resolved all broker token issues rapidly.",
      author: "Mohit Mehta",
      role: "Financial Technology Partner, Coimbatore",
      stars: 5
    }
  ];

  return (
    <main className="bg-background text-white min-h-screen">

      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative overflow-hidden border-b border-white/[0.06] grid-pattern pt-20 pb-28 md:pt-36 md:pb-40">
        {/* Subtle glow accents */}
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute -left-40 top-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Headline and CTAs */}
            <div className="lg:col-span-6">
              <motion.div 
                initial={{ opacity: 0, y: 24 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(0,212,255,0.1)]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Institutional Grade Algo Execution
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 24 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[2.6rem] sm:text-[3.5rem] md:text-[4.2rem] font-black leading-[1.05] tracking-tight mb-6"
              >
                Automate Your Trading.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">Trade Smarter.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 24 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mb-10 font-normal"
              >
                FoxPlayer connects your custom indicators, Python strategies, and Pine Scripts directly to India&apos;s top stock brokers. Real-time execution with less than 15ms order latency.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 24 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 mb-12"
              >
                <a href="https://app.foxplayer.co.in/login" className="w-full sm:w-auto">
                  <button className="btn-primary w-full gap-2 text-sm">
                    Start Trading <ArrowRight className="w-4 h-4" />
                  </button>
                </a>
                <a href="https://app.foxplayer.co.in" className="w-full sm:w-auto">
                  <button className="btn-secondary w-full gap-2 text-sm">
                    <Play className="w-4 h-4 fill-white text-white" /> Watch Demo
                  </button>
                </a>
              </motion.div>

              {/* Social Proof Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 24 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-8 text-xs text-slate-400 border-t border-white/[0.08] pt-8"
              >
                <div>
                  <div className="text-xl md:text-2xl font-black text-white mb-0.5 tracking-tight">₹1,500Cr+</div>
                  <div className="font-medium text-slate-500">Monthly Vol. Executed</div>
                </div>
                <div className="w-px h-8 bg-white/[0.08]" />
                <div>
                  <div className="text-xl md:text-2xl font-black text-white mb-0.5 tracking-tight">15,000+</div>
                  <div className="font-medium text-slate-500">Active Trading Strategies</div>
                </div>
                <div className="w-px h-8 bg-white/[0.08]" />
                <div>
                  <div className="text-xl md:text-2xl font-black text-white mb-0.5 tracking-tight">12ms</div>
                  <div className="font-medium text-slate-500">Avg. Response Latency</div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Live Trading Dashboard Simulation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }} 
              className="lg:col-span-6"
            >
              <div className="bg-[#0F172A]/70 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden backdrop-blur-md hover:border-primary/20 transition-all duration-500 relative group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
                
                {/* Simulated Header */}
                <div className="px-5 py-4 border-b border-white/[0.08] bg-black/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-300">FOXPLAYER CONSOLE v3.2</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1.5 font-mono">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    MARKETS LIVE
                  </span>
                </div>

                {/* Dashboard Code/Console Area */}
                <div className="min-h-[350px] flex flex-col justify-between font-mono bg-black/10 p-6">
                  <div className="flex flex-col lg:flex-row items-center gap-8 font-sans">
                    {/* Left: 3D Holographic Card Graphic */}
                    <div className="relative w-44 h-[240px] rounded-2xl bg-gradient-to-br from-primary/30 via-[#0F172A] to-secondary/30 border border-white/10 p-5 shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden group/card transition-all duration-500 hover:scale-[1.03] hover:rotate-3 hover:border-primary/40 shrink-0">
                      {/* Glows */}
                      <div className="absolute -top-10 -left-10 w-28 h-28 bg-primary/20 rounded-full blur-2xl group-hover/card:bg-primary/40 transition-colors" />
                      <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-secondary/20 rounded-full blur-2xl group-hover/card:bg-secondary/40 transition-colors" />
                      
                      {/* Header */}
                      <div className="flex justify-between items-start z-10">
                        <div>
                          <div className="text-[10px] text-primary font-bold tracking-widest uppercase">FoxPlayer</div>
                          <div className="text-[7px] text-slate-400 font-bold uppercase tracking-wider">Algo Pass v3.2</div>
                        </div>
                        <div className="w-7 h-7 rounded bg-white/5 border border-white/10 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-primary animate-pulse" />
                        </div>
                      </div>

                      {/* Chip / Signal */}
                      <div className="my-auto z-10 flex items-center justify-between">
                        <div className="w-10 h-7 rounded bg-gradient-to-r from-amber-400/80 to-yellow-500/80 opacity-80 border border-white/10 shadow-inner" />
                        <div className="flex gap-0.5">
                          <span className="w-1.5 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <span className="w-1.5 h-3 bg-primary/65 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          <span className="w-1.5 h-4 bg-primary/90 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                        </div>
                      </div>

                      {/* Key */}
                      <div className="z-10">
                        <div className="text-[9px] font-mono text-slate-400 tracking-wider">SECURE CONNECTED KEY</div>
                        <div className="text-[11px] font-mono font-bold text-white tracking-widest mt-0.5">FOX •••• •••• 9A2B</div>
                      </div>

                      {/* Grid overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:10px_10px]" />
                    </div>

                    {/* Right: Live Rates & Top Movers */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-xs">
                      {/* Live Rates */}
                      <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 flex flex-col justify-between">
                        <div className="text-xs uppercase text-slate-400 font-bold tracking-wider mb-4 border-b border-white/[0.04] pb-2 flex items-center justify-between">
                          <span>Live Rates</span>
                          <span className="flex items-center gap-1.5 font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                            <span className="text-[10px] text-emerald-400 font-bold">LIVE</span>
                          </span>
                        </div>
                        <div className="space-y-2">
                          {[
                            { id: "nifty", label: "NIFTY 50", price: marketData.rates.nifty.price, change: marketData.rates.nifty.change, dir: marketData.rates.nifty.dir },
                            { id: "banknifty", label: "BANK NIFTY", price: marketData.rates.banknifty.price, change: marketData.rates.banknifty.change, dir: marketData.rates.banknifty.dir },
                            { id: "crudeoil", label: "CRUDE OIL (MCX)", price: marketData.rates.crudeoil.price, change: marketData.rates.crudeoil.change, dir: marketData.rates.crudeoil.dir },
                            { id: "naturalgas", label: "NATURAL GAS (MCX)", price: marketData.rates.naturalgas.price, change: marketData.rates.naturalgas.change, dir: marketData.rates.naturalgas.dir },
                          ].map((item) => (
                            <div key={item.id} className="flex justify-between items-center bg-black/25 px-3 py-2 rounded-xl border border-white/[0.03]">
                              <span className="text-[11px] font-bold text-slate-400">{item.label}</span>
                              <span className={`text-[14px] sm:text-[16px] font-mono font-bold flex items-center gap-1 ${item.dir === "up" ? "text-emerald-400" : "text-rose-400"}`}>
                                ₹{item.price.toLocaleString("en-IN")}
                                <span className="text-xs">{item.dir === "up" ? "▲" : "▼"}</span>
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Gainers & Losers */}
                      <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 flex flex-col justify-between">
                        <div>
                          <div className="text-xs uppercase text-emerald-400 font-bold tracking-wider mb-2 border-b border-emerald-500/10 pb-2 flex items-center justify-between">
                            <span>Top 2 Gainers</span>
                            <span className="text-emerald-500/80 font-mono text-[10px]">▲ NSE</span>
                          </div>
                          <div className="space-y-1.5 mb-4">
                            {marketData.gainers.map((g, idx) => (
                              <div key={idx} className="flex justify-between text-[12px] sm:text-[13px]">
                                <span className="font-bold text-slate-300">{g.name}</span>
                                <span className="text-emerald-400 font-bold font-mono">{g.change}</span>
                              </div>
                            ))}
                          </div>

                          <div className="text-xs uppercase text-rose-400 font-bold tracking-wider mb-2 border-b border-rose-500/10 pb-2 flex items-center justify-between">
                            <span>Top 2 Losers</span>
                            <span className="text-rose-500/80 font-mono text-[10px]">▼ NSE</span>
                          </div>
                          <div className="space-y-1.5">
                            {marketData.losers.map((l, idx) => (
                              <div key={idx} className="flex justify-between text-[12px] sm:text-[13px]">
                                <span className="font-bold text-slate-300">{l.name}</span>
                                <span className="text-rose-400 font-bold font-mono">{l.change}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t border-white/[0.08] mt-6 flex items-center justify-between text-[10px] text-slate-500">
                    <span className="flex items-center gap-1.5 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      All systems operational
                    </span>
                    <span>Server region: Mumbai, India</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 2. FEATURES GRID SECTION ─── */}
      <section className="py-24 px-6 relative overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Algo Highlights</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">Built for Modern Algorithmic Trading</h2>
            <p className="text-base text-slate-400">Everything you need to automate your trade strategies, manage capital risk, and integrate multiple brokers in a single dashboard.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Code2 className="w-6 h-6 text-primary" />,
                title: "Algo Trading Software",
                desc: "Code customized execution strategies in Python or bridge third-party indicators directly to the live markets."
              },
              {
                icon: <Zap className="w-6 h-6 text-secondary" />,
                title: "Automated Execution",
                desc: "Instant order placement with under 15ms execution latency, ensuring minimal slippage on high-frequency entries."
              },
              {
                icon: <Shield className="w-6 h-6 text-primary" />,
                title: "Risk Management",
                desc: "Integrated capital preservation tools including automated trailing stop-losses, daily max drawdown limits, and circuit breakers."
              },
              {
                icon: <Activity className="w-6 h-6 text-secondary" />,
                title: "Real-Time Alerts",
                desc: "Receive instant notifications regarding order triggers, strategy transitions, and connection updates on Telegram, Discord, or WhatsApp."
              },
              {
                icon: <Globe className="w-6 h-6 text-primary" />,
                title: "Multi-Broker Support",
                desc: "Simultaneously execute strategies across Alice Blue, Shoonya, Angel One, Groww, and Zerodha Kite API integrations."
              },
              {
                icon: <Layers className="w-6 h-6 text-secondary" />,
                title: "Options Automation",
                desc: "Deploy advanced multi-leg derivative structures like straddles, iron condors, and spreads with auto-hedging rules."
              }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-surface border border-border rounded-2xl p-8 hover:border-primary/20 hover:shadow-[0_8px_30px_rgba(0,230,118,0.03)] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-border flex items-center justify-center mb-6 group-hover:border-primary/30 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. PERFORMANCE DASHBOARD PREVIEW ─── */}
      <section className="py-24 px-6 border-t border-border bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Stats and Info */}
            <div className="lg:col-span-5">
              <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-3">Live Performance Preview</p>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">Track Performance with Institutional Precision</h2>
              <p className="text-base text-slate-400 leading-relaxed mb-8">
                Monitor your cumulative performance metrics, verify your historical strategy win rate, and log execution metrics. Simple visualization built for retail and enterprise trading managers.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-[#0F172A]/50 border border-white/[0.08] shadow-[0_0_15px_rgba(0,212,255,0.02)] hover:border-primary/20 hover:shadow-[0_0_20px_rgba(0,212,255,0.06)] transition-all duration-300">
                  <div className="text-sm font-semibold text-slate-400 mb-1">Win Rate</div>
                  <div className="text-3xl font-extrabold text-primary">72.4%</div>
                  <div className="text-[10px] text-slate-500 mt-1">Based on 1,240 live orders</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#0F172A]/50 border border-white/[0.08] shadow-[0_0_15px_rgba(139,92,246,0.02)] hover:border-secondary/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.06)] transition-all duration-300">
                  <div className="text-sm font-semibold text-slate-400 mb-1">Profit Factor</div>
                  <div className="text-3xl font-extrabold text-secondary">2.14</div>
                  <div className="text-[10px] text-slate-500 mt-1">Gross profits vs losses</div>
                </div>
              </div>
            </div>

            {/* Right Column: Graphic P&L Cards & Equity Curve */}
            <div className="lg:col-span-7 bg-[#0F172A]/70 border border-white/[0.08] rounded-2xl p-6 shadow-2xl relative backdrop-blur-md">
              
              {/* Dashboard Preview Cards */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#050816]/60 border border-white/[0.06]">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Total P&L</div>
                  <div className="text-lg font-bold text-primary">
                    +₹{livePnl.toLocaleString("en-IN")}
                  </div>
                  <div className="text-[9px] text-slate-500 font-mono">Cumulative Gain</div>
                </div>
                <div className="p-4 rounded-xl bg-[#050816]/60 border border-white/[0.06]">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Today P&L</div>
                  <div className="text-lg font-bold text-primary">+₹18,450</div>
                  <div className="text-[9px] text-slate-500 font-mono">Real-time Ticks</div>
                </div>
                <div className="p-4 rounded-xl bg-[#050816]/60 border border-white/[0.06]">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Total ROI</div>
                  <div className="text-lg font-bold text-secondary">+34.8%</div>
                  <div className="text-[9px] text-slate-500 font-mono">Net Account ROI</div>
                </div>
              </div>

              {/* Dotted grid preview for equity curve */}
              <div className="relative rounded-xl border border-white/[0.08] bg-[#050816]/80 p-4 overflow-hidden mb-6">
                <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30" />
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4 font-mono">
                  <span>Equity Growth Curve</span>
                  <span className="text-primary">+₹34,812 (This Month)</span>
                </div>
                
                {/* SVG Equity Line Chart */}
                <svg className="w-full h-40 text-primary" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gradient-equity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Grid Guidelines */}
                  <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  {/* Equity Area fill */}
                  <path d="M 0 30 C 10 28, 20 22, 30 24 C 40 26, 50 18, 60 14 C 70 10, 80 5, 100 2 L 100 30 Z" fill="url(#gradient-equity)" />
                  {/* Equity Stroke path */}
                  <path d="M 0 30 C 10 28, 20 22, 30 24 C 40 26, 50 18, 60 14 C 70 10, 80 5, 100 2" fill="none" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Simulated Live Orders list */}
              <div className="space-y-3 font-mono text-[10px] text-slate-400">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 text-slate-500">
                  <span>ACTIVE STRATEGY ORDERS</span>
                  <span>STATUS</span>
                </div>
                {[
                  { time: "15:24:45", symbol: "NIFTY26JUN20500CE", qty: 100, profit: "+₹1,615", active: true },
                  { time: "15:22:12", symbol: "BANKNIFTY47500PE", qty: 45, profit: "+₹1,561", active: true },
                  { time: "15:20:01", symbol: "RELIANCE FUT", qty: 250, profit: "+₹3,075", active: false },
                ].map((trade, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-white/[0.06] last:border-0">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600">{trade.time}</span>
                      <span className="font-bold text-slate-200">{trade.symbol}</span>
                      <span className="text-slate-500">x{trade.qty}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-bold">{trade.profit}</span>
                      <span className={`px-2 py-0.5 rounded text-[8px] font-bold ${
                        trade.active 
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                          : "bg-white/5 text-slate-400 border border-white/[0.08]"
                      }`}>
                        {trade.active ? "ACTIVE" : "CLOSED"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. WHY CHOOSE FOXPLAYER ─── */}
      <section className="py-24 px-6 relative overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-3">Institutional Pillars</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">Optimized for Trading Excellence</h2>
            <p className="text-base text-slate-400">Why experienced retail developers and institutional fund managers partner with FoxPlayer for trade automation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Extreme Execution Speed",
                desc: "We route orders using dedicated bare-metal broker gateways, bringing down average execution latencies to under 15 milliseconds. Say goodbye to market slippage.",
                stat: "< 15ms"
              },
              {
                title: "Advanced Option Analytics",
                desc: "Deploy sophisticated multi-leg derivative models. Automatically calculate real-time Option Greeks (Delta, Theta, Gamma, Vega) and adjust position sizing dynamically.",
                stat: "Greeks Auto"
              },
              {
                title: "Enterprise Security Protocols",
                desc: "Rest easy with banking-grade SHA-256 local encryption. Your broker API credentials and strategy proprietary code logic are locked away and never shared.",
                stat: "AES-256"
              },
              {
                title: "Dedicated Technical Support",
                desc: "Receive professional customer support from real systematic developers. We troubleshoot API connection setups, custom SDK logic, and webhook parameters.",
                stat: "24/7 Devs"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#0F172A]/40 border border-white/[0.08] backdrop-blur-md rounded-2xl p-8 hover:border-secondary/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.05)] transition-all duration-300 flex justify-between items-start gap-8"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
                </div>
                <span className="text-xl font-mono font-bold text-secondary bg-secondary/10 border border-secondary/20 px-3 py-1.5 rounded-lg shrink-0">
                  {item.stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. STRATEGY DEVELOPMENT & OPTIMIZATION ─── */}
      <section className="py-24 px-6 border-t border-white/[0.06] bg-slate-900/40 relative overflow-hidden">
        {/* Decorative background gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -right-40 bottom-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Structured Quantitative Process</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">
              Algorithmic Trading Strategy Development & Optimization
            </h2>
            <p className="text-base text-slate-400">
              From Idea to Live Trading Automation. At Foxplayer, we don&apos;t rely on guesswork or unverified trading systems. Every strategy follows a structured quantitative development process designed to improve robustness, manage risk, and automate execution.
            </p>
          </div>

          {/* Development Framework Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {[
              {
                step: "01",
                title: "Strategy Research & Design",
                desc: "Transform trading concepts into rule-based strategies with clearly defined entry, exit, stop-loss, and risk management rules.",
                icon: <Search className="w-6 h-6 text-primary" />,
                keyword: "Algorithmic Trading Strategy Development"
              },
              {
                step: "02",
                title: "Historical Backtesting",
                desc: "Validate strategy performance using historical market data across different market conditions.",
                icon: <LineChart className="w-6 h-6 text-secondary" />,
                keyword: "Trading Strategy Backtesting"
              },
              {
                step: "03",
                title: "Strategy Optimization",
                desc: "Fine-tune parameters to identify robust configurations while avoiding overfitting.",
                icon: <SlidersHorizontal className="w-6 h-6 text-primary" />,
                keyword: "Strategy Optimization"
              },
              {
                step: "04",
                title: "Risk & Drawdown Analysis",
                desc: "Evaluate win rate, profit factor, maximum drawdown, risk-reward ratio, and overall strategy stability.",
                icon: <ShieldAlert className="w-6 h-6 text-secondary" />,
                keyword: "Quantitative Trading Solutions"
              },
              {
                step: "05",
                title: "Paper Trading Validation",
                desc: "Test strategies in live market conditions before deploying real capital to ensure execution logic parity.",
                icon: <PlayCircle className="w-6 h-6 text-primary" />,
                keyword: "Automated Trading Systems"
              },
              {
                step: "06",
                title: "Automated Live Deployment",
                desc: "Connect strategies directly to broker APIs for fully automated trade execution and monitoring.",
                icon: <Cpu className="w-6 h-6 text-secondary" />,
                keyword: "Live Trading Automation"
              }
            ].map((step, idx) => (
              <div 
                key={idx} 
                className="bg-[#0F172A]/50 border border-white/[0.08] rounded-2xl p-8 hover:border-primary/20 hover:shadow-[0_8px_30px_rgba(0,212,255,0.02)] transition-all group relative overflow-hidden"
              >
                <div className="absolute top-4 right-6 text-5xl font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors font-mono select-none">
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-black/45 border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-primary/30 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{step.desc}</p>
                <span className="text-[10px] uppercase tracking-wider text-slate-600 font-bold block font-sans">
                  {step.keyword}
                </span>
              </div>
            ))}
          </div>

          {/* Checklist Grid */}
          <div className="bg-[#0F172A]/30 border border-white/[0.08] rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[85px] rounded-full pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-3">Enterprise Standard</p>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Why Traders Choose Foxplayer</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  Our comprehensive suite of <span className="text-primary font-medium">Algorithmic Trading Software</span> simplifies the journey from concept to live trading. We deliver institutional-grade execution speed coupled with advanced <span className="text-secondary font-medium">Broker API Integration</span>.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Custom Strategy Development",
                  "Historical Backtesting & Reporting",
                  "Advanced Optimization Frameworks",
                  "Risk Management Integration",
                  "Broker API Automation",
                  "Live Trading Deployment"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-black/20 border border-white/[0.04] p-4 rounded-xl">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="text-sm font-medium text-slate-300 font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Actions (CTAs) */}
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 via-[#0F172A] to-secondary/10 border border-white/[0.08] rounded-3xl p-8 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.4)] relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-3xl" />
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 relative z-10 font-sans">Ready to Build Your Strategy?</h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed font-light mb-8 relative z-10 font-sans">
              Whether you have a trading idea or need a complete algorithmic trading solution, our team can help design, test, optimize, and deploy your strategy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a 
                href="https://wa.me/919983168522?text=Hello%20Foxplayer,%20I%20want%20to%20Book%20a%20Demo%20for%20Algorithmic%20Trading%20Strategy%20Development%20%26%20Optimization." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto"
              >
                <button className="btn-primary w-full gap-2 text-sm px-6 py-3.5">
                  <MessageCircle className="w-4 h-4 fill-black text-black" /> Book a Demo
                </button>
              </a>
              <a 
                href="https://wa.me/919983168522?text=Hello%20Foxplayer,%20I%20want%20to%20Talk%20to%20an%20Expert%20about%20Algorithmic%20Trading%20Strategy%20Development%20%26%20Optimization." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto"
              >
                <button className="btn-secondary w-full gap-2 text-sm px-6 py-3.5">
                  <MessageCircle className="w-4 h-4" /> Talk to an Expert
                </button>
              </a>
            </div>
            <div className="mt-4 text-[10px] text-slate-500 font-mono">
              WhatsApp Support: +91 99831 68522
            </div>
          </div>

        </div>
      </section>

      {/* ─── 6. TESTIMONIALS SECTION ─── */}
      <section className="py-24 px-6 border-t border-white/[0.06] bg-slate-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">User Feedback</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">Trusted by Professional Traders</h2>
            <p className="text-base text-slate-400">See how systematic traders in India utilize FoxPlayer to scale strategies and preserve discipline.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-[#0F172A]/40 border border-white/[0.08] backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between hover:border-primary/20 hover:shadow-[0_0_20px_rgba(0,212,255,0.04)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-6">
                    {[...Array(t.stars || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 italic leading-relaxed mb-8">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/[0.08] flex items-center justify-center text-xs font-bold text-slate-400">
                    {t.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.author}</div>
                    <div className="text-[11px] text-slate-500 font-semibold">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Write a Review Button Card */}
          <div className="mt-16 max-w-md mx-auto bg-[#0F172A]/40 border border-white/[0.08] backdrop-blur-md rounded-3xl p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-2xl rounded-full pointer-events-none" />
            <h3 className="text-xl font-bold text-white mb-3 font-sans">Share Your Experience</h3>
            <p className="text-xs text-slate-400 mb-6 font-sans leading-relaxed">
              We highly value your support. Click below to write a review directly on Google Reviews for FoxPlayer Algo Trading.
            </p>
            
            <a 
              href="https://g.page/r/CWpBuqnApuXzEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-primary text-black hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all items-center justify-center gap-2 active:scale-95"
            >
              Write a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* ─── 7. PRICING PLANS ─── */}
      <section className="py-24 px-6 border-t border-white/[0.06] bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-3">Transparent Plans</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Simple, predictable pricing</h2>
            <p className="text-base text-slate-400">Cancel or upgrade anytime. No hidden brokerage surcharges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.highlight 
                    ? "bg-[#0F172A]/70 border-2 border-primary/45 shadow-[0_0_30px_rgba(0,212,255,0.06)] relative md:scale-105 md:z-10 z-0 scale-100" 
                    : "bg-[#0F172A]/40 border border-white/[0.08]"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-[0_0_10px_rgba(0,212,255,0.3)]">
                    Recommended
                  </span>
                )}
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">{plan.desc}</p>
                  <div className="text-3xl font-extrabold text-white mb-8 border-none p-0 bg-transparent">
                    {plan.price}
                    {plan.period && <span className="text-sm font-medium text-slate-500">{plan.period}</span>}
                  </div>
                  
                  <div className="w-full h-px bg-white/[0.08] mb-8" />
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-slate-300 leading-relaxed font-light">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a href={plan.cta === "Contact Sales" ? "https://wa.me/919983168522?text=Hello,%20I%20am%20interested%20in%20the%20Institutional%20plan%20for%20FoxPlayer%20Algo%20Technologies." : "https://app.foxplayer.co.in/login"} className="block w-full">
                  <button className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    plan.highlight 
                      ? "bg-primary text-black hover:bg-primary/95 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]" 
                      : "bg-[#050816] text-slate-300 border border-white/[0.08] hover:bg-slate-900"
                  }`}>
                    {plan.cta}
                  </button>
                </a>
              </div>
            ))}
          </div>

          {/* Institutional White Label CTA Block */}
          <div className="mt-16 p-8 md:p-12 rounded-2xl bg-[#0F172A]/50 border border-white/[0.08] relative overflow-hidden group backdrop-blur-md">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Need a custom White-Label or copy trading bridge?</h3>
                <p className="text-sm text-slate-400 max-w-xl leading-relaxed font-light">We develop custom strategy APIs, multi-broker bridges, and high-frequency algorithms for SEBI-registered entities.</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
                <a href="tel:9983168522" className="w-full sm:w-auto text-center px-6 py-3 bg-secondary text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:opacity-95 transition-all">
                  Call Expert
                </a>
                <a href="mailto:raffiq_sr@yahoo.co.in" className="w-full sm:w-auto text-center px-6 py-3 bg-[#050816] text-slate-200 border border-white/[0.08] text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-slate-900 transition-all">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
