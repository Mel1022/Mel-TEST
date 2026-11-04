"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

export const faqs = [
  { q: "How fast can a technician get to me?", a: "[RESPONSE TIME] — replace with your real dispatch promise. Call us for urgent problems and we'll give you an honest arrival window." },
  { q: "Do I get a price before work starts?", a: "Yes. We diagnose first and explain the findings and the quote in plain language before any work begins." },
  { q: "Should I repair or replace my garage door?", a: "If the door is structurally sound, repair is usually the better value. If panels are warped, parts are obsolete or repairs keep recurring, replacement can be smarter. We'll tell you honestly." },
  { q: "Is it safe to fix a broken spring myself?", a: "No. Garage door springs hold enough stored energy to cause serious injury. Please leave spring work to a trained technician." },
  { q: "Do you service commercial and industrial doors?", a: "Yes — overhead doors, roll-up doors and loading dock equipment, including preventive maintenance and safety inspections." },
  { q: "What openers do you work on?", a: "[LIST OF BRANDS] — update with the brands you install and service." },
  { q: "Do you offer a warranty?", a: "[WARRANTY DETAILS] — replace with your labour and parts warranty terms." },
];

export default function Faq({ items = faqs }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-white/10">
      {items.map((f, i) => (
        <div key={f.q} className="border-b border-white/10">
          <h3>
            <button type="button" aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-6 py-6 text-left group">
              <span className="font-display text-lg sm:text-xl font-semibold group-hover:text-lime transition-colors">{f.q}</span>
              <Plus size={22} className={`shrink-0 text-lime transition-transform duration-300 ${open === i ? "rotate-45" : ""}`} />
            </button>
          </h3>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div id={`faq-${i}`} role="region" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                <p className="pb-6 text-silver max-w-3xl leading-relaxed">{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
