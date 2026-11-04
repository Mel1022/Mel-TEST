"use client";
import { useEffect, useState } from "react";

/** Garage-door loading screen: panels roll up to reveal the site. Shown once per session. */
export default function Loader() {
  const [state, setState] = useState<"show" | "open" | "gone">("show");
  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("loaded") === "1"; sessionStorage.setItem("loaded", "1"); } catch {}
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) { setState("gone"); window.dispatchEvent(new Event("intro-done")); return; }
    const t1 = setTimeout(() => setState("open"), 1300);
    const t2 = setTimeout(() => { setState("gone"); window.dispatchEvent(new Event("intro-done")); }, 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  if (state === "gone") return null;
  return (
    <div className="fixed inset-0 z-[90] pointer-events-none" aria-hidden="true" role="presentation">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="absolute left-0 right-0 bg-graphite border-b border-white/10"
          style={{ top: `${(i * 100) / 6}%`, height: `${100 / 6 + 0.3}%`, transform: state === "open" ? "translateY(-110vh)" : "none", transition: `transform 1s cubic-bezier(.7,0,.2,1) ${(5 - i) * 0.07}s` }} />
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 transition-opacity duration-500" style={{ opacity: state === "open" ? 0 : 1 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/northline-logo-light.png" alt="" className="h-14 w-auto" />
        <span className="block w-48 h-px bg-white/15 overflow-hidden"><span className="block h-full bg-accent origin-left" style={{ animation: "load 1.2s ease-out forwards" }} /></span>
        <style>{`@keyframes load{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>
      </div>
    </div>
  );
}
