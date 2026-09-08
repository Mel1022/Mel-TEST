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
      className="w-full py-2.5 bg-[#0d2318] text-white/40 hover:text-white/70 text-[11px] font-medium tracking-widest uppercase transition-colors text-center"
    >
      {visible ? "— Hide Prices —" : "— Pricing —"}
    </button>
  );
}
