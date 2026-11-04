"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

export const faqs = [
  { q: "How fast can you respond to an emergency?", a: "[RESPONSE TIME]. Call us directly for urgent failures. We'll give you an honest arrival window, then make the building safe and secure first." },
  { q: "Can you provide quotes our strata council can approve?", a: "Yes. We provide itemised written quotes with scope, parts, labour and timing, suitable for council review. [CONFIRM: council attendance / written responses]" },
  { q: "Do you provide inspection or service reports?", a: "Yes. After each visit you receive a written report covering what we found, what we did and what we recommend next." },
  { q: "Do you offer maintenance contracts?", a: "Yes. Scheduled preventive programs for doors, gates and docks, quoted per site. [CONFIRM TERMS: frequency, response commitments]" },
  { q: "Do you install new doors and dock equipment?", a: "Yes. We install and replace commercial overhead doors and operators, and repair, replace and upgrade loading dock equipment. [CONFIRM DOCK INSTALLATION SCOPE]" },
  { q: "Do you work on loading docks?", a: "Yes: levelers, seals, shelters, bumpers and vehicle restraints. [CONFIRM BRANDS]" },
  { q: "Which door and operator brands do you service?", a: "[LIST OF BRANDS]." },
  { q: "Are your technicians insured and WCB-compliant?", a: "[INSURANCE / WCB DETAILS]. Clearance letters and certificates of insurance are available on request." },
  { q: "Is it safe to fix a broken spring ourselves?", a: "No. Springs hold enough stored energy to cause serious injury. Keep the door closed and call us." },
  { q: "Do you offer a warranty?", a: "[WARRANTY DETAILS]." },
];

export default function Faq({ items = faqs }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-white/10">
      {items.map((f, i) => (
        <div key={f.q} className="border-b border-white/10">
          <h3>
            <button type="button" aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-6 py-6 text-left group">
              <span className="font-display text-lg sm:text-xl font-semibold group-hover:text-accent transition-colors">{f.q}</span>
              <Plus size={22} className={`shrink-0 text-accent transition-transform duration-300 ${open === i ? "rotate-45" : ""}`} />
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
