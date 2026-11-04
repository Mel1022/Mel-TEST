const steps = [
  { n: "01", t: "Request service", d: "Call or send a quick quote request. Tell us what the door is doing." },
  { n: "02", t: "Diagnose", d: "A technician inspects the full system — springs, cables, tracks, opener and sensors." },
  { n: "03", t: "Clear quote", d: "You get a plain-language explanation and a price before any work starts." },
  { n: "04", t: "Fix it right", d: "Quality parts, proper tools, safe procedures. The door is balanced and tested." },
  { n: "05", t: "Stay covered", d: "Final safety check, walkthrough and [WARRANTY DETAILS]." },
];
export default function Process() {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div aria-hidden="true" className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-white/10"><div data-progress className="w-full h-full bg-lime origin-top shadow-[0_0_14px_#c8ff2e]" /></div>
      <ol className="space-y-14">
        {steps.map((s, i) => (
          <li key={s.n} className="relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-16" data-reveal>
            <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-10 h-10 grid place-items-center bg-ink border border-lime text-lime font-display font-bold text-sm">{s.n}</span>
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
