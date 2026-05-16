"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "Algorithmic Trading Software", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "Algorithmic Trading Software", message: "" });
      } else {
        const data = await res.json();
        setError(data.message || "Failed to send message");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">Get In Touch</p>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">Let's Build the <span className="text-white/40">Future</span></h1>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">Have a question or a custom project in mind? Our experts are ready to assist you.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card p-8 border-white/5">
              <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-tight">Direct Channels</h3>
              <div className="space-y-6">
                <a href="mailto:raffiq_sr@yahoo.co.in" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-all">
                    <Mail className="w-6 h-6 text-primary group-hover:text-background" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Email Us</p>
                    <p className="text-white font-bold">raffiq_sr@yahoo.co.in</p>
                  </div>
                </a>
                <a href="https://wa.me/919983168522" className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500 transition-all">
                    <MessageCircle className="w-6 h-6 text-green-500 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/20">WhatsApp Support</p>
                    <p className="text-white font-bold">+91 99831 68522</p>
                  </div>
                </a>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Working Hours</p>
                    <p className="text-white font-bold">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 border-white/5 bg-primary/5">
              <h4 className="text-sm font-black text-white uppercase tracking-widest mb-4">Institutional Presence</h4>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                FoxPlayer Algo Technologies is headquartered in Coimbatore, Tamil Nadu, serving institutional clients across India and globally.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest">
                <MapPin className="w-4 h-4" /> Global Delivery Center
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-12 border-white/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-3 ml-1">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-6 py-4 bg-white/[0.03] border border-white/10 rounded-2xl text-white outline-none focus:border-primary/50 transition-all" 
                      placeholder="Mohamed Raffiq" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-3 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-6 py-4 bg-white/[0.03] border border-white/10 rounded-2xl text-white outline-none focus:border-primary/50 transition-all" 
                      placeholder="name@company.com" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-3 ml-1">Subject</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-6 py-4 bg-white/[0.03] border border-white/10 rounded-2xl text-white outline-none focus:border-primary/50 transition-all appearance-none"
                  >
                    <option className="bg-[#050505]">Algorithmic Trading Software</option>
                    <option className="bg-[#050505]">White Label Solutions</option>
                    <option className="bg-[#050505]">Custom API Development</option>
                    <option className="bg-[#050505]">Other Inquiries</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-3 ml-1">Message</label>
                  <textarea 
                    rows={6} 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-4 bg-white/[0.03] border border-white/10 rounded-2xl text-white outline-none focus:border-primary/50 transition-all resize-none" 
                    placeholder="How can we help you automate your trading?"
                  ></textarea>
                </div>

                {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
                {success && (
                  <p className="text-green-500 text-sm font-bold flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Message sent successfully! We will contact you soon.
                  </p>
                )}

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-5 bg-primary text-background font-black uppercase tracking-widest rounded-2xl hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Message"} 
                  {!loading && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
