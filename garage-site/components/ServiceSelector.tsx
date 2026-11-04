"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, AlertTriangle, Phone } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";
import ServiceArt from "./ServiceArt";

const symptoms = [
  { q: "Parkade door or gate won't open or close", s: "Gate Repair & Service", art: "door", urgent: true, why: "Residents are locked in or out and the building may be unsecured. Call now and we'll prioritise it." },
  { q: "Loud bang, door won't lift", s: "Spring Replacement", art: "spring", urgent: true, why: "A broken spring is a safety issue. Keep the door closed and have people stay clear until a technician arrives." },
  { q: "Dock door or leveler not working", s: "Dock Leveler Repair & Replacement", art: "dock", urgent: true, why: "Every hour a bay is down is an hour of delayed freight. We'll prioritise getting it back in service." },
  { q: "Door off track, damaged or struck by a vehicle", s: "Commercial Overhead Door Repair", art: "industrial", urgent: true, why: "Don't operate it. We'll make it safe and secure first, then quote the repair." },
  { q: "Operator or remote failing", s: "Operator Repair & Installation", art: "opener", urgent: false, why: "Motors, logic boards, remotes, photo-eyes and access control, diagnosed and fixed or replaced." },
  { q: "Doors are noisy, slow or inconsistent", s: "Preventive Maintenance Programs", art: "maintenance", urgent: false, why: "Wear shows up early. Catch it on a schedule instead of during a shift or a resident complaint." },
  { q: "Need an inspection report or maintenance plan", s: "Safety Inspections & Reports", art: "maintenance", urgent: false, why: "Written findings, a prioritised repair list and a service record for your files." },
  { q: "Planning a replacement or new door", s: "New Door Installation & Replacement", art: "door", urgent: false, why: "Right-sized doors and operators, quoted clearly, installed cleanly and tested." },
];

export default function ServiceSelector() {
  const [i, setI] = useState(0);
  const r = symptoms[i];
  return (
    <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-10">
      <div role="radiogroup" aria-label="What is going on at your site?" className="grid gap-2">
        {symptoms.map((s, idx) => (
          <button key={s.q} role="radio" aria-checked={i === idx} onClick={() => setI(idx)}
            className={`group text-left px-5 py-4 border transition-all duration-300 flex items-center justify-between gap-4 ${i === idx ? "border-accent bg-accent/10 text-white" : "border-white/10 text-white/70 hover:border-white/30 hover:text-white"}`}>
            <span className="font-medium">{s.q}</span>
            <span className={`h-2 w-2 rounded-full transition-colors ${i === idx ? "bg-accent" : "bg-white/20"}`} />
          </button>
        ))}
      </div>
      <div className="glass p-6 sm:p-8 relative overflow-hidden min-h-[360px] flex flex-col" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="flex flex-col flex-1">
            <ServiceArt kind={r.art} className="w-40 text-accent opacity-90 -mb-2" />
            <p className="eyebrow mt-4">Recommended</p>
            <h3 className="font-display text-3xl sm:text-4xl font-bold mt-2">{r.s}</h3>
            <p className="mt-4 text-silver leading-relaxed">{r.why}</p>
            {r.urgent && <p className="mt-4 flex gap-2 text-sm text-amber-300"><AlertTriangle size={16} className="mt-0.5 shrink-0" /> Treat as urgent. Don’t operate the door until it’s been inspected.</p>}
            <div className="mt-auto pt-8 flex flex-wrap gap-3">
              <Link href={`/contact/?service=${encodeURIComponent(r.s)}`} className="btn btn-primary">Request service <ArrowRight size={16} /></Link>
              <a href={site.phone.href} className="btn btn-ghost"><Phone size={16} /> Call now</a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
