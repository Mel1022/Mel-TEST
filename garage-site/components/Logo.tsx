import { site } from "@/lib/site";
/** Reversed (light) logo for dark backgrounds. Original colour logo: /brand/northline-logo-color.png */
export default function Logo({ className = "h-9 sm:h-11" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/brand/northline-logo-light.png" alt={site.name} className={`w-auto ${className}`} />;
}
