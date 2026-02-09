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
                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <Badge variant="outline">{edu.period}</Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <CardDescription>{edu.institution}</CardDescription>
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
