"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { cvData } from "@/data/cv-data";

export function ProfileSection() {
  return (
    <div className="grid gap-12 md:grid-cols-2 md:items-center">
      <ScrollReveal direction="left">
        <div className="relative aspect-square overflow-hidden rounded-xl border border-border/60">
          <Image
            src="/avatar.jpg"
            alt={cvData.personal.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={0.2}>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">About Me</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {cvData.personal.summary}
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
