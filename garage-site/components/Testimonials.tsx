import { Star } from "lucide-react";
export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-5" data-stagger>
      {[1, 2, 3].map((i) => (
        <figure key={i} className="glass p-7 flex flex-col gap-5">
          <div className="flex gap-1 text-accent" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}</div>
          <blockquote className="text-white/85 leading-relaxed">“[CUSTOMER REVIEW {i}] — paste a real customer testimonial here.”</blockquote>
          <figcaption className="mt-auto text-xs uppercase tracking-widest text-silver-dim">[Customer name] · [City]</figcaption>
        </figure>
      ))}
    </div>
  );
}
