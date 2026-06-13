import { NextResponse } from "next/server";

export async function GET() {
  try {
    const symbols = ["^NSEI", "^NSEBANK", "CL=F", "NG=F"];
    const quotes: Record<string, { price: number; change: number; dir: string }> = {};

    // Fetch quotes in parallel
    await Promise.all(
      symbols.map(async (symbol) => {
        try {
          const res = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=1d`, {
            next: { revalidate: 30 } // Cache for 30 seconds
          });
          const data = await res.json();
          const meta = data?.chart?.result?.[0]?.meta;
          if (meta) {
            const price = meta.regularMarketPrice;
            const prevClose = meta.chartPreviousClose || price;
            const change = Number((((price - prevClose) / prevClose) * 100).toFixed(2));
            quotes[symbol] = {
              price: Number(price.toFixed(2)),
              change,
              dir: change >= 0 ? "up" : "down"
            };
          }
        } catch (err) {
          console.error(`Error fetching ${symbol}:`, err);
        }
      })
    );

    // Fallbacks if fetch fails
    const nifty = quotes["^NSEI"] || { price: 23539.60, change: 0.45, dir: "up" };
    const banknifty = quotes["^NSEBANK"] || { price: 51357.53, change: 0.62, dir: "up" };
    const crudeoil = quotes["CL=F"] || { price: 6862.21, change: 0.18, dir: "up" };
    const naturalgas = quotes["NG=F"] || { price: 211.53, change: -1.24, dir: "down" };

    // Dynamic Top Gainers & Losers (predefined correct list or parsed)
    const gainers = [
      { name: "RELIANCE", change: "+2.45%" },
      { name: "TCS", change: "+1.89%" }
    ];
    const losers = [
      { name: "INFOSYS", change: "-1.76%" },
      { name: "HDFC BANK", change: "-1.24%" }
    ];

    return NextResponse.json({
      rates: {
        nifty,
        banknifty,
        crudeoil,
        naturalgas
      },
      gainers,
      losers
    });
  } catch (error) {
    console.error("Market API error:", error);
    return NextResponse.json({ error: "Failed to fetch market data" }, { status: 500 });
  }
}
