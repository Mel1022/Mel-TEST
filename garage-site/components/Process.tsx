const steps = [
  { n: "01", t: "Request service", d: "Call, or send the form with a photo. Tell us the site, the door and what it's doing." },
  { n: "02", t: "Diagnose", d: "A technician inspects the full system: springs, cables, tracks, operator, sensors and safety devices." },
  { n: "03", t: "Written quote", d: "Plain-language findings and a price before work starts. Strata-ready on request." },
  { n: "04", t: "Fix it right", d: "Proper parts, safe procedures. The door is balanced, tested and left secure." },
  { n: "05", t: "Report & record", d: "You receive a service report and the door's history is updated. [WARRANTY DETAILS]" },
];
export default function Process() {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div aria-hidden="true" className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-white/10"><div data-progress className="w-full h-full bg-accent origin-top shadow-[0_0_14px_#e36e02]" /></div>
      <ol className="space-y-14">
        {steps.map((s, i) => (
          <li key={s.n} className="relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-16" data-reveal>
            <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-10 h-10 grid place-items-center bg-ink border border-accent text-accent font-display font-bold text-sm">{s.n}</span>
            <div className={i % 2 ? "md:col-start-2" : "md:text-right"}>
              <h3 className="font-display text-2xl font-bold uppercase">{s.t}</h3>
              <p className="mt-2 text-silver leading-relaxed">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
