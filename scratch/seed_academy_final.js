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
    slug: "position-trading-basics",
    title: "Position Trading Basics: The Art of Long-Term Investing",
    category: "Methods",
    excerpt: "Learn how to build wealth by catching major market moves over weeks and months. Discover the patience required for position trading.",
    content: `
# Position Trading Basics: The Art of Long-Term Investing

If day trading is a sprint, then **Position Trading** is a marathon. Position trading is the style of trading where positions are held for weeks, months, or even years. It is the style used by legendary investors like Warren Buffett and George Soros. While it lacks the "adrenaline" of day trading, it is often the most consistent and tax-efficient way to build significant wealth.

### The Philosophy of Position Trading
Position traders are not concerned with daily price fluctuations. They ignore the "noise" of the news and focus on the **Big Picture**. They want to identify a primary market trend and stay in it until the underlying fundamentals or long-term technicals change.

### Key Tools for Position Traders
1. **Fundamental Analysis**: Understanding the company's earnings, debt, and competitive advantage.
2. **Weekly and Monthly Charts**: Looking at long-term price structures to identify major support and resistance levels.
3. **Macro Trends**: Understanding how interest rates, inflation, and global politics affect the market.

### The Benefits of Position Trading
- **Less Stress**: You don't need to stare at a screen all day. You can manage your portfolio in just a few hours a week.
- **Lower Costs**: Since you trade less frequently, you pay much less in brokerage and taxes (like STT).
- **Compounding**: By staying in winning positions for a long time, you allow the power of compounding to work in your favor.

### Risk Management and Discipline
The biggest challenge for a position trader is **Patience**. You must have the discipline to sit through a 5% or 10% pullback without panicking and selling. 
- **Use Wide Stops**: Your stop losses should be based on long-term structures, not daily noise.
- **Stay Diversified**: Since your capital is locked up for a long time, don't put all your eggs in one basket.

### Automating Position Trading
Many people think automation is only for fast day trading. This is a mistake. Algorithms are excellent for position traders because they can monitor dozens of stocks and notify you the *moment* a long-term technical level is hit, ensuring you never miss a major multi-month trend.

**Build your wealth with long-term automation. Contact FoxPlayer Algo Technologies.**
    `,
    metaTitle: "Position Trading Basics | Long-Term Investing Strategies",
    metaDescription: "Master the art of position trading. Learn how to identify and ride major market trends over weeks and months with less stress and higher tax efficiency.",
    author: "FoxPlayer Education Team",
    readingTime: "7 min read",
    status: "published"
  },
  {
    slug: "managing-drawdowns",
    title: "Managing Drawdowns: Surviving the Losing Streaks",
    category: "Risk Management",
    excerpt: "Every trader faces drawdowns. Learn how to handle the psychological and financial impact of a losing streak without losing your head.",
    content: `
# Managing Drawdowns: Surviving the Losing Streaks

In trading, a **Drawdown** is the peak-to-trough decline in your account equity. It is the most painful part of the business, but it is also inevitable. Every single professional trader in history, from Paul Tudor Jones to Jim Simons, has faced periods of losses. The secret to success is not avoiding drawdowns—it's managing them.

### The Psychology of a Drawdown
When you are in a drawdown, your brain starts to play tricks on you. You begin to doubt your strategy, you feel the urge to "revenge trade," and you might even stop taking valid setups out of fear. This is where most retail traders quit.

### How to Manage a Drawdown Professionally
1. **The 'Step Back' Rule**: If you lose 5% or 10% of your account in a short period, stop trading for a few days. Clear your head.
2. **Reduce Position Sizes**: When you are losing, trade smaller. Once you start winning again, slowly increase your sizes. Never do the opposite (averaging down).
3. **Review Your Journal**: Is the drawdown within your strategy's historical "Max Drawdown"? If yes, stay the course. if no, your strategy might be "broken."

### The Recovery Math
Remember the math: a 25% drawdown requires a 33% gain to recover. A 50% drawdown requires a 100% gain. This is why you must **stop the bleeding early**.

### Risk Management and Discipline
- **Respect Your Stop Losses**: Every large drawdown starts as a small, manageable loss that someone refused to take.
- **Maintain Emotional Neutrality**: Try to view your equity curve as a series of numbers, not as "real money" that is disappearing.

### Automating Drawdown Control
The best way to manage drawdowns is to take the decision-making out of your hands. Our systems include "Equity Circuit Breakers." If your account hits a pre-defined drawdown limit (e.g., 5% in a day), the system will automatically lock all trading and cancel all pending orders, protecting you from your own emotions.

**Keep your drawdowns under control with automated risk engines. Contact FoxPlayer Algo Technologies.**
    `,
    metaTitle: "How to Manage Trading Drawdowns | Survival Guide",
    metaDescription: "Learn how to survive the losing streaks. Master the financial and psychological techniques needed to manage drawdowns and protect your capital.",
    author: "FoxPlayer Education Team",
    readingTime: "6 min read",
    status: "published"
  }
];

async function seed() {
    console.log("Seeding Academy Articles (Final Batch)...");
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
    console.log("Final Batch Complete!");
    process.exit(0);
}

seed();
