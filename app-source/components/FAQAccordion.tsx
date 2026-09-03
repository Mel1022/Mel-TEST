import type { Faq } from "@/lib/services";

export default function FAQAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-steel/15 border-y border-steel/15">
      {faqs.map((faq, i) => (
        <details key={faq.q} className="group" open={i === 0}>
          <summary className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer list-none select-none">
            <span className="font-heading font-bold text-navy text-base sm:text-lg">
              {faq.q}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 flex-shrink-0 text-steel transition-transform group-open:rotate-180 group-open:text-gold-dark"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </summary>
          <div className="pb-5">
            <p className="text-sm sm:text-base text-steel leading-relaxed max-w-3xl">
              {faq.a}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
