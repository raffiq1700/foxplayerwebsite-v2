const { initializeApp } = require('firebase/app');
const { getFirestore, collection, setDoc, doc } = require('firebase/firestore');

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

const articles = [
  // METHODOLOGY
  {
    slug: "building-a-trading-plan",
    title: "How to Build a Professional Trading Plan: A Step-by-Step Guide",
    category: "Methodology",
    excerpt: "Success in trading isn't about luck; it's about having a plan. Learn how to create a robust trading plan that keeps you disciplined and profitable.",
    content: `
# How to Build a Professional Trading Plan: A Step-by-Step Guide

The famous saying "Fail to plan, plan to fail" is nowhere more true than in the stock market. Most retail traders lose money because they trade on "feel" or "tips" rather than a structured system. A professional trading plan is your personal business manual that dictates every action you take in the market.

### Why You Need a Trading Plan
A plan removes the need for decision-making during high-stress market hours. By deciding what to do *before* the market opens, you eliminate the emotional biases of fear and greed.

### Step 1: Define Your Strategy (The Edge)
You must have a clear "Entry Trigger". Are you trading a 15-minute breakout? A crossover of moving averages? A specific candlestick pattern at support?
- **Be Specific**: "I will buy when X happens" is better than "I will buy when it looks bullish."

### Step 2: Set Your Exit Rules
Every trade must have two exit doors:
1. **Stop Loss**: Where you exit if you are wrong. This should be based on technical levels, not just a random number.
2. **Take Profit**: Where you exit if you are right. Having a target prevents you from getting greedy and watching a winner turn into a loser.

### Step 3: Determine Your Position Size
This is the most critical part of risk management. You should know exactly how many lots or shares to buy *before* you place the order.
- **The 1% Rule**: Never risk more than 1% of your total capital on a single trade.

### Step 4: Define Your Trading Hours
The Indian market (NSE/BSE) is open from 9:15 AM to 3:30 PM. But when are you at your best? Many professional traders only trade the first 2 hours (the morning volatility) or the last hour.

### Step 5: The Trading Journal
A plan is useless if you don't track its performance. Keep a record of every trade:
- Why did I enter?
- Did I follow my rules?
- What was the outcome?

### Automating Your Plan
A trading plan is essentially a set of "If-Then" statements. "If price > 200 EMA, then buy." This makes it perfect for automation. By coding your plan into an algorithm, you ensure that it is followed with 100% precision, 100% of the time.

**Turn your trading plan into a machine. Contact FoxPlayer Algo Technologies for strategy development.**
    `,
    metaTitle: "How to Build a Trading Plan | Step-by-Step Guide for Success",
    metaDescription: "Learn how to create a robust trading plan that covers entries, exits, and risk management. Essential reading for consistent profits.",
    author: "FoxPlayer Education Team",
    readingTime: "8 min read",
    status: "published"
  },
  // CONCEPTS
  {
    slug: "volatility-and-implied-volatility",
    title: "Understanding Volatility: Historical vs. Implied Volatility (IV)",
    category: "Concepts",
    excerpt: "Volatility is the fuel of the market. Learn the difference between HV and IV and how they affect your options trading strategies.",
    content: `
# Understanding Volatility: Historical vs. Implied Volatility (IV)

In the world of trading, volatility is often used as a synonym for risk. However, for a professional trader, volatility is simply the "fuel" of the market. Without volatility, there is no movement, and without movement, there is no profit. To trade successfully—especially in options—you must master the concept of volatility.

### 1. Historical Volatility (HV)
Historical volatility is a measure of how much a stock's price has moved in the past. It's a look in the rearview mirror.
- **Calculation**: It's typically calculated as the standard deviation of price changes over a specific period (e.g., 30 days).
- **Usage**: High HV means the stock is "wild" and moves a lot. Low HV means it's "boring" and stable.

### 2. Implied Volatility (IV)
This is the most important concept for options traders. IV represents the market's expectation of *future* volatility. It is derived from the current prices of options.
- **IV and Option Prices**: When IV is high, option premiums are expensive. When IV is low, premiums are cheap.
- **The IV Crush**: After a major event (like an earnings report or an election), IV usually crashes. This can cause you to lose money on an option even if you got the direction right.

### The India VIX
In India, we have a specialized index called the "India VIX" (Volatility Index). It measures the expected volatility of the NIFTY 50 over the next 30 days.
- **VIX < 15**: Calm, bullish markets.
- **VIX > 20**: Fearful, panic-driven markets.

### Practical Applications
Professional traders use IV to decide which strategy to use:
- **High IV**: Sell options (collect expensive premiums). Strategies: Short Straddles, Iron Condors.
- **Low IV**: Buy options (cheap premiums). Strategies: Bull Call Spreads, Long Straddles.

### Automating Volatility Analysis
Volatility can change in an instant. Manual calculations are too slow. Algorithmic systems can monitor IV Percentile and IV Rank across dozens of instruments simultaneously, automatically switching your strategies from "selling" to "buying" the moment the market environment shifts.

**Scale your volatility-based trading. Contact FoxPlayer Algo Technologies for custom IV scanners and bots.**
    `,
    metaTitle: "Historical vs Implied Volatility | Options Trading Concepts",
    metaDescription: "Master the concepts of HV and IV. Learn how to use India VIX to choose the right trading strategies for any market condition.",
    author: "FoxPlayer Education Team",
    readingTime: "7 min read",
    status: "published"
  },
  {
    slug: "market-structure-basics",
    title: "Market Structure Basics: Identifying Trends and Ranges",
    category: "Concepts",
    excerpt: "Learn how the market moves in cycles. Master the concepts of Accumulation, Markup, and Distribution to stay on the right side of the trend.",
    content: `
# Market Structure Basics: Identifying Trends and Ranges

Before you apply a single indicator like RSI or MACD, you must understand **Market Structure**. This is the fundamental skeleton of the market. It describes the "flow" of price and the behavior of institutional players. Without understanding structure, you are trading in the dark.

### The Four Phases of Market Structure
Institutional traders (the Big Players) move the market in four distinct cycles:
1. **Accumulation**: Large players are quietly buying. Price moves sideways in a range. The market is boring.
2. **Markup (Uptrend)**: Price breaks out of the range. We see a series of **Higher Highs (HH)** and **Higher Lows (HL)**. This is where most retail traders try to join.
3. **Distribution**: Large players are quietly selling their positions to retail buyers. Price moves sideways again at the top.
4. **Markdown (Downtrend)**: Price crashes. We see a series of **Lower Highs (LH)** and **Lower Lows (LL)**.

### Support and Resistance
These are the "floors" and "ceilings" of the market.
- **Support**: A price level where buyers are likely to step in.
- **Resistance**: A price level where sellers are likely to step in.
- **The Flip**: When a resistance level is broken, it often becomes a new support level (and vice versa).

### Why Structure Fails
"Breakouts" often fail because traders don't understand the context. A breakout in a Distribution phase is often a "Bull Trap" designed to trick retail traders into buying before a crash.

### Risk Management and Discipline
Successful structure trading requires patience:
- **Don't chase the move**: Wait for a "Retest" of the broken level.
- **Stay Disciplined**: If the structure breaks (e.g., an uptrend makes a Lower Low), exit immediately. Your thesis is proven wrong.

### Automating Structure Detection
Market structure is mathematical. We can program an algorithm to identify HH/HL patterns and draw support/resistance zones with perfect precision. Our systems can detect a "Change of Character" (CHoCH) the moment it happens, allowing you to be the first to enter a new trend.

**Ready for institutional-grade structure analysis? Contact FoxPlayer Algo Technologies.**
    `,
    metaTitle: "Market Structure Basics | Trends, Ranges & Phases Explained",
    metaDescription: "Master the 4 phases of market cycles. Learn how to identify HH/HL patterns and trade with the institutional flow.",
    author: "FoxPlayer Education Team",
    readingTime: "6 min read",
    status: "published"
  },
  // METHODS
  {
    slug: "trend-following-techniques",
    title: "Trend Following: The Most Profitable Way to Trade",
    category: "Methods",
    excerpt: "Discover why 'The Trend is your Friend'. Learn professional techniques to identify and ride major market trends for massive profits.",
    content: `
# Trend Following: The Most Profitable Way to Trade

In the legendary book *Market Wizards*, almost every successful trader shares one secret: they are trend followers. Trend following is the practice of identifying a market direction and staying in the trade as long as that direction continues. It is simple, effective, and extremely profitable if done with discipline.

### The Philosophy of Trend Following
Trend followers don't try to "predict" the future. They don't try to buy at the exact bottom or sell at the exact top. Instead, they wait for a trend to establish itself, join it, and ride the middle 70% of the move.

### Core Techniques for Identifying Trends
1. **Moving Averages**: Using the 50-day and 200-day EMA to determine the long-term trend.
2. **ADX (Average Directional Index)**: Measuring the *strength* of a trend. An ADX above 25 suggests a strong trending market.
3. **Donchian Channels**: Identifying price breakouts to new highs or lows.

### The Rules of Trend Following
- **Cut Losses Fast**: If the trend reverses against you, exit immediately.
- **Let Winners Run**: This is the hardest part. Most traders take profits too early. A true trend follower stays in until the price action proves the trend is over.
- **Pyramiding**: Adding to your position as the trend goes in your favor.

### Risk Management and Discipline
The biggest challenge for a trend follower is the "Whipsaw"—where the market moves sideways and hits your stop losses repeatedly. 
- **Patience**: You must have the discipline to sit through sideways markets without trading.
- **Risk Control**: Never risk more than 1% per trade, because you will have strings of small losses before the big trend hits.

### Automating Trend Following
Trend following is perfect for algorithms. Computers don't get bored during sideways markets, and they don't get greedy during massive trends. Our systems can monitor 50 different stocks and indices, entering only when a strong trend is confirmed and trailing the stop loss automatically to capture every bit of profit.

**Build your trend-following machine. Contact FoxPlayer Algo Technologies.**
    `,
    metaTitle: "Trend Following Strategies | How to Ride Market Trends",
    metaDescription: "Learn the secrets of institutional trend followers. Use Moving Averages and ADX to find and stay in profitable market moves.",
    author: "FoxPlayer Education Team",
    readingTime: "6 min read",
    status: "published"
  }
];

async function seed() {
    console.log("Seeding Academy Articles (Batch 2)...");
    for (const article of articles) {
        try {
            await setDoc(doc(db, "academy", article.slug), {
                ...article,
                createdAt: new Date(),
                updatedAt: new Date(),
                publishedAt: new Date()
            });
            console.log(`Seeded: ${article.title}`);
        } catch (e) {
            console.error(`Error: ${article.title}`, e);
        }
    }
    console.log("Batch 2 Complete!");
    process.exit(0);
}

seed();
