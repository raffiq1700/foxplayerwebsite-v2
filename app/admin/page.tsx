"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Edit, Trash, Plus, FileText, Settings, Loader2, LogOut, ExternalLink, Shield, Globe } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import EnquiriesTab from "@/components/admin/EnquiriesTab";
import CampaignsTab from "@/components/admin/CampaignsTab";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"blogs" | "academy" | "enquiries" | "campaigns">("blogs");
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    if (activeTab === "enquiries" || activeTab === "campaigns") return;
    setLoading(true);
    try {
      const endpoint = activeTab === "blogs" ? "/api/blogs" : "/api/academy";
      const res = await fetch(endpoint);
      if (res.ok) {
        const result = await res.json();
        setData(result);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredAndSortedData = data
    .filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.slug.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.createdAt || a.date).getTime();
      const dateB = new Date(b.createdAt || b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this entry?")) return;
    
    try {
      const endpoint = activeTab === "blogs" ? `/api/blogs/${id}` : `/api/academy/${id}`;
      const res = await fetch(endpoint, { method: "DELETE" });
      if (res.ok) {
        setData(data.filter(item => item.id !== id));
      }
    } catch (err) {
      alert("Error deleting entry");
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#050505] relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Admin Command Center</span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter">Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/" target="_blank" className="btn-secondary py-3 px-6 text-xs gap-2">
              <ExternalLink className="w-4 h-4" /> View Site
            </Link>
            <button 
              onClick={handleLogout}
              className="px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-black uppercase tracking-widest hover:bg-red-500/20 transition-all flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-72 flex-shrink-0"
          >
            <div className="glass-card p-3 border-white/5 flex flex-col gap-2">
              <button 
                onClick={() => setActiveTab("blogs")}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all text-sm uppercase tracking-wider ${activeTab === "blogs" ? "bg-primary text-background shadow-[0_0_20px_rgba(34,211,238,0.3)]" : "hover:bg-white/5 text-white/40 hover:text-white"}`}
              >
                <FileText className="w-5 h-5" /> Blogs
              </button>
              <button 
                onClick={() => setActiveTab("academy")}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all text-sm uppercase tracking-wider ${activeTab === "academy" ? "bg-primary text-background shadow-[0_0_20px_rgba(34,211,238,0.3)]" : "hover:bg-white/5 text-white/40 hover:text-white"}`}
              >
                <Globe className="w-5 h-5" /> Academy
              </button>
              <div className="my-2 border-t border-white/5" />
              <button 
                onClick={() => setActiveTab("enquiries")}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all text-sm uppercase tracking-wider ${activeTab === "enquiries" ? "bg-primary text-background shadow-[0_0_20px_rgba(34,211,238,0.3)]" : "hover:bg-white/5 text-white/40 hover:text-white"}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Enquiries
              </button>
              <button 
                onClick={() => setActiveTab("campaigns")}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all text-sm uppercase tracking-wider ${activeTab === "campaigns" ? "bg-primary text-background shadow-[0_0_20px_rgba(34,211,238,0.3)]" : "hover:bg-white/5 text-white/40 hover:text-white"}`}
              >
                <Mail className="w-5 h-5" /> Campaigns
              </button>
              <div className="my-2 border-t border-white/5" />
              <Link 
                href="/admin/settings"
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all text-sm uppercase tracking-wider hover:bg-white/5 text-white/40 hover:text-white`}
              >
                <Settings className="w-5 h-5" /> Settings
              </Link>
            </div>
          </motion.div>

          {/* Content Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 min-w-0"
          >
            {activeTab === "enquiries" ? (
              <EnquiriesTab onSelectForCampaign={(ids) => {
                // To pass ids to campaign tab, we can store them in state or context. 
                // Since this is a simple tab switch, we'll store them in localStorage temporarily.
                localStorage.setItem("selectedEnquiryIds", JSON.stringify(ids));
                setActiveTab("campaigns");
              }} />
            ) : activeTab === "campaigns" ? (
              <CampaignsTab initialSelectedIds={
                typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("selectedEnquiryIds") || "[]") : []
              } />
            ) : (
            <div className="glass-card border-white/5 overflow-hidden">
              <div className="p-8 border-b border-white/5 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-1">
                  <h2 className="text-xl font-black text-white uppercase tracking-tight whitespace-nowrap">{activeTab === "blogs" ? "Blog" : "Academy"} List</h2>
                  <div className="relative w-full max-w-md group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    </div>
                    <input 
                      type="text"
                      placeholder={`Search ${activeTab}...`}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-xs font-bold text-white outline-none focus:border-primary/50 transition-all placeholder:text-white/10"
                    />
                  </div>
                  <select 
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
                    className="px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-white/40 outline-none hover:border-white/20 transition-all cursor-pointer"
                  >
                    <option value="newest" className="bg-[#050505]">Newest First</option>
                    <option value="oldest" className="bg-[#050505]">Oldest First</option>
                  </select>
                </div>
                <Link href={activeTab === "blogs" ? "/admin/editor/new" : "/admin/academy/editor/new"}>
                  <Button className="btn-primary py-3.5 px-8 text-[10px] uppercase tracking-widest gap-2">
                    <Plus className="w-4 h-4" /> New {activeTab === "blogs" ? "Blog" : "Academy"}
                  </Button>
                </Link>
              </div>

              <div className="p-0 overflow-x-auto">
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-24 gap-4">
                    <Loader2 className="w-10 h-10 animate-spin text-primary" />
                    <p className="text-xs font-bold text-white/20 uppercase tracking-widest">Accessing Database...</p>
                  </div>
                ) : (
                  <table className="w-full text-left">
                    <thead className="text-[10px] font-black uppercase tracking-widest text-white/20 bg-white/[0.02]">
                      <tr>
                        <th className="px-8 py-5">Title</th>
                        <th className="px-8 py-5">Category</th>
                        <th className="px-8 py-5">Status</th>
                        <th className="px-8 py-5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredAndSortedData.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-8 py-24 text-center">
                            <p className="text-white/20 font-bold uppercase tracking-widest text-xs italic">No entries found matching criteria</p>
                          </td>
                        </tr>
                      ) : (
                        filteredAndSortedData.map((item) => (
                          <tr key={item.id} className="group hover:bg-white/[0.02] transition-all">
                            <td className="px-8 py-6">
                              <div className="font-bold text-white text-sm group-hover:text-primary transition-colors line-clamp-1">{item.title}</div>
                              <div className="text-[10px] text-white/20 font-mono mt-1">{item.slug}</div>
                            </td>
                            <td className="px-8 py-6">
                              <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                {item.category}
                              </span>
                            </td>
                            <td className="px-8 py-6">
                              <span className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${item.published || item.status === "published" ? "text-green-500" : "text-yellow-500"}`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${item.published || item.status === "published" ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" : "bg-yellow-500"}`} />
                                {item.published || item.status === "published" ? "Live" : "Draft"}
                              </span>
                            </td>
                            <td className="px-8 py-6 text-right">
                              <div className="flex justify-end gap-3 opacity-40 group-hover:opacity-100 transition-opacity">
                                <Link href={activeTab === "blogs" ? `/admin/editor/${item.id}` : `/admin/academy/editor/${item.id}`}>
                                  <button className="p-2.5 rounded-xl glass hover:bg-primary/20 hover:text-primary transition-all">
                                    <Edit className="w-4 h-4" />
                                  </button>
                                </Link>
                                <button 
                                  onClick={() => handleDelete(item.id)}
                                  className="p-2.5 rounded-xl glass hover:bg-red-500/20 hover:text-red-500 transition-all"
                                >
                                  <Trash className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
