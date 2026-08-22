"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { primaryNav, siteConfig } from "@/lib/site-config";
import { IconMenu, IconClose, IconPhone } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-steel/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" aria-label="DoorChamp home">
            <Logo />
          </Link>

          <nav className="hidden xl:flex items-center gap-5" aria-label="Primary">
            {primaryNav.slice(0, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-sm font-semibold text-navy/80 hover:text-navy transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.phone.href}
              className="hidden xl:inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-bold text-navy hover:text-gold-dark transition-colors"
            >
              <IconPhone className="w-4 h-4" />
              {siteConfig.phone.display}
            </a>
            <Link
              href="/request-a-quote/"
              className="whitespace-nowrap inline-flex items-center justify-center rounded-card bg-gold px-5 py-2.5 text-sm font-bold text-navy shadow-card hover:bg-gold-dark hover:text-white transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            type="button"
            className="xl:hidden p-2 text-navy"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-steel/15 bg-white">
          <nav className="px-4 sm:px-6 py-4 flex flex-col gap-1" aria-label="Mobile">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base font-semibold text-navy border-b border-steel/10 last:border-none"
              >
                {item.fullLabel}
              </Link>
            ))}
          </nav>
          <div className="px-4 sm:px-6 pb-5 flex flex-col gap-3">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-card border-2 border-navy px-5 py-3 text-sm font-bold text-navy"
            >
              <IconPhone className="w-4 h-4" />
              Call the Champ
            </a>
            <Link
              href="/request-a-quote/"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-card bg-gold px-5 py-3 text-sm font-bold text-navy"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
