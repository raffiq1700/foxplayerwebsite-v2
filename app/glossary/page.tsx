"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BookOpen, ArrowRight, ArrowLeft, Layers, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";

interface GlossaryTerm {
  term: string;
  category: "algo" | "strategies" | "demat";
  definition: string;
  keywords: string[];
}

const glossaryTerms: GlossaryTerm[] = [
  // --- ALGO TRADING GROUP ---
  {
    term: "Algo Trading",
    category: "algo",
    definition: "Algorithmic trading (or systematic trading) involves using pre-programmed rules and mathematical models to execute trades automatically based on variables like price, time, volume, and indicators.",
    keywords: ["algo trading", "algorithmic trading"]
  },
  {
    term: "Algo Trading Software",
    category: "algo",
    definition: "Specialized applications and APIs (like FoxPlayer SDK) designed to connect your strategy algorithms directly to your stockbroker for high-speed execution.",
    keywords: ["algo trading software", "automated trading software"]
  },
  {
    term: "Automated Trading",
    category: "algo",
    definition: "A execution methodology where buy and sell orders are automatically sent to the exchange by a machine, removing human latency and emotional bias.",
    keywords: ["automated trading", "automated trading platform"]
  },
  {
    term: "AI Trading Software",
    category: "algo",
    definition: "Next-generation trading platforms integrated with machine learning models and neural networks that analyze market data and adapt strategy parameters dynamically.",
    keywords: ["AI trading software", "automated trading bot"]
  },
  {
    term: "Copy Trading Software",
    category: "algo",
    definition: "A secure bridge that duplicates the trades of a master investor or quantitative strategy model directly into your own broker account in real-time.",
    keywords: ["copy trading software"]
  },
  {
    term: "Options Trading Automation",
    category: "algo",
    definition: "Automating the execution, adjustment, and hedging of complex multi-leg option spreads (such as straddles or iron condors) based on real-time Option Greeks.",
    keywords: ["options trading automation", "trading strategy automation"]
  },

  // --- TRADING STRATEGIES GROUP ---
  {
    term: "Algo Trading Strategy",
    category: "strategies",
    definition: "A set of strict mathematical and technical rules governing entries, exits, position sizing, and risk parameters to be executed by automation systems.",
    keywords: ["algo trading strategy", "strategy automation"]
  },
  {
    term: "Opening Range Breakout (ORB) Strategy",
    category: "strategies",
    definition: "A high-momentum day trading strategy that places orders based on breakouts above or below the high/low of the first 5, 15, or 30 minutes of the market session.",
    keywords: ["ORB trading strategy", "breakout trading strategy"]
  },
  {
    term: "Central Pivot Range (CPR) Strategy",
    category: "strategies",
    definition: "A technical analysis strategy using 3 central pivot levels to determine whether the day will be trending (narrow range) or sideways (wide range).",
    keywords: ["CPR trading strategy"]
  },
  {
    term: "Exponential Moving Average (EMA) Strategy",
    category: "strategies",
    definition: "A trend-following system that generates signals based on moving average crossovers (e.g. 9 EMA and 20 EMA) to enter long or short positions.",
    keywords: ["EMA trading strategy"]
  },
  {
    term: "Average True Range (ATR) Strategy",
    category: "strategies",
    definition: "A volatility-based strategy that utilizes the ATR indicator to set dynamic, trailing stop-losses adjusted for current market swings.",
    keywords: ["ATR trading strategy"]
  },
  {
    term: "Smart Money Concepts (SMC) Strategy",
    category: "strategies",
    definition: "An institutional price-action strategy focused on tracking banks and market makers by identifying Order Blocks, Change of Character (CHoCH), and Liquidity Pools.",
    keywords: ["SMC trading strategy"]
  },
  {
    term: "Inner Circle Trader (ICT) Strategy",
    category: "strategies",
    definition: "A proprietary pricing model focusing on liquidity sweeps, premium/discount zones, and trading during specific timeframes called institutional Kill Zones.",
    keywords: ["ICT trading strategy"]
  },
  {
    term: "Core Range Trading (CRT) Strategy",
    category: "strategies",
    definition: "A mean-reversion strategy that trades buy and sell signals close to range support and resistance boundaries before a breakout is confirmed.",
    keywords: ["CRT trading strategy"]
  },
  {
    term: "Trading Strategy Builder",
    category: "strategies",
    definition: "A software application (such as TradingView Pine Editor or FoxPlayer Console) that allows you to draft, visualize, and configure your trading rules.",
    keywords: ["trading strategy builder"]
  },
  {
    term: "Trading Strategy Backtesting",
    category: "strategies",
    definition: "Testing your systematic rules against historical tick and bar data to measure key statistics like win rate, profit factor, and maximum drawdown.",
    keywords: ["trading strategy backtesting"]
  },
  {
    term: "Day Trading Strategy",
    category: "strategies",
    definition: "A systematic approach to buying and selling assets where all open trades are closed out before the market closes to avoid overnight gap risk.",
    keywords: ["day trading strategy"]
  },
  {
    term: "Swing Trading Strategy",
    category: "strategies",
    definition: "A positional strategy that aims to capture short to medium-term price swings over a duration of several days to a few weeks.",
    keywords: ["swing trading strategy"]
  },

  // --- DEMAT ACCOUNT GROUP ---
  {
    term: "Demat Account",
    category: "demat",
    definition: "A digital repository (dematerialized vault) managed by NSDL/CDSL in India that holds your equities, mutual funds, and bonds electronically.",
    keywords: ["demat account", "demat account benefits"]
  },
  {
    term: "Best Demat Account in India",
    category: "demat",
    definition: "The selection of SEBI-registered brokers offering stable API access, low brokerage, and advanced execution channels for retail traders.",
    keywords: ["best demat account", "best demat account in india"]
  },
  {
    term: "How to Open Demat Account",
    category: "demat",
    definition: "The 100% paperless e-KYC process involving Aadhaar OTP, PAN details, bank proof, and digital signature verification to set up a new trading vault.",
    keywords: ["how to open demat account"]
  },
  {
    term: "Demat Account Charges",
    category: "demat",
    definition: "The financial costs of managing a demat account, including one-time Account Opening fees, Annual Maintenance Charges (AMC), and depository debit fees.",
    keywords: ["demat account charges"]
  },
  {
    term: "Discount Demat Accounts (Zerodha, Angel One, Groww, Dhan)",
    category: "demat",
    definition: "Tech-focused brokers providing low-cost trading, flat transaction fees (₹20), and stable developer API interfaces preferred for algo automation.",
    keywords: ["zerodha demat account", "angel one demat account", "groww demat account", "dhan demat account"]
  },
  {
    term: "Traditional Bank Demat Accounts (HDFC, ICICI, SBI)",
    category: "demat",
    definition: "3-in-1 account options offered by major banks. They provide the safety of established banking brands but typically carry higher transactional brokerage fees.",
    keywords: ["hdfc demat account", "icici demat account", "sbi demat account"]
  },
  {
    term: "Trading vs Demat Account",
    category: "demat",
    definition: "Understanding that the trading account is the vehicle used to transact (buy/sell) securities, while the demat account is the digital locker where those shares are held.",
    keywords: ["difference between trading and demat account"]
  }
];

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "algo" | "strategies" | "demat">("all");

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesCategory = activeCategory === "all" || term.category === activeCategory;
    const matchesSearch =
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.keywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Schema LD
  const glossaryLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "FoxPlayer Systematic Trading Glossary",
    "description": "Comprehensive knowledge base and educational glossary for algo trading, trading strategies, and demat accounts in India.",
    "hasDefinedTerm": glossaryTerms.map((t) => ({
      "@type": "DefinedTerm",
      "name": t.term,
      "description": t.definition
    }))
  };

  return (
    <main className="min-h-screen pt-40 pb-24 bg-background relative overflow-hidden text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossaryLd) }}
      />

      {/* Ambient glows */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -left-40 top-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Back Link */}
        <Link href="/academy" className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Academy
        </Link>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-4 inline-block">
              Knowledge Base
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-6">
              Systematic <span className="text-primary">Glossary.</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed font-light">
              Your comprehensive guide to algorithmic concepts, trading strategy terms, and demat account structures in India.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-96 group">
            <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center bg-[#0F172A]/70 border border-white/[0.08] rounded-2xl px-5 py-4 focus-within:border-primary/50 transition-all">
              <Search className="w-5 h-5 text-white/30 mr-4" />
              <input
                type="text"
                placeholder="Search glossary terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-white text-sm w-full font-medium placeholder:text-white/20"
              />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-16">
          {[
            { id: "all", label: "All Terms" },
            { id: "algo", label: "Algo Trading" },
            { id: "strategies", label: "Trading Strategies" },
            { id: "demat", label: "Demat Accounts" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as typeof activeCategory)}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-black shadow-lg shadow-primary/20"
                  : "bg-[#0F172A]/40 text-white/40 border border-white/[0.08] hover:bg-[#0F172A]/80 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Semantic Keyword Clusters Visualization */}
        <div className="mb-20 p-8 md:p-12 bg-white/[0.01] border border-white/[0.06] rounded-[2rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
          <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
            <Cpu className="w-5 h-5 text-primary" /> Systematic Trading Ecosystem
          </h2>
          <p className="text-sm text-white/50 leading-relaxed mb-8 font-light">
            In modern systematic trading, these concepts operate in clusters. A trading system relies on an **algo trading strategy** validated via **backtesting**, linked to an **automated trading platform**, and routed directly into your **demat account**.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:border-secondary/20 transition-all">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">1. Set Up Storage & APIs</span>
              <h3 className="text-base font-bold text-white mb-3">Demat & API Configuration</h3>
              <p className="text-xs text-white/40 leading-relaxed mb-4">
                Open the **best demat account in India** (e.g. Zerodha, Angel One, Groww, or Dhan) and enable trade execution APIs to securely link your automated bots.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-white/5 rounded text-[9px] text-white/60">Demat Account</span>
                <span className="px-2 py-0.5 bg-white/5 rounded text-[9px] text-white/60">Broker APIs</span>
                <span className="px-2 py-0.5 bg-white/5 rounded text-[9px] text-white/60">e-KYC Setup</span>
              </div>
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:border-primary/20 transition-all">
              <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">2. Strategy Engineering</span>
              <h3 className="text-base font-bold text-white mb-3">Model Validation</h3>
              <p className="text-xs text-white/40 leading-relaxed mb-4">
                Draft rules using a **trading strategy builder** and confirm historical performance metrics (drawdown and win rate) via **strategy backtesting**.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-white/5 rounded text-[9px] text-white/60">ORB / CPR / EMA</span>
                <span className="px-2 py-0.5 bg-white/5 rounded text-[9px] text-white/60">Backtesting Software</span>
                <span className="px-2 py-0.5 bg-white/5 rounded text-[9px] text-white/60">SMC / ICT</span>
              </div>
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:border-secondary/20 transition-all">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">3. Automated Execution</span>
              <h3 className="text-base font-bold text-white mb-3">System Automation</h3>
              <p className="text-xs text-white/40 leading-relaxed mb-4">
                Bridge signals via secure webhooks using a robust **automated trading platform** supporting advanced multi-leg **options trading automation**.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 bg-white/5 rounded text-[9px] text-white/60">Automated Bot</span>
                <span className="px-2 py-0.5 bg-white/5 rounded text-[9px] text-white/60">Copy Trading</span>
                <span className="px-2 py-0.5 bg-white/5 rounded text-[9px] text-white/60">Webhook Bridge</span>
              </div>
            </div>
          </div>
        </div>

        {/* Glossary Terms List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredTerms.map((term) => (
              <motion.div
                layout
                key={term.term}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0F172A]/40 border border-white/[0.08] rounded-2xl p-6 hover:border-primary/20 hover:shadow-[0_8px_30px_rgba(0,212,255,0.02)] transition-all group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 rounded-full ${
                    term.category === "algo" ? "bg-primary" : term.category === "strategies" ? "bg-secondary" : "bg-emerald-400"
                  }`} />
                  <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">
                    {term.category === "algo" ? "Algo Trading" : term.category === "strategies" ? "Trading Strategies" : "Demat Accounts"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">{term.term}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-light">{term.definition}</p>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredTerms.length === 0 && (
            <div className="col-span-full py-16 text-center text-white/40">
              No matching terms found. Try refining your search query.
            </div>
          )}
        </div>

        {/* Call to Actions / Guides linking */}
        <section className="pt-16 border-t border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Explore Our Educational Guides</h2>
            <p className="text-sm text-white/40 font-light">Read our deep-dives to understand how these systematic trading tools are deployed in live Indian markets.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/blog/algo-trading-automated-software-india" className="p-8 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-primary/30 hover:bg-white/[0.02] transition-all group flex flex-col justify-between h-56">
              <div>
                <BookOpen className="w-6 h-6 text-primary mb-4" />
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary transition-colors">Algo & Automation Guide</h3>
                <p className="text-xs text-white/40 leading-relaxed font-light">How automated platforms and execution bots operate in the Indian stock exchange.</p>
              </div>
              <span className="text-xs font-bold text-primary flex items-center gap-1 mt-4">Read Article <ArrowRight className="w-4 h-4" /></span>
            </Link>

            <Link href="/blog/ultimate-trading-strategies-automation-guide" className="p-8 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-primary/30 hover:bg-white/[0.02] transition-all group flex flex-col justify-between h-56">
              <div>
                <Layers className="w-6 h-6 text-secondary mb-4" />
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary transition-colors">Strategy Masterclass</h3>
                <p className="text-xs text-white/40 leading-relaxed font-light">Understanding CPR, ORB, EMA, and SMC/ICT indicator rules for intraday and swing models.</p>
              </div>
              <span className="text-xs font-bold text-primary flex items-center gap-1 mt-4">Read Article <ArrowRight className="w-4 h-4" /></span>
            </Link>

            <Link href="/blog/demat-account-guide-india" className="p-8 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-primary/30 hover:bg-white/[0.02] transition-all group flex flex-col justify-between h-56">
              <div>
                <ShieldCheck className="w-6 h-6 text-emerald-400 mb-4" />
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary transition-colors">Broker & Demat Selection</h3>
                <p className="text-xs text-white/40 leading-relaxed font-light">A comprehensive comparison of Zerodha, Angel One, Groww, Dhan, and bank accounts.</p>
              </div>
              <span className="text-xs font-bold text-primary flex items-center gap-1 mt-4">Read Article <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
