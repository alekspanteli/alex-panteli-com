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
