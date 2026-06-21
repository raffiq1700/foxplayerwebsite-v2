import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816",
};

export const metadata: Metadata = {
  title: "FoxPlayer Algo Technologies",
  description: "India's best Algorithmic Trading Platform. Custom Algo Development & Broker API Integration for Automated Trading Solutions.",
  keywords: ["algo trading platform India", "copy trading software India", "TradingView webhook India", "automated trading platform India", "strategy marketplace India", "Shoonya API trading", "Zerodha Kite Connect automation"],
  metadataBase: new URL("https://www.foxplayer.co.in"),
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "https://www.foxplayer.co.in/",
    languages: {
      "en-IN": "https://www.foxplayer.co.in/",
      "x-default": "https://www.foxplayer.co.in/",
    },
  },
  openGraph: {
    title: "FoxPlayer Algo Technologies",
    description: "India's best Algorithmic Trading Platform. Custom Algo Development & Broker API Integration for Automated Trading Solutions.",
    url: "https://www.foxplayer.co.in",
    siteName: "FoxPlayer Algo Technologies",
    images: ["/logo.png"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FoxPlayer Algo Technologies",
    description: "India's best Algorithmic Trading Platform. Custom Algo Development & Broker API Integration for Automated Trading Solutions.",
    images: ["/logo.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        {/* Organization Schema */}
        <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FoxPlayer Algo Technologies",
            "url": "https://www.foxplayer.co.in",
            "logo": "https://www.foxplayer.co.in/logo.png",
            "sameAs": [
              "https://www.linkedin.com/in/mohamed-raffiq-6b97a6a7"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-99831-68522",
              "contactType": "customer support",
              "areaServed": "IN",
              "availableLanguage": "English"
            }
          })}
        </Script>
        {/* Website Search Schema */}
        <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "FoxPlayer Algo Technologies",
            "url": "https://www.foxplayer.co.in",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.foxplayer.co.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>
        {/* Local Business Schema */}
        <Script id="local-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "FoxPlayer Algo Technologies",
            "image": "https://www.foxplayer.co.in/logo.png",
            "@id": "https://www.foxplayer.co.in",
            "url": "https://www.foxplayer.co.in",
            "telephone": "+91-9983168522",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Expert Delivery Center",
              "addressLocality": "Coimbatore",
              "addressRegion": "TN",
              "postalCode": "641001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 11.0168,
              "longitude": 76.9558
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            }
          })}
        </Script>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"}');
          `}
        </Script>
        {/* Affiliate Banner — static, not sticky */}
        <div className="relative z-[60] bg-surface-elevated border-b border-white/5 text-center py-2 px-4">
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
        <StickyMobileCTA />

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
            s0.parentNode.insertBefore(s1,s0);
            })();
            `
          }}
        />
      </body>
    </html>
  );
}
