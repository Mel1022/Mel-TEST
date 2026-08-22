import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
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
      <PageHero
        eyebrow="Request a Quote"
        headline="Let's Get Your Door Sorted."
        support="Fill out the form below and DoorChamp will follow up to confirm the details and schedule a visit."
        ctaLabel="Jump to the Form"
        ctaHref="#quote-form"
      />

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
