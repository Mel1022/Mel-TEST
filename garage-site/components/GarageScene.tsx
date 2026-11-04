"use client";
import { useEffect, useState } from "react";
import HeroScene from "./HeroScene";

/** Cinematic hero visual: a premium garage that rolls open once the intro finishes. */
export default function GarageScene() {
  const [open, setOpen] = useState(0);
  useEffect(() => {
    const go = () => setTimeout(() => setOpen(0.7), 500);
    window.addEventListener("intro-done", go, { once: true });
    const fb = setTimeout(() => setOpen((o) => (o === 0 ? 0.7 : o)), 3200);
    return () => { window.removeEventListener("intro-done", go); clearTimeout(fb); };
  }, []);
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full kenburns"><HeroScene open={open} /></div>
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden mix-blend-screen pointer-events-none">
        <div className="sweep absolute top-0 bottom-0 w-1/4 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </div>
  );
}
