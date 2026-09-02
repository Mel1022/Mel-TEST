import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconAlert } from "./Icons";

type PageHeroProps = {
  eyebrow?: string;
  headline: string;
  support: string;
  ctaLabel?: string;
  ctaHref?: string;
  safetyWarning?: string;
  bgImage?: string;
  bgPosition?: string;
};

export default function PageHero({
  eyebrow,
  headline,
  support,
  ctaLabel = "Get a Free Quote",
  ctaHref = "/request-a-quote/",
  safetyWarning,
  bgImage,
  bgPosition = "center",
}: PageHeroProps) {
  return (
    <section className="relative bg-navy-dark overflow-hidden">
      {bgImage && (
        <>
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            className="page-hero-bg-img"
            style={{ objectPosition: bgPosition }}
          />
          <div aria-hidden="true" className="page-hero-overlay" />
        </>
      )}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        {eyebrow && (
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">{eyebrow}</p>
        )}
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
          {headline}
        </h1>
        <p className="mt-5 text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          {support}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark shadow-card hover:bg-gold-dark hover:text-white transition-colors w-full sm:w-auto"
          >
            {ctaLabel}
          </Link>
          <a
            href={siteConfig.phone.href}
            className="inline-flex items-center justify-center gap-2 rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors w-full sm:w-auto"
          >
            <IconPhone className="w-4 h-4" />
            {siteConfig.phone.display}
          </a>
        </div>

        {safetyWarning && (
          <div className="mt-8 mx-auto max-w-xl flex items-start gap-3 rounded-card bg-gold/10 border border-gold/30 px-5 py-4 text-left">
            <IconAlert className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <p className="text-sm text-white/85">{safetyWarning}</p>
          </div>
        )}
      </div>
    </section>
  );
}

