/** Small technical line illustrations for service cards. */
export default function ServiceArt({ kind, className = "" }: { kind: string; className?: string }) {
  const s = { stroke: "currentColor", strokeWidth: 1.5, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 200 140" className={className} aria-hidden="true">
      {kind === "spring" && <g {...s}><line x1="20" y1="70" x2="180" y2="70" />{Array.from({ length: 14 }).map((_, i) => <path key={i} d={`M${34 + i * 10} 48 q8 22 0 44`} />)}<circle cx="20" cy="70" r="9" /><circle cx="180" cy="70" r="9" /></g>}
      {kind === "opener" && <g {...s}><rect x="60" y="30" width="80" height="36" rx="6" /><path d="M20 20h40M140 48h40M100 66v34M80 100h40v14H80zM100 40v16" /><circle cx="100" cy="48" r="6" /></g>}
      {kind === "cable" && <g {...s}><circle cx="60" cy="70" r="30" /><circle cx="60" cy="70" r="10" /><path d="M90 70h90M60 40V10M60 100v30M180 70l-14-8M180 70l-14 8" strokeDasharray="4 4" /></g>}
      {kind === "panel" && <g {...s}><rect x="30" y="20" width="140" height="100" />{[0, 1, 2, 3].map((i) => <path key={i} d={`M30 ${45 + i * 25}h140`} />)}{[0, 1, 2].map((i) => <rect key={"p" + i} x={42 + i * 44} y="28" width="32" height="12" />)}<path d="M110 80l12 12-8 8" stroke="#c8ff2e" /></g>}
      {kind === "dock" && <g {...s}><rect x="20" y="20" width="110" height="80" /><path d="M20 62h110M130 100h50M130 80l50 20M24 120h150" /><rect x="132" y="100" width="48" height="10" /></g>}
      {kind === "industrial" && <g {...s}><rect x="25" y="15" width="150" height="105" />{Array.from({ length: 9 }).map((_, i) => <path key={i} d={`M25 ${26 + i * 11}h150`} />)}<path d="M175 15v105M25 120h150" /><circle cx="165" cy="68" r="4" /></g>}
      {kind === "maintenance" && <g {...s}><circle cx="70" cy="70" r="26" /><circle cx="70" cy="70" r="8" /><path d="M70 36v10M70 94v10M36 70h10M94 70h10M46 46l7 7M87 87l7 7M94 46l-7 7M53 87l-7 7" /><path d="M120 90l36-36 12 12-36 36-16 4z" /></g>}
      {kind === "door" && <g {...s}><rect x="30" y="20" width="140" height="100" />{[0, 1, 2].map((i) => <path key={i} d={`M30 ${45 + i * 25}h140`} />)}<path d="M20 20L100 -2l80 22" /><path d="M95 118v-8h10v8" /></g>}
    </svg>
  );
}
