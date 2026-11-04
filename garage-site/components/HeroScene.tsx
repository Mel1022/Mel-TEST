/**
 * Detailed dusk exterior: textured siding, bevelled steel sectional door, lit interior,
 * wall lights and light spill. `open` is 0..1 (door lift). viewBox 1600x900.
 */
const DX = 840, DY = 300, DW = 600, DH = 460, ROWS = 5, PH = DH / ROWS;

export default function HeroScene({ open = 0 }: { open?: number }) {
  const lift = open * (DH + 14);
  const glow = Math.min(1, open * 2.2);
  const cols = [0, 1, 2, 3];
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMaxYMid slice" className="w-full h-full" role="img" aria-label="Modern charcoal garage door opening to reveal a lit garage with a car inside">
      <defs>
        <clipPath id="hs-open"><rect x={DX} y={DY} width={DW} height={DH} /></clipPath>
        <linearGradient id="hs-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1a2228" /><stop offset="1" stopColor="#0f1519" /></linearGradient>
        <linearGradient id="hs-steel" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#2f373d" /><stop offset=".18" stopColor="#4a545c" /><stop offset=".5" stopColor="#5c6872" /><stop offset=".82" stopColor="#4a545c" /><stop offset="1" stopColor="#2f373d" /></linearGradient>
        <linearGradient id="hs-sheen" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".16" /><stop offset=".25" stopColor="#fff" stopOpacity=".03" /><stop offset="1" stopColor="#000" stopOpacity=".3" /></linearGradient>
        <linearGradient id="hs-emb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3f484f" /><stop offset="1" stopColor="#535e67" /></linearGradient>
        <linearGradient id="hs-glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#8fb2c4" stopOpacity=".7" /><stop offset=".45" stopColor="#20323c" stopOpacity=".95" /><stop offset="1" stopColor="#4d6c7b" stopOpacity=".7" /></linearGradient>
        <linearGradient id="hs-room" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0a0e0f" /><stop offset=".55" stopColor="#141c18" /><stop offset="1" stopColor="#1d2a14" /></linearGradient>
        <linearGradient id="hs-drive" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2a3136" /><stop offset="1" stopColor="#12171a" /></linearGradient>
        <radialGradient id="hs-lamp"><stop offset="0" stopColor="#ffe9b0" stopOpacity=".9" /><stop offset=".25" stopColor="#ffd98a" stopOpacity=".35" /><stop offset="1" stopColor="#ffd98a" stopOpacity="0" /></radialGradient>
        <radialGradient id="hs-spill" cx=".5" cy="0" r="1"><stop offset="0" stopColor="#e6ff8a" stopOpacity=".6" /><stop offset=".5" stopColor="#c8ff2e" stopOpacity=".16" /><stop offset="1" stopColor="#c8ff2e" stopOpacity="0" /></radialGradient>
        <radialGradient id="hs-vig" cx=".6" cy=".5" r=".85"><stop offset=".55" stopColor="#000" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".7" /></radialGradient>
        <filter id="hs-streak" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.004 0.7" numOctaves="2" seed="4" /><feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .55 -.12" /></filter>
        <filter id="hs-grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" seed="9" /><feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .6 -.18" /></filter>
        <filter id="hs-blur"><feGaussianBlur stdDeviation="14" /></filter>
        <pattern id="hs-siding" width="40" height="30" patternUnits="userSpaceOnUse"><rect width="40" height="30" fill="none" /><rect y="0" width="40" height="2" fill="#000" opacity=".45" /><rect y="2" width="40" height="2" fill="#fff" opacity=".06" /></pattern>
      </defs>

      {/* ── facade ── */}
      <rect width="1600" height="900" fill="url(#hs-wall)" />
      <rect width="1600" height="780" fill="url(#hs-siding)" />
      <rect width="1600" height="780" filter="url(#hs-streak)" opacity=".1" />
      {/* roof / fascia */}
      <polygon points="0,0 1600,0 1600,96 0,150" fill="#0a0e11" />
      <polygon points="0,150 1600,96 1600,112 0,168" fill="#1d262c" />
      <polygon points="0,168 1600,112 1600,124 0,181" fill="#000" opacity=".5" />
      {/* upstairs window with warm light */}
      <g>
        <rect x="940" y="150" width="400" height="120" fill="#10161a" stroke="#2a343b" strokeWidth="6" />
        <rect x="948" y="158" width="384" height="104" fill="#e9b765" opacity=".85" />
        <rect x="948" y="158" width="384" height="104" fill="url(#hs-glass)" opacity=".28" />
        <g stroke="#10161a" strokeWidth="6"><line x1="1140" y1="158" x2="1140" y2="262" /><line x1="1044" y1="158" x2="1044" y2="262" /><line x1="1236" y1="158" x2="1236" y2="262" /></g>
        <rect x="948" y="158" width="130" height="104" fill="#7a4a1f" opacity=".28" />
        <ellipse cx="1140" cy="210" rx="300" ry="110" fill="url(#hs-lamp)" opacity=".35" />
      </g>
      {/* stone base */}
      <rect x="0" y="738" width="1600" height="42" fill="#0b0f11" />
      {[...Array(40)].map((_, i) => <rect key={i} x={i * 42 + (i % 2) * 8} y={742 + (i % 3) * 10} width="36" height="14" rx="2" fill="#1a2227" opacity=".8" />)}

      {/* ── door frame ── */}
      <rect x={DX - 26} y={DY - 30} width={DW + 52} height={DH + 30} fill="#232d34" />
      <rect x={DX - 26} y={DY - 30} width={DW + 52} height="3" fill="#fff" opacity=".18" />
      <rect x={DX - 12} y={DY - 14} width={DW + 24} height={DH + 14} fill="#05080a" />

      {/* ── interior ── */}
      <g clipPath="url(#hs-open)">
        <rect x={DX} y={DY} width={DW} height={DH} fill="url(#hs-room)" />
        {/* back wall + perspective */}
        <polygon points={`${DX},${DY} ${DX + 120},${DY + 90} ${DX + DW - 120},${DY + 90} ${DX + DW},${DY}`} fill="#0b100e" />
        <rect x={DX + 120} y={DY + 90} width={DW - 240} height="240" fill="#18211b" />
        <polygon points={`${DX},${DY + DH} ${DX + 120},${DY + 330} ${DX + DW - 120},${DY + 330} ${DX + DW},${DY + DH}`} fill="#1b2619" />
        <polygon points={`${DX},${DY} ${DX + 120},${DY + 90} ${DX + 120},${DY + 330} ${DX},${DY + DH}`} fill="#0d1311" />
        <polygon points={`${DX + DW},${DY} ${DX + DW - 120},${DY + 90} ${DX + DW - 120},${DY + 330} ${DX + DW},${DY + DH}`} fill="#101713" />
        {/* shelving */}
        {[0, 1, 2].map((r) => <g key={r}><rect x={DX + 134} y={DY + 140 + r * 60} width="120" height="4" fill="#3b4a3f" />{[0, 1, 2].map((c) => <rect key={c} x={DX + 140 + c * 36} y={DY + 118 + r * 60} width="28" height="22" fill={["#2a3d2b", "#35402a", "#233028"][c]} />)}</g>)}
        {/* ceiling lights + opener rail */}
        <rect x={DX + 190} y={DY + 40} width="220" height="10" rx="5" fill="#f2ffd0" opacity=".95" />
        <rect x={DX + 150} y={DY + 36} width="300" height="40" fill="url(#hs-spill)" opacity=".7" />
        <g stroke="#7d8a82" strokeWidth="3"><line x1={DX + 300} y1={DY + 10} x2={DX + 300} y2={DY + 88} /><line x1={DX + 296} y1={DY + 10} x2={DX + 296} y2={DY + 88} opacity=".5" /></g>
        <rect x={DX + 270} y={DY + 64} width="60" height="26" rx="4" fill="#232b2a" stroke="#4c5a55" />
        {/* car (front view) */}
        <g>
          <rect x={DX + 210} y={DY + 262} width="180" height="40" rx="14" fill="#0a0d0f" />
          <path d={`M${DX + 190} ${DY + 340} q0 -70 30 -88 q80 -26 160 0 q30 18 30 88 z`} fill="#161d22" stroke="#2e3a41" strokeWidth="2" />
          <path d={`M${DX + 236} ${DY + 262} q64 -22 128 0 l-10 -36 q-54 -14 -108 0 z`} fill="#0b1013" stroke="#35444d" />
          <rect x={DX + 206} y={DY + 300} width="46" height="14" rx="6" fill="#dff4ff" opacity=".9" />
          <rect x={DX + 348} y={DY + 300} width="46" height="14" rx="6" fill="#dff4ff" opacity=".9" />
          <ellipse cx={DX + 230} cy={DY + 307} rx="60" ry="22" fill="#cfe9ff" opacity=".2" filter="url(#hs-blur)" />
          <ellipse cx={DX + 370} cy={DY + 307} rx="60" ry="22" fill="#cfe9ff" opacity=".2" filter="url(#hs-blur)" />
          <rect x={DX + 262} y={DY + 322} width="76" height="14" rx="3" fill="#06090a" />
        </g>
        <rect x={DX} y={DY} width={DW} height={DH} fill="#000" style={{ opacity: 1 - glow * 0.85, transition: "opacity 1.6s ease" }} />
      </g>

      {/* ── door panels ── */}
      <g clipPath="url(#hs-open)">
        <g style={{ transform: `translateY(${-lift}px)`, transition: "transform 2.2s cubic-bezier(.65,0,.25,1)" }}>
          {[...Array(ROWS)].map((_, r) => {
            const y = DY + r * PH;
            return (
              <g key={r}>
                <rect x={DX} y={y} width={DW} height={PH} fill="url(#hs-steel)" />
                <rect x={DX} y={y} width={DW} height={PH} fill="url(#hs-sheen)" />
                <rect x={DX} y={y} width={DW} height={PH} filter="url(#hs-streak)" opacity=".07" />
                {/* embossed raised panels */}
                {cols.map((c) => {
                  const w = (DW - 5 * 14) / 4, x = DX + 14 + c * (w + 14), ey = y + 14, eh = PH - 28;
                  const isWin = r === 0;
                  return (
                    <g key={c}>
                      {isWin ? (
                        <>
                          <rect x={x} y={ey} width={w} height={eh} fill="#111619" />
                          <rect x={x + 5} y={ey + 5} width={w - 10} height={eh - 10} fill="url(#hs-glass)" />
                          <rect x={x + 5} y={ey + 5} width={w - 10} height={eh - 10} fill="#e9b765" opacity={0.1 + glow * 0.28} style={{ transition: "opacity 1.6s" }} />
                          <line x1={x + w / 2} y1={ey + 5} x2={x + w / 2} y2={ey + eh - 5} stroke="#111619" strokeWidth="3" />
                          <path d={`M${x + 14} ${ey + eh - 12} L${x + w * 0.5} ${ey + 10}`} stroke="#fff" strokeOpacity=".22" strokeWidth="6" />
                        </>
                      ) : (
                        <>
                          <rect x={x} y={ey} width={w} height={eh} fill="url(#hs-emb)" />
                          <path d={`M${x} ${ey + eh} V${ey} H${x + w}`} fill="none" stroke="#000" strokeOpacity=".55" strokeWidth="3" />
                          <path d={`M${x + w} ${ey} V${ey + eh} H${x}`} fill="none" stroke="#fff" strokeOpacity=".2" strokeWidth="2" />
                          <rect x={x + 10} y={ey + 10} width={w - 20} height={eh - 20} fill="none" stroke="#000" strokeOpacity=".25" />
                        </>
                      )}
                    </g>
                  );
                })}
                {/* section joint */}
                <rect x={DX} y={y + PH - 4} width={DW} height="4" fill="#000" opacity=".6" />
                <rect x={DX} y={y + PH - 6} width={DW} height="2" fill="#fff" opacity=".1" />
                {/* handle */}
                {r === 2 && <g><rect x={DX + DW / 2 - 38} y={y + PH / 2 - 5} width="76" height="10" rx="5" fill="#07090a" /><rect x={DX + DW / 2 - 38} y={y + PH / 2 - 5} width="76" height="3" rx="1.5" fill="#fff" opacity=".28" /></g>}
              </g>
            );
          })}
        </g>
        {/* inner shadow along the opening */}
        <rect x={DX} y={DY} width={DW} height="22" fill="#000" opacity=".4" />
      </g>
      {/* track rails + roller hardware */}
      <rect x={DX - 4} y={DY} width="8" height={DH} fill="#9aa5ab" opacity=".55" />
      <rect x={DX + DW - 4} y={DY} width="8" height={DH} fill="#9aa5ab" opacity=".55" />
      <rect x={DX - 12} y={DY - 14} width={DW + 24} height="14" fill="#0b1013" />
      <rect x={DX - 12} y={DY - 2} width={DW + 24} height="2" fill="#fff" opacity=".12" />

      {/* ── wall lights ── */}
      {[DX - 90, DX + DW + 90].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy={DY + 60} rx="130" ry="150" fill="url(#hs-lamp)" opacity=".75" />
          <rect x={x - 12} y={DY + 20} width="24" height="56" rx="4" fill="#0a0d0f" stroke="#2c373e" />
          <rect x={x - 8} y={DY + 28} width="16" height="40" fill="#ffe3a0" />
        </g>
      ))}

      {/* ── ground ── */}
      <rect x="0" y="758" width="1600" height="142" fill="#0a0e10" />
      <polygon points={`${DX},758 ${DX + DW},758 1760,900 560,900`} fill="url(#hs-drive)" />
      {[0.2, 0.4, 0.6, 0.8].map((t) => <line key={t} x1={DX + DW * t} y1="758" x2={560 + 1200 * t} y2="900" stroke="#000" strokeOpacity=".35" />)}
      {[790, 830, 880].map((y) => <line key={y} x1={DX - (y - 758) * 1.9} y1={y} x2={DX + DW + (y - 758) * 1.9} y2={y} stroke="#000" strokeOpacity=".35" />)}
      <polygon points={`${DX + 10},760 ${DX + DW - 10},760 ${DX + DW + 160},900 ${DX - 160},900`} fill="url(#hs-spill)" style={{ opacity: glow, transition: "opacity 1.6s ease" }} />
      {/* shrubs */}
      {[[120, 740, 110], [330, 750, 90], [600, 748, 70], [1580, 744, 120]].map(([x, y, r], i) => (
        <g key={i}><ellipse cx={x} cy={y} rx={r} ry={r * 0.55} fill="#0b160d" /><ellipse cx={x - r * 0.2} cy={y - r * 0.2} rx={r * 0.6} ry={r * 0.3} fill="#16281a" opacity=".9" /></g>
      ))}

      {/* ── finishing ── */}
      <rect width="1600" height="900" filter="url(#hs-grain)" opacity=".18" style={{ mixBlendMode: "overlay" }} />
      <rect width="1600" height="900" fill="url(#hs-vig)" />
    </svg>
  );
}
