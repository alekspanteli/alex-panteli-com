import type { Metadata } from "next";
import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProfileSection } from "@/components/about/profile-section";
import { StatsCounter } from "@/components/about/stats-counter";
import { SkillsGrid } from "@/components/about/skills-grid";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Alex Panteli — a Senior Frontend Developer with 10+ years of experience based in Cyprus.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl space-y-20 px-4 py-20">
        <SectionHeading
          title="About Me"
          subtitle="Get to know who I am and what I do"
        />
        <ProfileSection />
        <Separator />
        <StatsCounter />
        <Separator />
        <SkillsGrid />
      </div>
    </PageTransition>
  );
}
