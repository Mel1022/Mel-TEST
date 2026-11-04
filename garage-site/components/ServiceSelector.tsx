"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, AlertTriangle, Phone } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";
import ServiceArt from "./ServiceArt";

const symptoms = [
  { q: "Loud bang, door won't lift", s: "Spring Replacement", slug: "spring-replacement", art: "spring", urgent: true, why: "A loud snap followed by a door that won't lift usually means a broken torsion spring. Don't try to force the door." },
  { q: "Door is off track or crooked", s: "Garage Door Repair", slug: "repair", art: "door", urgent: true, why: "Off-track doors are a safety risk. Stop using the door and let a technician realign and inspect it." },
  { q: "Opener hums but door won't move", s: "Opener Repair", slug: "opener-repair", art: "opener", urgent: false, why: "Often a stripped gear, failed capacitor or a disconnected trolley — all quick to diagnose." },
  { q: "Remote or keypad stopped working", s: "Opener Repair", slug: "opener-repair", art: "opener", urgent: false, why: "Usually a programming, battery or receiver issue. Typically a fast fix." },
  { q: "Door is noisy or shaky", s: "Garage Door Maintenance", slug: "maintenance", art: "maintenance", urgent: false, why: "Worn rollers, dry hinges and loose hardware are the usual culprits. A tune-up restores smooth, quiet travel." },
  { q: "Frayed cable or tilted door", s: "Cable & Roller Replacement", slug: "cable-roller", art: "cable", urgent: true, why: "A frayed cable can fail suddenly. Replace it before it takes the track or panels with it." },
  { q: "Dented or damaged panel", s: "Panel Replacement", slug: "panel-replacement", art: "panel", urgent: false, why: "Single sections can often be replaced without replacing the whole door." },
  { q: "Old door, thinking of upgrading", s: "Garage Door Installation", slug: "installation", art: "door", urgent: false, why: "A new insulated door improves security, quietness and curb appeal. Try the style visualizer below." },
  { q: "Business door or dock problem", s: "Commercial Overhead Doors", slug: "commercial-overhead", art: "industrial", urgent: true, why: "Downtime costs money. Commercial work is prioritised for fast diagnosis and repair." },
];

export default function ServiceSelector() {
  const [i, setI] = useState(0);
  const r = symptoms[i];
  return (
    <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-10">
      <div role="radiogroup" aria-label="What is your garage door doing?" className="grid gap-2">
        {symptoms.map((s, idx) => (
          <button key={s.q} role="radio" aria-checked={i === idx} onClick={() => setI(idx)}
            className={`group text-left px-5 py-4 border transition-all duration-300 flex items-center justify-between gap-4 ${i === idx ? "border-lime bg-lime/10 text-white" : "border-white/10 text-white/70 hover:border-white/30 hover:text-white"}`}>
            <span className="font-medium">{s.q}</span>
            <span className={`h-2 w-2 rounded-full transition-colors ${i === idx ? "bg-lime" : "bg-white/20"}`} />
          </button>
        ))}
      </div>
      <div className="glass p-6 sm:p-8 relative overflow-hidden min-h-[360px] flex flex-col" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="flex flex-col flex-1">
            <ServiceArt kind={r.art} className="w-40 text-lime opacity-90 -mb-2" />
            <p className="eyebrow mt-4">Recommended</p>
            <h3 className="font-display text-3xl sm:text-4xl font-bold mt-2">{r.s}</h3>
            <p className="mt-4 text-silver leading-relaxed">{r.why}</p>
            {r.urgent && <p className="mt-4 flex gap-2 text-sm text-amber-300"><AlertTriangle size={16} className="mt-0.5 shrink-0" /> Treat as urgent — avoid operating the door until inspected.</p>}
            <div className="mt-auto pt-8 flex flex-wrap gap-3">
              <Link href={`/contact/?service=${encodeURIComponent(r.s)}`} className="btn btn-primary">Get a free quote <ArrowRight size={16} /></Link>
              <a href={site.phone.href} className="btn btn-ghost"><Phone size={16} /> Call now</a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
