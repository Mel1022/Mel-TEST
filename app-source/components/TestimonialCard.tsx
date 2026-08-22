export default function TestimonialCard({ index }: { index: number }) {
  return (
    <div className="rounded-card bg-white border border-dashed border-steel/40 p-6 flex flex-col gap-4">
      <div className="flex gap-1 text-gold" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>&#9733;</span>
        ))}
      </div>
      <p className="text-sm text-steel italic leading-relaxed">
        Customer testimonial will appear here.
      </p>
      <div className="text-xs font-semibold text-navy/60 uppercase tracking-wide">
        Placeholder Review {index} &middot; Name, City
      </div>
    </div>
  );
}
