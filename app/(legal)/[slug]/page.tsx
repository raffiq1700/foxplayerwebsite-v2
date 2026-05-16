import { Metadata } from "next";
import { notFound } from "next/navigation";

const legalPages = {
  "disclaimer": {
    title: "Disclaimer",
    content: `
      # Disclaimer for FoxPlayer Algo Technologies
      
      Foxplayer Algo Technologies is a technology provider and does not provide investment advisory, portfolio management, or trading tips. Algorithmic trading involves significant risk of loss and is not suitable for all investors.
      
      ## No Financial Advice
      The information provided on this website and through our platform is for educational and informational purposes only. We do not guarantee any specific returns or protection from losses.
      
      ## Technical Risks
      Trading software can experience technical glitches, API disconnects, or latency issues. FoxPlayer is not responsible for any losses incurred due to technical failures, broker API downtime, or internet connectivity issues.
      
      ## Risk Warning
      Trading in derivatives (Futures & Options) is high-risk. Before trading, please ensure you understand the risks involved and consult with a certified financial advisor.
    `
  },
  "terms": {
    title: "Terms and Conditions",
    content: `
      # Terms and Conditions
      
      By using FoxPlayer Algo Technologies, you agree to comply with the following terms.
      
      ## User Obligations
      - You must be 18 years or older.
      - You are responsible for maintaining the confidentiality of your API keys and login credentials.
      - You agree not to use the platform for any illegal activities.
      
      ## Subscription & Billing
      - Subscriptions are billed in advance on a monthly or yearly basis.
      - We reserve the right to change our pricing with 30 days notice.
      
      ## Limitation of Liability
      FoxPlayer shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.
    `
  },
  "privacy-policy": {
    title: "Privacy Policy",
    content: `
      # Privacy Policy
      
      Your privacy is important to us. This policy explains how we collect and use your data.
      
      ## Data Collection
      We collect information you provide (name, email) and technical data (IP address, usage logs). We DO NOT store your broker passwords or secret keys on our main servers unless explicitly required for bridge functionality, and even then, they are encrypted.
      
      ## Data Usage
      We use your data to provide our services, communicate updates, and improve platform performance.
      
      ## Security
      We implement institutional-grade encryption and security protocols to protect your data from unauthorized access.
    `
  },
  "refund-policy": {
    title: "Refund Policy",
    content: `
      # Refund Policy
      
      At FoxPlayer, we strive for excellence, but we understand that requirements can change.
      
      ## 7-Day Trial
      We offer a 7-day free trial for most retail plans. Please use this time to evaluate the platform.
      
      ## Refunds
      Refunds are generally not provided for active subscriptions. However, if you experience a verified technical failure on our part that prevents trading, we may issue a pro-rated credit or refund at our discretion.
      
      ## Cancellations
      You can cancel your subscription at any time through the dashboard. No further charges will be made after cancellation.
    `
  },
  "about": {
    title: "About Us",
    content: `
      # About FoxPlayer Algo Technologies
      
      Founded by Mohamed Raffiq, FoxPlayer is a leader in Indian algorithmic trading infrastructure.
      
      ## Our Mission
      To democratize algorithmic trading by providing institutional-grade tools to retail and professional traders in India.
      
      ## Our Technology
      We leverage Next.js, Python, and high-performance execution engines to deliver zero-latency trading experiences.
      
      ## Our Commitment
      Transparency, security, and exceptional technical support are the pillars of our organization.
    `
  },
  "faq": {
    title: "Frequently Asked Questions",
    content: `
      # Frequently Asked Questions
      
      ## Do I need coding knowledge?
      No. FoxPlayer provides pre-built strategy templates and a no-code TradingView bridge.
      
      ## Which brokers do you support?
      We currently support AliceBlue, Angel One, Shoonya, and Groww. Upstox and Zerodha integrations are coming soon.
      
      ## Is my data secure?
      Yes. We use AES-256 encryption for all sensitive data and follow SEBI-compliant technical guidelines.
      
      ## Can I run my own Python strategies?
      Yes. Our Professional and Institutional plans support custom Python strategy hosting.
    `
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = legalPages[params.slug as keyof typeof legalPages];
  if (!page) return { title: "Page Not Found" };
  return {
    title: `${page.title} | FoxPlayer Algo Technologies`,
  };
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  const page = legalPages[params.slug as keyof typeof legalPages];

  if (!page) notFound();

  return (
    <main className="bg-background min-h-screen pt-40 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-white/40 prose-p:leading-relaxed prose-strong:text-white prose-headings:tracking-tighter">
          <div dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(page.content) }} />
        </div>
      </div>
    </main>
  );
}

// Simple helper to render the hardcoded markdown
function convertMarkdownToHtml(markdown: string) {
  return markdown
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl md:text-6xl font-black mb-12 tracking-tighter">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-12 mb-6 text-primary uppercase tracking-widest">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-8 mb-4">$1</h3>')
    .replace(/^\* (.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
    .replace(/^\- (.*$)/gim, '<li class="ml-4 mb-2">$1</li>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\n\n/gim, '<br /><br />');
}
