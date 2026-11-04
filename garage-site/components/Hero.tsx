"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Phone, ChevronDown, Radio } from "lucide-react";
import Button from "./Magnetic";
import GarageScene from "./GarageScene";
import { site } from "@/lib/site";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const bg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const play = () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.to(".hero-line > span", { y: 0, duration: 1.2, stagger: 0.12 }, 0.1)
        .to(".hero-fade", { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, 0.6);
    };
    gsap.set(".hero-fade", { y: 24 });
    let done = false; const run = () => { if (!done) { done = true; play(); } };
    window.addEventListener("intro-done", run, { once: true });
    const fb = setTimeout(run, 3000);

    // mouse parallax (fine pointers only) + scroll parallax
    const fine = window.matchMedia("(pointer: fine)").matches;
    const mv = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5), y = (e.clientY / window.innerHeight - 0.5);
      gsap.to(bg.current, { x: x * -24, y: y * -16, duration: 1.2, ease: "power3.out" });
      gsap.to(".hero-card", { x: x * 18, y: y * 12, duration: 1.2, ease: "power3.out" });
    };
    if (fine) window.addEventListener("mousemove", mv);
    const sc = () => { if (bg.current && window.scrollY < window.innerHeight) bg.current.parentElement!.style.transform = `translateY(${window.scrollY * 0.25}px)`; };
    window.addEventListener("scroll", sc, { passive: true });
    return () => { clearTimeout(fb); window.removeEventListener("intro-done", run); window.removeEventListener("mousemove", mv); window.removeEventListener("scroll", sc); };
  }, []);

  return (
    <section ref={root} className="relative min-h-[100svh] flex items-end overflow-hidden" aria-label="Introduction">
      <div className="absolute inset-0 will-change-transform" aria-hidden="true">
        <div ref={bg} className="absolute inset-x-0 -top-4 bottom-[38%] lg:inset-0"><GarageScene /></div>
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent lg:via-ink/25" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink via-ink/50 to-transparent lg:via-ink/30" />
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-[0.25] [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />

      <div className="container-x relative z-10 w-full pt-36 pb-16 sm:pb-24">
        <p className="hero-fade eyebrow flex items-center gap-3 mb-6"><Radio size={14} /> Garage door experts · {site.serviceAreas[0]} &amp; surrounding areas</p>
        <h1 className="h-mega max-w-6xl" aria-label="When your garage door stops, we show up.">
          <span className="line hero-line"><span>When your</span></span>
          <span className="line hero-line"><span>garage door stops,</span></span>
          <span className="line hero-line"><span className="text-lime">we show up.</span></span>
        </h1>
        <p className="hero-fade mt-8 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">Professional garage door installation, repair, and maintenance. Expert technicians. Reliable service. Solutions built to last.</p>
        <div className="hero-fade mt-10 flex flex-wrap gap-4">
          <Button href="/contact/">Get a free quote</Button>
          <Button href={site.phone.href} variant="ghost"><Phone size={16} /> Call now</Button>
        </div>

        <div className="hero-card hero-fade hidden lg:block absolute right-8 bottom-24 glass p-5 w-64">
          <p className="eyebrow !text-[10px]">Service status</p>
          <p className="mt-2 flex items-center gap-2 font-display font-semibold"><span className="relative flex h-2.5 w-2.5"><span className="absolute inset-0 rounded-full bg-lime pulse-ring" /><span className="relative h-2.5 w-2.5 rounded-full bg-lime" /></span> Technicians available</p>
          <p className="mt-2 text-xs text-silver">[RESPONSE TIME] · Call for urgent repairs</p>
        </div>
      </div>
      <a href="#trust" aria-label="Scroll to content" className="hero-fade absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-white/60">
        Scroll<span className="block w-px h-10 bg-gradient-to-b from-lime to-transparent" /><ChevronDown size={14} className="bob -mt-1 text-lime" />
      </a>
    </section>
  );
}
