import { IconCheck } from "./Icons";

const badges = [
  "Same-Day Richmond Service",
  "Family-Owned Since 2007",
  "Licensed & Insured",
  "WCB Compliant",
  "$5M Liability Coverage",
  "Two-Year Labour Warranty",
];

export default function TrustBadges() {
  return (
    <div className="bg-white border-b border-steel/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {badges.map((label) => (
            <li key={label} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-navy">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-navy/10 text-navy-light flex items-center justify-center">
                <IconCheck className="w-3 h-3" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
