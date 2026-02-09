import type { Metadata } from "next";
import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeading } from "@/components/shared/section-heading";
import { Timeline } from "@/components/experience/timeline";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      <div className="mx-auto max-w-5xl space-y-20 px-4 py-20">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey so far"
        />
        <Timeline />

        <Separator />

        <section>
          <SectionHeading
            title="Education"
            subtitle="Academic background"
          />
          <div className="space-y-6">
            {cvData.education.map((edu) => (
              <ScrollReveal key={edu.institution}>
                <Card className="border-border/60 bg-card/50 transition-colors hover:bg-card">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <Badge variant="outline" className="border-border/60 text-xs font-normal">{edu.period}</Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </span>
                    </div>
                    <CardTitle className="text-base font-semibold tracking-tight">{edu.degree}</CardTitle>
                    <CardDescription className="text-sm">{edu.institution}</CardDescription>
                  </CardHeader>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
