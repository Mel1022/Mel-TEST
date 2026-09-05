"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { residentialNav, siteConfig } from "@/lib/site-config";
import { IconMenu, IconClose, IconPhone, IconChevron } from "./Icons";

const commercialLinks = [
  { label: "Commercial Spring Repair", href: "/commercial/" },
  { label: "Commercial Openers", href: "/commercial/" },
  { label: "New Commercial Doors", href: "/commercial/" },
  { label: "Loading Docks", href: "/loading-docks/" },
  { label: "Mandoors", href: "/commercial/" },
  { label: "Sliding Gates", href: "/sliding-gates/" },
  { label: "Warehouses", href: "/commercial/" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [commercialOpen, setCommercialOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#e0ebe5]" style={{ boxShadow: "0 2px 12px rgba(11,61,46,0.08)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" aria-label="DoorChamp home" onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Primary">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-[#1a3a2a] hover:text-[#146B4D] rounded transition-colors"
                aria-expanded={servicesOpen}
              >
                RESIDENTIAL <IconChevron className="w-3.5 h-3.5" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-58 bg-white border border-[#d0e8dc] rounded-card shadow-cardHover py-2 z-50" style={{ minWidth: "220px" }}>
                  <p className="px-4 pt-1 pb-0.5 text-[10px] font-bold text-[#5A7068] uppercase tracking-widest">Residential</p>
                  {residentialNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-[#1a3a2a] hover:bg-[#EBF7F1] hover:text-[#0B3D2E] transition-colors"
                    >
                      {item.fullLabel}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Commercial dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCommercialOpen(true)}
              onMouseLeave={() => setCommercialOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-[#1a3a2a] hover:text-[#146B4D] rounded transition-colors"
                aria-expanded={commercialOpen}
              >
                COMMERCIAL <IconChevron className="w-3.5 h-3.5" />
              </button>
              {commercialOpen && (
                <div className="absolute top-full left-0 bg-white border border-[#d0e8dc] rounded-card shadow-cardHover py-2 z-50" style={{ minWidth: "220px" }}>
                  {commercialLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-[#1a3a2a] hover:bg-[#EBF7F1] hover:text-[#0B3D2E] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/strata/" className="px-3.5 py-2 text-sm font-semibold text-[#1a3a2a] hover:text-[#146B4D] rounded transition-colors uppercase">
              Strata
            </Link>
            <Link href="/service-areas/" className="px-3.5 py-2 text-sm font-semibold text-[#1a3a2a] hover:text-[#146B4D] rounded transition-colors uppercase whitespace-nowrap">
              Service Areas
            </Link>
            <Link href="/about/" className="px-3.5 py-2 text-sm font-semibold text-[#1a3a2a] hover:text-[#146B4D] rounded transition-colors uppercase">
              About
            </Link>
            <Link href="/faq/" className="px-3.5 py-2 text-sm font-semibold text-[#1a3a2a] hover:text-[#146B4D] rounded transition-colors uppercase">
              FAQ
            </Link>
            <Link href="/contact/" className="px-3.5 py-2 text-sm font-semibold text-[#1a3a2a] hover:text-[#146B4D] rounded transition-colors uppercase">
              Contact
            </Link>
          </nav>

          {/* Right CTAs */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded border-2 border-[#146B4D] text-[#146B4D] text-sm font-bold hover:bg-[#EBF7F1] transition-colors whitespace-nowrap"
            >
              <IconPhone className="w-4 h-4" />
              {siteConfig.phone.display}
            </a>
            <Link
              href="/request-a-quote/"
              className="inline-flex items-center justify-center rounded-card bg-[#2E8B62] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#146B4D] transition-colors whitespace-nowrap"
            >
              GET A FREE QUOTE
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="xl:hidden p-2 text-[#0B3D2E]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden border-t border-[#d0e8dc] bg-white max-h-[80vh] overflow-y-auto">
          <nav className="px-4 sm:px-6 py-4 flex flex-col" aria-label="Mobile">
            <p className="py-2 text-[10px] font-bold text-[#5A7068] uppercase tracking-widest">Residential Services</p>
            {residentialNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-semibold text-[#0B3D2E] border-b border-[#d0e8dc]"
              >
                {item.fullLabel}
              </Link>
            ))}
            <p className="pt-4 py-2 text-[10px] font-bold text-[#5A7068] uppercase tracking-widest">Commercial</p>
            {commercialLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-semibold text-[#0B3D2E] border-b border-[#d0e8dc]"
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
                  className="py-2.5 text-sm font-semibold text-[#0B3D2E] border-b border-[#d0e8dc] block"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="px-4 sm:px-6 pb-6 pt-2 flex flex-col gap-3">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-card border-2 border-[#146B4D] px-5 py-3 text-sm font-bold text-[#146B4D]"
            >
              <IconPhone className="w-4 h-4" />
              {siteConfig.phone.display}
            </a>
            <Link
              href="/request-a-quote/"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-card bg-[#2E8B62] px-5 py-3 text-sm font-bold text-white"
            >
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
