import { useId } from "react";

export type DoorStyle = "raised" | "flush" | "carriage" | "glass";
type Props = {
  style?: DoorStyle; color?: string; windows?: boolean; handles?: boolean;
  open?: number; condition?: "new" | "damaged"; className?: string; title?: string; wall?: string; light?: boolean; preserve?: string;
};

function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16);
  const f = (v: number) => Math.max(0, Math.min(255, Math.round(v + amt)));
  return `#${[(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => f(v).toString(16).padStart(2, "0")).join("")}`;
}

/** Parametric SVG garage door. 400x300 viewBox. `open` 0..1 lifts the panels. */
export default function DoorArt({ style = "raised", color = "#2b3237", windows = false, handles = false, open = 0, condition = "new", className = "", title = "Garage door illustration", wall = "#10151a", light = true, preserve }: Props) {
  const id = useId().replace(/:/g, "");
  const X = 50, Y = 40, W = 300, H = 220, rows = 4, ph = H / rows;
  const lift = open * (H + 6);
  const damaged = condition === "damaged";
  const hi = shade(color, 22), lo = shade(color, -22);
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio={preserve} className={className} role="img" aria-label={title}>
      <defs>
        <clipPath id={`c${id}`}><rect x={X} y={Y} width={W} height={H} /></clipPath>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={hi} /><stop offset="1" stopColor={lo} /></linearGradient>
        <linearGradient id={`i${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#04141f" /><stop offset="1" stopColor={light ? "#27330b" : "#04141f"} /></linearGradient>
        <linearGradient id={`gl${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7fa3b4" stopOpacity=".55" /><stop offset=".5" stopColor="#1b2a33" stopOpacity=".9" /><stop offset="1" stopColor="#5c7d8d" stopOpacity=".5" /></linearGradient>
      </defs>
      {/* facade */}
      <rect width="400" height="300" fill={wall} />
      {Array.from({ length: 15 }).map((_, i) => <line key={i} x1="0" x2="400" y1={i * 20 + 8} y2={i * 20 + 8} stroke="#fff" strokeOpacity=".035" />)}
      <rect x={X - 10} y={Y - 10} width={W + 20} height={H + 10} fill="#0b0f12" stroke="#fff" strokeOpacity=".12" />
      {/* interior */}
      <rect x={X} y={Y} width={W} height={H} fill={`url(#i${id})`} />
      {light && <ellipse cx={X + W / 2} cy={Y + H - 4} rx={W / 2.2} ry="26" fill="#e36e02" opacity={0.25 * Math.min(1, open * 3)} />}
      <g stroke="#fff" strokeOpacity=".08"><line x1={X} y1={Y + 24} x2={X + W} y2={Y + 24} /><line x1={X + 12} y1={Y} x2={X + 12} y2={Y + H} /><line x1={X + W - 12} y1={Y} x2={X + W - 12} y2={Y + H} /></g>
      {/* panels */}
      <g clipPath={`url(#c${id})`}>
        <g style={{ transform: `translateY(${-lift}px)`, transition: "transform 1.4s cubic-bezier(.65,0,.25,1)" }}>
          {Array.from({ length: rows }).map((_, r) => {
            const y = Y + r * ph;
            const skew = damaged && r === 2 ? 5 : 0;
            return (
              <g key={r} transform={damaged && r >= 2 ? `translate(${r === 2 ? 3 : 7} ${r === 2 ? 2 : 6}) rotate(${r === 2 ? 0.8 : 1.6} ${X} ${y})` : undefined}>
                <rect x={X} y={y} width={W} height={ph - 1} fill={style === "glass" ? "#1a2024" : `url(#g${id})`} />
                <line x1={X} x2={X + W} y1={y + ph - 1} y2={y + ph - 1} stroke="#000" strokeOpacity=".45" strokeWidth="1.5" />
                {style === "raised" && [0, 1, 2, 3].map((c) => <rect key={c} x={X + 12 + c * 72} y={y + 9} width="60" height={ph - 24} fill="none" stroke={lo} strokeWidth="2" opacity=".9" />)}
                {style === "raised" && [0, 1, 2, 3].map((c) => <rect key={"h" + c} x={X + 13 + c * 72} y={y + 10} width="58" height={ph - 26} fill="none" stroke={hi} strokeWidth=".8" opacity=".6" />)}
                {style === "flush" && <><line x1={X} x2={X + W} y1={y + ph / 2} y2={y + ph / 2} stroke={lo} strokeWidth="1" /><rect x={X} y={y} width={W} height="2" fill={hi} opacity=".5" /></>}
                {style === "carriage" && [0, 1].map((c) => (
                  <g key={c} stroke={lo} strokeWidth="1.6" fill="none">
                    <rect x={X + 10 + c * 148} y={y + 6} width="132" height={ph - 14} />
                    <path d={`M${X + 10 + c * 148} ${y + 6} L${X + 142 + c * 148} ${y + ph - 8} M${X + 142 + c * 148} ${y + 6} L${X + 10 + c * 148} ${y + ph - 8}`} opacity=".5" />
                  </g>
                ))}
                {style === "glass" && [0, 1, 2, 3].map((c) => <rect key={c} x={X + 7 + c * 73} y={y + 7} width="65" height={ph - 15} fill={`url(#gl${id})`} stroke="#aeb7b3" strokeOpacity=".7" strokeWidth="2" />)}
                {windows && r === 0 && style !== "glass" && [0, 1, 2, 3].map((c) => <rect key={"w" + c} x={X + 16 + c * 72} y={y + 12} width="52" height={ph - 30} fill={`url(#gl${id})`} stroke={lo} strokeWidth="2" />)}
                {style === "carriage" && handles && r === 2 && [0, 1].map((c) => <rect key={"s" + c} x={X + 70 + c * 148} y={y + 6} width="8" height={ph - 14} fill="#0b0b0b" opacity=".7" />)}
                {handles && r === 1 && <rect x={X + W / 2 - 22} y={y + ph / 2 - 3} width="44" height="6" rx="3" fill="#0a0a0a" stroke="#fff" strokeOpacity=".25" />}
                {skew ? <line x1={X} x2={X + W} y1={y} y2={y} stroke="#000" strokeWidth="4" /> : null}
              </g>
            );
          })}
          {damaged && (
            <g>
              <ellipse cx={X + 110} cy={Y + 158} rx="26" ry="14" fill="#000" opacity=".35" />
              <path d={`M${X + 90} ${Y + 150} l18 10 l-8 14 l24 -6`} stroke="#000" strokeOpacity=".6" strokeWidth="2" fill="none" />
              <path d={`M${X + 220} ${Y + 40} l10 24 l-14 10`} stroke="#9a5b2a" strokeWidth="2" fill="none" opacity=".8" />
              <rect x={X + W - 34} y={Y + 120} width="24" height="60" fill="#8a4b22" opacity=".25" />
              <path d={`M${X + 14} ${Y + 4} l-2 ${H - 20}`} stroke="#c8402a" strokeWidth="2" strokeDasharray="6 5" opacity=".8" />
            </g>
          )}
        </g>
      </g>
      {/* sill */}
      <rect x={X - 10} y={Y + H} width={W + 20} height="8" fill="#0b0f12" />
      <rect x="0" y="268" width="400" height="32" fill="#080b0d" />
      {damaged && <path d="M60 280 l40 -6 l30 4" stroke="#fff" strokeOpacity=".12" fill="none" />}
    </svg>
  );
}
