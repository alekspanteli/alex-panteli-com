"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { cvData } from "@/data/cv-data";

export function ProfileSection() {
  return (
    <div className="grid gap-16 md:grid-cols-[300px_1fr] md:items-center">
      <ScrollReveal direction="left">
        <div className="group relative aspect-square w-full max-w-[300px] overflow-hidden rounded-lg border border-border">
          <Image
            src="/avatar3.avif"
            alt={cvData.personal.name}
            fill
            sizes="300px"
            className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
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
