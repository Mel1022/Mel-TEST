"use client";
import { useEffect, useState } from "react";
import HeroScene from "./HeroScene";
import { site } from "@/lib/site";

/** Cinematic hero visual: a premium garage that rolls open once the intro finishes. */
export default function GarageScene() {
  const [open, setOpen] = useState(0);
  useEffect(() => {
    const go = () => setTimeout(() => setOpen(0.7), 500);
    window.addEventListener("intro-done", go, { once: true });
    const fb = setTimeout(() => setOpen((o) => (o === 0 ? 0.7 : o)), 3200);
    return () => { window.removeEventListener("intro-done", go); clearTimeout(fb); };
  }, []);
  if (site.heroImage) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={site.heroImage} alt={site.heroAlt} className="w-full h-full object-cover kenburns" fetchPriority="high" />
        {/* garage-door panels roll up to reveal the photo */}
        <div aria-hidden="true" className="absolute inset-0 flex flex-col">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex-1 bg-gradient-to-b from-[#1b2227] to-[#12171b] border-b border-black/60"
              style={{ transform: open ? "translateY(-105%)" : "none", transition: `transform 1.6s cubic-bezier(.65,0,.25,1) ${(5 - i) * 0.09}s` }} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full kenburns"><HeroScene open={open} /></div>
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden mix-blend-screen pointer-events-none">
        <div className="sweep absolute top-0 bottom-0 w-1/4 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
}
