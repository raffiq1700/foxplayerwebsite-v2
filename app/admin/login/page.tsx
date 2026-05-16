"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Lock, User, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] relative overflow-hidden px-6">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="glass-card p-8 md:p-10 border-white/10">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3 border border-primary/30 shadow-[0_0_50px_rgba(34,211,238,0.2)]">
              <ShieldCheck className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tighter mb-2">
              MASTER <span className="text-primary">PORTAL</span>
            </h1>
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em]">Authorized Personnel Only</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Username</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-primary/20 focus:border-primary/50 outline-none transition-all placeholder:text-white/10 text-sm"
                  placeholder="System ID"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary transition-colors" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-primary/20 focus:border-primary/50 outline-none transition-all placeholder:text-white/10 text-sm"
                  placeholder="Access Code"
                  required
                />
              </div>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold rounded-xl flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                {error}
              </motion.div>
            )}

            <Button 
              type="submit" 
              className="w-full py-7 btn-primary rounded-2xl text-sm font-black uppercase tracking-[0.2em]" 
              disabled={loading}
            >
              {loading ? "Decrypting..." : (
                <span className="flex items-center gap-2">
                  Initialize Access <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
              Foxplayer Security Protocol v2.4.0
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
