"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { cvData } from "@/data/cv-data";

export function ProfileSection() {
  return (
    <div className="grid gap-16 md:grid-cols-2 md:items-center">
      <ScrollReveal direction="left">
        <div className="relative aspect-square max-w-[400px] overflow-hidden rounded-lg border border-border">
          <Image
            src="/avatar.jpg"
            alt={cvData.personal.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={0.15}>
        <div className="space-y-5">
          <h3 className="text-[24px] font-semibold tracking-tight">
            {cvData.personal.title}
          </h3>
          <p className="text-[18px] leading-[1.6] text-muted-foreground">
            {cvData.personal.summary}
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
