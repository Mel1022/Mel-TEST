import { site } from "@/lib/site";
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect width="64" height="64" rx="10" fill="#c8ff2e" />
        <g stroke="#06080a" strokeWidth="4.5" strokeLinecap="square"><path d="M10 28 32 12l22 16" /><path d="M17 28v24h30V28M17 37h30M17 45h30" /></g>
      </svg>
      <span className="font-display font-bold tracking-[0.12em] uppercase text-xs sm:text-base text-white whitespace-nowrap">{site.name}</span>
    </span>
  );
}
