import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative py-32 bg-surface border-t border-white/10 overflow-hidden">
      {/* Background glow pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          Ready to Automate <span className="text-gradient">Your Trades?</span>
        </h2>
        <p className="text-xl text-white/60 mb-6 max-w-2xl mx-auto font-light">
          Join 600+ traders using Foxplayer Algo Technologies to execute strategies seamlessly.
        </p>
        <p className="text-sm text-white/30 mb-10">
          For custom software or white label solutions, contact us at <a href="tel:9983168522" className="text-primary font-bold">+91 9983168522</a>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="http://app.foxplayer.co.in" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Start Free Trial
            </Button>
          </a>
          <a href="https://ekyc.aliceblueonline.com/?source=CBT61" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/5">
              Open Demat Account
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
