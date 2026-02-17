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
    "Explore Alex Panteli's professional experience and education as a Senior Frontend Developer.",
};

export default function ExperiencePage() {
  return (
    <PageTransition>
        <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey so far"
        />

        <div className="mt-16">
          <Timeline />
        </div>

        <div className="mt-24">
          <h3 className="mb-2 text-[24px] font-semibold tracking-tight">Education!</h3>
          <p className="mb-8 text-[14px] text-muted-foreground">Academic background</p>

          <div className="space-y-4">
            {cvData.education.map((edu) => (
              <ScrollReveal key={edu.institution}>
                <div className="rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-border/80">
                  <div className="flex flex-wrap items-center gap-3 text-[14px] text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    <span>{edu.period}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {edu.location}
                    </span>
                  </div>
                  <h4 className="mt-3 text-[16px] font-semibold tracking-tight">{edu.degree}</h4>
                  <p className="mt-1 text-[14px] text-muted-foreground">{edu.institution}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
