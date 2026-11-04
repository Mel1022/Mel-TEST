"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpFromLine, ArrowDownToLine } from "lucide-react";
import DoorArt, { type DoorStyle } from "./DoorArt";

const styles: { id: DoorStyle; label: string; note: string }[] = [
  { id: "raised", label: "Traditional", note: "Classic raised-panel profile" },
  { id: "flush", label: "Modern flush", note: "Clean, contemporary lines" },
  { id: "carriage", label: "Carriage house", note: "Cross-braced, timeless character" },
  { id: "glass", label: "Full-view glass", note: "Aluminium frame, glass inserts" },
];
const colors = [
  { n: "Arctic white", v: "#d9dcdc" }, { n: "Graphite", v: "#2b3238" }, { n: "Matte black", v: "#15181a" },
  { n: "Bronze", v: "#5a4636" }, { n: "Walnut", v: "#6b4a30" }, { n: "Sage", v: "#56675a" }, { n: "Slate blue", v: "#3a4b5c" },
];

export default function DoorVisualizer() {
  const [style, setStyle] = useState<DoorStyle>("flush");
  const [color, setColor] = useState(colors[1]);
  const [windows, setWindows] = useState(false);
  const [handles, setHandles] = useState(true);
  const [open, setOpen] = useState(0);
  const st = styles.find((s) => s.id === style)!;
  const summary = `${st.label} door, ${color.n}${windows && style !== "glass" ? ", with windows" : ""}${handles ? ", with handles" : ""}`;

  return (
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
      <div className="relative border border-white/10 bg-graphite overflow-hidden">
        <DoorArt style={style} color={color.v} windows={windows} handles={handles} open={open} wall="#0f1418" className="w-full h-auto" title={`Preview: ${summary}`} />
        <button type="button" onClick={() => setOpen(open ? 0 : 0.85)} className="absolute bottom-4 right-4 btn btn-ghost !bg-ink/70 !py-3 !px-4">
          {open ? <><ArrowDownToLine size={16} /> Close</> : <><ArrowUpFromLine size={16} /> Open door</>}
        </button>
        <span className="absolute top-4 left-4 eyebrow bg-ink/70 px-3 py-1.5">Live preview</span>
      </div>
      <div className="space-y-7">
        <fieldset>
          <legend className="eyebrow mb-3">Style</legend>
          <div className="grid grid-cols-2 gap-2">
            {styles.map((s) => (
              <button key={s.id} type="button" aria-pressed={style === s.id} onClick={() => setStyle(s.id)}
                className={`text-left p-3 border transition-colors ${style === s.id ? "border-lime bg-lime/10" : "border-white/10 hover:border-white/30"}`}>
                <span className="block font-display font-semibold">{s.label}</span><span className="block text-xs text-silver mt-1">{s.note}</span>
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="eyebrow mb-3">Colour — <span className="text-white normal-case tracking-normal">{color.n}</span></legend>
          <div className="flex flex-wrap gap-3">
            {colors.map((c) => (
              <button key={c.n} type="button" aria-label={c.n} aria-pressed={color.n === c.n} onClick={() => setColor(c)}
                className={`w-11 h-11 rounded-full border-2 transition-transform hover:scale-110 ${color.n === c.n ? "border-lime scale-110" : "border-white/20"}`} style={{ background: c.v }} />
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="eyebrow mb-3">Details</legend>
          <div className="grid gap-2">
            {[{ l: "Windows (top row)", v: windows, f: setWindows, dis: style === "glass" }, { l: "Handles / hardware", v: handles, f: setHandles, dis: false }].map((o) => (
              <label key={o.l} className={`flex items-center justify-between border border-white/10 p-3 cursor-pointer ${o.dis ? "opacity-40" : ""}`}>
                <span>{o.l}</span>
                <input type="checkbox" className="accent-[#c8ff2e] w-5 h-5" checked={o.v} disabled={o.dis} onChange={(e) => o.f(e.target.checked)} />
              </label>
            ))}
          </div>
        </fieldset>
        <Link href={`/contact/?service=${encodeURIComponent("Garage Door Installation")}&door=${encodeURIComponent(summary)}`} className="btn btn-primary w-full">Quote this door</Link>
      </div>
    </div>
  );
}
