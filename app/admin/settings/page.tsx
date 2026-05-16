"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { User, Lock, Save, Loader2, CheckCircle2, ArrowLeft, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AdminSettings() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ username: "", newPassword: "", confirmPassword: "" });
      } else {
        const data = await res.json();
        setError(data.message || "Error updating settings");
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-primary/20 focus:border-primary/50 outline-none transition-all placeholder:text-white/10 text-sm";
  const labelClasses = "block text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3 ml-1";

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#050505] relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link href="/admin" className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <h1 className="text-4xl font-black text-white tracking-tighter">Security Settings</h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 md:p-12 border-white/5"
        >
          <div className="flex items-center gap-4 mb-10 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl">
            <ShieldAlert className="w-6 h-6 text-yellow-500 flex-shrink-0" />
            <p className="text-xs text-yellow-500/80 leading-relaxed font-medium">
              Updating your credentials will take effect immediately. Ensure you store your new access codes securely.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className={labelClasses}>New Username</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className={inputClasses.replace("px-5", "pl-12")}
                  placeholder="Leave blank to keep current"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className={labelClasses}>New Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary transition-colors" />
                  <input
                    type="password"
                    value={formData.newPassword}
                    onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                    className={inputClasses.replace("px-5", "pl-12")}
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div>
                <label className={labelClasses}>Confirm New Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary transition-colors" />
                  <input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className={inputClasses.replace("px-5", "pl-12")}
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-[10px] font-black uppercase tracking-widest bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                {error}
              </p>
            )}
            
            {success && (
              <p className="text-green-500 text-[10px] font-black uppercase tracking-widest bg-green-500/10 p-4 rounded-xl border border-green-500/20 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> System credentials updated successfully
              </p>
            )}

            <Button type="submit" disabled={loading} className="btn-primary py-4 px-10 text-xs gap-2">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              Apply Security Updates
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
