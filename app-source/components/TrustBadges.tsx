import { IconCheck } from "./Icons";

const badges = [
  "Fast Response",
  "Experienced Technicians",
  "Upfront Service",
  "Quality Parts",
];

export default function TrustBadges() {
  return (
    <div className="bg-white border-b border-steel/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {badges.map((label) => (
            <li key={label} className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-navy">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center">
                <IconCheck className="w-3.5 h-3.5" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
