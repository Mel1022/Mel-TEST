type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";
  const shieldColor = isLight ? "#ffffff" : "#0B3D2E";
  const textColor = isLight ? "#ffffff" : "#0B3D2E";
  const accentColor = "#D4A62A";

  return (
    <span className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Shield/house icon */}
      <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M18 1L3 8V22C3 29.18 9.68 35.74 18 37C26.32 35.74 33 29.18 33 22V8L18 1Z"
          fill={isLight ? "#2E8B62" : "#146B4D"}
        />
        <path
          d="M18 3.5L5 9.8V22C5 28.2 10.8 34.0 18 35.2C25.2 34.0 31 28.2 31 22V9.8L18 3.5Z"
          fill={isLight ? "#3DA876" : "#2E8B62"}
        />
        {/* Door shape inside shield */}
        <rect x="11" y="16" width="14" height="13" rx="1" fill={isLight ? "#146B4D" : "#0B3D2E"} />
        <rect x="11" y="16" width="14" height="6" rx="1" fill={isLight ? "#0F4A37" : "#071F17"} />
        {/* Door handle */}
        <circle cx="22" cy="23" r="1.2" fill={accentColor} />
        {/* Roof peak */}
        <path d="M11 16L18 9L25 16" stroke={accentColor} strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      </svg>

      {/* Wordmark */}
      <span
        style={{
          fontFamily: "var(--font-manrope), Manrope, system-ui, sans-serif",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          color: textColor,
          fontSize: "1.25rem",
        }}
      >
        Door
        <span style={{ color: accentColor }}>Champ</span>
      </span>
    </span>
  );
}
