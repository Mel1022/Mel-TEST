import type { Metadata } from "next";
import { PageHero, L } from "@/components/Section";
import ProjectGallery from "@/components/ProjectGallery";
import BeforeAfter from "@/components/BeforeAfter";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Projects — Strata, Warehouse & Loading Dock Work",
  description: "Strata parkade, warehouse and loading dock projects, with before-and-after comparisons.",
  alternates: { canonical: "/projects/" },
};

export default function Projects() {
  return (
    <>
      <PageHero eyebrow="Project gallery" title={<><L>Work that</L><L>speaks.</L></>} text="Strata, warehouse and loading dock projects." />
      <section className="container-x py-20"><ProjectGallery /></section>
      <section className="py-24 bg-graphite border-y border-white/10"><div className="container-x max-w-4xl"><p className="eyebrow mb-3">Before &amp; after</p><h2 className="h-xl uppercase mb-10">The difference is clear.</h2><BeforeAfter /></div></section>
      <CTABand title="Your door could be next." />
    </>
  );
}
