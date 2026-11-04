"use client";
import { useState } from "react";
import DoorArt from "./DoorArt";

export default function BeforeAfter({ className = "" }: { className?: string }) {
  const [pos, setPos] = useState(50);
  return (
    <figure className={className}>
      <div className="relative border border-white/10 overflow-hidden select-none">
        <DoorArt condition="new" style="raised" color="#2b3238" windows wall="#10151a" className="w-full h-auto block" title="After: new installed door" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <DoorArt condition="damaged" style="raised" color="#4a4f52" wall="#10151a" light={false} className="w-full h-auto block" title="Before: damaged door" />
        </div>
        <div className="absolute top-0 bottom-0 w-px bg-accent pointer-events-none" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent text-black grid place-items-center font-bold text-xs shadow-[0_0_30px_rgba(227,110,2,.5)]">⇆</span>
        </div>
        <span className="absolute top-3 left-3 bg-ink/80 px-3 py-1 text-xs tracking-widest uppercase">Before</span>
        <span className="absolute top-3 right-3 bg-accent text-black px-3 py-1 text-xs tracking-widest uppercase font-bold">After</span>
        <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label="Drag to compare before and after" className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize" />
      </div>
      <figcaption className="mt-3 text-xs text-silver-dim">Illustrative comparison — [REPLACE WITH REAL PROJECT PHOTOS]</figcaption>
    </figure>
  );
}
