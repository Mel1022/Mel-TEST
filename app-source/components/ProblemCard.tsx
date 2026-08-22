import Link from "next/link";
import type { ProblemCardData } from "@/lib/services";

export default function ProblemCard({ problem }: { problem: ProblemCardData }) {
  return (
    <Link
      href={problem.href}
      className="group flex flex-col rounded-card bg-white border border-steel/15 p-6 hover:border-gold hover:shadow-card transition-all"
    >
      <h3 className="font-heading font-bold text-base text-navy">{problem.title}</h3>
      <p className="mt-2 text-sm text-steel leading-relaxed flex-1">{problem.description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-navy group-hover:text-gold-dark transition-colors">
        See how we help
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
          &rarr;
        </span>
      </span>
    </Link>
  );
}
