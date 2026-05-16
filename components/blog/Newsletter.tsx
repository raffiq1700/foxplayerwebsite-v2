import { Button } from "@/components/ui/Button";

export function Newsletter() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 border-y border-white/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stay Ahead of the Markets</h2>
        <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light">
          Join 10,000+ traders receiving our weekly insights on algorithmic trading, market trends, and new automated strategies.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50"
            required
          />
          <Button type="submit" size="lg" className="whitespace-nowrap">
            Subscribe Now
          </Button>
        </form>
        <p className="text-white/40 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}
