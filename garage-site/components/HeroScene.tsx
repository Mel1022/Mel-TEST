/**
 * Commercial exterior: tilt-up concrete building with an industrial sectional door lifting to reveal
 * lit racking. Placeholder illustration — swap for a real photo via site.heroImage.
 * `open` is 0..1. viewBox 1600x900.
 */
const DX = 820, DY = 250, DW = 640, DH = 500, ROWS = 6, PH = DH / ROWS;

export default function HeroScene({ open = 0 }: { open?: number }) {
  const lift = open * (DH + 14);
  const glow = Math.min(1, open * 2.2);
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMaxYMid slice" className="w-full h-full" role="img" aria-label="Commercial building with an overhead door opening onto a lit warehouse interior">
      <defs>
        <clipPath id="hs-open"><rect x={DX} y={DY} width={DW} height={DH} /></clipPath>
        <linearGradient id="hs-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1c2f3d" /><stop offset="1" stopColor="#0d1c27" /></linearGradient>
        <linearGradient id="hs-steel" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#8d99a2" /><stop offset=".2" stopColor="#b8c2c9" /><stop offset=".5" stopColor="#d3dade" /><stop offset=".8" stopColor="#b8c2c9" /><stop offset="1" stopColor="#8d99a2" /></linearGradient>
        <linearGradient id="hs-sheen" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".18" /><stop offset=".3" stopColor="#fff" stopOpacity="0" /><stop offset="1" stopColor="#04141f" stopOpacity=".4" /></linearGradient>
        <linearGradient id="hs-glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#a9c4d3" stopOpacity=".8" /><stop offset=".5" stopColor="#1d3442" stopOpacity=".95" /><stop offset="1" stopColor="#6b8c9c" stopOpacity=".7" /></linearGradient>
        <linearGradient id="hs-room" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#07111a" /><stop offset=".6" stopColor="#13222d" /><stop offset="1" stopColor="#2a2a22" /></linearGradient>
        <linearGradient id="hs-drive" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#38434b" /><stop offset="1" stopColor="#141c22" /></linearGradient>
        <radialGradient id="hs-lamp"><stop offset="0" stopColor="#fff1d6" stopOpacity=".95" /><stop offset=".3" stopColor="#ffd59a" stopOpacity=".3" /><stop offset="1" stopColor="#ffd59a" stopOpacity="0" /></radialGradient>
        <radialGradient id="hs-spill" cx=".5" cy="0" r="1"><stop offset="0" stopColor="#ffd9a8" stopOpacity=".55" /><stop offset=".5" stopColor="#e36e02" stopOpacity=".14" /><stop offset="1" stopColor="#e36e02" stopOpacity="0" /></radialGradient>
        <radialGradient id="hs-vig" cx=".6" cy=".5" r=".85"><stop offset=".55" stopColor="#000" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".7" /></radialGradient>
        <filter id="hs-streak" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.004 0.6" numOctaves="2" seed="4" /><feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .55 -.12" /></filter>
        <filter id="hs-grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" seed="9" /><feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .6 -.18" /></filter>
      </defs>

      {/* tilt-up concrete wall with panel joints */}
      <rect width="1600" height="900" fill="url(#hs-wall)" />
      <rect width="1600" height="780" filter="url(#hs-streak)" opacity=".12" />
      {[300, 620, 1560].map((x) => <g key={x}><rect x={x} y="0" width="6" height="780" fill="#000" opacity=".45" /><rect x={x + 6} y="0" width="2" height="780" fill="#fff" opacity=".07" /></g>)}
      <rect x="0" y="0" width="1600" height="110" fill="#0a1620" /><rect x="0" y="110" width="1600" height="6" fill="#000" opacity=".5" />
      <rect x="0" y="116" width="1600" height="2" fill="#fff" opacity=".08" />
      {/* signage band */}
      <rect x={DX} y="150" width={DW} height="52" fill="#0a1620" stroke="#2a3f50" /><rect x={DX + 16} y="166" width="120" height="20" fill="#e36e02" /><rect x={DX + 150} y="170" width="220" height="12" fill="#8d99a2" opacity=".6" />

      {/* door frame */}
      <rect x={DX - 22} y={DY - 24} width={DW + 44} height={DH + 24} fill="#283b49" />
      <rect x={DX - 22} y={DY - 24} width={DW + 44} height="3" fill="#fff" opacity=".2" />
      <rect x={DX - 10} y={DY - 12} width={DW + 20} height={DH + 12} fill="#030c13" />

      {/* interior: pallet racking */}
      <g clipPath="url(#hs-open)">
        <rect x={DX} y={DY} width={DW} height={DH} fill="url(#hs-room)" />
        <polygon points={`${DX},${DY} ${DX + 110},${DY + 90} ${DX + DW - 110},${DY + 90} ${DX + DW},${DY}`} fill="#08121a" />
        <rect x={DX + 110} y={DY + 90} width={DW - 220} height="280" fill="#16242e" />
        <polygon points={`${DX},${DY + DH} ${DX + 110},${DY + 370} ${DX + DW - 110},${DY + 370} ${DX + DW},${DY + DH}`} fill="#27282a" />
        {[0, 1].map((side) => {
          const x0 = side ? DX + DW - 150 : DX + 20;
          return (
            <g key={side}>
              {[0, 1, 2].map((r) => <g key={r}>
                <rect x={x0} y={DY + 150 + r * 90} width="130" height="7" fill="#e36e02" />
                {[0, 1, 2].map((c) => <rect key={c} x={x0 + 6 + c * 41} y={DY + 108 + r * 90} width="34" height="42" fill={["#7a6a4a", "#6b5b3f", "#85734f"][c]} stroke="#000" strokeOpacity=".35" />)}
              </g>)}
              <rect x={x0} y={DY + 100} width="6" height="300" fill="#2b6aa6" /><rect x={x0 + 124} y={DY + 100} width="6" height="300" fill="#2b6aa6" />
            </g>
          );
        })}
        {/* high-bay lights */}
        {[200, 360, 470].map((x, i) => <g key={x}><rect x={DX + x - 60 + i * 0} y={DY + 30} width="110" height="8" rx="4" fill="#fff1d6" /><ellipse cx={DX + x - 5} cy={DY + 52} rx="90" ry="34" fill="url(#hs-spill)" /></g>)}
        {/* forklift */}
        <g>
          <rect x={DX + 250} y={DY + 330} width="120" height="70" rx="6" fill="#e36e02" />
          <rect x={DX + 270} y={DY + 290} width="70" height="46" fill="none" stroke="#0a1620" strokeWidth="6" />
          <rect x={DX + 246} y={DY + 250} width="8" height="150" fill="#0a1620" /><rect x={DX + 226} y={DY + 380} width="52" height="8" fill="#0a1620" />
          <circle cx={DX + 280} cy={DY + 404} r="14" fill="#06090c" /><circle cx={DX + 350} cy={DY + 404} r="14" fill="#06090c" />
          <circle cx={DX + 312} cy={DY + 280} r="5" fill="#ffd59a" />
        </g>
        <rect x={DX} y={DY} width={DW} height={DH} fill="#000" style={{ opacity: 1 - glow * 0.85, transition: "opacity 1.6s ease" }} />
      </g>

      {/* sectional door panels */}
      <g clipPath="url(#hs-open)">
        <g style={{ transform: `translateY(${-lift}px)`, transition: "transform 2.4s cubic-bezier(.65,0,.25,1)" }}>
          {[...Array(ROWS)].map((_, r) => {
            const y = DY + r * PH;
            return (
              <g key={r}>
                <rect x={DX} y={y} width={DW} height={PH} fill="url(#hs-steel)" />
                <rect x={DX} y={y} width={DW} height={PH} fill="url(#hs-sheen)" />
                <rect x={DX} y={y} width={DW} height={PH} filter="url(#hs-streak)" opacity=".1" />
                {[0.22, 0.5, 0.78].map((t) => <rect key={t} x={DX} y={y + PH * t} width={DW} height="2" fill="#000" opacity=".12" />)}
                {r === 1 && [0, 1, 2, 3, 4].map((c) => {
                  const w = (DW - 6 * 14) / 5, x = DX + 14 + c * (w + 14);
                  return <g key={c}><rect x={x} y={y + 14} width={w} height={PH - 28} fill="#0d1a24" /><rect x={x + 4} y={y + 18} width={w - 8} height={PH - 36} fill="url(#hs-glass)" /><path d={`M${x + 10} ${y + PH - 24} L${x + w * 0.45} ${y + 22}`} stroke="#fff" strokeOpacity=".25" strokeWidth="6" /></g>;
                })}
                <rect x={DX} y={y + PH - 4} width={DW} height="4" fill="#000" opacity=".5" /><rect x={DX} y={y + PH - 6} width={DW} height="2" fill="#fff" opacity=".35" />
                {[DX + 6, DX + DW - 18].map((x) => <rect key={x} x={x} y={y + PH / 2 - 8} width="12" height="16" fill="#5c6872" stroke="#000" strokeOpacity=".4" />)}
                {r === 4 && <rect x={DX + DW / 2 - 30} y={y + PH / 2 - 5} width="60" height="10" rx="3" fill="#0a1620" />}
              </g>
            );
          })}
        </g>
        <rect x={DX} y={DY} width={DW} height="24" fill="#000" opacity=".4" />
      </g>
      {/* tracks + header */}
      <rect x={DX - 4} y={DY} width="8" height={DH} fill="#9aa5ab" opacity=".6" /><rect x={DX + DW - 4} y={DY} width="8" height={DH} fill="#9aa5ab" opacity=".6" />
      <rect x={DX - 10} y={DY - 12} width={DW + 20} height="12" fill="#07121a" />

      {/* wall packs */}
      {[DX - 110, DX + DW + 110].map((x) => (
        <g key={x}><ellipse cx={x} cy={DY + 20} rx="150" ry="170" fill="url(#hs-lamp)" opacity=".7" />
          <rect x={x - 26} y={DY + 4} width="52" height="26" rx="4" fill="#0a1620" stroke="#34495a" /><rect x={x - 20} y={DY + 22} width="40" height="6" fill="#fff1d6" /></g>
      ))}

      {/* ground, concrete apron, bollards */}
      <rect x="0" y="758" width="1600" height="142" fill="#0b141b" />
      <polygon points={`${DX - 30},758 ${DX + DW + 30},758 1800,900 520,900`} fill="url(#hs-drive)" />
      {[0.25, 0.5, 0.75].map((t) => <line key={t} x1={DX + DW * t} y1="758" x2={520 + 1280 * t} y2="900" stroke="#000" strokeOpacity=".4" />)}
      {[800, 845, 890].map((y) => <line key={y} x1={DX - 30 - (y - 758) * 2} y1={y} x2={DX + DW + 30 + (y - 758) * 2} y2={y} stroke="#000" strokeOpacity=".4" />)}
      <polygon points={`${DX + 10},760 ${DX + DW - 10},760 ${DX + DW + 170},900 ${DX - 170},900`} fill="url(#hs-spill)" style={{ opacity: glow, transition: "opacity 1.6s ease" }} />
      {[DX - 60, DX + DW + 60].map((x) => <g key={x}><rect x={x - 12} y="690" width="24" height="72" rx="6" fill="#e36e02" /><rect x={x - 12} y="708" width="24" height="10" fill="#fff" opacity=".85" /><rect x={x - 12} y="730" width="24" height="10" fill="#fff" opacity=".85" /><rect x={x - 12} y="690" width="8" height="72" rx="4" fill="#fff" opacity=".18" /></g>)}

      <rect width="1600" height="900" filter="url(#hs-grain)" opacity=".16" style={{ mixBlendMode: "overlay" }} />
      <rect width="1600" height="900" fill="url(#hs-vig)" />
    </svg>
  );
}
