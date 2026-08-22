"use client";

import { useState } from "react";
import { IconChevron } from "./Icons";
import type { Faq } from "@/lib/services";

export default function FAQAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-steel/15 border-y border-steel/15">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.q}>
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-heading font-bold text-navy text-base sm:text-lg">
                {faq.q}
              </span>
              <IconChevron
                className={`w-5 h-5 flex-shrink-0 text-steel transition-transform ${
                  isOpen ? "rotate-180 text-gold-dark" : ""
                }`}
              />
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              className={isOpen ? "pb-5" : "hidden"}
            >
              <p className="text-sm sm:text-base text-steel leading-relaxed max-w-3xl">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
