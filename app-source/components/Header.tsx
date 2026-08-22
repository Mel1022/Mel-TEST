"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { residentialNav, siteConfig } from "@/lib/site-config";
import { IconMenu, IconClose, IconPhone, IconChevron } from "./Icons";

const commercialLinks = [
  { label: "Commercial Doors", href: "/commercial/" },
  { label: "Loading Docks", href: "/loading-docks/" },
  { label: "Sliding Gates", href: "/sliding-gates/" },
  { label: "Strata & Multi-Family", href: "/strata/" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/97 backdrop-blur border-b border-steel/15 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" aria-label="DoorChamp home" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Primary">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-navy/80 hover:text-navy rounded-md hover:bg-surface transition-colors"
                aria-expanded={servicesOpen}
              >
                Services <IconChevron className="w-3.5 h-3.5" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-56 bg-white border border-steel/15 rounded-card shadow-cardHover py-2 z-50">
                  <p className="px-4 py-1 text-xs font-bold text-steel uppercase tracking-wide">Residential</p>
                  {residentialNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-navy hover:bg-surface hover:text-navy-dark transition-colors"
                    >
                      {item.fullLabel}
                    </Link>
                  ))}
                  <div className="my-1 border-t border-steel/10" />
                  <p className="px-4 py-1 text-xs font-bold text-steel uppercase tracking-wide">Commercial</p>
                  {commercialLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-navy hover:bg-surface hover:text-navy-dark transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/service-areas/" className="px-3 py-2 text-sm font-semibold text-navy/80 hover:text-navy rounded-md hover:bg-surface transition-colors whitespace-nowrap">
              Service Areas
            </Link>
            <Link href="/about/" className="px-3 py-2 text-sm font-semibold text-navy/80 hover:text-navy rounded-md hover:bg-surface transition-colors">
              About
            </Link>
            <Link href="/faq/" className="px-3 py-2 text-sm font-semibold text-navy/80 hover:text-navy rounded-md hover:bg-surface transition-colors">
              FAQ
            </Link>
            <Link href="/contact/" className="px-3 py-2 text-sm font-semibold text-navy/80 hover:text-navy rounded-md hover:bg-surface transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.phone.href}
              className="hidden xl:inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-bold text-navy hover:text-navy-light transition-colors"
            >
              <IconPhone className="w-4 h-4" />
              {siteConfig.phone.display}
            </a>
            <Link
              href="/request-a-quote/"
              className="whitespace-nowrap inline-flex items-center justify-center rounded-card bg-navy px-5 py-2.5 text-sm font-bold text-white shadow-card hover:bg-navy-dark transition-colors"
            >
              Free Quote
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
        <div className="xl:hidden border-t border-steel/15 bg-white max-h-[80vh] overflow-y-auto">
          <nav className="px-4 sm:px-6 py-4 flex flex-col" aria-label="Mobile">
            <p className="py-2 text-xs font-bold text-steel uppercase tracking-wide">Residential Services</p>
            {residentialNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-semibold text-navy border-b border-steel/10"
              >
                {item.fullLabel}
              </Link>
            ))}
            <p className="pt-4 py-2 text-xs font-bold text-steel uppercase tracking-wide">Commercial</p>
            {commercialLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-semibold text-navy border-b border-steel/10"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2">
              {[
                { label: "Service Areas", href: "/service-areas/" },
                { label: "About DoorChamp", href: "/about/" },
                { label: "FAQ", href: "/faq/" },
                { label: "Contact", href: "/contact/" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-semibold text-navy border-b border-steel/10 block"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="px-4 sm:px-6 pb-6 pt-2 flex flex-col gap-3">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-card border-2 border-navy px-5 py-3 text-sm font-bold text-navy"
            >
              <IconPhone className="w-4 h-4" />
              {siteConfig.phone.display}
            </a>
            <Link
              href="/request-a-quote/"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-card bg-navy px-5 py-3 text-sm font-bold text-white"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
