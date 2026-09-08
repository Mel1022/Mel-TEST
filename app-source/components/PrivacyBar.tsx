"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function PrivacyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("dc_privacy_dismissed")) {
        setVisible(true);
      }
    } catch {}
  }, []);

  function dismiss() {
    try { localStorage.setItem("dc_privacy_dismissed", "1"); } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 sm:bottom-0" style={{ zIndex: 45 }}>
      <div className="bg-navy-dark border-t border-white/10 shadow-[0_-4px_24px_rgba(0,0,0,0.35)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <p className="text-white/75 text-xs sm:text-sm leading-snug text-center sm:text-left flex-1">
            We collect only what&apos;s needed to quote and complete your job — no selling, no marketing lists.
          </p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/privacy-policy/"
              className="inline-flex items-center justify-center rounded-card border border-white/40 text-white px-5 py-2 text-xs sm:text-sm font-bold hover:border-white transition-colors whitespace-nowrap"
            >
              View Privacy Policy
            </Link>
            <button
              onClick={dismiss}
              className="inline-flex items-center justify-center rounded-card bg-gold px-5 py-2 text-xs sm:text-sm font-bold text-navy-dark hover:bg-yellow-400 transition-colors whitespace-nowrap"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
