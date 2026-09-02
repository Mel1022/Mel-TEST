"use client";

import { useState, type ReactNode } from "react";

export default function PriceReveal({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="bg-surface py-10 text-center">
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-card bg-navy px-8 py-3.5 text-sm font-bold text-white shadow-card hover:bg-navy-dark transition-colors"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          {open ? "Hide Pricing" : "See Pricing"}
        </button>
      </div>

      {open && <div>{children}</div>}
    </div>
  );
}
