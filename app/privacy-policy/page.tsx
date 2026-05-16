import { ShieldCheck, Lock, EyeOff, UserX, Globe, Bell, Mail, Database, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Foxplayer Algo Technologies",
  description: "Learn how Foxplayer Algo Technologies protects your data and broker credentials.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "May 6, 2024";

  return (
    <main className="bg-background pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-3.5 h-3.5" /> Trust & Safety
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Privacy Policy</h1>
          <p className="text-white/40 text-lg">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-12">
          {/* Introduction */}
          <section className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Globe className="w-6 h-6 text-primary" /> 1. Introduction
            </h2>
            <p className="text-white/60 leading-relaxed">
              Welcome to <strong>Foxplayer Algo Technologies</strong> ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. 
              Foxplayer is a software automation bridge that forwards user-generated signals to your broker. We are NOT a broker, advisory service, or financial institution. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website 
              <a href="https://www.foxplayer.co.in" className="text-primary hover:underline ml-1">www.foxplayer.co.in</a> and use our platform.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Database className="w-6 h-6 text-primary" /> 2. Information We Collect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Personal Details", desc: "Name, email address, and mobile number." },
                { title: "Platform Credentials", desc: "Login credentials for your Foxplayer account." },
                { title: "Broker API Credentials", desc: "API Keys and Secrets required to execute trades on your behalf.", highlight: true },
                { title: "Payment Info", desc: "Handled securely via Razorpay (we do not store card details)." },
                { title: "Technical Data", desc: "IP address, browser type, and device information." }
              ].map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${item.highlight ? 'border-primary/20 bg-primary/5' : 'border-white/5 bg-white/[0.01]'}`}>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/40">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Encryption & Security */}
          <section className="bg-primary/5 border border-primary/20 p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Lock className="w-24 h-24 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
               3. Data Storage & Security
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Security is our highest priority. We implement institutional-grade security measures to protect your information:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                <span className="text-white/60 text-sm"><strong className="text-white">Encrypted Credentials:</strong> Your broker API credentials are encrypted using AES-256 bit encryption and are never shared with any third party.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                <span className="text-white/60 text-sm"><strong className="text-white">Secure Processing:</strong> We use industry-standard protocols to ensure signals are forwarded securely to your broker endpoints.</span>
              </li>
            </ul>
          </section>

          {/* Third Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <EyeOff className="w-6 h-6 text-primary" /> 4. Third-Party Services
            </h2>
            <p className="text-white/60 mb-6">We use trusted third-party providers to enhance our service:</p>
            <div className="space-y-4">
              {[
                { name: "Firebase", role: "Secure authentication and real-time database management." },
                { name: "Razorpay", role: "Secured payment gateway for processing all subscriptions." },
                { name: "Vercel", role: "Infrastructure and hosting for ultra-fast performance." },
                { name: "Google Analytics", role: "Aggregated, anonymous usage data for platform improvement." }
              ].map((service, i) => (
                <div key={i} className="flex justify-between items-center p-4 border-b border-white/5">
                  <span className="text-white font-medium">{service.name}</span>
                  <span className="text-sm text-white/30 text-right max-w-xs">{service.role}</span>
                </div>
              ))}
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="bg-amber-500/5 border border-amber-500/10 p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-amber-500" /> 5. User Responsibilities
            </h2>
            <p className="text-white/60 leading-relaxed">
              Users are strictly responsible for safeguarding their Foxplayer and Broker login credentials. Foxplayer will never ask for your password via email or phone. 
              If you suspect any unauthorized access, you must notify us and rotate your API keys immediately.
            </p>
          </section>

          {/* Data Rights & Deletion */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <UserX className="w-6 h-6 text-primary" /> 6. Data Sharing & Deletion
            </h2>
            <div className="space-y-6">
              <p className="text-white/60">
                <strong>Data Sharing:</strong> We do NOT sell, rent, or trade your data to third parties. Data is shared only with our infrastructure partners (listed above) to the extent necessary to provide the service.
              </p>
              <p className="text-white/60">
                <strong>Deletion Request:</strong> You can request full account deletion at any time. Upon request, all your personal data and broker credentials will be permanently erased from our databases within 30 days.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="text-center pt-16 border-t border-white/5">
            <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Questions or Concerns?</h2>
            <p className="text-white/40 mb-8 max-w-xl mx-auto">
              If you have any questions about this Privacy Policy or how we handle your data, please reach out to our privacy team.
            </p>
            <a href="mailto:raffiq_sr@yahoo.co.in" className="inline-block px-10 py-4 bg-white text-background font-bold rounded-full hover:bg-white/90 transition-all">
              raffiq_sr@yahoo.co.in
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
