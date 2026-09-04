import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { IconPhone } from "@/components/Icons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a free garage door service quote from DoorChamp. Tell us what's going on and we'll follow up to schedule an appointment.",
  alternates: { canonical: "/request-a-quote/" },
};

export default function RequestQuotePage() {
  return (
    <>
      <section
        className="relative text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/quote-hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy-dark/75" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Request a Quote</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Let&apos;s Get Your Door Sorted.
          </h1>
          <p className="mt-5 text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Fill out the form below and DoorChamp will follow up to confirm the details and schedule a visit.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#quote-form"
              className="inline-flex items-center justify-center rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark shadow-card hover:bg-gold-dark hover:text-white transition-colors w-full sm:w-auto"
            >
              Jump to the Form
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

      <section id="quote-form" className="bg-surface">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
          <QuoteForm />
          <div className="mt-8 text-center">
            <p className="text-sm text-steel">Prefer to talk it through first?</p>
            <a
              href={siteConfig.phone.href}
              className="mt-2 inline-flex items-center gap-2 font-bold text-navy hover:text-gold-dark"
            >
              <IconPhone className="w-4 h-4" />
              Call the Champ: {siteConfig.phone.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
