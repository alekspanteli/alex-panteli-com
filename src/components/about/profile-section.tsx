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
        {/* Photo — no rounded corners, editorial hard edge with cobalt accent bar */}
        <div className="relative w-full max-w-70">
          <div className="aspect-3/4 overflow-hidden">
            <Image
              src="/avatar3.avif"
              alt={cvData.personal.name}
              fill
              sizes="280px"
              className="object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-[1.02]"
              priority
            />
          </div>
          {/* Cobalt accent bar at bottom-left */}
          <div
            className="absolute bottom-0 left-0 h-0.75 w-16 bg-(--cobalt)"
            aria-hidden="true"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={0.1}>
        <div className="space-y-6">
          <p className="font-mono text-[11px] uppercase tracking-widest text-(--cobalt)">
            About
          </p>
          <h3 className="font-display text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-heading">
            {cvData.personal.title}
          </h3>
          <p className="text-[15px] leading-[1.72] tracking-[-0.01em] text-muted-foreground">
            {cvData.personal.summary}
          </p>
          {/* Underline-only link — more editorial than a button */}
          <Link
            href="/Alex_Panteli_Frontend_Developer_CV.pdf"
            download
            className="inline-flex items-center gap-2 border-b border-(--cobalt)/40 pb-0.5 font-sans text-[13px] font-semibold text-(--cobalt) transition-colors duration-150 hover:border-(--cobalt)"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Download CV
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
