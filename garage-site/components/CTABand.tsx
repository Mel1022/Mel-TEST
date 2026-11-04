import { Phone } from "lucide-react";
import Button from "./Magnetic";
import { site } from "@/lib/site";
export default function CTABand({ title = "Let’s get your doors under control." }: { title?: string }) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden text-center">
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-30" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vw] bg-accent/10 blur-[110px] rounded-full" />
      <div className="container-x relative">
        <h2 className="h-xl uppercase max-w-3xl mx-auto" data-reveal>{title}</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4" data-reveal>
          <Button href="/contact/">Request service</Button>
          <Button href={site.phone.href} variant="ghost"><Phone size={16} /> Call now</Button>
        </div>
      </div>
    </section>
  );
}
