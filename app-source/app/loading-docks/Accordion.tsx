"use client";

import { useState } from "react";

export function Accordion({ items }: { items: { title: string; summary: string; body: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-steel/10 border border-steel/10 rounded-card overflow-hidden">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-surface transition-colors"
          >
            <div>
              <span className="font-heading font-bold text-navy-dark">{item.title}</span>
              {open !== i && item.summary && (
                <p className="text-sm text-steel mt-1 leading-relaxed">{item.summary}</p>
              )}
            </div>
            <span className="text-gold font-bold text-lg flex-shrink-0 mt-0.5">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-steel leading-relaxed whitespace-pre-line bg-surface">
              {item.body}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
