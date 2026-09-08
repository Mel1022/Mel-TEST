import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const CITIES = [
  { name: "Richmond", tag: "Home base" },
  { name: "Vancouver", tag: null },
  { name: "Burnaby", tag: null },
  { name: "Delta", tag: null },
  { name: "Surrey", tag: null },
  { name: "New Westminster", tag: null },
  { name: "Coquitlam", tag: null },
  { name: "Ladner", tag: null },
  { name: "Tsawwassen", tag: null },
  { name: "North Vancouver", tag: null },
];

export default function ServiceAreaSection({ service = "Garage Door Service" }: { service?: string }) {
  const cityList = CITIES.map((c) => c.name).join(", ");
  return (
    <section className="bg-surface" aria-labelledby="service-area-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <p className="text-gold font-bold uppercase tracking-wide text-xs mb-3">Where We Work</p>
        <h2 id="service-area-heading" className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-4">
          {service} in Richmond &amp; Metro Vancouver
        </h2>
        <p className="text-steel text-sm leading-relaxed max-w-2xl mb-8">
          DoorChamp is based in Richmond, BC and provides same-day {service.toLowerCase()} to
          homeowners and businesses across Metro Vancouver — including {cityList}.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {CITIES.map(({ name, tag }) => (
            <div key={name} className="rounded-card bg-white border border-steel/15 px-4 py-3">
              <p className="text-sm font-semibold text-navy-dark">{name}</p>
              {tag && <p className="text-xs text-gold font-medium mt-0.5">{tag}</p>}
            </div>
          ))}
        </div>
        <p className="text-steel text-sm leading-relaxed max-w-2xl">
          Not sure if we cover your neighbourhood?{" "}
          <a
            href={siteConfig.phone.href}
            className="font-semibold text-navy hover:text-gold transition-colors"
          >
            Call {siteConfig.phone.display}
          </a>{" "}
          — we&apos;ll let you know right away. View the full{" "}
          <Link
            href="/service-areas/"
            className="font-semibold text-navy underline hover:text-gold transition-colors"
          >
            service area list
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
