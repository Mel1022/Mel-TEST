export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 py-5" aria-label="Credentials">
      <ul className="marquee flex gap-14 items-center">
        {row.map((t, i) => <li key={i} aria-hidden={i >= items.length} className="flex items-center gap-14 font-display uppercase tracking-[0.2em] text-sm text-white/70 whitespace-nowrap">{t}<span className="text-accent">✦</span></li>)}
      </ul>
    </div>
  );
}
