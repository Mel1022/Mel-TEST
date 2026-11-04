"use client";
import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

type Props = { href: string; children: React.ReactNode; variant?: "primary" | "ghost"; className?: string; external?: boolean; ariaLabel?: string };

export default function Button({ href, children, variant = "primary", className = "", external, ariaLabel }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const move = (e: React.MouseEvent) => {
    if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = ref.current!.getBoundingClientRect();
    gsap.to(ref.current, { x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.4, ease: "power3.out" });
  };
  const leave = () => gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.4)" });
  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`;
  if (external || href.startsWith("tel:") || href.startsWith("mailto:"))
    return <a ref={ref} href={href} className={cls} onMouseMove={move} onMouseLeave={leave} aria-label={ariaLabel}>{children}</a>;
  return <Link ref={ref} href={href} className={cls} onMouseMove={move} onMouseLeave={leave} aria-label={ariaLabel}>{children}</Link>;
}
