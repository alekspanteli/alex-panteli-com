import type { Metadata } from "next";
import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeading } from "@/components/shared/section-heading";
import { Timeline } from "@/components/experience/timeline";
import { GraduationCap, MapPin } from "lucide-react";

import { cvData } from "@/data/cv-data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "From fintech startups to global trading platforms — a decade of frontend engineering experience.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      {/* Measurement ruler — precision / chronology motif, container-bounded */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="relative mx-auto h-full w-full max-w-[1400px] px-6 sm:px-12">
          <svg
            className="absolute right-6 sm:right-12 top-0 hidden h-full select-none opacity-[0.10] md:block"
            width="56" viewBox="0 0 56 800" preserveAspectRatio="xMidYMin meet" fill="none"
          >
            {/* Spine */}
            <line x1="28" y1="0" x2="28" y2="800" stroke="var(--phosphor)" strokeWidth="0.75" />
            {/* Major ticks every 80px with labels */}
            {[80, 160, 240, 320, 400, 480, 560, 640, 720].map((y, i) => (
              <g key={y}>
                <line x1="16" y1={y} x2="40" y2={y} stroke="var(--phosphor)" strokeWidth="0.85" />
                <text x="44" y={y + 3} fill="var(--phosphor)" fontSize="7" fontFamily="monospace" letterSpacing="0.1em" opacity="0.7">
                  {String(i + 1).padStart(2, "0")}
                </text>
              </g>
            ))}
            {/* Minor ticks every 20px */}
            {Array.from({ length: 39 }, (_, i) => (i + 1) * 20).filter((y) => y % 80 !== 0).map((y) => (
              <line key={y} x1="22" y1={y} x2="34" y2={y} stroke="var(--phosphor)" strokeWidth="0.4" />
            ))}
            {/* Phosphor signature cap — same pip motif as hero/about */}
            <circle cx="28" cy="0" r="3" fill="var(--phosphor)" />
            <circle cx="28" cy="0" r="7" stroke="var(--phosphor)" strokeWidth="0.6" />
            <path d="M20 796 L28 808 L36 796" stroke="var(--phosphor)" strokeWidth="0.75" fill="none" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-24 lg:py-28">
        <SectionHeading
          title="Experience"
          subtitle="A decade of building for the web"
        />

        <div className="mt-12">
          <Timeline />
        </div>

        <div className="mt-16 border-t border-(--phosphor)/35 pt-16 dark:border-(--phosphor)/15">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-(--phosphor)">
            Education
          </p>
          <h3 className="mb-8 font-display text-[22px] font-bold tracking-[-0.03em] text-heading">
            <span className="mr-2 text-(--phosphor)" aria-hidden="true">{"// "}</span>Academic background
          </h3>

          <div className="space-y-0">
            {cvData.education.map((edu) => (
              <div
                key={edu.institution}
                className="border-t border-(--phosphor)/30 py-6 transition-colors duration-150 hover:border-(--phosphor)/50 dark:border-(--phosphor)/10 dark:hover:border-(--phosphor)/25"
              >
                <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-muted-foreground/70">
                  <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="tabular-nums">{edu.period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" aria-hidden="true" />
                    {edu.location}
                  </span>
                </div>
                <h4 className="mt-3 font-display text-[16px] font-bold tracking-[-0.02em] text-heading">
                  {edu.degree}
                </h4>
                <p className="mt-1 font-mono text-[12px] tracking-wide text-muted-foreground">
                  {edu.institution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
