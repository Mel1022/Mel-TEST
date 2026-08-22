import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { IconPhone } from "./Icons";

export default function StickyCallBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-navy border-t border-white/10 shadow-[0_-8px_20px_-8px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-2 divide-x divide-white/10">
        <a
          href={siteConfig.phone.href}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white"
        >
          <IconPhone className="w-4 h-4 text-gold" />
          Call the Champ
        </a>
        <Link
          href="/request-a-quote/"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-navy bg-gold"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
  );
}
