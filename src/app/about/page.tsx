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
  description: `Learn more about Alex Panteli — a Senior Frontend Developer with ${yearsExp}+ years of experience based in Cyprus.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageTransition>
        <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          title="About Me"
          subtitle="Get to know who I am and what I do"
        />

        <div className="mt-16 space-y-24">
          <ProfileSection />
          <StatsCounter />
          <SkillsGrid />
        </div>
      </div>
    </PageTransition>
  );
}
