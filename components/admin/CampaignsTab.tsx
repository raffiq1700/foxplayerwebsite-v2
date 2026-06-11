"use strict";
import { useState, useEffect } from "react";
import { Send, Loader2, RefreshCw, CheckCircle, XCircle } from "lucide-react";

interface Campaign {
  id: string;
  subject: string;
  status: string;
  createdAt: string;
  recipientsCount: number;
  sentCount: number;
  failedCount: number;
}

export default function CampaignsTab({ initialSelectedIds = [] }: { initialSelectedIds?: string[] }) {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{success: boolean, message: string} | null>(null);

  // Composer State
  const [subject, setSubject] = useState("");
  const [messageTemplate, setMessageTemplate] = useState("Dear {name},\n\nThank you for your interest in our {service} services.\n\nBest Regards,\nFoxPlayer Algo Technologies");
  const [selectedIds, setSelectedIds] = useState<string[]>(initialSelectedIds);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/campaigns");
      if (res.ok) {
        const data = await res.json();
        setCampaigns(data);
      }
    } catch {
      console.error("Failed to fetch campaigns");
    } finally {
      setLoading(false);
    }
  };

  const handleSendCampaign = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedIds.length === 0) {
      setResult({ success: false, message: "Please select at least one recipient from the Enquiries tab." });
      return;
    }

    if (!confirm(`Are you sure you want to send this email to ${selectedIds.length} contacts?`)) return;

    setSending(true);
    setResult(null);

    try {
      const res = await fetch("/api/campaigns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, messageTemplate, enquiryIds: selectedIds }),
      });
      const data = await res.json();

      if (res.ok) {
        setResult({ 
          success: true, 
          message: `Campaign completed. Sent: ${data.sent}, Failed: ${data.failed}` 
        });
        setSubject("");
        setSelectedIds([]);
        fetchCampaigns(); // Refresh history
      } else {
        setResult({ success: false, message: data.message || "Failed to send campaign" });
      }
    } catch {
      setResult({ success: false, message: "An error occurred while sending." });
    } finally {
      setSending(false);
    }
  };

  const insertTag = (tag: string) => {
    setMessageTemplate(prev => prev + tag);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Campaign Composer */}
      <div className="glass-card p-6 border-white/10">
        <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Compose Campaign</h3>
        
        {result && (
          <div className={`p-4 mb-6 rounded-lg flex items-center gap-3 ${result.success ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-red-500/10 text-red-500 border border-red-500/20"}`}>
            {result.success ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
            <span className="font-bold text-sm">{result.message}</span>
          </div>
        )}

        <form onSubmit={handleSendCampaign} className="space-y-4">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Selected Recipients</label>
            <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm font-bold text-primary">
              {selectedIds.length} Contacts Selected
              {selectedIds.length === 0 && <span className="text-red-400 ml-2">(Go to Enquiries tab to select contacts)</span>}
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Subject</label>
            <input 
              type="text" 
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-lg text-white outline-none focus:border-primary/50 transition-all" 
              placeholder="Exclusive Update for {name}" 
            />
          </div>

          <div>
            <div className="flex justify-between items-end mb-2">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/40">HTML Message Template</label>
              <div className="flex gap-2">
                <button type="button" onClick={() => insertTag('{name}')} className="text-[10px] bg-white/10 hover:bg-white/20 px-2 py-1 rounded text-white transition-colors">{`{name}`}</button>
                <button type="button" onClick={() => insertTag('{email}')} className="text-[10px] bg-white/10 hover:bg-white/20 px-2 py-1 rounded text-white transition-colors">{`{email}`}</button>
                <button type="button" onClick={() => insertTag('{service}')} className="text-[10px] bg-white/10 hover:bg-white/20 px-2 py-1 rounded text-white transition-colors">{`{service}`}</button>
              </div>
            </div>
            <textarea 
              rows={12} 
              required
              value={messageTemplate}
              onChange={(e) => setMessageTemplate(e.target.value)}
              className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-lg text-white outline-none focus:border-primary/50 transition-all resize-y font-mono text-sm" 
            ></textarea>
            <p className="text-[10px] text-white/30 mt-2">Supports full HTML formatting (e.g., &lt;b&gt;, &lt;a href=&quot;...&quot;&gt;).</p>
          </div>

          <button 
            type="submit" 
            disabled={sending || selectedIds.length === 0}
            className="w-full py-4 bg-primary text-background font-black uppercase tracking-widest rounded-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-4 h-4" /> Send Campaign</>}
          </button>
        </form>
      </div>

      {/* Campaign History */}
      <div className="glass-card p-6 border-white/10 h-[600px] flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider">Campaign History</h3>
          <button onClick={fetchCampaigns} className="text-white/40 hover:text-white p-2">
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 space-y-4">
          {campaigns.length === 0 && !loading && (
            <div className="text-center text-white/40 mt-10">No campaigns sent yet.</div>
          )}
          {campaigns.map(camp => (
            <div key={camp.id} className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-white truncate pr-4">{camp.subject}</h4>
                <span className={`text-[10px] font-black uppercase px-2 py-1 rounded ${camp.status === 'completed' ? 'bg-green-500/20 text-green-500' : camp.status === 'failed' ? 'bg-red-500/20 text-red-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                  {camp.status}
                </span>
              </div>
              <div className="text-[11px] text-white/40 mb-3 font-mono">
                {new Date(camp.createdAt).toLocaleString()}
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div className="bg-black/20 rounded py-2">
                  <div className="text-white/50 text-[10px] uppercase">Target</div>
                  <div className="font-bold text-white">{camp.recipientsCount}</div>
                </div>
                <div className="bg-green-500/10 rounded py-2">
                  <div className="text-green-500/70 text-[10px] uppercase">Sent</div>
                  <div className="font-bold text-green-500">{camp.sentCount}</div>
                </div>
                <div className="bg-red-500/10 rounded py-2">
                  <div className="text-red-500/70 text-[10px] uppercase">Failed</div>
                  <div className="font-bold text-red-500">{camp.failedCount}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
