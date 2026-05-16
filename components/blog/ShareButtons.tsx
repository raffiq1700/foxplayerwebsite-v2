"use client";

import { Link2, Mail, MessageCircle, Check } from "lucide-react";
import { useState } from "react";

export function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://foxplayer.in/blog/${slug}`;

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-4 py-8 border-t border-b border-white/10 my-12">
      <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">Share</span>
      <div className="flex items-center gap-3">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/30 transition-all"
          aria-label="Share on X"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/30 transition-all"
          aria-label="Share on LinkedIn"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(title + " " + url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/30 transition-all"
          aria-label="Share on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
        <a
          href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/30 transition-all"
          aria-label="Share via Email"
        >
          <Mail className="w-4 h-4" />
        </a>
        <button
          onClick={copyLink}
          className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/30 transition-all relative"
          aria-label="Copy link"
        >
          {copied ? <Check className="w-4 h-4 text-accent" /> : <Link2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
