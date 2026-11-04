import type { ReactNode } from "react";
export function Heading({ eyebrow, children, className = "" }: { eyebrow: string; children: ReactNode; className?: string }) {
  return (<div className={className}><p className="eyebrow mb-4" data-reveal>{eyebrow}</p><h2 className="h-xl uppercase" data-lines>{children}</h2></div>);
}
/** Masked line for animated headlines. */
export const L = ({ children }: { children: ReactNode }) => <span className="line"><span>{children}</span></span>;

export function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: ReactNode; text: string; children?: ReactNode }) {
  return (
    <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-28 overflow-hidden border-b border-white/10">
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div aria-hidden="true" className="absolute -top-40 right-0 w-[60vw] h-[60vw] rounded-full bg-lime/10 blur-[120px]" />
      <div className="container-x relative">
        <p className="eyebrow mb-5" data-reveal>{eyebrow}</p>
        <h1 className="h-mega !text-[clamp(2.4rem,8vw,6.5rem)]" data-lines>{title}</h1>
        <p className="mt-8 max-w-2xl text-lg text-silver leading-relaxed" data-reveal data-delay="0.2">{text}</p>
        {children && <div className="mt-10 flex flex-wrap gap-3" data-reveal data-delay="0.3">{children}</div>}
      </div>
    </section>
  );
}
