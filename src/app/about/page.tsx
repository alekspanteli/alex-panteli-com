import type { Metadata } from "next";
import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProfileSection } from "@/components/about/profile-section";
import { SkillsGrid } from "@/components/about/skills-grid";
import { cvData } from "@/data/cv-data";

const yearsExp = cvData.stats.find((s) => s.label === "Years Experience")!.value;

export const metadata: Metadata = {
  title: "About",
  description: `Alex Panteli — ${yearsExp}+ years crafting accessible, performant web interfaces with React, TypeScript, and modern CSS.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Node constellation — intentional hex + orbital structure, container-bounded */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="relative mx-auto h-full w-full max-w-[1400px] px-6 sm:px-12">
          <svg
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-[25%] select-none opacity-[0.10] md:block"
            width="360" height="360" viewBox="0 0 360 360" fill="none"
          >
            {/* Outer orbit — dashed */}
            <circle cx="180" cy="180" r="160" stroke="var(--phosphor)" strokeWidth="0.5" strokeDasharray="2 8" />
            {/* Inner hex ring — intentional vertices, not scattered */}
            <polygon
              points="180,60 284,120 284,240 180,300 76,240 76,120"
              stroke="var(--phosphor)"
              strokeWidth="0.55"
              fill="none"
            />
            {/* Spokes from center to hex vertices */}
            <line x1="180" y1="180" x2="180" y2="60"  stroke="var(--phosphor)" strokeWidth="0.4" />
            <line x1="180" y1="180" x2="284" y2="120" stroke="var(--phosphor)" strokeWidth="0.4" />
            <line x1="180" y1="180" x2="284" y2="240" stroke="var(--phosphor)" strokeWidth="0.4" />
            <line x1="180" y1="180" x2="180" y2="300" stroke="var(--phosphor)" strokeWidth="0.4" />
            <line x1="180" y1="180" x2="76"  y2="240" stroke="var(--phosphor)" strokeWidth="0.4" />
            <line x1="180" y1="180" x2="76"  y2="120" stroke="var(--phosphor)" strokeWidth="0.4" />
            {/* Hex vertex nodes */}
            <circle cx="180" cy="60"  r="2.5" fill="var(--phosphor)" />
            <circle cx="284" cy="120" r="2.5" fill="var(--phosphor)" />
            <circle cx="284" cy="240" r="2.5" fill="var(--phosphor)" />
            <circle cx="180" cy="300" r="2.5" fill="var(--phosphor)" />
            <circle cx="76"  cy="240" r="2.5" fill="var(--phosphor)" />
            <circle cx="76"  cy="120" r="2.5" fill="var(--phosphor)" />
            {/* Orbital satellites — 3 dots evenly on outer circle */}
            <circle cx="340" cy="180" r="2"   fill="var(--phosphor)" />
            <circle cx="100" cy="41"  r="2"   fill="var(--phosphor)" />
            <circle cx="100" cy="319" r="2"   fill="var(--phosphor)" />
            {/* Central node — same phosphor signature as hero radar */}
            <circle cx="180" cy="180" r="3" fill="var(--phosphor)" />
            <circle cx="180" cy="180" r="9" stroke="var(--phosphor)" strokeWidth="0.6" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading
          title="About Me"
          subtitle="The person behind the pixels"
        />

        <div className="mt-14 space-y-20">
          <ProfileSection />
          <SkillsGrid />
        </div>
      </div>
    </PageTransition>
  );
}
