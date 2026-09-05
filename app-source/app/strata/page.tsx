import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Strata Garage Door Programs | DoorChamp Richmond BC",
  description:
    "Quarterly, bi-annual, and annual garage door maintenance for Richmond strata corporations. COIs same-day. Free on-site quote — we walk every door with you before you sign.",
  alternates: { canonical: "/strata/" },
};

const pills = [
  "BCFSA-licensed vendor partners",
  "Strata Property Act fluent",
  "$5M liability + WCB compliant",
  "FirstService · AWM · Pacific Quorum · Tribe",
  "Depreciation report-ready",
];

const checkItems = [
  { bold: "Same-day Certificate of Insurance", rest: " emailed in your work-order format — no chasing for a fresh COI before the AGM." },
  { bold: "Depreciation report-ready documentation", rest: " on every job — 30-year life expectancy, replacement cost, and current condition formatted for the report writer." },
  { bold: "AP-friendly invoicing", rest: " matching your work-order number scheme, NET-30 standard, e-transfer or cheque, GST line-itemed." },
  { bold: "Form B and bylaw review free", rest: " — we read the relevant sections and tell council in plain English who pays for what BEFORE we quote." },
  { bold: "Council-ready written quotes", rest: " with capital vs operating split, options A/B/C, and a one-page AGM-ready summary." },
  { bold: "24/7 emergency line", rest: " dispatched from Richmond — parkade gates, garbage room roll-ups, fire-rated doors." },
];

const programs = [
  {
    tag: "Most Active",
    name: "Quarterly",
    price: "$290",
    perVisit: "/door/visit",
    perYear: "$1,160/door/year",
    description: "Four scheduled visits per year. Best for parkades with high cycle counts and 100+ unit buildings.",
    features: [
      "One dedicated point of contact",
      "Same dedicated technician every visit",
      "No charges for small parts under $25",
      "Photo & short-video report after every visit",
    ],
  },
  {
    tag: "Most Common",
    name: "Bi-annual",
    price: "$310",
    perVisit: "/door/visit",
    perYear: "$620/door/year",
    description: "Spring and fall service. Right for most Richmond strata buildings with one or two parkade doors.",
    features: [
      "One dedicated point of contact",
      "Same dedicated technician every visit",
      "No charges for small parts under $25",
      "Photo & short-video report after every visit",
    ],
    highlight: true,
  },
  {
    tag: "Lighter Use",
    name: "Annual",
    price: "$345",
    perVisit: "/door/visit",
    perYear: "$345/door/year",
    description: "Once-yearly inspection and tune-up. For low-cycle townhome doors or auxiliary parkade gates.",
    features: [
      "One dedicated point of contact",
      "Same dedicated technician every visit",
      "No charges for small parts under $25",
      "Photo & short-video report after the visit",
    ],
  },
];

const managerBenefits = [
  "$5M liability + WCB compliant — COIs same-day",
  "One named technician per building",
  "Strata-friendly invoicing (per-unit / per-building)",
  "After-hours emergency line for stuck parkade gates",
  "Two-year labour warranty as standard",
  "Free on-site quote — a tech walks the property with you, no obligation",
  "Photo & short-video report after every scheduled visit",
];

