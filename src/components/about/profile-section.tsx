"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { cvData } from "@/data/cv-data";
import { Download } from "lucide-react";

const quickFacts = [
  { label: "Based", value: "Cyprus" },
  { label: "Focus", value: "React · TypeScript · Next.js" },
  { label: "Experience", value: "10+ years shipping production UIs" },
  { label: "Specialty", value: "Design systems · WCAG AA · Perf" },
  { label: "Status", value: "Open to contract work" },
];

export function ProfileSection() {
  return (
    <div className="grid gap-12 md:grid-cols-[220px_1fr] md:items-start md:gap-14 lg:grid-cols-[240px_1fr_220px] lg:gap-16">
      <ScrollReveal direction="left">
        <div className="relative w-full max-w-70">

          {/* Photo frame — group drives all hover children */}
          <div className="group relative aspect-3/4 overflow-hidden">

            {/* Image — idle: desaturated dark scan. hover: colour reveal */}
            <Image
              src="/avatar3.avif"
              alt={cvData.personal.name}
              fill
              priority
              sizes="(max-width: 768px) calc(100vw - 48px), 280px"
              className="object-cover
                         brightness-[0.82] contrast-[1.18] saturate-[0.55]
                         transition-[filter] duration-700 ease-in-out
                         group-hover:brightness-[0.96] group-hover:contrast-[1.08] group-hover:saturate-100"
            />

            {/* Scanlines — fade out on hover to reveal the photo */}
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-700 group-hover:opacity-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)",
              }}
              aria-hidden="true"
            />

            {/* Corner brackets — lock on at full opacity on hover */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <span className="absolute top-3 left-3 block h-5 w-5 border-t border-l border-(--phosphor)/50 transition-colors duration-500 group-hover:border-(--phosphor)" />
              <span className="absolute top-3 right-3 block h-5 w-5 border-t border-r border-(--phosphor)/50 transition-colors duration-500 group-hover:border-(--phosphor)" />
              <span className="absolute bottom-3 left-3 block h-5 w-5 border-b border-l border-(--phosphor)/50 transition-colors duration-500 group-hover:border-(--phosphor)" />
              <span className="absolute bottom-3 right-3 block h-5 w-5 border-b border-r border-(--phosphor)/50 transition-colors duration-500 group-hover:border-(--phosphor)" />
            </div>

            {/* Phosphor edge vignette */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                boxShadow:
                  "inset 0 0 80px color-mix(in srgb, var(--phosphor) 18%, transparent)",
              }}
              aria-hidden="true"
            />

          </div>

          {/* Accent bar */}
          <div
            className="absolute bottom-0 left-0 h-0.75 w-16 bg-(--phosphor)"
            aria-hidden="true"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={0.1}>
        <div className="space-y-6 border-l border-(--phosphor)/20 pl-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-(--phosphor)">
            About
          </p>
          <h3 className="font-display text-[28px] font-bold leading-[1.1] tracking-[-0.025em] text-heading">
            {cvData.personal.title}
          </h3>
          <p className="text-[15px] leading-[1.72] tracking-[-0.01em] text-muted-foreground">
            {cvData.personal.summary}
          </p>
          <Link
            href="/Alex_Panteli_Frontend_Developer_CV.pdf"
            download
            className="inline-flex items-center gap-2 border-b border-(--phosphor)/40 pb-0.5 font-mono text-[12px] font-medium text-(--phosphor) transition-colors duration-150 hover:border-(--phosphor)"
          >
            <Download className="size-3.5" aria-hidden="true" />
            download_cv.pdf
          </Link>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={0.2} className="md:col-span-2 lg:col-span-1">
        <aside className="md:border-t md:border-(--phosphor)/20 md:pt-8 lg:mt-1 lg:border-t-0 lg:border-l lg:border-(--phosphor)/20 lg:pt-0 lg:pl-6">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-(--phosphor)">
            <span aria-hidden="true">{"// "}</span>at_a_glance
          </p>
          <dl className="space-y-4 md:grid md:grid-cols-3 md:gap-x-6 md:gap-y-4 md:space-y-0 lg:block lg:space-y-4">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="border-t border-(--phosphor)/15 pt-3">
                <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground/80">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-mono text-[12px] leading-snug text-heading">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 flex items-center gap-2 border-t border-(--phosphor)/15 pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-(--phosphor)">
            <span className="relative inline-flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--phosphor) opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-(--phosphor)" />
            </span>
            Available
          </div>
        </aside>
      </ScrollReveal>
    </div>
  );
}
