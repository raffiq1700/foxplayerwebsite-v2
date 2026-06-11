import { FinalCTA } from "@/components/sections/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Foxplayer Algo Technologies",
  description: "Our strict no-refund policy for all Foxplayer Algo Technologies products and services.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 mb-24 w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Refund Policy</h1>
        <p className="text-xl text-white/60 mb-12 border-b border-white/10 pb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>

        <div className="prose prose-invert max-w-none text-white/70 space-y-8 font-light leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. No Refund Policy</h2>
            <p>
              <strong>All sales are final.</strong> We do not offer refunds or exchanges under any circumstances. By making a purchase, you acknowledge and agree that you are not entitled to a refund for any reason, including but not limited to dissatisfaction with the product or service, change of mind, or failure to use the product or service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Due Diligence</h2>
            <p>
              Please ensure you have read and understood all product/service details, features, and limitations before completing your purchase. Foxplayer Algo Technologies provides a powerful platform, but all trading decisions, executions, and subsequent market risks are entirely your responsibility.
            </p>
            <p className="mt-4">
              If you have any questions prior to buying, we encourage you to contact us for clarification. We are happy to help you understand if our platform is right for your needs before you commit financially.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Trading Losses</h2>
            <p>
              Foxplayer Algo Technologies is a software execution tool only. We do NOT refund subscription fees due to trading losses incurred while using our platform. Algorithmic trading carries significant risk, and past performance of any strategy does not guarantee future results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Cancellations</h2>
            <p>
              While we do not provide refunds, you may cancel your subscription at any time to prevent future recurring charges. Upon cancellation, you will retain access to the platform until the end of your current billing cycle.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 p-6 rounded-xl mt-12">
            <h2 className="text-xl font-bold text-white mb-2">Contact Information</h2>
            <p className="text-white/80">
              For any pre-purchase inquiries or clarification on this policy, please contact us at: <br />
              <a href="mailto:raffiq_sr@yahoo.co.in" className="text-primary hover:underline font-bold mt-2 inline-block">raffiq_sr@yahoo.co.in</a>
            </p>
          </section>

        </div>
      </div>
      <FinalCTA />
    </div>
  );
}
