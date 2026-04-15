"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { cvData } from "@/data/cv-data";
import { Download } from "lucide-react";

export function ProfileSection() {
  return (
    <div className="grid gap-16 md:grid-cols-[280px_1fr] md:items-start">
      <ScrollReveal direction="left">
        <div className="relative w-full max-w-70">

          {/* Photo frame — group drives all hover children */}
          <div className="group relative aspect-3/4 overflow-hidden">

            {/* Image — idle: desaturated dark scan. hover: colour reveal */}
            <Image
              src="/avatar3.avif"
              alt={cvData.personal.name}
              fill
              sizes="280px"
              className="object-cover
                         brightness-[0.82] contrast-[1.18] saturate-[0.55]
                         transition-[filter] duration-700 ease-in-out
                         group-hover:brightness-[0.96] group-hover:contrast-[1.08] group-hover:saturate-100"
              priority
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
    </div>
  );
}
