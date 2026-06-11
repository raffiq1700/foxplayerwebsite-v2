"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  Star
} from "lucide-react";


export default function HomeClient() {
  const [activeTab, setActiveTab] = useState("webhooks");
  const [livePnl, setLivePnl] = useState(124530);

  // Subtle live P&L tick effect for premium dashboard look
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePnl((prev) => prev + (Math.random() > 0.4 ? 120 : -80));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-background text-white min-h-screen">

      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative overflow-hidden border-b border-border grid-pattern pt-20 pb-28 md:pt-36 md:pb-40">
        {/* Subtle glow accents */}
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-secondary/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Headline and CTAs */}
            <div className="lg:col-span-6">
              <motion.div 
                initial={{ opacity: 0, y: 24 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Institutional Grade Execution Engine
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 24 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[2.6rem] sm:text-[3.5rem] md:text-[4rem] font-extrabold leading-[1.1] tracking-tight mb-6"
              >
                Automate Your Trading.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">Trade Smarter.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 24 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mb-10"
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
                <a href="#demo" className="w-full sm:w-auto">
                  <button className="btn-secondary w-full gap-2 text-sm border-white/10 hover:border-white/20">
                    <Play className="w-4 h-4 fill-white text-white" /> Watch Demo
                  </button>
                </a>
              </motion.div>

              {/* Social Proof Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 24 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-8 text-xs text-slate-400 border-t border-border pt-8"
              >
                <div>
                  <div className="text-xl font-bold text-white mb-0.5">₹1,500Cr+</div>
                  <div>Monthly Vol. Executed</div>
                </div>
                <div className="w-px h-8 bg-border" />
                <div>
                  <div className="text-xl font-bold text-white mb-0.5">15,000+</div>
                  <div>Active Trading Strategies</div>
                </div>
                <div className="w-px h-8 bg-border" />
                <div>
                  <div className="text-xl font-bold text-white mb-0.5">12ms</div>
                  <div>Avg. Response Latency</div>
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
              <div className="bg-surface border border-border shadow-2xl rounded-2xl overflow-hidden backdrop-blur-md">
                {/* Simulated Header */}
                <div className="px-5 py-4 border-b border-border bg-black/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">FOXPLAYER CONSOLE v3.2</span>
                  </div>
                  <div className="flex bg-black/20 p-1 rounded-lg border border-border/50">
                    {["webhooks", "console", "brokers"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-[10px] font-bold px-3 py-1.5 rounded-md transition-all capitalize ${
                          activeTab === tab 
                            ? "bg-surface text-primary shadow-sm" 
                            : "text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        {tab === "webhooks" ? "JSON Webhook" : tab === "console" ? "Execution Log" : "Brokers"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dashboard Code/Console Area */}
                <div className="p-6 min-h-[300px] flex flex-col justify-between font-mono bg-black/5">
                  {activeTab === "webhooks" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-border pb-2">
                        <span>POST https://api.foxplayer.co.in/webhook</span>
                        <span>JWT Authenticated</span>
                      </div>
                      <pre className="text-xs text-slate-300 leading-relaxed overflow-x-auto">
{`{
  "secret_token": "fox_live_9a2b8e",
  "ticker": "NIFTY26JUN20500CE",
  "action": "BUY",
  "quantity": 50,
  "order_type": "MARKET",
  "strategy": "OptionsBreakout_V4",
  "payload": {
    "indicator": "SuperTrend_Buy",
    "price": 182.45
  }
}`}
                      </pre>
                    </div>
                  )}

                  {activeTab === "console" && (
                    <div className="space-y-3 text-[11px]">
                      <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-border pb-2">
                        <span>Terminal Log Stream</span>
                        <span className="text-primary animate-pulse">● Live</span>
                      </div>
                      <div className="space-y-1.5 text-slate-400 leading-relaxed font-semibold">
                        <p><span className="text-slate-600">[15:20:01]</span> <span className="text-primary">INFO</span> TV Webhook Alert received for NIFTY</p>
                        <p><span className="text-slate-600">[15:20:01]</span> <span className="text-secondary">AUTH</span> Decoded claims: client_id=&quot;FOX_902&quot;</p>
                        <p><span className="text-slate-600">[15:20:01]</span> <span className="text-primary">INFO</span> Order validation passed. Margin: OK</p>
                        <p><span className="text-slate-600">[15:20:01]</span> <span className="text-primary">INFO</span> Routing BUY order to Shoonya API...</p>
                        <p><span className="text-slate-600">[15:20:02]</span> <span className="text-primary font-bold">SUCCESS</span> Executed. ID: 260610001842 [11ms]</p>
                        <p><span className="text-slate-600">[15:20:02]</span> <span className="text-secondary">NOTIFY</span> Discord notification dispatched</p>
                      </div>
                    </div>
                  )}

                  {activeTab === "brokers" && (
                    <div className="space-y-3 font-sans">
                      <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-border pb-2 font-mono">
                        <span>Connected Broker Keys</span>
                        <span>API Ping Latency</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        {[
                          { name: "Alice Blue", connected: true, latency: "8ms" },
                          { name: "Shoonya", connected: true, latency: "12ms" },
                          { name: "Angel One", connected: true, latency: "15ms" },
                          { name: "Zerodha", connected: true, latency: "10ms" },
                        ].map((broker) => (
                          <div key={broker.name} className="flex items-center justify-between p-3 rounded-xl border border-border bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                            <span className="text-xs font-bold text-slate-200">{broker.name}</span>
                            <span className="text-[10px] font-mono text-primary font-bold bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                              {broker.latency}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="border-t border-border pt-4 mt-6 flex items-center justify-between text-[10px] text-slate-500">
                    <span className="flex items-center gap-1.5 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
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
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Engine Highlights</p>
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
                <div className="p-5 rounded-2xl bg-surface border border-border">
                  <div className="text-sm font-semibold text-slate-400 mb-1">Win Rate</div>
                  <div className="text-3xl font-extrabold text-primary">72.4%</div>
                  <div className="text-[10px] text-slate-500 mt-1">Based on 1,240 live orders</div>
                </div>
                <div className="p-5 rounded-2xl bg-surface border border-border">
                  <div className="text-sm font-semibold text-slate-400 mb-1">Profit Factor</div>
                  <div className="text-3xl font-extrabold text-secondary">2.14</div>
                  <div className="text-[10px] text-slate-500 mt-1">Gross profits vs losses</div>
                </div>
              </div>
            </div>

            {/* Right Column: Graphic P&L Cards & Equity Curve */}
            <div className="lg:col-span-7 bg-surface border border-border rounded-2xl p-6 shadow-2xl relative">
              
              {/* Dashboard Preview Cards */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-900 border border-border">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Total P&L</div>
                  <div className="text-lg font-bold text-primary">
                    +₹{livePnl.toLocaleString("en-IN")}
                  </div>
                  <div className="text-[9px] text-slate-500 font-mono">Cumulative Gain</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-border">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Today P&L</div>
                  <div className="text-lg font-bold text-primary">+₹18,450</div>
                  <div className="text-[9px] text-slate-500 font-mono">Real-time Ticks</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-border">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Total ROI</div>
                  <div className="text-lg font-bold text-secondary">+34.8%</div>
                  <div className="text-[9px] text-slate-500 font-mono">Net Account ROI</div>
                </div>
              </div>

              {/* Dotted grid preview for equity curve */}
              <div className="relative rounded-xl border border-border bg-slate-900 p-4 overflow-hidden mb-6">
                <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30" />
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4 font-mono">
                  <span>Equity Growth Curve</span>
                  <span className="text-primary">+₹34,812 (This Month)</span>
                </div>
                
                {/* SVG Equity Line Chart */}
                <svg className="w-full h-40 text-primary" viewBox="0 0 100 30" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="gradient-equity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00E676" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#00E676" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Grid Guidelines */}
                  <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  {/* Equity Area fill */}
                  <path d="M 0 30 C 10 28, 20 22, 30 24 C 40 26, 50 18, 60 14 C 70 10, 80 5, 100 2 L 100 30 Z" fill="url(#gradient-equity)" />
                  {/* Equity Stroke path */}
                  <path d="M 0 30 C 10 28, 20 22, 30 24 C 40 26, 50 18, 60 14 C 70 10, 80 5, 100 2" fill="none" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Simulated Live Orders list */}
              <div className="space-y-3 font-mono text-[10px] text-slate-400">
                <div className="flex items-center justify-between border-b border-border pb-2 text-slate-500">
                  <span>ACTIVE STRATEGY ORDERS</span>
                  <span>STATUS</span>
                </div>
                {[
                  { time: "15:24:45", symbol: "NIFTY26JUN20500CE", qty: 100, profit: "+₹1,615", active: true },
                  { time: "15:22:12", symbol: "BANKNIFTY47500PE", qty: 45, profit: "+₹1,561", active: true },
                  { time: "15:20:01", symbol: "RELIANCE FUT", qty: 250, profit: "+₹3,075", active: false },
                ].map((trade, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-border/40 last:border-0">
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
                          : "bg-white/5 text-slate-400 border border-border"
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
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">Engineered for Trading Excellence</h2>
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
                className="bg-surface border border-border rounded-2xl p-8 hover:border-secondary/20 transition-all flex justify-between items-start gap-8"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
                <span className="text-xl font-mono font-bold text-secondary bg-secondary/10 border border-secondary/20 px-3 py-1.5 rounded-lg shrink-0">
                  {item.stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. TESTIMONIALS SECTION ─── */}
      <section className="py-24 px-6 border-t border-border bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">User Feedback</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5">Trusted by Professional Traders</h2>
            <p className="text-base text-slate-400">See how systematic traders in India utilize FoxPlayer to scale strategies and preserve discipline.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "FoxPlayer's TradingView webhook bridge completely resolved my execution lag issues. My options strategy straddles fill instantly with minimal slippage. Highly recommended.",
                author: "Anirudh Sharma",
                role: "Proprietary Fund Trader, Bangalore"
              },
              {
                quote: "I automated my custom Python strategy using FoxPlayer's SDK bridge. Order execution takes under 12 milliseconds. The security and encryption protocols give me peace of mind.",
                author: "Karthik Raja",
                role: "Independent Options Strategist, Chennai"
              },
              {
                quote: "As a retail sub-broker, I white-labeled FoxPlayer's platform for 50+ clients. System uptime is consistent, and the developer support team resolved all broker token issues rapidly.",
                author: "Mohit Mehta",
                role: "Financial Technology Partner, Coimbatore"
              }
            ].map((t, idx) => (
              <div 
                key={idx} 
                className="bg-surface border border-border rounded-2xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 italic leading-relaxed mb-8">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-border flex items-center justify-center text-xs font-bold text-slate-400">
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
        </div>
      </section>

      {/* ─── 6. PRICING PLANS ─── */}
      <section className="py-24 px-6 border-t border-border bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-3">Transparent Plans</p>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Simple, predictable pricing</h2>
            <p className="text-base text-slate-400">Cancel or upgrade anytime. No hidden brokerage surcharges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                name: "Retail Basic", 
                price: "Free", 
                desc: "Perfect for testing and system configurations.", 
                features: [
                  "1 Active Strategy", 
                  "Paper Trading Simulator", 
                  "All supported Indian brokers", 
                  "Basic Discord alerts"
                ], 
                cta: "Get Started", 
                highlight: false 
              },
              { 
                name: "Professional", 
                price: "₹1,999/mo", 
                desc: "Our most popular tier for active retail traders.", 
                features: [
                  "5 Active Strategies", 
                  "Live Broker Execution", 
                  "Unlimited TradingView Webhooks", 
                  "Option Greeks Auto-hedges", 
                  "Priority WhatsApp Support"
                ], 
                cta: "Start Free Trial", 
                highlight: true 
              },
              { 
                name: "Enterprise Custom", 
                price: "Custom", 
                desc: "Built for sub-brokers and PMS firms.", 
                features: [
                  "Unlimited active strategies", 
                  "White-label brand layouts", 
                  "Dedicated bare-metal servers", 
                  "Multi-client copy trading bridge", 
                  "24/7 dedicated support desk"
                ], 
                cta: "Contact Sales", 
                highlight: false 
              },
            ].map((plan, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all ${
                  plan.highlight 
                    ? "bg-surface border-2 border-primary/40 shadow-2xl relative" 
                    : "bg-surface border border-border"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute top-0 right-6 -translate-y-1/2 bg-primary text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    Recommended
                  </span>
                )}
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{plan.desc}</p>
                  <div className="text-3xl font-extrabold text-white mb-8">{plan.price}</div>
                  
                  <div className="w-full h-px bg-border mb-8" />
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-slate-300 leading-relaxed">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a href="https://app.foxplayer.co.in/login" className="block w-full">
                  <button className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    plan.highlight 
                      ? "bg-primary text-black hover:bg-primary/90 hover:shadow-[0_4px_15px_rgba(0,230,118,0.25)]" 
                      : "bg-slate-900 text-slate-300 border border-border hover:bg-slate-800"
                  }`}>
                    {plan.cta}
                  </button>
                </a>
              </div>
            ))}
          </div>

          {/* Institutional White Label CTA Block */}
          <div className="mt-16 p-8 md:p-12 rounded-2xl bg-surface border border-border relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Need a custom White-Label or copy trading bridge?</h3>
                <p className="text-sm text-slate-400 max-w-xl leading-relaxed">We develop custom strategy APIs, multi-broker bridges, and high-frequency algorithms for SEBI-registered entities.</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
                <a href="tel:9983168522" className="w-full sm:w-auto text-center px-6 py-3 bg-secondary text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-secondary/90 transition-all">
                  Call Expert
                </a>
                <a href="mailto:raffiq_sr@yahoo.co.in" className="w-full sm:w-auto text-center px-6 py-3 bg-slate-900 text-slate-200 border border-border text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-slate-800 transition-all">
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
