type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";
  const wordColor = isLight ? "#ffffff" : "#1C1C1C";
  const green = "#2EAA50";

  return (
    <span className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Shield / garage-door icon */}
      <svg
        width="48"
        height="54"
        viewBox="0 0 110 124"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer hexagonal shield — green stroke */}
        <path
          d="M32,4 L78,4 L106,28 L106,74 L55,120 L4,74 L4,28 Z"
          stroke={green}
          strokeWidth="5"
          strokeLinejoin="round"
          fill={isLight ? "rgba(46,170,80,0.07)" : "rgba(46,170,80,0.04)"}
        />

        {/* Left horizontal eave */}
        <line x1="4" y1="60" x2="22" y2="60" stroke="#1C1C1C" strokeWidth="6" strokeLinecap="butt" />
        {/* Pitched roof */}
        <path d="M22,60 L55,27 L88,60" stroke="#1C1C1C" strokeWidth="6" strokeLinecap="butt" strokeLinejoin="miter" fill="none" />
        {/* Right horizontal eave */}
        <line x1="88" y1="60" x2="106" y2="60" stroke="#1C1C1C" strokeWidth="6" strokeLinecap="butt" />

        {/* Peak window — 4-pane, green */}
        <rect x="49" y="30" width="12" height="12" fill={green} />
        <line x1="55" y1="30" x2="55" y2="42" stroke="white" strokeWidth="1.6" />
        <line x1="49" y1="36" x2="61" y2="36" stroke="white" strokeWidth="1.6" />

        {/* Green vertical side pillars */}
        <rect x="22" y="60" width="9" height="51" fill={green} />
        <rect x="79" y="60" width="9" height="51" fill={green} />

        {/* Garage door body */}
        <rect x="31" y="60" width="48" height="51" fill="#EDEDED" />

        {/* Top window row — 5 panes */}
        <rect x="34" y="63" width="7" height="7" fill="#2A2A2A" />
        <rect x="43" y="63" width="7" height="7" fill="#2A2A2A" />
        <rect x="52" y="63" width="7" height="7" fill="#2A2A2A" />
        <rect x="61" y="63" width="7" height="7" fill="#2A2A2A" />
        <rect x="70" y="63" width="7" height="7" fill="#2A2A2A" />

        {/* Horizontal panel dividers */}
        <line x1="31" y1="73" x2="79" y2="73" stroke="#BBBBBB" strokeWidth="1.2" />
        <line x1="31" y1="83" x2="79" y2="83" stroke="#BBBBBB" strokeWidth="1.2" />
        <line x1="31" y1="93" x2="79" y2="93" stroke="#BBBBBB" strokeWidth="1.2" />
        <line x1="31" y1="103" x2="79" y2="103" stroke="#BBBBBB" strokeWidth="1.2" />

        {/* Door bottom shine / highlight */}
        <path d="M31,104 L79,104 L75,111 L35,111 Z" fill="#D0D0D0" />
      </svg>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        {/* DOORCHAMP — bold condensed italic */}
        <span
          style={{
            fontFamily: "'Barlow Condensed', 'Oswald', var(--font-manrope), system-ui, sans-serif",
            fontWeight: 800,
            fontStyle: "italic",
            fontSize: "1.45rem",
            lineHeight: 1,
            letterSpacing: "0.01em",
          }}
        >
          <span style={{ color: wordColor }}>DOOR</span>
          <span style={{ color: green }}>CHAMP</span>
        </span>

        {/* GARAGE SERVICES — spaced with decorative dashes */}
        <span
          style={{
            fontFamily: "'Barlow Condensed', var(--font-dmsans), system-ui, sans-serif",
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "0.5rem",
            letterSpacing: "0.22em",
            color: isLight ? "rgba(255,255,255,0.65)" : green,
            display: "flex",
            alignItems: "center",
            gap: "4px",
            marginTop: "3px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "12px",
              height: "1.5px",
              background: isLight ? "rgba(255,255,255,0.5)" : green,
              flexShrink: 0,
            }}
          />
          GARAGE SERVICES
          <span
            style={{
              display: "inline-block",
              width: "12px",
              height: "1.5px",
              background: isLight ? "rgba(255,255,255,0.5)" : green,
              flexShrink: 0,
            }}
          />
        </span>
      </span>
    </span>
  );
}
