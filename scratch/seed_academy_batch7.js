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
  {
    slug: "common-trading-terminology",
    title: "Common Trading Terminology: Speaking the Market Language",
    category: "Basics",
    excerpt: "Don't get lost in translation. Master the essential terms like Long, Short, Bull, Bear, and Square-off in this beginner's glossary.",
    content: `
# Common Trading Terminology: Speaking the Market Language

The stock market has its own dialect. If you don't understand the language, you can't participate in the conversation. This guide defines the most common terms you will hear on business news, in trading communities, and in your own trading terminal.

### The Basics of Direction
- **Bull (Bullish)**: A trader who expects prices to go up. The term comes from how a bull tosses its horns upwards.
- **Bear (Bearish)**: A trader who expects prices to go down. The term comes from how a bear swipes its paws downwards.
- **Long Position**: Buying an asset with the intention of selling it later at a higher price.
- **Short Position**: Selling an asset you don't own (borrowing it) with the intention of buying it back later at a lower price.

### Order and Execution Terms
- **Square-off**: Closing your position. If you were long, squaring off means selling. If you were short, it means buying back.
- **Slippage**: The difference between the price you wanted and the price you actually got. High slippage is bad for traders.
- **Liquidity**: How easy it is to buy or sell a stock without changing its price. NIFTY is highly liquid; a "penny stock" is illiquid.
- **Volume**: The total number of shares or contracts traded in a specific period.

### Technical and Risk Terms
- **Drawdown**: The percentage drop from the highest point of your account to the lowest point.
- **Equity Curve**: A graph showing the performance of your account over time.
- **MTM (Mark-to-Market)**: Your real-time profit or loss based on current market prices.
- **Intraday**: A trade that is opened and closed within the same day (MIS orders in India).

### The Importance of Knowing the Terms
Understanding these terms is not just about sounding smart. It's about being able to read news and research reports with confidence. For example, if you hear "NIFTY is facing resistance at 22,000," you should immediately know that sellers are likely to step in at that level.

### Automating the Glossary
In algorithmic trading, these terms are converted into code. "Go Long" becomes a "Buy Order" function. "Square-off" becomes a "Close All Positions" function. Our systems handle the technical complexity of these terms so you can focus on the strategy.

**Learn the language of success. Contact FoxPlayer Algo Technologies.**
    `,
    metaTitle: "Trading Terminology Glossary | Learn Stock Market Terms",
    metaDescription: "Master the essential trading vocabulary. Learn what Long, Short, Bull, and Bear mean in the Indian stock market context.",
    author: "FoxPlayer Education Team",
    readingTime: "5 min read",
    status: "published"
  },
  {
    slug: "types-of-trading-instruments",
    title: "Types of Trading Instruments: Choosing Your Weapon",
    category: "Basics",
    excerpt: "From Equity to F&O, learn about the different instruments you can trade on the NSE and BSE. Find out which one fits your risk profile.",
    content: `
# Types of Trading Instruments: Choosing Your Weapon

Not all trading is the same. Depending on your capital, risk tolerance, and goals, you might choose to trade different types of financial instruments. In the Indian market, there are four major categories of instruments that you can trade.

### 1. Equities (Stocks)
This is the most common form of trading. You buy shares of a company (like Reliance or TCS).
- **Risk**: Moderate. You can only lose the amount you invested.
- **Capital**: High, unless you buy small quantities.
- **Best For**: Long-term investors and conservative day traders.

### 2. Futures
A future is a contract to buy or sell an asset at a predetermined price in the future.
- **Risk**: High. Futures are leveraged instruments.
- **Capital**: Moderate. You pay a margin (typically 10-20%) to control a large position.
- **Best For**: Professional traders who want to bet on the overall market direction.

### 3. Options
Options are derivative contracts that give you the right to buy or sell.
- **Risk**: Varies. Option buying is limited risk but low probability. Option selling is high risk but high probability.
- **Capital**: Low for buying, high for selling.
- **Best For**: Strategic traders who want to profit from volatility and time decay.

### 4. ETFs (Exchange Traded Funds)
ETFs are baskets of stocks that trade like a single stock. For example, NIFTYBEES tracks the performance of the entire NIFTY 50.
- **Risk**: Low. Highly diversified.
- **Capital**: Any amount.
- **Best For**: Beginners who want to participate in the market without picking individual stocks.

### Choosing the Right Instrument
The biggest mistake beginners make is jumping into Options without understanding Equities. We recommend starting with Equities to understand price action, then moving to Futures, and only then exploring complex Option strategies.

### Automating Multi-Instrument Portfolios
Managing a portfolio that includes Stocks, Futures, and Options is complex. Our algorithmic systems can monitor all these segments simultaneously, executing "Hedges" in the Options market to protect your Equity holdings.

**Ready to build a multi-instrument bot? Contact FoxPlayer Algo Technologies.**
    `,
    metaTitle: "Types of Trading Instruments | Equity, Futures & Options",
    metaDescription: "Explore the different assets you can trade on NSE and BSE. Learn the pros and cons of Stocks, Futures, and Options for your portfolio.",
    author: "FoxPlayer Education Team",
    readingTime: "6 min read",
    status: "published"
  },
  {
    slug: "trend-identification-using-candles",
    title: "Trend Identification Using Candlesticks: Don't Trade Against the Flow",
    category: "Candlesticks",
    excerpt: "Learn how to use simple candle structures to identify the dominant trend. Stop fighting the market and start riding the waves.",
    content: `
# Trend Identification Using Candlesticks: Don't Trade Against the Flow

One of the oldest adages in trading is "The Trend is your Friend." But how do you actually identify a trend without using dozens of lagging indicators? The answer lies in the price action itself, specifically in how candlesticks are structured over time.

### The Three States of Market Flow
1. **Uptrend**: Characterized by a series of candles that consistently make **Higher Highs** and **Higher Lows**. Each pullback (red candle) should ideally stop above the previous pullback.
2. **Downtrend**: Characterized by a series of **Lower Highs** and **Lower Lows**. Each bounce (green candle) should stop below the previous bounce.
3. **Range (Sideways)**: Candles are overlapping, and highs/lows are relatively equal. This is the "no trade zone" for trend followers.

### The "Body-to-Wick" Ratio
The trend is not just about direction; it's about **Strength**. 
- **Strong Trend**: Large-bodied candles with small wicks. This shows that one side (buyers or sellers) is in complete control.
- **Weakening Trend**: Bodies get smaller, and wicks get longer. This shows that the opposing side is starting to fight back.

### The Role of Candle Color
In a strong uptrend, you will see "clusters" of green candles with very few red candles in between. If you suddenly see a series of 3-4 large red candles, it's a warning that the trend structure might be breaking.

### Practical Application: The Retest
The safest way to enter a trend is not during the breakout, but during the **Retest**. Wait for a red candle in an uptrend that touches a previous high and forms a bullish pattern like a Hammer or an Engulfing candle.

### Risk Management and Discipline
- **Don't Anticipate**: Wait for the trend to prove itself before you enter.
- **Trust the Structure**: If the price makes a Lower Low in an uptrend, the trend is over. Don't "hope" it's just a deep pullback.

### Automating Trend Identification
Scanning dozens of charts for "Higher Highs" is tedious. Our algorithmic systems use mathematical logic to identify trend changes the second they happen. We can program a system to enter a trade only when the "Candle Structure" confirms a strong trend, ensuring you always stay on the right side of the market.

**Ride the trend with precision. Contact FoxPlayer Algo Technologies.**
    `,
    metaTitle: "Trend Identification with Candlesticks | Price Action Secrets",
    metaDescription: "Learn how to read market trends using nothing but raw price action and candlestick structure. Improve your entry timing and trade with the flow.",
    author: "FoxPlayer Education Team",
    readingTime: "6 min read",
    status: "published"
  },
  {
    slug: "rule-based-trading-methodology",
    title: "The Power of Rule-Based Trading: Removing the Human Element",
    category: "Methodology",
    excerpt: "Discover why a set of strict rules is your best weapon in the market. Learn how to create and follow a systematic trading methodology.",
    content: `
# The Power of Rule-Based Trading: Removing the Human Element

If you want to treat trading as a business rather than a hobby, you must adopt a **Rule-Based Methodology**. Rule-based trading is the practice of having a strictly defined set of criteria for every action. If Condition A and Condition B are met, you take Action C. There is no room for "I think" or "I feel."

### Why Rules are Superior to Intuition
The human brain is a magnificent tool, but it was evolved for survival on the savanna, not for trading the NIFTY 50. Our instincts lead us to:
- **Buy high** due to FOMO (Fear Of Missing Out).
- **Sell low** due to panic.
- **Hold losers** due to hope.
Rules act as a shield against these biological weaknesses.

### The Components of a Rule-Based System
1. **The Entry Setup**: Specific technical or fundamental criteria that must be met to enter a trade.
2. **The Exit Plan**: Precisely where to exit for a profit and where to exit for a loss.
3. **The Risk Rule**: Exactly how much capital to allocate to the trade.
4. **The Filters**: Conditions under which you will *not* trade (e.g., "Do not trade during RBI policy announcements").

### The Process of Refinement
Rule-based trading allows you to "measure" your performance. If your strategy isn't working, you can identify exactly which rule is failing and tweak it. In discretionary trading, you never know if the failure was the strategy or your own emotional state.

### Discipline: The Final Frontier
The hardest part of rule-based trading is not creating the rules; it's following them. Even the best system in the world will fail if the human operator ignores a stop loss or skips a trade out of fear.

### Transitioning to Automation
The logical end-point of rule-based trading is **Algorithmic Automation**. Once you have a set of rules that work, you can give them to a computer. A computer will never get tired, never get greedy, and never skip a trade. At FoxPlayer, we specialize in helping manual traders codify their rules into institutional-grade automated systems.

**Scale your discipline. Contact FoxPlayer Algo Technologies for custom algo solutions.**
    `,
    metaTitle: "Rule-Based Trading Methodology | Systematic Success Guide",
    metaDescription: "Learn how to build and follow a rule-based trading system. Eliminate emotional bias and treat your trading as a professional business.",
    author: "FoxPlayer Education Team",
    readingTime: "7 min read",
    status: "published"
  }
];

async function seed() {
    console.log("Seeding Academy Articles (Batch 7)...");
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
    console.log("Batch 7 Complete!");
    process.exit(0);
}

seed();
