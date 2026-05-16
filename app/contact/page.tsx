import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Foxplayer Algo Technologies",
  description: "Get in touch with the Foxplayer Algo Technologies team.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32">
      <div className="max-w-3xl mx-auto px-6 mb-24 w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 text-center">Contact Support</h1>
        <p className="text-lg text-foreground/60 text-center mb-12">
          Have a question about integrating your strategy or broker? We're here to help.
        </p>
        
        <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">Subject</label>
              <select className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Billing Question</option>
                <option>White-label SaaS</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="How can we help you?"></textarea>
            </div>
            <Button type="button" size="lg" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
      <FinalCTA />
    </div>
  );
}
