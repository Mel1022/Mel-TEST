"use client";
import Link from "next/link";
import { Phone, MessageSquareText } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingCTA() {
  return (
    <>
      {/* Desktop floating call button */}
      <a href={site.phone.href} aria-label={`Call ${site.phone.display}`} className="hidden md:grid fixed bottom-6 right-6 z-40 w-14 h-14 place-items-center bg-accent text-black shadow-[0_0_40px_rgba(227,110,2,.35)] hover:scale-110 transition-transform rounded-full">
        <span className="absolute inset-0 rounded-full border border-accent pulse-ring" aria-hidden="true" />
        <Phone size={22} />
      </a>
      {/* Mobile sticky bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 bg-ink/95 backdrop-blur border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
        <a href={site.phone.href} className="flex items-center justify-center gap-2 py-4 font-display font-bold text-sm tracking-wider uppercase text-white"><Phone size={16} className="text-accent" /> Call now</a>
        <Link href="/contact/" className="flex items-center justify-center gap-2 py-4 font-display font-bold text-sm tracking-wider uppercase bg-accent text-black"><MessageSquareText size={16} /> Request service</Link>
      </div>
    </>
  );
}
