import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
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
      <PageHero
        eyebrow="Get in Touch"
        headline="Talk to DoorChamp."
        support="Have a question, or just want to talk through what your door is doing? Reach out — or request a full quote if you're ready."
        ctaLabel="Request a Quote"
        ctaHref="/request-a-quote/"
        bgImage="/images/team-cta.png"
        bgPosition="center 30%"
      />

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
        </div>
      </section>
    </>
  );
}
