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
    slug: "stop-loss-techniques",
    title: "Mastering Stop Loss Techniques: Your Survival Guide",
    category: "Risk Management",
    excerpt: "A stop loss is not just a number; it's a strategic exit. Learn different ways to set stop losses using volatility, support, and time.",
    content: `
# Mastering Stop Loss Techniques: Your Survival Guide

The single most important difference between a professional trader and an amateur is how they handle losing trades. An amateur "hopes" a loss will turn around; a professional has an automated exit plan. That plan is your **Stop Loss**.

### Types of Stop Losses
1. **Fixed Percentage**: You exit if the stock drops by a fixed amount (e.g., 2%). This is simple but doesn't account for how "wild" the stock is.
2. **Volatility Based (ATR)**: Using the Average True Range (ATR) indicator to set a stop loss. This is much smarter because it gives "breathing room" to volatile stocks while keeping tight stops on stable ones.
3. **Structure Based**: Placing your stop below a major support level or above a major resistance level. This is the most "technical" way to trade.
4. **Time Stop**: If a trade doesn't move in your favor within a certain time (e.g., 2 hours for intraday), you exit. "If it's not working, it's not working."

### Common Mistakes to Avoid
- **Widening your stop**: Never move your stop loss further away to "give the trade more room." This is the path to bankruptcy.
- **Mental Stop Loss**: Many traders say "I'll exit manually when it hits X." In the heat of the moment, emotions will stop you from clicking the button. **Always use a system-generated stop loss order.**
- **Placing stops at "obvious" levels**: Institutional traders often hunt for stops placed exactly at round numbers (like 100 or 500). Place yours slightly below these levels.

### The Trailing Stop Loss
A trailing stop is a dynamic order that follows the price as it moves in your favor. It allows you to "lock in profits" while still giving the trade room to grow.

### Automating Your Exits
Managing stop losses across 10 different positions is stressful. Our algorithmic systems calculate and update your stop losses automatically every second. We can implement "Trailing Stop Losses" that move up with the price, ensuring you exit with maximum profit the moment the trend reverses.

**Never trade without a safety net. Contact FoxPlayer Algo Technologies for automated risk systems.**
    `,
    metaTitle: "Stop Loss Techniques | Professional Risk Management Guide",
    metaDescription: "Learn how to set stop losses like a pro. Master ATR stops, structure stops, and trailing stops to protect your capital and maximize profits.",
    author: "FoxPlayer Education Team",
    readingTime: "6 min read",
    status: "published"
  },
  {
    slug: "choosing-the-right-broker",
    title: "Choosing the Right Broker in India: A Comprehensive Checklist",
    category: "Basics",
    excerpt: "Not all brokers are created equal. Learn what to look for in terms of technology, brokerage, and API reliability for your trading journey.",
    content: `
# Choosing the Right Broker in India: A Comprehensive Checklist

Your broker is your most important business partner. They provide the gateway to the markets and the technology you use to execute your strategies. In India, there are dozens of options, from traditional full-service brokers to modern discount brokers. How do you choose the right one for you?

### 1. Technology and API Reliability
If you are planning to automate your trading, this is your #1 priority.
- Does the broker provide a **Stable API**?
- Is the API documentation clear?
- Are there hidden costs for API access? (e.g., Shoonya is free, while Zerodha charges ₹2000/month).

### 2. Brokerage and Charges
Trading is a business of margins. High brokerage will eat your profits.
- **Discount Brokers**: Typically charge a flat ₹20 per trade regardless of the volume. Ideal for active traders.
- **Full-Service Brokers**: Charge a percentage of the volume. Only worth it if you need their research reports and advisory services.

### 3. Margin and Leverage
Different brokers have different "risk appetites." Some might provide higher leverage for intraday trading, while others are more conservative. Ensure your broker's margin policies align with your trading style.

### 4. Support and Customer Service
When something goes wrong—and it will—you need a broker you can call.
- Check their response time on calls and emails.
- Look for a broker with a good reputation on platforms like TradingView or social media.

### 5. Financial Stability
Ensure the broker is SEBI registered and has a healthy track record. Look for their "Net Worth" and the number of active clients they handle.

### The FoxPlayer Recommended List
We have built deep integrations with India's leading brokers. For automated trading, we highly recommend **Shoonya (Finvasia)** for their zero-brokerage and free API, and **AliceBlue** or **Angel One** for their robust infrastructure.

**Need help setting up your automated bridge with a specific broker? Contact FoxPlayer Algo Technologies.**
    `,
    metaTitle: "Choosing the Best Broker in India | Checklist for Traders",
    metaDescription: "Learn how to evaluate brokers for algorithmic and manual trading. Compare APIs, brokerage costs, and reliability for Indian markets.",
    author: "FoxPlayer Education Team",
    readingTime: "7 min read",
    status: "published"
  },
  {
    slug: "intraday-trading-method",
    title: "Mastering the Intraday Trading Method: Tips for Day Traders",
    category: "Methods",
    excerpt: "Learn the rules of day trading. Master the art of entering and exiting positions within the same day to avoid overnight risks.",
    content: `
# Mastering the Intraday Trading Method: Tips for Day Traders

Intraday trading is the practice of buying and selling stocks within the same trading day. It is fast, exciting, and offers the potential for quick profits. However, it is also the most challenging style of trading because of the noise and volatility of the market.

### The Core Principles of Intraday
1. **No Overnight Risk**: You square off your positions before 3:30 PM. You don't have to worry about what happens in the global markets overnight.
2. **Leverage**: Brokers provide 5x leverage for intraday, allowing you to trade larger volumes with less capital.
3. **Liquidity is Key**: Only trade stocks with high volume. You must be able to enter and exit instantly without "slippage."

### Successful Intraday Techniques
- **ORB (Opening Range Breakout)**: Trading the breakout of the first 15 or 30 minutes of the market.
- **VWAP (Volume Weighted Average Price)**: Using VWAP as a "fair price" indicator. Buying above VWAP and selling below it.
- **Scalping**: Taking dozens of small trades throughout the day to capture tiny price movements.

### The Psychology of Day Trading
Day trading is an emotional rollercoaster. To survive, you must:
- **Never Revenge Trade**: If you lose a trade, don't try to "get it back" immediately.
- **Stick to Your Hours**: Most profitable intraday moves happen between 9:15-11:00 AM and 2:00-3:30 PM.
- **Stop Means Stop**: If you hit your daily loss limit, turn off your computer.

### Automating the Day Trade
The biggest challenge for an intraday trader is speed. By the time you spot a breakout and type in the order, the move might already be over. Our algorithmic systems can monitor 20 different stocks for an "Opening Range Breakout" and execute orders in milliseconds, ensuring you always get the best possible entry.

**Take the emotion out of day trading. Contact FoxPlayer Algo Technologies for intraday automation.**
    `,
    metaTitle: "Intraday Trading Methods | Best Strategies for Day Trading",
    metaDescription: "Learn the fundamental rules of intraday trading. Master ORB, VWAP, and liquidity-based strategies for the Indian stock market.",
    author: "FoxPlayer Education Team",
    readingTime: "6 min read",
    status: "published"
  }
];

async function seed() {
    console.log("Seeding Academy Articles (Batch 6)...");
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
    console.log("Batch 6 Complete!");
    process.exit(0);
}

seed();
