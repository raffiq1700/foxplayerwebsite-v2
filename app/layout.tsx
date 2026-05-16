import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Foxplayer Algo Technologies | Premium Algo Trading Platform India",
  description: "Advanced automated trading platform in India. Execute Python strategies, use TradingView webhooks, and copy trade with AliceBlue, Shoonya, Angel One, and Upstox.",
  keywords: ["algo trading platform India", "copy trading software India", "TradingView webhook India", "automated trading platform India", "strategy marketplace India"],
  openGraph: {
    title: "Foxplayer Algo Technologies | Premium Algo Trading Platform India",
    description: "Advanced automated trading platform in India. Execute Python strategies, use TradingView webhooks, and copy trade.",
    url: "https://foxplayer.in",
    siteName: "Foxplayer Algo Technologies",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        {/* Affiliate Banner — static, not sticky */}
        <div className="relative z-[60] bg-[#0C0C0C] border-b border-white/5 text-center py-2 px-4">
          <span className="text-[11px] text-white/80">Start your automated trading journey today!</span>
          <a 
            href="https://ekyc.aliceblueonline.com/?source=CBT61" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-2 text-[11px] font-bold text-primary hover:text-white transition-colors"
          >
            OPEN DEMAT ACCOUNT →
          </a>
        </div>
        
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />

        {/* Tawk.to Script */}
        <Script 
          id="tawk-to" 
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/63f7a97e31ebfa0fe7eef538/1gpvms6mt';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
            `
          }}
        />
      </body>
    </html>
  );
}
