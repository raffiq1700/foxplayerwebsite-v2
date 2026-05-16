import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#060606] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-6 mb-8">
              <div className="relative w-28 h-28 rounded-full overflow-hidden border border-white/10">
                <Image src="/logo.png" alt="Foxplayer Algo Technologies" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white leading-tight">Foxplayer</span>
                <span className="text-base font-medium text-white/40">Algo Technologies</span>
              </div>
            </Link>
            <p className="text-sm text-white/30 leading-relaxed mb-6 max-w-sm">
              Institutional-grade algorithmic trading infrastructure for the Indian stock market. Built for developers. Trusted by enterprises.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <a href="mailto:raffiq_sr@yahoo.co.in" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all group" title="Email Support">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
              <a href="https://wa.me/919983168522" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all group" title="WhatsApp Support">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
            </div>
            <p className="text-[11px] text-white/15 font-medium">GSTIN: 33ARRPM6216E1ZS</p>
          </div>

          {/* Platform */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-wider mb-5">Platform</h4>
            <ul className="space-y-3 text-sm text-white/30">
              <li><Link href="/features" className="hover:text-white/70 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white/70 transition-colors">Pricing</Link></li>
              <li><Link href="/marketplace" className="hover:text-white/70 transition-colors">Marketplace</Link></li>
              <li><Link href="/blog" className="hover:text-white/70 transition-colors">Academy</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-white/30">
              <li><Link href="/about" className="hover:text-white/70 transition-colors">About</Link></li>
              <li><a href="mailto:raffiq_sr@yahoo.co.in" className="hover:text-white/70 transition-colors">Support Email</a></li>
              <li><Link href="/faq" className="hover:text-white/70 transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-wider mb-5">Legal</h4>
            <ul className="space-y-3 text-sm text-white/30">
              <li><Link href="/disclaimer" className="hover:text-white/70 transition-colors">Disclaimer</Link></li>
              <li><Link href="/terms" className="hover:text-white/70 transition-colors">Terms</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white/70 transition-colors">Refund Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-wider mb-5">Brokers</h4>
            <ul className="space-y-3 text-sm text-white/30">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> AliceBlue</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Angel One</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Shoonya</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Groww</li>
              <li className="opacity-40">Upstox (Soon)</li>
              <li className="opacity-40">IIFL (Soon)</li>
              <li className="opacity-40">5Paisa (Soon)</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <p className="text-sm text-white/90 leading-relaxed max-w-4xl">
            <strong className="text-white font-bold">Disclaimer:</strong> Foxplayer Algo Technologies is a technology platform and does not provide investment advisory, portfolio management, or trading tips. All trading involves risk. Past performance is not indicative of future results. We do not guarantee any profits. Trading in derivatives such as Futures & Options carries substantial risk and is not suitable for all investors. Please read all related documents carefully before trading.
          </p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/80 font-medium">
          <span>© 2026 Foxplayer Algo Technologies. All rights reserved.</span>
          <span className="text-primary">Foxplayer Algo Technologies — Made in India 🇮🇳</span>
        </div>
      </div>
    </footer>
  );
}
