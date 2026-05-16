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
    slug: "probability-in-trading",
    title: "The Game of Odds: Understanding Probability in Trading",
    category: "Concepts",
    excerpt: "Trading is not about being right; it's about being profitable over time. Learn how to think in probabilities and manage your expectations.",
    content: `
# The Game of Odds: Understanding Probability in Trading

Most people enter the stock market looking for a "guarantee." They want a system that works 100% of the time. However, the reality of professional trading is much closer to a casino or a poker game. It is a game of **Probabilities**. Success in trading comes from finding an "Edge"—a set of conditions where the likelihood of a profit is higher than the likelihood of a loss.

### Thinking in Samples
The biggest mistake beginners make is judging a strategy based on a single trade. If they lose a trade, they think the strategy is "broken." A professional trader thinks in samples of 100 trades.
- **Example**: If your strategy has a 60% win rate, you can still lose 5 times in a row. This is statistically normal.
- **The Lesson**: Don't let the outcome of a single trade affect your emotions. Focus on the process.

### The Math of Expectancy
Expectancy is the average amount you expect to win or lose per trade.
- **Formula**: (Win Rate % × Average Win) - (Loss Rate % × Average Loss).
- If your expectancy is positive, you have a profitable business. If it's negative, you are slowly going bankrupt.

### Why You Don't Need a High Win Rate
You can be profitable with a 30% win rate if your winners are much larger than your losers. This is how trend followers make their millions. They lose 7 out of 10 trades, but the 3 they win are "home runs" that pay for all the losses and more.

### Risk Management and Discipline
- **Manage Your Ego**: Being "right" doesn't pay the bills. Being "profitable" does.
- **Stay Disciplined**: You must take every single trade that your system generates. If you skip a trade because you are "scared," you might miss the one big winner that makes your entire year profitable.

### Automating Probabilistic Strategies
Algorithms are the ultimate masters of probability. They don't get discouraged by a string of losses, and they don't get overconfident after a big win. They simply execute the "Edge" over and over again, allowing the law of large numbers to work in your favor.

**Master the math of the markets. Contact FoxPlayer Algo Technologies for custom algo development.**
    `,
    metaTitle: "Probability in Trading | Master the Game of Odds",
    metaDescription: "Stop looking for guarantees and start thinking in probabilities. Learn how to calculate expectancy and build a profitable trading business.",
    author: "FoxPlayer Education Team",
    readingTime: "6 min read",
    status: "published"
  },
  {
    slug: "leverage-and-margin",
    title: "Leverage and Margin: The Double-Edged Sword",
    category: "Concepts",
    excerpt: "Learn how to use margin to increase your trading power. Understand the risks of over-leverage and how to avoid margin calls.",
    content: `
# Leverage and Margin: The Double-Edged Sword

In the Indian stock market, specifically in the F&O (Futures & Options) segment, **Leverage** is the most powerful tool available to a trader. It allows you to control a large position with a small amount of capital. However, if not managed with extreme caution, leverage is also the fastest way to blow your account.

### What is Margin?
Margin is essentially a security deposit you give to your broker to open a position. For example, to buy ₹10 Lakhs worth of NIFTY Futures, the exchange might require a margin of ₹1 Lakh.
- **Initial Margin**: The amount required to open the trade.
- **M2M (Mark-to-Market)**: The daily profit or loss that is adjusted in your account.

### What is Leverage?
Leverage is the ratio of your position size to your capital. In the example above, you have ₹10 Lakhs exposure with ₹1 Lakh capital. This is **10x Leverage**.
- **The Good**: If the market goes up 1%, you make 10% on your capital.
- **The Bad**: If the market goes down 1%, you lose 10% of your capital.

### The Danger: The Margin Call
If your losses exceed a certain level, your broker will issue a "Margin Call," requiring you to add more funds immediately. If you can't, they will square off your position, often at the worst possible price.

### How to Use Leverage Safely
1. **Never use your maximum leverage**: Just because your broker allows 5x doesn't mean you should use it.
2. **Account for Volatility**: In wild markets, leverage should be much lower.
3. **Always use Stop Losses**: Leverage without a stop loss is a recipe for disaster.

### Automating Margin Management
Monitoring your real-time margin usage across multiple accounts and segments is a full-time job. Our algorithmic platforms provide "Margin Safeguards" that automatically prevent new orders if your exposure exceeds a safe limit, protecting you from unexpected margin calls.

**Stay leveraged, stay safe. Contact FoxPlayer Algo Technologies.**
    `,
    metaTitle: "Leverage and Margin Explained | Professional Trading Concepts",
    metaDescription: "Master the art of using margin safely. Learn how to calculate leverage and avoid the pitfalls of over-exposure in the F&O market.",
    author: "FoxPlayer Education Team",
    readingTime: "5 min read",
    status: "published"
  },
  {
    slug: "building-automated-trading-systems",
    title: "Building Automated Trading Systems: From Idea to Execution",
    category: "Automation",
    excerpt: "Step into the future of finance. Learn the workflow for building, testing, and deploying a fully automated trading robot.",
    content: `
# Building Automated Trading Systems: From Idea to Execution

The journey from a manual trader to an algorithmic trader is one of the most rewarding transitions you can make. It transforms trading from a stressful emotional battle into a systematic, scalable business. But how do you actually build a "bot"?

### Step 1: The Logic (The Strategy)
Every bot starts with a clear set of rules. "Buy when RSI is below 30 and price is at support." If you can't write it on a piece of paper, you can't code it.

### Step 2: The Infrastructure
You need a environment to run your code. This typically involves:
- **Programming Language**: Python is the industry standard due to its simplicity and powerful libraries like Pandas and NumPy.
- **Broker API**: Connecting your code to brokers like Shoonya or Zerodha.
- **Database**: To store historical data and trade logs.

### Step 3: Backtesting
Before going live, you must test your code against historical data. This ensures your "Logic" actually makes money and helps you identify the "Max Drawdown" you should expect.

### Step 4: Paper Trading (Forward Testing)
Run your bot in a simulated environment using real-time market data. This helps you find bugs in your code—like handling connection drops or order rejections—without losing real money.

### Step 5: Deployment on a VPS
You don't want to run your bot on your home laptop. If your internet goes out, your bot stops. Use a **Virtual Private Server (VPS)** to ensure your system is online 24/7 with zero latency.

### The FoxPlayer Solution
Building all of this from scratch takes months of coding and debugging. FoxPlayer provides a "Plug-and-Play" infrastructure. We have already built the API connections, the risk engines, and the order management systems. You just bring your strategy, and we provide the machine.

**Launch your automated system in days. Contact FoxPlayer Algo Technologies.**
    `,
    metaTitle: "How to Build Trading Bots | Automation Guide for Traders",
    metaDescription: "A comprehensive guide to building automated trading systems. From Python logic to VPS deployment, learn how to automate your edge.",
    author: "FoxPlayer Education Team",
    readingTime: "8 min read",
    status: "published"
  }
];

async function seed() {
    console.log("Seeding Academy Articles (Batch 5)...");
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
    console.log("Batch 5 Complete!");
    process.exit(0);
}

seed();
