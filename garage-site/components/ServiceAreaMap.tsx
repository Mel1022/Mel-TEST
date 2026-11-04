"use client";
import { useState } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { site } from "@/lib/site";

/** Schematic radar-style coverage map. Replace placeholder areas in lib/site.ts. */
export default function ServiceAreaMap() {
  const areas = site.serviceAreas;
  const [active, setActive] = useState(0);
  const pts = areas.map((a, i) => {
    const ring = 1 + (i % 3);
    const ang = (i / areas.length) * Math.PI * 2 - Math.PI / 2 + ring * 0.35;
    return { a, x: 250 + Math.cos(ang) * ring * 72, y: 250 + Math.sin(ang) * ring * 72, ring };
  });
  return (
    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
      <div className="relative aspect-square max-w-[560px] w-full mx-auto">
        <svg viewBox="0 0 500 500" className="w-full h-full" role="img" aria-label="Service area coverage map">
          <defs><radialGradient id="rg"><stop offset="0" stopColor="#c8ff2e" stopOpacity=".18" /><stop offset="1" stopColor="#c8ff2e" stopOpacity="0" /></radialGradient></defs>
          <circle cx="250" cy="250" r="240" fill="url(#rg)" />
          {[72, 144, 216].map((r) => <circle key={r} cx="250" cy="250" r={r} fill="none" stroke="#fff" strokeOpacity=".12" strokeDasharray="3 6" />)}
          <path d="M10 250H490M250 10V490M80 80L420 420M420 80L80 420" stroke="#fff" strokeOpacity=".06" />
          <g style={{ transformOrigin: "250px 250px", animation: "spin 7s linear infinite" }}>
            <path d="M250 250 L250 20 A230 230 0 0 1 420 90 Z" fill="#c8ff2e" opacity=".12" />
          </g>
          <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
          <circle cx="250" cy="250" r="9" fill="#c8ff2e" /><circle cx="250" cy="250" r="9" fill="none" stroke="#c8ff2e" className="pulse-ring" style={{ transformOrigin: "250px 250px" }} />
          <text x="250" y="278" textAnchor="middle" fill="#fff" fontSize="11" letterSpacing="2">HQ</text>
          {pts.map((p, i) => (
            <g key={p.a} tabIndex={0} role="button" aria-label={p.a} onClick={() => setActive(i)} onFocus={() => setActive(i)} onMouseEnter={() => setActive(i)} style={{ cursor: "pointer" }}>
              <line x1="250" y1="250" x2={p.x} y2={p.y} stroke="#c8ff2e" strokeOpacity={active === i ? 0.7 : 0.15} />
              <circle cx={p.x} cy={p.y} r={active === i ? 11 : 7} fill={active === i ? "#c8ff2e" : "#0f1316"} stroke="#c8ff2e" strokeWidth="2" style={{ transition: "all .3s" }} />
            </g>
          ))}
        </svg>
      </div>
      <div>
        <p className="eyebrow">Selected area</p>
        <h3 className="font-display text-4xl font-bold mt-2">{areas[active]}</h3>
        <p className="mt-3 text-silver">We serve this area. [CONFIRM COVERAGE &amp; RESPONSE TIME]</p>
        <ul className="mt-6 grid grid-cols-2 gap-2">
          {areas.map((a, i) => (
            <li key={a}><button type="button" onClick={() => setActive(i)} className={`w-full text-left px-3 py-2.5 border flex items-center gap-2 text-sm transition-colors ${active === i ? "border-lime text-white bg-lime/10" : "border-white/10 text-silver hover:border-white/30"}`}><MapPin size={14} className="text-lime shrink-0" />{a}</button></li>
          ))}
        </ul>
        <Link href={`/contact/?area=${encodeURIComponent(areas[active])}`} className="btn btn-primary mt-8">Book service in this area</Link>
      </div>
    </div>
  );
}
