"use strict";
import { useState, useEffect } from "react";
import { Check, Mail, Search, Trash2, Clock, CheckCircle } from "lucide-react";

export default function EnquiriesTab({ onSelectForCampaign }: { onSelectForCampaign: (ids: string[]) => void }) {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchEnquiries();
  }, [filter]);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/enquiries?status=${filter}`);
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data);
      }
    } catch (err) {
      console.error("Failed to fetch enquiries");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return;
    try {
      const res = await fetch(`/api/enquiries?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setEnquiries(enquiries.filter(e => e.id !== id));
        setSelectedIds(selectedIds.filter(selId => selId !== id));
      }
    } catch (err) {
      console.error("Failed to delete");
    }
  };

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === enquiries.length && enquiries.length > 0) {
      setSelectedIds([]);
    } else {
      setSelectedIds(enquiries.map(e => e.id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
        <div className="flex gap-4">
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="bg-[#050505] border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:border-primary/50 outline-none"
          >
            <option value="all">All Enquiries</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
          </select>
        </div>
        
        {selectedIds.length > 0 && (
          <button 
            onClick={() => onSelectForCampaign(selectedIds)}
            className="flex items-center gap-2 bg-primary text-background px-4 py-2 rounded-lg font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
          >
            <Mail className="w-4 h-4" /> Email Selected ({selectedIds.length})
          </button>
        )}
      </div>

      <div className="glass-card border-white/10 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-white/50">Loading enquiries...</div>
        ) : enquiries.length === 0 ? (
          <div className="p-8 text-center text-white/50">No enquiries found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-4 w-12 text-center">
                    <input 
                      type="checkbox" 
                      checked={selectedIds.length === enquiries.length && enquiries.length > 0}
                      onChange={toggleSelectAll}
                      className="accent-primary w-4 h-4 rounded"
                    />
                  </th>
                  <th className="p-4 text-xs font-black uppercase tracking-widest text-white/40">Contact Name</th>
                  <th className="p-4 text-xs font-black uppercase tracking-widest text-white/40">Email</th>
                  <th className="p-4 text-xs font-black uppercase tracking-widest text-white/40">Interested Service</th>
                  <th className="p-4 text-xs font-black uppercase tracking-widest text-white/40">Date</th>
                  <th className="p-4 text-xs font-black uppercase tracking-widest text-white/40">Actions</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enquiry) => (
                  <tr key={enquiry.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-center">
                      <input 
                        type="checkbox" 
                        checked={selectedIds.includes(enquiry.id)}
                        onChange={() => toggleSelect(enquiry.id)}
                        className="accent-primary w-4 h-4 rounded"
                      />
                    </td>
                    <td className="p-4 font-bold text-white">{enquiry.name}</td>
                    <td className="p-4 text-white/70">{enquiry.email}</td>
                    <td className="p-4 text-primary text-sm">{enquiry.subject}</td>
                    <td className="p-4 text-white/40 text-sm">{new Date(enquiry.createdAt).toLocaleDateString()}</td>
                    <td className="p-4">
                      <button 
                        onClick={() => handleDelete(enquiry.id)}
                        className="text-red-500/50 hover:text-red-500 transition-colors p-2"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
