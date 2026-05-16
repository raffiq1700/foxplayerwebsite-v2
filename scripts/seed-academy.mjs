import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const articles = [
  {
    title: "Short Straddle Strategy",
    slug: "short-straddle-strategy",
    category: "Options",
    excerpt: "A popular delta-neutral strategy involving selling both ATM call and put options of the same expiry.",
    content: "# Short Straddle Strategy Guide\n\nThe Short Straddle is a neutral strategy that is employed when the trader expects the underlying asset to experience very little volatility in the near term. It involves selling both an at-the-money (ATM) call and an at-the-money put option with the same expiration date and strike price.\n\n## How it Works\nWhen you sell a straddle, you collect the premium from both options. The goal is for the price of the underlying asset to remain exactly at the strike price until expiration, allowing you to keep the maximum premium.\n\n### Step-by-Step Example\n1. **Underlying Price**: Nifty at 19,500.\n2. **Action**: Sell 19,500 CE and 19,500 PE.\n3. **Premium Collected**: ₹150 for Call + ₹150 for Put = Total ₹300.\n4. **Break-even**: 19,200 and 19,800.\n\n## Advantages and Disadvantages\n- **Pros**: High probability of profit in sideways markets; benefits from time decay (Theta).\n- **Cons**: Unlimited risk if the market moves significantly in either direction.\n\n## Risk Management Tips\n- Use stop-losses on each leg.\n- Monitor the India VIX; high VIX environments are better for entry.\n- Avoid holding through major events like earnings or budget sessions.",
    metaTitle: "Short Straddle Options Strategy Guide | FoxPlayer Academy",
    metaDescription: "Master the Short Straddle strategy. Learn how to profit from low volatility markets with step-by-step examples and risk management tips.",
    focusKeyword: "Short Straddle Strategy",
    faqJson: JSON.stringify([
      { q: "When should I use a Short Straddle?", a: "Use it when you expect the market to stay in a tight range with low volatility." },
      { q: "What is the maximum risk?", a: "Theoretically unlimited if the price moves sharply up or down." }
    ]),
  },
  {
    title: "Iron Condor Strategy",
    slug: "iron-condor-strategy",
    category: "Options",
    excerpt: "A range-bound strategy with limited risk and limited profit, ideal for low volatility markets.",
    content: "# Iron Condor Strategy Mastery\n\nAn Iron Condor is a four-legged option strategy that consists of a bull put spread and a bear call spread. It is designed to profit from a stock experiencing low volatility.\n\n## Structure\n1. Sell Out-of-the-Money (OTM) Put\n2. Buy further OTM Put (Protection)\n3. Sell OTM Call\n4. Buy further OTM Call (Protection)\n\n### Example\nIf Nifty is at 19,000, you might sell the 18,500 Put and buy the 18,300 Put, while also selling the 19,500 Call and buying the 19,700 Call.\n\n## Advantages\n- Defined risk: You know your maximum loss upfront.\n- High probability: Profits as long as the price stays within the wide range.\n\n## Risk Management\nAdjust the wings if one side is threatened, or close the trade when 50% of the maximum profit is reached.",
    metaTitle: "Iron Condor Options Strategy: Low Risk Trading | FoxPlayer",
    metaDescription: "Learn the Iron Condor strategy for consistent monthly income. Step-by-step structures and adjustment techniques for Indian traders.",
    focusKeyword: "Iron Condor Strategy",
    faqJson: JSON.stringify([
      { q: "Is Iron Condor better than Straddle?", a: "Yes, if you prefer defined risk over higher premium collection." }
    ]),
  },
  {
    title: "Bull Call Spread",
    slug: "bull-call-spread",
    category: "Options",
    excerpt: "A bullish strategy using two call options to reduce the cost of the trade while capping maximum profit.",
    content: "# Bull Call Spread Guide\n\nThe Bull Call Spread is used when you are moderately bullish on an asset. It involves buying an In-the-Money (ITM) call and selling an Out-of-the-Money (OTM) call.\n\n## Why use it?\nIt reduces the cost of entry compared to buying a naked call and mitigates the impact of time decay.\n\n## Step-by-Step\n- Buy Strike A (Lower strike)\n- Sell Strike B (Higher strike)\n\n## Pros and Cons\n- **Pros**: Lower cost, lower break-even.\n- **Cons**: Profit is capped if the market rallies significantly.",
    metaTitle: "Bull Call Spread Strategy | Options Trading Academy",
    metaDescription: "How to trade Bull Call Spreads. Reduce your trading cost and manage risk effectively in bullish markets.",
    focusKeyword: "Bull Call Spread",
    faqJson: JSON.stringify([
      { q: "When is it best to enter?", a: "When you expect a moderate move up in the underlying asset." }
    ]),
  },
  {
    title: "Renko Candle Trading",
    slug: "renko-candle-trading",
    category: "Candlesticks",
    excerpt: "Price-based charting that filters out noise and focuses solely on price movement trends.",
    content: "# Renko Chart Trading Strategies\n\nRenko charts are different from standard candlestick charts because they only focus on price movement, ignoring time and volume. Bricks are only added when the price moves a pre-defined amount.\n\n## Key Features\n- **Filters Noise**: Small fluctuations don't create new bricks.\n- **Trend Clarity**: Easy to see support and resistance levels.\n\n## Strategy Example\nWait for two consecutive bricks of the same color to confirm a trend shift. Green for Buy, Red for Sell.",
    metaTitle: "Renko Candle Trading Guide | FoxPlayer Academy",
    metaDescription: "Master Renko charts for clearer trend identification. Learn how to filter market noise and spot institutional moves.",
    focusKeyword: "Renko Candle Trading",
    faqJson: JSON.stringify([
      { q: "Can I use Renko for Intraday?", a: "Yes, by using smaller brick sizes like 0.5% or 10-20 points on Nifty." }
    ]),
  },
  {
    title: "Heikin Ashi Trading",
    slug: "heikin-ashi-trading",
    category: "Candlesticks",
    excerpt: "A unique charting technique that averages price data to create a smoother, trend-focused view.",
    content: "# Heikin Ashi System Mastery\n\nHeikin Ashi candles are calculated using an averaging technique. This results in a smoother chart that helps traders identify trends more easily than traditional Japanese candlesticks.\n\n## Formula Components\n- HA-Close = (Open+High+Low+Close)/4\n- HA-Open = (Open of Prev Bar + Close of Prev Bar)/2\n\n## How to Trade\n- Strong Green candles with no lower wicks indicate a strong uptrend.\n- Small candles with wicks on both sides indicate indecision or potential reversal.",
    metaTitle: "Heikin Ashi Trading Technique | FoxPlayer Academy",
    metaDescription: "Learn to read Heikin Ashi candles for smoother trend following. Best settings for Nifty and Bank Nifty trading.",
    focusKeyword: "Heikin Ashi Trading",
    faqJson: JSON.stringify([
      { q: "Is Heikin Ashi a lagging indicator?", a: "Yes, because it uses averaging, it is slightly slower but more reliable for trend following." }
    ]),
  },
  {
    title: "Price Action Trading",
    slug: "price-action-trading",
    category: "Methodology",
    excerpt: "The art of making trading decisions based on raw price movement without lagging indicators.",
    content: "# Price Action Trading Concepts\n\nPrice Action trading is the practice of analyzing the historical price to predict future moves. It relies on patterns, support/resistance, and supply/demand zones.\n\n## Core Pillars\n1. **Support and Resistance**: Horizontal levels where price historically reacts.\n2. **Market Structure**: Identifying Higher Highs and Higher Lows.\n3. **Candlestick Patterns**: Pin bars, engulfing patterns, and inside bars.",
    metaTitle: "Price Action Trading Course | Institutional Methods",
    metaDescription: "Trade like a pro using price action. No indicators, just raw price data. Learn supply and demand concepts.",
    focusKeyword: "Price Action Trading",
    faqJson: JSON.stringify([
      { q: "Do I need indicators?", a: "Price action traders usually use zero or very few indicators like Volume or Moving Averages." }
    ]),
  },
  {
    title: "Option Buying vs Selling",
    slug: "option-buying-vs-selling",
    category: "Concepts",
    excerpt: "Understanding the probability of profit, theta decay, and capital requirements for both styles.",
    content: "# Option Buying vs Selling: The Ultimate Comparison\n\nOne of the biggest debates in trading is whether to buy or sell options. Both have their place depending on the market environment.\n\n## Option Buying\n- **Pros**: Limited risk, unlimited reward, low capital.\n- **Cons**: Low probability of profit, Theta decay works against you.\n\n## Option Selling\n- **Pros**: High probability of profit, Theta decay is your friend.\n- **Cons**: High capital requirement, unlimited risk (if not hedged).",
    metaTitle: "Option Buying vs Selling | Which is Better?",
    metaDescription: "Compare option buying and selling. Learn which style fits your capital and risk appetite in the Indian market.",
    focusKeyword: "Option Buying vs Selling",
    faqJson: JSON.stringify([
      { q: "Is option selling only for rich traders?", a: "While it requires more margin, hedging can significantly reduce capital needs." }
    ]),
  },
  {
    title: "Scalping Strategy",
    slug: "scalping-strategy",
    category: "Methods",
    excerpt: "High-frequency trading method focusing on profiting from small price changes throughout the day.",
    content: "# Intraday Scalping Techniques\n\nScalping is a trading style that specializes in profiting off small price changes. It requires a strict exit strategy because one large loss could eliminate all small gains.\n\n## Execution Tips\n- Use 1-minute or 5-minute charts.\n- High liquidity stocks only.\n- Focus on quick entries and exits (30 seconds to 5 minutes).",
    metaTitle: "Intraday Scalping Strategy | Quick Profit Methods",
    metaDescription: "Master the art of scalping in Nifty and Bank Nifty. Learn quick entry/exit setups and high-probability zones.",
    focusKeyword: "Scalping Strategy",
    faqJson: JSON.stringify([
      { q: "How many trades per day?", a: "Scalpers can take 10 to 50+ trades depending on market opportunity." }
    ]),
  },
  {
    title: "Swing Trading Strategy",
    slug: "swing-trading-strategy",
    category: "Methods",
    excerpt: "Identifying medium-term trends and holding positions for days or weeks to capture price 'swings'.",
    content: "# Swing Trading for Professionals\n\nSwing trading is a style that attempts to capture gains in a stock within one to seven days. It is perfect for those who cannot watch the screen all day.\n\n## Strategy Elements\n- Use Daily and Hourly charts.\n- Focus on mean reversion or trend breakouts.\n- Position sizing is key.",
    metaTitle: "Swing Trading Strategies for Indian Stocks",
    metaDescription: "Learn professional swing trading. How to pick stocks for positional gains and manage overnight risk.",
    focusKeyword: "Swing Trading Strategy",
    faqJson: JSON.stringify([
      { q: "What is the holding period?", a: "Typically 2 days to 2 weeks." }
    ]),
  },
  {
    title: "Hedging in Trading",
    slug: "hedging-in-trading",
    category: "Risk Management",
    excerpt: "Strategic use of instruments to offset potential losses and protect your overall portfolio capital.",
    content: "# Hedging Strategies Guide\n\nHedging is an investment that is made with the intention of reducing the risk of adverse price movements in an asset. It is essentially an insurance policy for your trades.\n\n## Common Hedges\n1. **Protective Put**: Buying a put option for a stock you own.\n2. **Shorting Futures**: Selling futures against your long portfolio.\n3. **Pairs Trading**: Going long on one stock and short on another in the same sector.",
    metaTitle: "How to Hedge Your Trades | Risk Management Guide",
    metaDescription: "Protect your capital with professional hedging techniques. Learn how to use options and futures to offset losses.",
    focusKeyword: "Hedging in Trading",
    faqJson: JSON.stringify([
      { q: "Does hedging reduce profit?", a: "Yes, it acts like a cost (insurance premium), but it protects you from catastrophic losses." }
    ]),
  },
  {
    title: "Risk Management in Algo",
    slug: "risk-management-in-algo",
    category: "Automation",
    excerpt: "Implementing automated stops, position sizing, and exposure limits in algorithmic systems.",
    content: "# Algo Trading Risk Management\n\nIn automated trading, the risk is not just the market — it is also the system. Automated risk management is the most important part of any algo bot.\n\n## Checklist\n- **Max Drawdown**: Stop all trades if daily loss exceeds X%.\n- **Order Limits**: Prevent 'fat-finger' errors by capping order size.\n- **Connectivity Check**: Auto-square off if the API connection drops.",
    metaTitle: "Automated Risk Management in Algo Trading",
    metaDescription: "Keep your algo bot safe. Learn about drawdown limits, position sizing, and safety switches for automated systems.",
    focusKeyword: "Risk Management in Algo",
    faqJson: JSON.stringify([
      { q: "What is a circuit breaker?", a: "A system-level rule that stops all activity if a specific risk threshold is hit." }
    ]),
  },
  {
    title: "What is Algo Trading",
    slug: "what-is-algo-trading",
    category: "Basics",
    excerpt: "An entry-level guide to understanding automated execution, APIs, and systematic trading rules.",
    content: "# Introduction to Algo Trading\n\nAlgorithmic trading is a method of executing orders using automated pre-programmed trading instructions. It accounts for over 70% of the volume in global markets.\n\n## Key Benefits\n- **Speed**: Execution in milliseconds.\n- **Emotionless**: Trades are based on logic, not fear or greed.\n- **Backtesting**: Validate your ideas on historical data before risking real money.",
    metaTitle: "What is Algo Trading? A Beginner's Guide",
    metaDescription: "Start your journey into automated trading. Learn the basics of APIs, bridge software, and systematic rules.",
    focusKeyword: "What is Algo Trading",
    faqJson: JSON.stringify([
      { q: "Do I need to be a coder?", a: "No, tools like FoxPlayer allow you to automate TradingView or Excel without writing code." }
    ]),
  },
  {
    title: "TradingView Automation",
    slug: "tradingview-automation",
    category: "Automation",
    excerpt: "How to use webhooks to bridge TradingView alerts directly to your broker for instant execution.",
    content: "# TradingView Webhook Automation Guide\n\nTradingView is a powerful charting platform. With FoxPlayer, you can turn any alert into a live order in your broker account using Webhooks.\n\n## Setup Steps\n1. Connect your broker in FoxPlayer.\n2. Create an alert in TradingView.\n3. Paste the FoxPlayer Webhook URL.\n4. Send the JSON payload for Buy/Sell.",
    metaTitle: "Automate TradingView Alerts to Any Broker",
    metaDescription: "Connect TradingView to AliceBlue, Angel One, and more. Instant execution using secure webhooks.",
    focusKeyword: "TradingView Automation",
    faqJson: JSON.stringify([
      { q: "Is there latency?", a: "Our bridges are optimized for sub-100ms execution from alert to exchange." }
    ]),
  },
  {
    title: "Intraday Trading Basics",
    slug: "intraday-trading-basics",
    category: "Basics",
    excerpt: "Master the fundamental rules of day trading, including margin usage, liquid stocks, and timing.",
    content: "# Intraday Trading Fundamentals\n\nDay trading involves buying and selling a financial instrument within the same trading day. All positions are closed before the market shuts.\n\n## Golden Rules\n- **Trade Liquid Stocks**: Always ensure high volume.\n- **Strict Stop Loss**: Never average a losing intraday position.\n- **Follow the Trend**: Don't try to catch falling knives.",
    metaTitle: "Intraday Trading Basics for Indian Markets",
    metaDescription: "Learn the core rules of day trading. Margin usage, stock selection, and timing for Nifty traders.",
    focusKeyword: "Intraday Trading Basics",
    faqJson: JSON.stringify([
      { q: "What is the best time to trade?", a: "The first and last hours of the market usually offer the best volatility." }
    ]),
  },
  {
    title: "Futures vs Options",
    slug: "futures-vs-options",
    category: "Concepts",
    excerpt: "A deep dive into the structural differences, risks, and leverage of derivative instruments.",
    content: "# Futures vs Options: Choosing the Right Instrument\n\nBoth are derivatives, but they behave very differently. Choosing the right one depends on your view and capital.\n\n## Futures\n- **Linear Payoff**: Moves 1:1 with the underlying.\n- **No Decay**: Only pay margin and MTM.\n\n## Options\n- **Non-Linear**: Price is affected by Volatility and Time.\n- **Leverage**: Can control large positions with small premiums.",
    metaTitle: "Futures vs Options Comparison | Derivatives Academy",
    metaDescription: "Understand the difference between Futures and Options. Risk, reward, and capital requirements compared.",
    focusKeyword: "Futures vs Options",
    faqJson: JSON.stringify([
      { q: "Which is riskier?", a: "Naked futures can have larger MTM swings, while options can lose 100% of value if they expire OTM." }
    ]),
  },
];

async function main() {
  console.log("Seeding Academy Articles...");
  for (const article of articles) {
    await prisma.academyArticle.upsert({
      where: { slug: article.slug },
      update: article,
      create: article,
    });
  }
  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
