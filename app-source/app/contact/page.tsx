import type { Metadata } from "next";
import Link from "next/link";
import { IconPhone } from "@/components/Icons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact DoorChamp",
  description:
    "Contact DoorChamp for garage door repair, service, or a free quote. Phone, email, and service address details.",
  alternates: { canonical: "/contact/" },
};

const infoCards = [
  { label: "Phone", value: siteConfig.phone.display, href: siteConfig.phone.href },
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Address", value: siteConfig.address.line },
  { label: "Hours", value: siteConfig.hours },
];

export default function ContactPage() {
  return (
    <>
      <section
        className="relative text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/contact-hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy-dark/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Get in Touch</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Talk to DoorChamp.
          </h1>
          <p className="mt-5 text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Have a question, or just want to talk through what your door is doing? Reach out — or request a full quote if you&apos;re ready.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/request-a-quote/"
              className="inline-flex items-center justify-center rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark shadow-card hover:bg-gold-dark hover:text-white transition-colors w-full sm:w-auto"
            >
              Request a Quote
            </Link>
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors w-full sm:w-auto"
            >
              <IconPhone className="w-4 h-4" />
              {siteConfig.phone.display}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {infoCards.map((card) => (
              <div key={card.label} className="rounded-card bg-surface border border-steel/15 p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-steel">{card.label}</p>
                {card.href ? (
                  <a href={card.href} className="mt-2 block font-heading font-bold text-navy hover:text-gold-dark">
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-2 font-heading font-bold text-navy">{card.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-heading font-extrabold text-2xl text-navy">
                Ready to Request a Quote?
              </h2>
              <p className="mt-3 text-steel leading-relaxed">
                For a full service request — including your address, preferred appointment time,
                and a photo of the issue — use our quote request form.
              </p>
              <Link
                href="/request-a-quote/"
                className="mt-6 inline-flex items-center justify-center rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy shadow-card hover:bg-gold-dark hover:text-white transition-colors"
              >
                Go to Request a Quote
              </Link>
              <div className="mt-6">
                <a
                  href={siteConfig.phone.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-gold-dark"
                >
                  <IconPhone className="w-4 h-4" />
                  Or call the Champ directly: {siteConfig.phone.display}
                </a>
              </div>
            </div>

            <div className="rounded-card bg-navy p-8">
              <h3 className="font-heading font-bold text-white text-lg">Service Area</h3>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Confirmed service areas will be listed on our{" "}
                <Link href="/service-areas/" className="text-gold underline">
                  Service Areas
                </Link>{" "}
                page. Not sure if we cover your location? Just ask.
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-steel/15 pt-12 text-center">
            <p className="text-xs font-bold uppercase tracking-wide text-steel mb-3">Work With Us</p>
            <h2 className="font-heading font-extrabold text-2xl text-navy">Become a Partner</h2>
            <p className="mt-3 text-steel leading-relaxed max-w-xl mx-auto">
              Are you a property manager, contractor, or business owner? Partner with DoorChamp for reliable garage door service your clients can count on.
            </p>
            <Link
              href="/partners/"
              className="mt-6 inline-flex items-center justify-center rounded-card bg-navy px-8 py-3.5 text-sm font-bold text-white shadow-card hover:bg-navy-dark transition-colors"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
