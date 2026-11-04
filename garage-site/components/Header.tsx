"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const path = usePathname();

  useEffect(() => {
    let last = 0;
    const on = () => { const y = window.scrollY; setScrolled(y > 40); setHidden(y > last && y > 500); last = y; };
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc); return () => window.removeEventListener("keydown", esc);
  }, [open]);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${hidden && !open ? "-translate-y-full" : "translate-y-0"} ${scrolled ? "glass !border-x-0 !border-t-0 py-3 bg-ink/70" : "py-5"}`}>
        <div className="container-x flex items-center justify-between gap-6">
          <Link href="/" aria-label={`${site.name} home`}><Logo className="h-8 sm:h-10" /></Link>
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} aria-current={path.startsWith(n.href) ? "page" : undefined} className="nav-link text-[13px] font-medium tracking-wide text-white/80 hover:text-white">{n.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={site.phone.href} className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors"><Phone size={16} className="text-accent" />{site.phone.display}</a>
            <Link href="/contact/" className="btn btn-primary !py-3 !px-5 hidden sm:inline-flex">Request Service</Link>
            <button type="button" className="lg:hidden w-11 h-11 grid place-items-center border border-white/20 text-white" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-nav" role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-40 bg-ink grid-bg pt-24 px-6 pb-10 flex flex-col"
            initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}>
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {[{ label: "Home", href: "/" }, ...nav].map((n, i) => (
                <motion.div key={n.href} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 + i * 0.06 }}>
                  <Link href={n.href} className="font-display text-4xl font-bold uppercase py-2 block text-white hover:text-accent border-b border-white/10">{n.label}</Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto grid gap-3">
              <a href={site.phone.href} className="btn btn-ghost"><Phone size={16} /> {site.phone.display}</a>
              <Link href="/contact/" className="btn btn-primary">Request service</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
