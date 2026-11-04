"use client";
import { useEffect, useState } from "react";
import DoorArt from "./DoorArt";

/** Cinematic hero visual: a premium garage that rolls open once the intro finishes. */
export default function GarageScene() {
  const [open, setOpen] = useState(0);
  useEffect(() => {
    const go = () => setTimeout(() => setOpen(0.62), 500);
    // loader dispatches this when finished; fall back after 3s in case it already fired
    window.addEventListener("intro-done", go, { once: true });
    const fb = setTimeout(() => setOpen((o) => (o === 0 ? 0.62 : o)), 3200);
    return () => { window.removeEventListener("intro-done", go); clearTimeout(fb); };
  }, []);
  return (
    <div className="relative w-full h-full">
      <DoorArt className="w-full h-full object-cover kenburns" style="flush" color="#4a555d" open={open} handles wall="#121920" preserve="xMaxYMid meet" title="Modern charcoal garage door opening to reveal a lit interior" />
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden mix-blend-screen pointer-events-none">
        <div className="sweep absolute top-0 bottom-0 w-1/4 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>
    </div>
  );
}
