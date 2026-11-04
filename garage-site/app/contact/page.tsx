import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Siren } from "lucide-react";
import { PageHero, L } from "@/components/Section";
import QuoteWizard from "@/components/QuoteWizard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description: "Request a free garage door quote or call now. Residential and commercial service, repairs, installation and emergency support.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title={<><L>Get a free</L><L>quote.</L></>} text="Tell us what's going on. It takes under a minute — or just call." />
      <section className="container-x pb-24 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
        <QuoteWizard />
        <aside className="space-y-5">
          <a href={site.phone.href} className="block bg-lime text-black p-7 hover:bg-white transition-colors"><p className="font-display text-xs tracking-[0.24em] uppercase font-bold flex items-center gap-2"><Siren size={14} /> Emergency? Call now</p><p className="mt-3 font-display text-3xl font-bold flex items-center gap-3"><Phone />{site.phone.display}</p></a>
          <div className="glass p-7 space-y-5 text-sm">
            <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-lime"><Mail size={18} className="text-lime shrink-0" />{site.email}</a>
            <p className="flex gap-3"><MapPin size={18} className="text-lime shrink-0" />{site.address}</p>
            <div className="flex gap-3"><Clock size={18} className="text-lime shrink-0" /><ul className="space-y-1">{site.hours.map((h) => <li key={h.days}><span className="text-white">{h.days}:</span> <span className="text-silver">{h.time}</span></li>)}</ul></div>
          </div>
          <div className="glass p-7"><h2 className="eyebrow mb-3">Service areas</h2><ul className="flex flex-wrap gap-2 text-xs">{site.serviceAreas.map((a) => <li key={a} className="border border-white/15 px-3 py-1.5 text-silver">{a}</li>)}</ul></div>
        </aside>
      </section>
    </>
  );
}
