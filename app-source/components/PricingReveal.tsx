"use client";

import { useState, useEffect } from "react";

export default function PricingReveal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      document.documentElement.classList.add("prices-on");
    } else {
      document.documentElement.classList.remove("prices-on");
    }
  }, [visible]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-3 pointer-events-none">
      <button
        onClick={() => setVisible((v) => !v)}
        className="pointer-events-auto inline-flex items-center gap-2 bg-[#0B1F17] text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full shadow-lg border border-white/10 hover:bg-[#146B4D] transition-colors"
      >
        <span className={`w-2 h-2 rounded-full transition-colors ${visible ? "bg-[#2E8B62]" : "bg-white/30"}`} />
        {visible ? "Hide Prices" : "Pricing"}
      </button>
    </div>
  );
}
