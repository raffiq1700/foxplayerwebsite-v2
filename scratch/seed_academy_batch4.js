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
    slug: "theta-decay-explained",
    title: "Theta Decay Explained: The Silent Killer of Option Buyers",
    category: "Concepts",
    excerpt: "Understand why time is your enemy as an option buyer. Learn how Theta works and how to use it to your advantage as an option seller.",
    content: `
# Theta Decay Explained: The Silent Killer of Option Buyers

If you trade options, you've likely experienced the frustration of getting the direction of a stock right, only to see your option price stay flat or even decrease. This phenomenon is caused by **Theta Decay**, also known as "Time Decay." For option buyers, Theta is a silent killer, but for option sellers, it is a consistent source of income.

### What is Theta?
Theta is one of the "Option Greeks." It measures the rate at which an option's value decreases as it gets closer to its expiry date. Unlike stocks, which you can hold forever, options are wasting assets. They have an "expiration date," and as that date approaches, the "Extrinsic Value" (or Time Value) of the option must eventually drop to zero.

### The Curve of Decay
Theta decay is not linear. It accelerates as the option gets closer to expiry:
- **60+ Days to Expiry**: Decay is slow and manageable.
- **30-15 Days to Expiry**: Decay starts to pick up speed.
- **Last 7 Days**: Decay becomes aggressive. This is why "Hero or Zero" trades on expiry day are so risky—the time value is disappearing by the minute.

### The Buyer's Dilemma
When you buy an option, you are fighting against the clock. To make a profit, the underlying stock must move in your favor fast enough and far enough to overcome the daily loss caused by Theta.

### The Seller's Advantage
Option sellers (writers) are the ones who collect the premium. Every day that the stock stays sideways or moves in their favor, they "keep" a little bit more of that premium due to Theta decay. This is why professional traders often prefer option selling strategies like Short Straddles or Iron Condors.

### Risk Management Tips
- **Option Buyers**: Buy options with more time (e.g., monthly instead of weekly) to reduce the impact of daily decay.
- **Option Sellers**: Target the "sweet spot" of 30-45 days to expiry, where decay starts to accelerate but the risk is still manageable.
- **Maintain Discipline**: Never hold a losing option position hoping for a miracle—Theta will eat your capital while you wait.

### Automating Theta Strategies
Calculating the "Theta exposure" of a complex multi-leg portfolio is impossible to do manually in real-time. Our algorithmic systems calculate the "Net Theta" of your entire account, ensuring you are always positioned to profit from the passage of time while keeping your risk under control.

**Harness the power of time decay. Contact FoxPlayer Algo Technologies for automated options selling bots.**
    `,
    metaTitle: "Theta Decay Explained | Options Trading Concepts India",
    metaDescription: "Learn why options lose value over time. Understand the impact of Theta on your trades and how to use time decay to your advantage.",
    author: "FoxPlayer Education Team",
    readingTime: "6 min read",
    status: "published"
  },
  {
    slug: "backtesting-and-validation",
    title: "Backtesting and Validation: Don't Trade Blindly",
    category: "Methodology",
    excerpt: "Learn how to use historical data to validate your trading ideas. Understand the difference between backtesting, forward testing, and walk-forward analysis.",
    content: `
# Backtesting and Validation: Don't Trade Blindly

One of the biggest mistakes retail traders make is deploying a strategy based on a "hunch" or a single example they saw on YouTube. Professional trading requires proof. You must know, with mathematical certainty, how your strategy would have performed in the past before you risk a single Rupee in the future. This process is called **Backtesting**.

### What is Backtesting?
Backtesting is the process of applying your trading rules to historical market data to see what the results would have been. It allows you to calculate key metrics like:
- **Win Rate**: What percentage of trades were profitable?
- **Max Drawdown**: What was the biggest loss from a peak to a trough?
- **Profit Factor**: How much did you make for every Rupee you lost?

### The Steps to a Good Backtest
1. **Clean Data**: You need high-quality, tick-by-tick data. Low-quality data leads to "garbage in, garbage out."
2. **Realistic Assumptions**: You must include the cost of **brokerage, taxes, and slippage**. If your strategy makes 1% but costs 1.5% in fees, it's a losing strategy.
3. **Out-of-Sample Testing**: Don't just test on one year of data. Test on a "hidden" set of data to ensure your strategy isn't just "overfitted" to a specific market period.

### Beyond Backtesting: Forward Testing
Once a strategy passes a backtest, you should "Forward Test" it using a paper trading account. This allows you to see how it handles real-time data and execution issues without risking real capital.

### The Dangers of Overfitting
Overfitting happens when you tweak your rules too much to fit the past data perfectly. For example, "I only buy on Tuesdays when the RSI is exactly 42.5." While this might have worked in 2022, it's unlikely to work in the future. Keep your rules simple and robust.

### Automating the Validation Process
Manually backtesting 500 trades is exhausting and prone to error. Our custom backtesting engines can run 5 years of NIFTY data across 100 different parameter combinations in less than 5 minutes. We provide detailed reports that show you the exact "stress points" of your strategy.

**Stop guessing and start testing. Contact FoxPlayer Algo Technologies for custom backtesting software.**
    `,
    metaTitle: "Backtesting and Strategy Validation | Trading Methodology",
    metaDescription: "Learn how to professionally test your trading strategies using historical data. Avoid overfitting and build confidence in your edge.",
    author: "FoxPlayer Education Team",
    readingTime: "8 min read",
    status: "published"
  },
  {
    slug: "systematic-vs-discretionary-trading",
    title: "Systematic vs. Discretionary Trading: Which One is Right for You?",
    category: "Methodology",
    excerpt: "Explore the two main philosophies of trading. Understand the pros and cons of rule-based systems versus human intuition.",
    content: `
# Systematic vs. Discretionary Trading: Which One is Right for You?

When you enter the world of trading, you will eventually have to choose a philosophy. Will you be a **Systematic Trader**, following a strict set of rules, or a **Discretionary Trader**, using your intuition and experience to make decisions? Both can be profitable, but they require very different mindsets.

### 1. Discretionary Trading
Discretionary traders use their "gut feeling," experience, and current market context to make trades.
- **Pros**: Can adapt to "Black Swan" events that an algorithm might miss. Can be more flexible in changing market conditions.
- **Cons**: Extremely prone to emotional bias (fear, greed, ego). Hard to scale and hard to prove the "edge" consistently.

### 2. Systematic Trading (Rule-Based)
Systematic traders have a fixed set of rules for entry, exit, and risk management. If the rules are met, the trade is taken. No exceptions.
- **Pros**: 100% objective. Can be backtested and mathematically proven. Easily scalable through automation.
- **Cons**: Can struggle in "regime shifts" if the rules are too rigid. Requires significant technical effort to build.

### The Human Element
The biggest enemy of a discretionary trader is their own brain. We are evolved to run from danger (fear) and seek rewards (greed). In trading, these instincts are often fatal. A systematic approach "outsources" the discipline to a set of rules or an algorithm, removing the human weakness from the equation.

### Which One Should You Choose?
- **Choose Discretionary** if you have years of experience, a calm temperament, and enjoy the "art" of reading charts.
- **Choose Systematic** if you prefer data, logic, and want a scalable business that doesn't require you to stare at a screen all day.

### The Hybrid Approach
Many of our clients use a hybrid approach: they use discretionary analysis to identify the "Big Picture" trend, and then use systematic algorithms to execute the actual trades with precision.

**Ready to go systematic? Contact FoxPlayer Algo Technologies to turn your trading rules into an automated machine.**
    `,
    metaTitle: "Systematic vs Discretionary Trading | Which is Better?",
    metaDescription: "Compare rule-based systematic trading with intuitive discretionary trading. Learn why automation is the future of professional finance.",
    author: "FoxPlayer Education Team",
    readingTime: "6 min read",
    status: "published"
  }
];

async function seed() {
    console.log("Seeding Academy Articles (Batch 4)...");
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
    console.log("Batch 4 Complete!");
    process.exit(0);
}

seed();
