import Link from "next/link";
import { IconCheck } from "./Icons";

const checklist = [
  "Springs",
  "Cables",
  "Rollers",
  "Tracks",
  "Hinges",
  "Opener",
  "Safety sensors",
  "Door balance",
];

export default function ChampCheck() {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">
            The DoorChamp Inspection
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight">
            Get the Champ Check.
          </h2>
          <p className="mt-4 text-white/75 leading-relaxed">
            A technician can inspect your garage door system for the common issues that lead to
            bigger problems down the road — before they turn into a breakdown.
          </p>
          <Link
            href="/request-a-quote/"
            className="mt-7 inline-flex items-center justify-center rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy shadow-card hover:bg-gold-dark hover:text-white transition-colors"
          >
            Request a Service
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {checklist.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 rounded-card bg-white/5 border border-white/10 px-4 py-3.5 text-white text-sm font-semibold"
            >
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center">
                <IconCheck className="w-3 h-3" />
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
