import Link from "next/link";
import { iconForService } from "./Icons";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group flex flex-col rounded-card bg-white border border-steel/15 p-6 shadow-card hover:shadow-cardHover transition-shadow">
      <div className="w-12 h-12 rounded-card bg-navy text-gold flex items-center justify-center mb-5">
        {iconForService(service.icon, "w-6 h-6")}
      </div>
      <h3 className="font-heading font-bold text-lg text-navy">{service.name}</h3>
      <p className="mt-2 text-sm text-steel leading-relaxed flex-1">{service.summary}</p>
      <Link
        href={service.href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-navy group-hover:text-gold-dark transition-colors"
      >
        Learn More
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
          &rarr;
        </span>
      </Link>
    </div>
  );
}
