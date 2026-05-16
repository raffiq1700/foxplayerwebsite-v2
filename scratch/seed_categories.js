const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, setDoc, doc } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAxD0ncgLn7kCSH-9vPkc-NSQA3NiAhToA",
  authDomain: "foxplayer-algo-technologies.firebaseapp.com",
  projectId: "foxplayer-algo-technologies",
  storageBucket: "foxplayer-algo-technologies.firebasestorage.app",
  messagingSenderId: "405976626891",
  appId: "1:405976626891:web:981455f2751012a3560d4e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const categories = [
  {
    name: "All",
    slug: "all",
    metaTitle: "Trading Academy | Master Algorithmic Trading with FoxPlayer",
    metaDescription: "Explore the comprehensive FoxPlayer Trading Academy. Learn everything from basics to advanced automated trading strategies for the Indian stock market.",
    description: `
# Master the Art of Trading with FoxPlayer Academy

Welcome to the **FoxPlayer Trading Academy**, your premier destination for institutional-grade trading education. In the fast-paced world of the Indian stock market, knowledge is not just power—it's your greatest risk management tool. Our academy is designed to bridge the gap between retail trading and professional execution.

### Why Structured Learning Matters
Most traders enter the market with a "get rich quick" mentality, only to realize that trading is a serious business. Success requires a deep understanding of market structure, volatility, and probability. Our academy provides a structured path, moving you from foundational basics to complex automated strategies.

### What We Cover
We cover every essential pillar of successful trading:
- **Foundations**: Understanding brokers, order types, and market participants.
- **Strategies**: Deep dives into Options, Candlesticks, and Systematic approaches.
- **Automation**: Learning how to leverage APIs and TradingView to remove emotion from your execution.
- **Discipline**: Mastering the psychology and risk management required to survive and thrive.

### The Power of Automation
At FoxPlayer, we believe that the future of trading is algorithmic. By automating your proven strategies, you can eliminate human error, trade 24/5 without fatigue, and backtest your ideas with historical precision. Our educational resources are tightly integrated with our technology solutions.

### Your Journey Starts Here
Whether you are a beginner looking to place your first trade or a seasoned pro looking to automate your workflow, the FoxPlayer Academy has something for you. New articles and guides are added regularly to keep you ahead of the curve.

**Need custom trading software or algorithmic automation? Contact FoxPlayer Algo Technologies today to scale your trading business.**
    `
  },
  {
    name: "Options",
    slug: "options",
    metaTitle: "Options Trading Education | Advanced Strategies & Greeks Guide",
    metaDescription: "Master options trading with our expert guides on calls, puts, multi-leg spreads, and Delta-neutral automation. Learn to trade with an edge.",
    description: `
# Master Options Trading: From Greeks to Automation

Options trading is one of the most versatile and powerful ways to participate in the Indian stock market. Unlike simple stock buying, options allow you to profit from rising, falling, and even sideways markets. However, with great power comes the need for great understanding.

### Understanding the Core Concepts
Options are derivative contracts that give you the right (but not the obligation) to buy or sell an underlying asset at a specific price. To succeed, you must master:
1. **Calls and Puts**: The building blocks of every strategy.
2. **The Greeks**: Delta, Gamma, Theta, and Vega. These define how your option price changes with time and volatility.
3. **Implied Volatility (IV)**: Understanding when options are cheap or expensive.

### Practical Applications in Real Trading
In real-world trading, professional traders rarely just buy single options. They use "Spreads" like Bull Call Spreads, Iron Condors, and Straddles to manage risk. For example, a **Short Straddle** is a popular strategy in the Indian markets during periods of low volatility, allowing traders to profit from the passage of time (Theta decay).

### Risk Management and Discipline
Options can lead to unlimited losses if not managed correctly (especially when selling). Disciplined execution involves:
- **Position Sizing**: Never risking too much on a single trade.
- **Hedging**: Using one position to protect another.
- **Stop Losses**: Having a clear plan for when a trade goes wrong.

### Automating Options Strategies
The complexity of options—calculating Greeks, monitoring IV, and making multi-leg adjustments—makes them perfect candidates for automation. Algorithmic trading systems can monitor dozens of strikes simultaneously and execute Delta-neutral adjustments in milliseconds, something humanly impossible.

### Expert Options Solutions
At FoxPlayer, we specialize in building complex options bots that handle multi-leg spreads and dynamic hedging automatically.

**Need custom options trading software or Greek-based automation? Contact FoxPlayer Algo Technologies.**
    `
  },
  {
    name: "Candlesticks",
    slug: "candlesticks",
    metaTitle: "Candlestick Charting Guide | Master Price Action & Patterns",
    metaDescription: "Learn to read price action with our candlestick charting guide. Understand trend reversals, continuations, and automated pattern recognition.",
    description: `
# Mastering Price Action: The Art of Candlestick Charting

Candlestick charts are the language of the market. Originally developed by Japanese rice traders, they provide a visual representation of the battle between buyers and sellers over a specific period. For the modern trader, mastering candlesticks is the first step toward understanding price action.

### The Anatomy of a Candle
Every candlestick tells a story through its four price points: Open, High, Low, and Close.
- **The Body**: Represents the range between the open and close.
- **The Wicks (Shadows)**: Represent the price extremes reached during the period.

### Key Patterns and Trend Identification
Traders look for specific patterns that signal market sentiment:
- **Reversal Patterns**: Hammer, Shooting Star, Engulfing patterns, and Dojis.
- **Continuation Patterns**: Flag, Pennant, and Marubozu.
Understanding these in the context of the overall trend is crucial. A Hammer at a major support level is far more significant than one in the middle of a range.

### Practical Trading Applications
In a real trading environment, candlesticks should not be used in isolation. They are most powerful when combined with:
1. **Support and Resistance**: Trading patterns at key price levels.
2. **Volume**: Confirming the strength behind a candle's move.
3. **Momentum**: Ensuring the trend has the strength to continue.

### Automating Pattern Recognition
One of the biggest challenges with candlesticks is subjectivity. What looks like a Hammer to one trader might not to another. Algorithmic trading fixes this. We can program precise mathematical definitions for every pattern, allowing our systems to scan hundreds of charts and identify high-probability setups instantly without human bias.

### Scale Your Chart Analysis
FoxPlayer builds custom indicators and scanners that identify your favorite candlestick patterns across all timeframes automatically.

**Need custom pattern recognition software or price action automation? Contact FoxPlayer Algo Technologies.**
    `
  },
  {
    name: "Automation",
    slug: "automation",
    metaTitle: "Trading Automation Guide | APIs, Webhooks & Algo Infrastructure",
    metaDescription: "Learn how to automate your trading strategies using APIs and TradingView webhooks. Build a scalable, emotion-free trading business.",
    description: `
# The Future of Finance: A Guide to Trading Automation

In the modern era of the Indian stock market, speed and precision are the ultimate edges. Trading automation is no longer a luxury reserved for institutional hedge funds; it is a necessity for any serious trader looking to scale.

### How Trading Automation Works
Automation involves using software to execute trades based on a predefined set of rules. This is achieved through:
1. **Broker APIs**: Direct connections to your broker's server (like Zerodha Kite, Shoonya, or AliceBlue).
2. **Webhooks**: Signals sent from platforms like TradingView to your execution engine.
3. **Logic Engines**: The "brain" that processes signals and manages orders.

### The Importance of Removing Emotion
Human psychology is the greatest enemy of a trader. Fear and greed cause us to exit winners too early and hold losers too long. An automated system follows the plan perfectly, executing every trade with disciplined precision, regardless of market panic or euphoria.

### Practical Applications
Automation allows you to:
- **Trade 24/5**: Monitor global markets or multiple instruments simultaneously.
- **Backtest with Precision**: Test your ideas on years of historical data in minutes.
- **Instant Execution**: React to news or price breaks in milliseconds, capturing slippage-free entries.

### Risk Management in Algos
Automation does not mean "set and forget." It requires robust risk management protocols, including:
- **Connection Monitoring**: Ensuring your API is always active.
- **Kill Switches**: Mechanisms to stop all trading if certain loss thresholds are hit.
- **Order Tracking**: Verifying that every signal resulted in a successful execution.

### Build Your Infrastructure with FoxPlayer
FoxPlayer Algo Technologies is at the forefront of the Indian automation revolution. We provide the bridges, the logic, and the execution engines you need to turn your strategy into a machine.

**Need a professional API bridge or TradingView automation? Contact FoxPlayer Algo Technologies.**
    `
  },
  {
    name: "Methodology",
    slug: "methodology",
    metaTitle: "Trading Methodology | Systematic & Rule-Based Execution",
    metaDescription: "Learn how to build a robust trading methodology. Master rule-based execution, systematic approaches, and disciplined trading habits.",
    description: `
# Building a Robust Trading Methodology: The Path to Consistency

A trading methodology is the set of rules and procedures that define how you interact with the market. Without a clear methodology, you are not a trader—you are a gambler. Consistency in results comes from consistency in process.

### Systematic vs. Discretionary Trading
- **Discretionary Trading**: Decisions are based on intuition and "feel." This is often inconsistent and emotionally taxing.
- **Systematic Trading**: Decisions are based on a fixed set of rules. This approach is measurable, backtestable, and scalable.

### Designing Your Methodology
A complete methodology must answer four questions:
1. **What to trade?** (Asset selection)
2. **When to enter?** (Trigger rules)
3. **When to exit?** (Profit taking and stop loss)
4. **How much to trade?** (Position sizing)

### The Role of Discipline
Even the best methodology will fail without the discipline to follow it. Modern trading requires a professional mindset where the goal is to execute the process perfectly, not just to "win" a single trade. Disciplined traders understand that they are playing a game of probabilities.

### Automating Your Methodology
The ultimate way to ensure adherence to your methodology is through algorithmic trading. An algo doesn't get tired, it doesn't get scared, and it never deviates from the rules you've programmed. By turning your methodology into code, you transform your trading from a stressful job into a scalable business.

### Expert Strategy Development
FoxPlayer helps traders codify their unique methodologies into high-performance trading software. We ensure your rules are executed with millisecond precision every single time.

**Ready to automate your trading methodology? Contact FoxPlayer Algo Technologies.**
    `
  },
  {
    name: "Concepts",
    slug: "concepts",
    metaTitle: "Trading Concepts | Market Structure, Volatility & Probability",
    metaDescription: "Master the foundational concepts of trading. Learn about market structure, leverage, volatility, and the mathematics of success.",
    description: `
# Foundational Trading Concepts: Understanding the Market's DNA

Before you can build a strategy or write an algorithm, you must understand the foundational concepts that govern the financial markets. These are the "first principles" of trading that remain true regardless of the instrument you trade.

### 1. Market Structure
The market moves in cycles of accumulation, markup, distribution, and markdown. Understanding whether the market is trending or ranging is the most critical skill for any trader.

### 2. Probability and Expectancy
Trading is a game of numbers. You don't need to be right every time; you just need a positive expectancy. This means your average win multiplied by your win rate should be greater than your average loss multiplied by your loss rate.

### 3. Leverage and Margin
In India, leverage is a double-edged sword. It allows you to control large positions with small capital, but it also magnifies losses. Disciplined use of leverage is the hallmark of a professional.

### 4. Volatility (ATR and Standard Deviation)
Volatility is not the same as risk. Volatility is the "fuel" of the market. Understanding how much an asset typically moves (using tools like ATR) helps you set realistic targets and stop losses.

### Applying Concepts to Automation
When we build algorithms, we use these concepts as our mathematical foundation. We use standard deviation to define Bollinger Bands, ATR to set dynamic stops, and probability theory to optimize entry signals.

### Your Education Partner
The FoxPlayer Academy is dedicated to simplifying these complex concepts for the modern Indian trader.

**Need custom trading indicators or data-driven software? Contact FoxPlayer Algo Technologies.**
    `
  },
  {
    name: "Methods",
    slug: "methods",
    metaTitle: "Trading Methods | Scalping, Intraday & Swing Trading Guide",
    metaDescription: "Explore different trading methods: Scalping, Intraday, Swing, and Positional trading. Find the style that fits your personality and goals.",
    description: `
# Choosing Your Edge: Scalping, Intraday, and Swing Trading Methods

In the trading world, one size does not fit all. Your trading method should be a reflection of your personality, your capital, and your time availability. At FoxPlayer, we support traders across all styles with specialized automation tools.

### 1. Scalping (Seconds to Minutes)
Scalpers look for tiny price movements and trade frequently throughout the day. This requires extreme focus and very low latency execution. Scalping is almost impossible for humans to do consistently without the help of high-frequency trading (HFT) tools.

### 2. Intraday Trading (Minutes to Hours)
Intraday traders enter and exit positions within the same trading day, avoiding overnight risk. This is the most popular method in India, focusing on momentum and daily volatility.

### 3. Swing Trading (Days to Weeks)
Swing traders hold positions for several days to capture a "swing" in the price. This requires patience and a good understanding of daily and weekly market structures.

### 4. Positional Trading (Months to Years)
Positional traders focus on long-term trends and fundamentals. This method requires the most capital and the longest time horizon.

### Which Method is Best for Automation?
While all methods can be automated, **Scalping and Intraday** trading benefit the most. The need for rapid execution and constant monitoring makes them perfect for algorithms. Swing trading automation is also highly effective for managing multiple instruments without needing to be glued to the screen.

### Tailored Execution Engines
FoxPlayer develops custom execution engines tailored to your specific trading method, ensuring you get the best entry and exit for your style.

**Need a custom scalping bot or intraday execution engine? Contact FoxPlayer Algo Technologies.**
    `
  },
  {
    name: "Risk Management",
    slug: "risk-management",
    metaTitle: "Risk Management Guide | Capital Preservation & Position Sizing",
    metaDescription: "The ultimate guide to trading risk management. Learn about stop losses, drawdown control, and the 1% rule to stay in the game.",
    description: `
# The Survival Guide: Mastering Risk Management in Trading

If trading is the art of making money, risk management is the science of keeping it. In the Indian markets, where volatility can spike in an instant, a robust risk management plan is the only thing standing between you and a blown account.

### The 1% Rule
Professional traders rarely risk more than 1% to 2% of their total capital on a single trade. This ensure that even a string of 10 losses won't devastate your portfolio, allowing you to stay in the game long enough for your edge to play out.

### Core Risk Management Pillars
1. **Position Sizing**: Calculating exactly how many shares or lots to buy based on your stop loss distance.
2. **Stop Losses**: The "exit door" that protects you when the market proves you wrong.
3. **Drawdown Control**: Knowing when to stop trading after a series of losses to preserve your mental and financial capital.
4. **Diversification**: Not putting all your capital into one sector or one strategy.

### Discipline and Execution
Risk management is easy to plan but hard to execute. Human emotion often makes us move our stop losses or "double down" on losers. This is where many retail traders fail.

### Automation: The Ultimate Risk Manager
The greatest benefit of algorithmic trading is its ability to enforce risk rules without hesitation. An algorithm will never "hope" the market turns around; it will exit the second a rule is hit. At FoxPlayer, we build "Risk Management Modules" into every custom software we deliver.

### Protect Your Capital with FoxPlayer
We don't just build trading signals; we build safe trading systems. Our architecture includes automatic margin checks, exposure limits, and emergency kill-switches.

**Need a custom risk management dashboard or automated kill-switch? Contact FoxPlayer Algo Technologies.**
    `
  },
  {
    name: "Basics",
    slug: "basics",
    metaTitle: "Trading Basics for Beginners | Indian Stock Market Guide",
    metaDescription: "Start your trading journey here. Learn about brokers, demat accounts, order types, and basic market terminology in simple English.",
    description: `
# Starting from Zero: A Beginner's Guide to the Trading World

Welcome to the exciting world of the Indian stock market. For many, the market seems like a complex maze of numbers and jargon. Our "Basics" category is here to demystify everything and give you a solid foundation to build upon.

### The Market Ecosystem
To trade, you need to understand the key players:
- **Exchanges (NSE and BSE)**: Where the buying and selling actually happens.
- **Brokers (Zerodha, AliceBlue, Shoonya, etc.)**: The intermediaries that give you access to the exchange.
- **Regulators (SEBI)**: The "police" that ensure the markets are fair and transparent.

### Your First Steps
1. **Demat Account**: Where your shares are stored digitally.
2. **Trading Account**: The platform you use to place orders.
3. **Order Types**: Understanding the difference between a Market Order, Limit Order, and Stop-Loss Order.

### Disciplined Habits from Day One
The most successful traders are those who treat it like a profession from the very beginning. This means keeping a trading journal, learning before you earn, and respecting the risk involved in every trade.

### From Basics to Algorithms
Even as a beginner, it's important to know that the modern market is driven by technology. As you learn the basics, you are preparing yourself to eventually leverage automation to make your trading more efficient and less stressful.

### Your Educational Partner
FoxPlayer Algo Technologies is committed to empowering the next generation of Indian traders with both knowledge and technology.

**New to trading and need a professional setup? Contact FoxPlayer Algo Technologies.**
    `
  }
];

async function seed() {
    console.log("Seeding academy categories...");
    for (const cat of categories) {
        try {
            await setDoc(doc(db, "academy_categories", cat.slug), {
                ...cat,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            console.log(`Seeded category: ${cat.name}`);
        } catch (e) {
            console.error(`Failed to seed ${cat.name}:`, e);
        }
    }
    console.log("Seeding complete!");
    process.exit(0);
}

seed();
