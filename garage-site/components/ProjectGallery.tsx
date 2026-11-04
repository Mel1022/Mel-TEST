"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import DoorArt, { type DoorStyle } from "./DoorArt";
import ServiceArt from "./ServiceArt";

type P = { t: string; cat: string; kind: "door" | "dock" | "industrial"; style?: DoorStyle; color?: string; windows?: boolean; note: string };
const projects: P[] = [
  { t: "Strata parkade door replacement", cat: "Strata", kind: "industrial", note: "[Site type] — [problem] → [outcome]" },
  { t: "Parkade gate operator upgrade", cat: "Strata", kind: "door", style: "flush", color: "#4a555d", note: "[Site type] — [problem] → [outcome]" },
  { t: "Warehouse overhead door refit", cat: "Warehouse", kind: "industrial", note: "[Site type] — [problem] → [outcome]" },
  { t: "Dock leveler replacement", cat: "Loading dock", kind: "dock", note: "[Site type] — [problem] → [outcome]" },
  { t: "Distribution centre dock program", cat: "Loading dock", kind: "dock", note: "[Site type] — [problem] → [outcome]" },
  { t: "Impact-damaged section replacement", cat: "Replacements", kind: "door", style: "flush", color: "#8d99a2", note: "[Site type] — [problem] → [outcome]" },
];
const cats = ["All", "Strata", "Warehouse", "Loading dock", "Replacements"];

function Thumb({ p, className = "" }: { p: P; className?: string }) {
  if (p.kind === "door") return <DoorArt className={className} style={p.style} color={p.color} windows={p.windows} handles wall="#0f1418" title={p.t} />;
  return <div className={`grid place-items-center bg-graphite text-accent grid-bg aspect-[4/3] ${className}`}><ServiceArt kind={p.kind} className="w-2/3" /></div>;
}

export default function ProjectGallery() {
  const [cat, setCat] = useState("All");
  const [sel, setSel] = useState<number | null>(null);
  const list = projects.filter((p) => cat === "All" || p.cat === cat);
  useEffect(() => {
    if (sel === null) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setSel(null); if (e.key === "ArrowRight") setSel((s) => s === null ? s : (s + 1) % list.length); if (e.key === "ArrowLeft") setSel((s) => s === null ? s : (s - 1 + list.length) % list.length); };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, [sel, list.length]);
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects">
        {cats.map((c) => <button key={c} role="tab" aria-selected={cat === c} onClick={() => { setCat(c); setSel(null); }} className={`px-5 py-2.5 text-sm border transition-colors ${cat === c ? "bg-accent text-black border-accent font-semibold" : "border-white/15 text-white/75 hover:border-white/40"}`}>{c}</button>)}
      </div>
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence>
          {list.map((p, i) => (
            <motion.button layout key={p.t} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35 }} type="button" onClick={() => setSel(i)}
              className="group text-left border border-white/10 bg-graphite overflow-hidden hover:border-accent/60 transition-colors">
              <div className="overflow-hidden"><Thumb p={p} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" /></div>
              <div className="p-5"><p className="eyebrow">{p.cat}</p><h3 className="font-display text-xl font-semibold mt-1">{p.t}</h3></div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
      <p className="mt-6 text-xs text-silver-dim">Sample projects shown as illustrations — [REPLACE WITH REAL PROJECT PHOTOS — use real work and client permission]</p>
      <AnimatePresence>
        {sel !== null && list[sel] && (
          <motion.div role="dialog" aria-modal="true" aria-label={list[sel].t} className="fixed inset-0 z-[80] bg-ink/95 backdrop-blur grid place-items-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
            <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <Thumb p={list[sel]} className="w-full h-auto border border-white/10" />
              <div className="mt-4 flex items-start justify-between gap-4">
                <div><p className="eyebrow">{list[sel].cat}</p><h3 className="font-display text-2xl font-bold">{list[sel].t}</h3><p className="text-silver mt-1">{list[sel].note}</p></div>
                <div className="flex gap-2 shrink-0">
                  <button aria-label="Previous" className="w-11 h-11 border border-white/20 grid place-items-center hover:border-accent" onClick={() => setSel((sel - 1 + list.length) % list.length)}><ChevronLeft /></button>
                  <button aria-label="Next" className="w-11 h-11 border border-white/20 grid place-items-center hover:border-accent" onClick={() => setSel((sel + 1) % list.length)}><ChevronRight /></button>
                  <button aria-label="Close" className="w-11 h-11 bg-accent text-black grid place-items-center" onClick={() => setSel(null)}><X /></button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
