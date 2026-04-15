import type { Metadata } from "next";
import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProfileSection } from "@/components/about/profile-section";
import { StatsCounter } from "@/components/about/stats-counter";
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
      {/* Node graph — knowledge/skills network motif */}
      <svg
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-[30%] select-none opacity-[0.08]"
        width="340" height="460" viewBox="0 0 340 460" fill="none"
        aria-hidden="true"
      >
        {/* Edges */}
        <line x1="170" y1="230" x2="90"  y2="130" stroke="var(--phosphor)" strokeWidth="0.5" />
        <line x1="170" y1="230" x2="250" y2="110" stroke="var(--phosphor)" strokeWidth="0.5" />
        <line x1="170" y1="230" x2="60"  y2="310" stroke="var(--phosphor)" strokeWidth="0.5" />
        <line x1="170" y1="230" x2="270" y2="320" stroke="var(--phosphor)" strokeWidth="0.5" />
        <line x1="170" y1="230" x2="190" y2="370" stroke="var(--phosphor)" strokeWidth="0.5" />
        <line x1="170" y1="230" x2="310" y2="220" stroke="var(--phosphor)" strokeWidth="0.5" />
        <line x1="170" y1="230" x2="140" y2="80"  stroke="var(--phosphor)" strokeWidth="0.5" />
        <line x1="90"  y1="130" x2="250" y2="110" stroke="var(--phosphor)" strokeWidth="0.35" />
        <line x1="90"  y1="130" x2="140" y2="80"  stroke="var(--phosphor)" strokeWidth="0.35" />
        <line x1="270" y1="320" x2="190" y2="370" stroke="var(--phosphor)" strokeWidth="0.35" />
        <line x1="60"  y1="310" x2="80"  y2="400" stroke="var(--phosphor)" strokeWidth="0.35" />
        <line x1="250" y1="110" x2="310" y2="220" stroke="var(--phosphor)" strokeWidth="0.35" />
        <line x1="310" y1="220" x2="270" y2="320" stroke="var(--phosphor)" strokeWidth="0.35" />
        {/* Secondary nodes */}
        <circle cx="90"  cy="130" r="2"   fill="var(--phosphor)" />
        <circle cx="250" cy="110" r="2"   fill="var(--phosphor)" />
        <circle cx="60"  cy="310" r="1.5" fill="var(--phosphor)" />
        <circle cx="270" cy="320" r="2"   fill="var(--phosphor)" />
        <circle cx="190" cy="370" r="1.5" fill="var(--phosphor)" />
        <circle cx="310" cy="220" r="2"   fill="var(--phosphor)" />
        <circle cx="140" cy="80"  r="1.5" fill="var(--phosphor)" />
        <circle cx="80"  cy="400" r="1.5" fill="var(--phosphor)" />
        <circle cx="30"  cy="180" r="1.5" fill="var(--phosphor)" />
        <line x1="90"  y1="130" x2="30"  y2="180" stroke="var(--phosphor)" strokeWidth="0.35" />
        {/* Primary node */}
        <circle cx="170" cy="230" r="5"   fill="var(--phosphor)" />
        <circle cx="170" cy="230" r="10"  stroke="var(--phosphor)" strokeWidth="0.75" />
        <circle cx="170" cy="230" r="18"  stroke="var(--phosphor)" strokeWidth="0.4" strokeDasharray="2 6" />
      </svg>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeading
          title="About Me"
          subtitle="The person behind the pixels"
        />

        <div className="mt-14 space-y-20">
          <ProfileSection />
          <StatsCounter />
          <SkillsGrid />
        </div>
      </div>
    </PageTransition>
  );
}
