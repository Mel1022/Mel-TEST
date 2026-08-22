import { siteConfig } from "@/lib/site-config";
import { IconPhone } from "./Icons";

export default function EmergencyBanner() {
  return (
    <div className="bg-navy-dark text-white text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
        <span className="font-semibold">Door stuck, off track, or won&apos;t close?</span>
        <span className="text-white/70 hidden sm:inline">
          Same-day service available in Richmond &amp; Metro Vancouver.
        </span>
        <a
          href={siteConfig.phone.href}
          className="inline-flex items-center gap-1.5 font-bold text-gold hover:text-gold-light transition-colors"
        >
          <IconPhone className="w-4 h-4" />
          {siteConfig.phone.display}
        </a>
      </div>
    </div>
  );
}
