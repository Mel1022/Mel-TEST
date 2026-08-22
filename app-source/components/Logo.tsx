type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Hexagonal shield icon */}
      <svg width="42" height="44" viewBox="0 0 42 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Hex outer shape */}
        <path
          d="M21 1L3 9V24C3 33.5 11 41.5 21 43C31 41.5 39 33.5 39 24V9L21 1Z"
          fill="#146B4D"
        />
        <path
          d="M21 4L6 11V24C6 32.2 13 39.2 21 40.5C29 39.2 36 32.2 36 24V11L21 4Z"
          fill="#0B3D2E"
        />
        {/* House/garage door shape */}
        {/* Roof */}
        <path d="M21 11L12 17H30L21 11Z" fill="#2E8B62" />
        {/* Walls */}
        <rect x="13" y="17" width="16" height="14" rx="0.5" fill="#1A5C40" />
        {/* Garage door panel lines */}
        <rect x="13" y="17" width="16" height="4.5" rx="0.5" fill="#2E8B62" opacity="0.7" />
        <rect x="13" y="22" width="16" height="4.5" rx="0.5" fill="#2E8B62" opacity="0.4" />
        {/* Door handle */}
        <circle cx="27" cy="26" r="1.2" fill="#D4A62A" />
      </svg>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: "var(--font-manrope), Manrope, system-ui, sans-serif",
            fontWeight: 900,
            letterSpacing: "-0.01em",
            fontSize: "1.2rem",
            color: isLight ? "#ffffff" : "#0B3D2E",
          }}
        >
          DOOR<span style={{ color: "#2E8B62" }}>CHAMP</span>
        </span>
        <span
          style={{
            fontFamily: "var(--font-dmsans), DM Sans, system-ui, sans-serif",
            fontWeight: 600,
            fontSize: "0.6rem",
            letterSpacing: "0.12em",
            color: isLight ? "rgba(255,255,255,0.6)" : "#5A7068",
          }}
        >
          GARAGE SERVICES
        </span>
      </span>
    </span>
  );
}
