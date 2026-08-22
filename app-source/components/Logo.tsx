type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-white/70" : "text-steel";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="w-9 h-9 flex-shrink-0" aria-hidden="true">
        <rect x="2" y="2" width="36" height="36" rx="8" fill="#142B4A" />
        <path d="M9 15h22M9 20h22M9 25h22" stroke="#F5F7FA" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 8l3.2 6.4 7 1-5 4.9 1.2 6.9L20 24l-6.4 3.2 1.2-6.9-5-4.9 7-1L20 8Z" fill="#D4A62A" />
      </svg>
      <span className="leading-none">
        <span className={`block font-heading font-extrabold tracking-tight text-lg ${textColor}`}>
          DOOR<span className="text-gold">CHAMP</span>
        </span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.14em] ${subColor}`}>
          Garage Door Service &amp; Repair
        </span>
      </span>
    </span>
  );
}