export default function StrataPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/strata-hero-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy-dark/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Multi-Family & Strata · Richmond BC</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Strata garage door programs<br />
            <span className="text-gold">by DoorChamp.</span>
          </h1>
          <p className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed">
            Quarterly, bi-annual, and annual maintenance for Richmond strata corporations. COIs same-day.{" "}
            <strong className="text-white">Free on-site quote</strong> — we walk every door with you before you sign.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href={siteConfig.phone.href} className="inline-flex items-center justify-center gap-2 rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors">
              <IconPhone className="w-4 h-4" /> {siteConfig.phone.display}
            </a>
            <Link href="/request-a-quote/" className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Built for Strata Managers */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">Built for BCFSA-Licensed Strata Managers</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-navy-dark max-w-3xl leading-tight mb-5">
            You&apos;re managing 12 buildings, 400 owners, and 11 vendors. We make the garage-door part of that{" "}
            <span className="text-gold">disappear.</span>
          </h2>
          <p className="text-steel max-w-2xl leading-relaxed mb-8">
            Strata management is balancing the Strata Property Act, the contingency reserve fund, and a council that meets once a month. The garage-door vendor on your roster should make your job easier, not harder. DoorChamp is set up around how BC strata management companies actually work.
          </p>

          {/* Credential pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {pills.map((pill) => (
              <span key={pill} className="inline-block rounded-full border border-navy/20 bg-surface text-navy text-xs font-semibold px-4 py-1.5">
                {pill}
              </span>
            ))}
          </div>

          {/* Checklist */}
          <div className="rounded-card border border-steel/15 bg-navy-dark p-8 space-y-5">
            {checkItems.map((item) => (
              <div key={item.bold} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold flex items-center justify-center mt-0.5">
                  <IconCheck className="w-3.5 h-3.5 text-navy-dark" />
                </span>
                <p className="text-white/85 text-sm leading-relaxed">
                  <strong className="text-white">{item.bold}</strong>{item.rest}
                </p>
              </div>
            ))}
            <div className="pt-2">
              <a href={siteConfig.phone.href} className="text-gold text-sm font-semibold hover:underline">
                Call us at {siteConfig.phone.display} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Three Programs */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-3">Three Programs</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-10">
            Pick your cadence.
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div
                key={p.name}
                className={`rounded-card border p-7 flex flex-col ${
                  p.highlight
                    ? "bg-navy-dark border-navy-dark text-white shadow-cardHover"
                    : "bg-white border-steel/15 shadow-card"
                }`}
              >
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${p.highlight ? "text-gold" : "text-steel"}`}>
                  {p.tag}
                </p>
                <h3 className={`font-heading font-extrabold text-2xl mb-1 ${p.highlight ? "text-white" : "text-navy-dark"}`}>
                  {p.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`font-heading font-extrabold text-3xl ${p.highlight ? "text-white" : "text-navy-dark"}`}>{p.price}</span>
                  <span className={`text-xs ${p.highlight ? "text-white/60" : "text-steel"}`}>{p.perVisit}</span>
                </div>
                <p className={`text-xs mb-4 ${p.highlight ? "text-white/50" : "text-steel/70"}`}>{p.perYear}</p>
                <Link
                  href="/request-a-quote/"
                  className={`self-start mb-5 inline-flex items-center gap-1 rounded-card px-5 py-2.5 text-xs font-bold transition-colors ${
                    p.highlight
                      ? "bg-gold text-navy-dark hover:bg-gold-dark"
                      : "border border-navy/25 text-navy hover:bg-navy hover:text-white"
                  }`}
                >
                  Get pricing →
                </Link>
                <p className={`text-sm leading-relaxed mb-5 ${p.highlight ? "text-white/70" : "text-steel"}`}>{p.description}</p>
                <ul className="space-y-2 mt-auto">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <IconCheck className={`w-4 h-4 flex-shrink-0 mt-0.5 ${p.highlight ? "text-gold" : "text-navy"}`} />
                      <span className={`text-xs leading-snug ${p.highlight ? "text-white/80" : "text-steel"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Property Managers Get */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-3">For Property Managers</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-8">
            What you get.
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {managerBenefits.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-card bg-surface border border-steel/15 px-5 py-5 shadow-sm">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-navy flex items-center justify-center text-gold">
                  <IconCheck className="w-3.5 h-3.5" />
                </span>
                <span className="text-sm font-semibold text-navy">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-gold font-bold uppercase tracking-widest text-xs mb-4">Call the Champ</p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight mb-3">
            Same family. Same number.<br />Same Richmond crew.
          </h2>
          <p className="text-white/70 text-base mb-8">
            DoorChamp — family-owned since 2007. Whether it&apos;s an emergency this morning or a strata program for next season.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2 rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors"
            >
              <IconPhone className="w-4 h-4" /> {siteConfig.phone.display}
            </a>
            <Link
              href="/request-a-quote/"
              className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
