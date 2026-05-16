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
  // RISK MANAGEMENT
  {
    slug: "importance-of-capital-preservation",
    title: "The Golden Rule of Trading: Capital Preservation",
    category: "Risk Management",
    excerpt: "Learn why staying in the game is more important than winning big. Discover the math behind losses and how to protect your trading capital.",
    content: `
# The Golden Rule of Trading: Capital Preservation

In the world of trading, your capital is your "blood". If you run out of blood, the game is over. Most retail traders enter the market with the goal of "making money," but professional traders enter with the goal of "not losing money." This shift in mindset is the difference between a gambler and a professional.

### The Mathematics of a Loss
This is the most important calculation every trader must understand. If you lose a certain percentage of your capital, you need a *higher* percentage return just to get back to zero:
- **10% Loss**: You need an 11% gain to recover.
- **20% Loss**: You need a 25% gain to recover.
- **50% Loss**: You need a **100% gain** just to be even!
This "Math of Drawdowns" proves that preventing a large loss is mathematically more important than seeking a large gain.

### Strategies for Capital Preservation
1. **Never Bet the Farm**: Never put your entire account into one single trade.
2. **The 2% Rule**: Never risk more than 2% of your account on any single trade. If you have 10 Lakhs, your max loss per trade should be 20,000.
3. **Diversification**: Don't put all your money into one sector (like just IT or just Banking).
4. **Use Stop Losses**: A stop loss is an automated instruction to exit a losing trade before it becomes a disaster.

### The Role of Discipline
Discipline is the bridge between your plan and your results. You must have the discipline to:
- **Take the loss**: Don't "hope" the market will come back.
- **Follow your rules**: Even when you feel "lucky."
- **Stay out**: Sometimes the best trade is no trade.

### Automating Your Safety Net
Human beings are biologically wired to hate losing. This is why we often cancel our stop losses or "average down" on a losing position. Algorithmic systems don't have emotions. An algorithm will execute a stop loss at the exact price requested, without hesitation or hope. At FoxPlayer, we build "Risk Engines" that sit on top of your strategies, ensuring you never exceed your daily loss limits.

**Protect your capital with automated risk management. Contact FoxPlayer Algo Technologies.**
    `,
    metaTitle: "Capital Preservation Strategies | Protect Your Trading Account",
    metaDescription: "Learn the math behind trading losses. Discover how to preserve your capital and stay in the game using the 2% rule and stop losses.",
    author: "FoxPlayer Education Team",
    readingTime: "5 min read",
    status: "published"
  },
  {
    slug: "position-sizing-methods",
    title: "Mastering Position Sizing: How Much to Trade?",
    category: "Risk Management",
    excerpt: "Position sizing is the secret to long-term survival. Learn different methods like Fixed Fractional and Kelly Criterion to optimize your trades.",
    content: `
# Mastering Position Sizing: How Much to Trade?

If you ask a professional trader what the most important part of their strategy is, they won't say "the entry signal." They will say **Position Sizing**. Position sizing is the process of determining how many units (shares, lots, or contracts) to trade. It is the lever that controls your risk and your potential reward.

### Why Position Sizing Matters
Two traders can have the exact same strategy. Trader A might grow their account by 50%, while Trader B goes bankrupt. The difference? Trader B took positions that were too large for their account size, leading to a "Risk of Ruin."

### Popular Position Sizing Methods
1. **Fixed Amount**: You trade the same number of lots every time. Simple, but doesn't account for varying risk.
2. **Fixed Fractional (Percent Risk)**: You calculate the position size based on a fixed percentage of your account (e.g., 1% risk).
   - *Formula*: (Account Risk Amount) / (Stop Loss Distance) = Position Size.
3. **The Kelly Criterion**: A mathematical formula used to determine the optimal size of a series of bets to maximize long-term growth. It's complex but highly effective for experienced traders.

### Practical Example
If you have a ₹1,00,000 account and want to risk 1% (₹1,000). You want to buy a stock at ₹500 with a stop loss at ₹490 (₹10 risk per share).
- **Position Size**: ₹1,000 / ₹10 = 100 shares.
If the stop loss was at ₹495 (₹5 risk), you could buy 200 shares. This ensures your **total risk** remains constant regardless of the stop loss width.

### Risk Management and Discipline
- **Don't Overleverage**: Using too much margin is the fastest way to blow an account.
- **Adjust for Volatility**: In wild markets, your position sizes should be smaller.
- **Stay Consistent**: Don't change your sizing rules because you had a "feeling" about a trade.

### Automating Position Sizing
Calculating the correct position size manually during fast market moves is difficult. Our algorithmic systems calculate the optimal position size for every single trade in real-time, based on your account balance and the current volatility of the asset. This ensures you are always trading within your risk limits.

**Optimize your risk with automated position sizing. Contact FoxPlayer Algo Technologies.**
    `,
    metaTitle: "Position Sizing Methods | Risk Management for Traders",
    metaDescription: "Learn how to calculate the perfect position size for every trade. Master Fixed Fractional and Kelly Criterion to survive and thrive.",
    author: "FoxPlayer Education Team",
    readingTime: "7 min read",
    status: "published"
  },
  // BASICS
  {
    slug: "introduction-to-financial-markets",
    title: "Introduction to Financial Markets: How Money Moves",
    category: "Basics",
    excerpt: "A beginner's guide to the global financial system. Understand the roles of stocks, bonds, and derivatives in the modern economy.",
    content: `
# Introduction to Financial Markets: How Money Moves

To the uninitiated, the stock market looks like a chaotic jumble of numbers and flashing lights. But beneath the surface, it is a highly organized system designed to do one thing: move capital from people who have it (investors) to companies that need it to grow.

### What are Financial Markets?
Financial markets are platforms where buyers and sellers trade assets like stocks, bonds, currencies, and commodities. In India, the primary markets are the National Stock Exchange (NSE) and the Bombay Stock Exchange (BSE).

### The Primary Actors
1. **Companies (Issuers)**: They list themselves on the exchange to raise money for expansion.
2. **Retail Investors**: Individual people like you and me trading our own savings.
3. **Institutional Investors**: Mutual funds, insurance companies, and hedge funds (FIIs and DIIs) that trade huge volumes.
4. **Brokers**: The middlemen who provide the technology for you to place trades.

### Types of Markets
- **Equity Market (Cash)**: Where you buy and sell shares of companies.
- **Derivatives Market (F&O)**: Where you trade contracts based on the price of stocks (Futures and Options).
- **Commodity Market**: Where you trade physical goods like Gold, Silver, and Crude Oil.
- **Currency Market (Forex)**: Where you trade the value of the Rupee against the Dollar, Euro, etc.

### Why Do Prices Move?
Prices move based on **Supply and Demand**. If more people want to buy a stock (High Demand) than sell it, the price goes up. If bad news comes out and everyone wants to sell (High Supply), the price goes down.

### Getting Started Safely
- **Educate Yourself**: Never invest in something you don't understand.
- **Start Small**: Use "paper trading" or small amounts of capital initially.
- **Understand the Risks**: All investments carry risk. Capital is not guaranteed.

### The Future: Algorithmic Trading
Today, over 70% of the volume on major exchanges is generated by computers. Algorithmic trading allows you to participate in these markets with the same speed and precision as the big institutions.

**Ready to start your trading journey with the right technology? Contact FoxPlayer Algo Technologies.**
    `,
    metaTitle: "Introduction to Financial Markets | Trading Basics India",
    metaDescription: "Learn the fundamentals of the stock market. Understand NSE, BSE, and how supply and demand drive price movements.",
    author: "FoxPlayer Education Team",
    readingTime: "6 min read",
    status: "published"
  },
  {
    slug: "order-types-explained",
    title: "Order Types Explained: Market, Limit, and Stop Orders",
    category: "Basics",
    excerpt: "Master the tools of execution. Learn when to use Market orders, Limit orders, and Stop Losses to get the best entry and exit prices.",
    content: `
# Order Types Explained: Market, Limit, and Stop Orders

When you decide to buy or sell a stock, clicking the "Buy" button is only the first step. You must also tell the exchange *how* you want to execute that trade. Using the wrong order type can lead to "Slippage" (paying more than you expected) or missed opportunities.

### 1. Market Orders
A Market Order tells the broker to buy or sell **immediately** at the best available current price.
- **Pros**: Guaranteed execution.
- **Cons**: You might get a bad price if the market is moving fast or if there is low liquidity.

### 2. Limit Orders
A Limit Order tells the broker to buy or sell only at a **specific price** or better.
- **Pros**: You control the price you pay.
- **Cons**: There is no guarantee that your order will be filled if the price never hits your limit.

### 3. Stop Loss (SL) Orders
This is the most important tool for risk management. A Stop Loss order stays "dormant" until a certain price is hit, at which point it becomes a Market or Limit order to exit your position.
- **SL-M (Market)**: Exits at any price once triggered.
- **SL-L (Limit)**: Exits only at a specific price once triggered.

### 4. GTT (Good Till Triggered)
In India, GTT orders allow you to set orders that stay active for up to a year, or until they are triggered. This is great for long-term investors who don't want to monitor the market daily.

### Practical Tips for Beginners
- **Use Limit Orders** for illiquid stocks to avoid paying too much.
- **Always use Stop Losses** on every single trade without exception.
- **Understand Slippage**: This is the difference between your expected price and the price you actually got.

### Automating Order Execution
Professional algorithms use "Smart Order Routing" to split large orders into smaller pieces and use a mix of Limit and Market orders to minimize slippage and hidden costs. At FoxPlayer, we build execution engines that ensure you get the best possible fill every time.

**Optimize your execution with smart order types. Contact FoxPlayer Algo Technologies.**
    `,
    metaTitle: "Market, Limit, and Stop Orders Explained | Trading Basics",
    metaDescription: "Master the different order types in the Indian stock market. Learn how to use SL and Limit orders to protect your capital and get better fills.",
    author: "FoxPlayer Education Team",
    readingTime: "6 min read",
    status: "published"
  }
];

async function seed() {
    console.log("Seeding Academy Articles (Batch 3)...");
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
    console.log("Batch 3 Complete!");
    process.exit(0);
}

seed();
