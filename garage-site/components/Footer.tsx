import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-graphite overflow-hidden pb-20 md:pb-0">
      <div aria-hidden="true" className="select-none font-display font-bold uppercase text-[19vw] leading-none text-white/[0.03] whitespace-nowrap -mb-[3vw] pt-6 px-4">Northline</div>
      <div className="container-x pb-10 grid gap-12 md:grid-cols-2 lg:grid-cols-4 relative">
        <div>
          <Logo className="h-12" />
          <p className="mt-5 text-sm text-silver max-w-xs">Commercial door, gate and dock service for {site.region}. Keeping strata properties, warehouses and facilities operating.</p>
        </div>
        <div>
          <h3 className="eyebrow mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">{nav.map((n) => <li key={n.href}><Link className="text-white/75 hover:text-accent transition-colors" href={n.href}>{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className="eyebrow mb-4">Services</h3>
          <ul className="space-y-2 text-sm">{services.slice(0, 8).map((s) => <li key={s.slug}><Link className="text-white/75 hover:text-accent transition-colors" href={`/services/#${s.slug}`}>{s.name}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className="eyebrow mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-white/75">
            <li><a className="flex gap-2 hover:text-accent" href={site.phone.href}><Phone size={16} className="text-accent mt-0.5" />{site.phone.display}</a></li>
            <li><a className="flex gap-2 hover:text-accent" href={`mailto:${site.email}`}><Mail size={16} className="text-accent mt-0.5" />{site.email}</a></li>
            <li className="flex gap-2"><MapPin size={16} className="text-accent mt-0.5 shrink-0" />{site.address}</li>
            <li className="flex gap-2"><Clock size={16} className="text-accent mt-0.5 shrink-0" /><span>{site.hours[0].days}: {site.hours[0].time}</span></li>
          </ul>
        </div>
      </div>
      <div className="container-x border-t border-white/10 py-6 text-xs text-silver-dim flex flex-wrap justify-between gap-3">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>[LICENSE / WCB / INSURANCE DETAILS]</p>
      </div>
    </footer>
  );
}
