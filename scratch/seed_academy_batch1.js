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
  // OPTIONS
  {
    slug: "what-are-call-and-put-options",
    title: "What Are Call and Put Options? A Beginner's Guide",
    category: "Options",
    excerpt: "Learn the foundational building blocks of options trading. Understand how call and put options work in the Indian stock market.",
    content: `
# What Are Call and Put Options? A Beginner's Guide

If you've ever looked at a trading terminal in India, you've likely seen NIFTY or BANKNIFTY options with labels like "CE" and "PE". These are the fundamental building blocks of the derivative market. To trade options successfully, you must first understand what these instruments represent and how they differ from buying or selling regular stocks.

### What is an Option?
An option is a financial derivative—a contract that derives its value from an underlying asset, such as a stock or an index. Unlike a stock, where you own a piece of a company, an option gives you the **right**, but not the **obligation**, to buy or sell that asset at a specific price (the strike price) before a certain date (the expiry).

### 1. Call Options (CE - Call European)
A call option gives the buyer the right to buy the underlying asset. You buy a call option when you expect the market price to **increase**.
- **The Buyer's Perspective**: You pay a small fee called "Premium" to control a large amount of stock. If the price goes up significantly, your profit can be substantial.
- **The Seller's Perspective**: You receive the premium but take on the obligation to sell the stock if the buyer chooses to exercise their right.

### 2. Put Options (PE - Put European)
A put option gives the buyer the right to sell the underlying asset. You buy a put option when you expect the market price to **decrease**.
- **The Buyer's Perspective**: This is essentially insurance. If the market crashes, your put option increases in value, offsetting your losses in other areas.
- **The Seller's Perspective**: You receive the premium and agree to buy the stock at the strike price if the price falls.

### Key Terminology You Must Know
- **Strike Price**: The price at which the contract can be exercised.
- **Expiry Date**: The day the contract ends (in India, weekly or monthly).
- **Premium**: The price you pay to buy the option.
- **Lot Size**: The minimum number of units you must trade (e.g., 50 for NIFTY).

### Why Trade Options Instead of Stocks?
Options offer **Leverage**. For a small premium, you can control a position that would otherwise cost lakhs of rupees. This allows for higher returns on capital, but it also increases the risk.

### Risk Management and Discipline
Beginners often make the mistake of "buying cheap OTM (Out of the Money) options" hoping for a lottery win. Professional trading involves a disciplined approach:
- **Never risk more than you can afford to lose.**
- **Understand Theta (Time Decay)**: Options lose value every day as they get closer to expiry.
- **Use Stop Losses**: Always have an exit plan.

### Automating Your Options Trading
The complexity of monitoring multiple strikes and calculating premiums in real-time makes options a perfect candidate for automation. Algorithmic systems can identify price breaks and execute multi-leg orders in milliseconds, capturing opportunities that human eyes might miss.

**Ready to automate your options strategies? Contact FoxPlayer Algo Technologies for custom options trading software.**
    `,
    metaTitle: "What are Call and Put Options? | Beginner Options Trading Guide India",
    metaDescription: "Learn the basics of CE and PE options in the Indian market. A simple, human-written guide for beginners starting their options trading journey.",
    author: "FoxPlayer Education Team",
    readingTime: "6 min read",
    status: "published"
  },
  // CANDLESTICKS
  {
    slug: "introduction-to-candlestick-charts",
    title: "Introduction to Candlestick Charts: Reading the Market's Story",
    category: "Candlesticks",
    excerpt: "Discover the history and anatomy of candlestick charts. Learn how to read price action and understand the psychology of buyers and sellers.",
    content: `
# Introduction to Candlestick Charts: Reading the Market's Story

Candlestick charts are the most popular way for traders to visualize price action. While they may look complex at first, they are actually a very intuitive way to see the "battle" between buyers and sellers. Originally developed by Munehisa Homma, a Japanese rice trader in the 1700s, these charts have stood the test of time for one simple reason: they work.

### The Anatomy of a Candlestick
Every single candle on your chart represents price movement over a specific period (e.g., 5 minutes, 1 hour, or 1 day). Each candle has four data points:
1. **Open**: The price at the start of the period.
2. **High**: The highest price reached during the period.
3. **Low**: The lowest price reached during the period.
4. **Close**: The price at the end of the period.

### Bullish vs. Bearish Candles
- **Bullish (Green/White)**: The close is higher than the open. Buyers were in control.
- **Bearish (Red/Black)**: The close is lower than the open. Sellers were in control.
- **The Shadows (Wicks)**: These thin lines above and below the body show the "rejection" of price at certain levels. Long upper wicks suggest sellers are pushing back, while long lower wicks suggest buyers are stepping in.

### Understanding Market Psychology
A candlestick chart is essentially a psychological map. A candle with a large body and no wicks shows high conviction. A "Doji" (a candle with a very small body) shows indecision, where neither buyers nor sellers could win the battle.

### Practical Applications
When you look at a chart, don't just look for single candles. Look for the **Trend**:
- **Uptrend**: A series of higher highs and higher lows.
- **Downtrend**: A series of lower highs and lower lows.
- **Sideways**: Price is trapped between two clear levels.

### Risk Management and Discipline
The biggest mistake beginners make is trading "every single candle." Professional traders wait for **Confluence**—where a candlestick pattern aligns with a major support or resistance level. 
- **Wait for confirmation**: Don't jump in before the candle closes.
- **Maintain Discipline**: Have a clear stop loss based on the low or high of the candle.

### Automating Candlestick Recognition
Recognizing patterns manually across dozens of charts is exhausting and prone to human error. Algorithmic trading systems can be programmed to identify precise candlestick formations (like Hammers, Engulfing patterns, or Morning Stars) and execute trades the moment the criteria are met, ensuring you never miss a setup.

**Scaling your trading with pattern recognition? Contact FoxPlayer Algo Technologies for custom charting automation.**
    `,
    metaTitle: "Introduction to Candlestick Charts | Master Price Action Reading",
    metaDescription: "Learn how to read candlestick charts like a pro. Understand the psychology behind the wicks and bodies to predict market moves.",
    author: "FoxPlayer Education Team",
    readingTime: "5 min read",
    status: "published"
  },
  {
    slug: "top-reversal-candlestick-patterns",
    title: "Top 5 Reversal Candlestick Patterns Every Trader Should Know",
    category: "Candlesticks",
    excerpt: "Learn how to spot trend reversals early with these 5 powerful candlestick patterns. Improve your entry and exit timing.",
    content: `
# Top 5 Reversal Candlestick Patterns Every Trader Should Know

In trading, the most profitable opportunities often come at the end of a trend. If you can identify when a trend is losing steam and about to reverse, you can enter trades at the very beginning of a new move. Candlestick reversal patterns are the earliest signals of these shifts.

### 1. The Hammer (Bullish Reversal)
The Hammer appears at the bottom of a downtrend. It has a small body at the top and a long lower wick.
- **The Story**: Sellers tried to push the price lower, but buyers stepped in aggressively and pushed it back up near the open. It shows that the bears are exhausted.

### 2. The Shooting Star (Bearish Reversal)
This is the opposite of the Hammer. It appears at the top of an uptrend, with a small body at the bottom and a long upper wick.
- **The Story**: Buyers tried to make a new high, but sellers took control and forced the price back down. It's a strong signal that the uptrend is over.

### 3. Engulfing Patterns (Bullish and Bearish)
An Engulfing pattern consists of two candles. The second candle completely "swallows" or engulfs the body of the first candle.
- **Bullish Engulfing**: A large green candle follows a small red candle at the bottom of a trend.
- **Bearish Engulfing**: A large red candle follows a small green candle at the top of a trend.

### 4. The Morning Star (Bullish Reversal)
A three-candle pattern: a large red candle, a small-bodied candle (indecision), and a large green candle.
- **The Story**: The market was falling, then it hesitated, and then buyers took over with massive strength.

### 5. The Evening Star (Bearish Reversal)
The bearish version of the Morning Star. It appears at the top of an uptrend and signals a major crash might be coming.

### How to Trade Reversals Safely
Never trade these patterns in isolation! They are most effective when:
1. **At Support/Resistance**: A Hammer at a major support level is a "High Probability" setup.
2. **With Volume Confirmation**: Look for a spike in volume on the reversal candle.
3. **Wait for the Next Candle**: Always wait for the following candle to break the high/low of the reversal pattern for confirmation.

### Algorithmic Pattern Detection
Instead of staring at charts for hours, professional traders use algorithms to scan the entire NIFTY 50 for these specific patterns. Our systems can identify an Evening Star on a 15-minute timeframe and send an instant alert or execute a trade automatically.

**Automate your chart patterns today. Contact FoxPlayer Algo Technologies.**
    `,
    metaTitle: "5 Best Reversal Candlestick Patterns | Improve Trading Accuracy",
    metaDescription: "Master the Hammer, Shooting Star, and Engulfing patterns. Learn how to spot market reversals before they happen with our expert guide.",
    author: "FoxPlayer Education Team",
    readingTime: "7 min read",
    status: "published"
  },
  // AUTOMATION
  {
    slug: "broker-api-integration-basics",
    title: "Broker API Integration Basics: Connecting Your Strategy to the Market",
    category: "Automation",
    excerpt: "Learn the technical foundation of automated trading. Understand how API keys work and how to securely connect your software to your broker.",
    content: `
# Broker API Integration Basics: Connecting Your Strategy to the Market

The dream of every modern trader is to have a system that trades while they sleep. To make this a reality, your trading software must be able to "talk" to your broker's server. This communication happens through an **API (Application Programming Interface)**.

### What is a Trading API?
Think of an API as a digital bridge. Your broker (like Zerodha, Shoonya, or AliceBlue) opens a door through which your code can send orders, check your balance, and receive real-time price data.

### Key Components of API Integration
1. **API Key and Secret**: These are like your username and password for the API. They are used to authenticate your software and ensure that only you can access your account.
2. **Access Token**: Most brokers require you to "log in" every morning to generate a daily access token. This is a security measure to prevent unauthorized access.
3. **Endpoints**: These are specific URLs your software calls to perform actions (e.g., \`POST /place_order\`).
4. **WebSocket**: A continuous connection that "streams" live prices to your software without you having to ask for them repeatedly.

### The Integration Process
- **Step 1: Enable API**: Request API access from your broker's developer portal.
- **Step 2: Install SDK**: Most brokers provide a Python or Node.js library (SDK) to make the connection easier.
- **Step 3: Handle Authentication**: Write a script to handle the daily login and token generation.
- **Step 4: Execute Orders**: Use the SDK functions to buy or sell based on your strategy's logic.

### Security Best Practices
When dealing with APIs, security is paramount:
- **Never share your API Secret** with anyone.
- **Disable "Withdrawal" permissions**: Most APIs allow you to disable the ability to withdraw funds, which protects your capital.
- **Use a Secure Server**: Run your automation on a protected VPS (Virtual Private Server).

### The FoxPlayer Advantage
Building a reliable API bridge from scratch is difficult. You have to handle connection drops, error codes, and rate limits. FoxPlayer provides pre-built, battle-tested API bridges that handle all the "dirty work" for you, allowing you to focus purely on your trading strategy.

**Need a professional API bridge for Zerodha, Shoonya, or AliceBlue? Contact FoxPlayer Algo Technologies.**
    `,
    metaTitle: "Broker API Integration Guide | How to Connect Trading Bots",
    metaDescription: "A beginner-friendly guide to Trading APIs. Learn how to use API keys and SDKs to automate your trades securely and efficiently.",
    author: "FoxPlayer Education Team",
    readingTime: "6 min read",
    status: "published"
  }
];

async function seed() {
    console.log("Seeding Academy Articles (Batch 1)...");
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
    console.log("Batch 1 Complete!");
    process.exit(0);
}

seed();
