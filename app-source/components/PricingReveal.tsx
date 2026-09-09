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
    <button
      onClick={() => setVisible((v) => !v)}
      className="flex-1 inline-flex items-center justify-center rounded-card border border-white/15 px-5 py-2.5 text-sm font-bold text-white/40 hover:border-white/30 hover:text-white/60 transition-colors"
    >
      Pricing
    </button>
  );
}
