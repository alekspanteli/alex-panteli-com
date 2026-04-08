import type { Metadata } from "next";
import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeading } from "@/components/shared/section-heading";
import { Timeline } from "@/components/experience/timeline";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
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
        <div className="mx-auto max-w-3xl px-6 py-16">
        <SectionHeading
          title="Experience"
          subtitle="A decade of building for the web"
        />

        <div className="mt-12">
          <Timeline />
        </div>

        <div className="mt-16 border-t border-border/50 pt-16">
          <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.12em] text-(--accent-purple)">
            Education
          </p>
          <h3 className="mb-8 text-[22px] font-semibold tracking-[-0.025em] text-heading">
            Academic background
          </h3>

          <div className="space-y-3">
            {cvData.education.map((edu) => (
              <div
                key={edu.institution}
                className="rounded-xl border border-border/60 bg-card p-5 transition-colors duration-200 hover:border-border"
              >
                <div className="flex flex-wrap items-center gap-3 text-[12px] text-muted-foreground">
                  <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="font-medium tabular-nums">{edu.period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" aria-hidden="true" />
                    {edu.location}
                  </span>
                </div>
                <h4 className="mt-2.5 text-[15px] font-semibold tracking-[-0.02em] text-heading">
                  {edu.degree}
                </h4>
                <p className="mt-0.5 text-[13px] tracking-[-0.01em] text-muted-foreground">
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
