"use client";

import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { cvData } from "@/data/cv-data";
import { User } from "lucide-react";

export function ProfileSection() {
  return (
    <div className="grid gap-12 md:grid-cols-2 md:items-center">
      <ScrollReveal direction="left">
        <div className="flex aspect-square items-center justify-center rounded-2xl bg-muted">
          <User className="h-24 w-24 text-muted-foreground/40" />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={0.2}>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">About Me</h3>
          <p className="leading-relaxed text-muted-foreground">
            {cvData.personal.summary}
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
