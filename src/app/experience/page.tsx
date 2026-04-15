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
      {/* Measurement ruler — precision / chronology motif */}
      <svg
        className="pointer-events-none absolute right-4 top-0 h-full select-none opacity-[0.08]"
        width="48" viewBox="0 0 48 800" preserveAspectRatio="xMidYMin meet" fill="none"
        aria-hidden="true"
      >
        {/* Spine */}
        <line x1="24" y1="0" x2="24" y2="800" stroke="var(--phosphor)" strokeWidth="0.75" />
        {/* Major ticks every 80px */}
        <line x1="14" y1="80"  x2="34" y2="80"  stroke="var(--phosphor)" strokeWidth="0.75" />
        <line x1="14" y1="160" x2="34" y2="160" stroke="var(--phosphor)" strokeWidth="0.75" />
        <line x1="14" y1="240" x2="34" y2="240" stroke="var(--phosphor)" strokeWidth="0.75" />
        <line x1="14" y1="320" x2="34" y2="320" stroke="var(--phosphor)" strokeWidth="0.75" />
        <line x1="14" y1="400" x2="34" y2="400" stroke="var(--phosphor)" strokeWidth="0.75" />
        <line x1="14" y1="480" x2="34" y2="480" stroke="var(--phosphor)" strokeWidth="0.75" />
        <line x1="14" y1="560" x2="34" y2="560" stroke="var(--phosphor)" strokeWidth="0.75" />
        <line x1="14" y1="640" x2="34" y2="640" stroke="var(--phosphor)" strokeWidth="0.75" />
        <line x1="14" y1="720" x2="34" y2="720" stroke="var(--phosphor)" strokeWidth="0.75" />
        {/* Minor ticks every 20px */}
        <line x1="19" y1="20"  x2="29" y2="20"  stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="40"  x2="29" y2="40"  stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="60"  x2="29" y2="60"  stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="100" x2="29" y2="100" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="120" x2="29" y2="120" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="140" x2="29" y2="140" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="180" x2="29" y2="180" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="200" x2="29" y2="200" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="220" x2="29" y2="220" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="260" x2="29" y2="260" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="280" x2="29" y2="280" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="300" x2="29" y2="300" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="340" x2="29" y2="340" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="360" x2="29" y2="360" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="380" x2="29" y2="380" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="420" x2="29" y2="420" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="440" x2="29" y2="440" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="460" x2="29" y2="460" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="500" x2="29" y2="500" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="520" x2="29" y2="520" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="540" x2="29" y2="540" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="580" x2="29" y2="580" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="600" x2="29" y2="600" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="620" x2="29" y2="620" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="660" x2="29" y2="660" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="680" x2="29" y2="680" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="700" x2="29" y2="700" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="740" x2="29" y2="740" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="760" x2="29" y2="760" stroke="var(--phosphor)" strokeWidth="0.4" />
        <line x1="19" y1="780" x2="29" y2="780" stroke="var(--phosphor)" strokeWidth="0.4" />
        {/* Arrow caps */}
        <path d="M20 8 L24 0 L28 8" stroke="var(--phosphor)" strokeWidth="0.75" fill="none" />
        <path d="M20 792 L24 800 L28 792" stroke="var(--phosphor)" strokeWidth="0.75" fill="none" />
      </svg>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <SectionHeading
          title="Experience"
          subtitle="A decade of building for the web"
        />

        <div className="mt-12">
          <Timeline />
        </div>

        <div className="mt-16 border-t border-(--phosphor)/15 pt-16">
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
                className="border-t border-(--phosphor)/10 py-6 transition-colors duration-150 hover:border-(--phosphor)/25"
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
