"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollFX() {
  const pathname = usePathname();

  // Smooth scrolling (once)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    return () => { gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);

  // Scroll-driven effects (re-run per route)
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    (window as unknown as { __fx?: boolean }).__fx = true;
    if (reduced) {
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => { el.textContent = (el.dataset.count || "0") + (el.dataset.suffix || ""); });
      return;
    }
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      // fade-up reveals
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(el, { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: Number(el.dataset.delay || 0),
          scrollTrigger: { trigger: el, start: "top 90%", once: true } });
      });
      // staggered children
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) => {
        gsap.fromTo(Array.from(el.children), { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 85%", once: true } });
      });
      // masked headline lines (non-hero)
      gsap.utils.toArray<HTMLElement>("[data-lines]").forEach((el) => {
        gsap.fromTo(el.querySelectorAll(".line > span"), { yPercent: 110 }, { yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 85%", once: true } });
      });
      // counters
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count || 0); const suffix = el.dataset.suffix || ""; const o = { v: 0 };
        gsap.to(o, { v: end, duration: 2.2, ease: "power2.out", onUpdate: () => { el.textContent = Math.round(o.v).toString() + suffix; },
          scrollTrigger: { trigger: el, start: "top 92%", once: true } });
      });
      // image mask reveal
      gsap.utils.toArray<HTMLElement>("[data-mask]").forEach((el) => {
        gsap.fromTo(el, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 1.3, ease: "power4.inOut",
          scrollTrigger: { trigger: el, start: "top 88%", once: true } });
      });
      // progress line (scrubbed)
      gsap.utils.toArray<HTMLElement>("[data-progress]").forEach((el) => {
        gsap.fromTo(el, { scaleY: 0 }, { scaleY: 1, ease: "none", transformOrigin: "top",
          scrollTrigger: { trigger: el.parentElement, start: "top 70%", end: "bottom 60%", scrub: true } });
      });
      // garage door that opens to reveal the next section
      gsap.utils.toArray<HTMLElement>("[data-door]").forEach((wrap) => {
        const panels = wrap.querySelectorAll("[data-door-panel]");
        gsap.to(panels, { yPercent: -102, ease: "none", stagger: { each: 0.06, from: "end" },
          scrollTrigger: { trigger: wrap, start: "top 75%", end: "top 5%", scrub: 0.6 } });
      });
      // parallax only where it's cheap
      mm.add("(min-width: 768px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const speed = Number(el.dataset.parallax || 0.15);
          gsap.to(el, { yPercent: speed * 100, ease: "none", scrollTrigger: { trigger: el.parentElement || el, start: "top bottom", end: "bottom top", scrub: true } });
        });
        gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((el) => {
          gsap.to(el, { x: Number(el.dataset.drift || -120), ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
        });
      });
    });
    const refresh = setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => { clearTimeout(refresh); ctx.revert(); mm.revert(); };
  }, [pathname]);

  return null;
}
