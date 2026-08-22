import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { IconPhone } from "./Icons";

type CTASectionProps = {
  heading: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  tone?: "navy" | "light";
};

export default function CTASection({
  heading,
  body,
  primaryLabel = "Get a Free Quote",
  primaryHref = "/request-a-quote/",
  secondaryLabel,
  tone = "navy",
}: CTASectionProps) {
  const isNavy = tone === "navy";

  return (
    <section className={isNavy ? "bg-navy-dark" : "bg-surface"}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2
          className={`font-heading font-extrabold text-2xl sm:text-3xl leading-tight ${
            isNavy ? "text-white" : "text-navy-dark"
          }`}
        >
          {heading}
        </h2>
        {body && (
          <p className={`mt-4 text-base sm:text-lg ${isNavy ? "text-white/75" : "text-steel"}`}>
            {body}
          </p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark shadow-card hover:bg-gold-dark hover:text-white transition-colors w-full sm:w-auto"
          >
            {primaryLabel}
          </Link>
          <a
            href={siteConfig.phone.href}
            className={`inline-flex items-center justify-center gap-2 rounded-card border-2 px-7 py-3.5 text-sm font-bold transition-colors w-full sm:w-auto ${
              isNavy
                ? "border-white/40 text-white hover:border-white"
                : "border-navy text-navy hover:bg-navy hover:text-white"
            }`}
          >
            <IconPhone className="w-4 h-4" />
            {secondaryLabel ?? siteConfig.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
