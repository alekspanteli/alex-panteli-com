"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cvData } from "@/data/cv-data";

export function ProfileSection() {
  return (
    <div className="grid gap-12 md:grid-cols-[280px_1fr] md:items-start lg:gap-16">
      <ScrollReveal direction="left">
        <div className="group relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-border">
          <Image
            src="/avatar3.avif"
            alt={cvData.personal.name}
            fill
            sizes="280px"
            className="object-cover transition-all duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-primary/5 transition-opacity duration-500 group-hover:opacity-0" />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={0.15}>
        <div className="space-y-6">
          <h3 className="text-[22px] font-semibold tracking-[-0.02em]">
            {cvData.personal.title}
          </h3>
          <p className="text-[16px] leading-[1.7] text-muted-foreground">
            {cvData.personal.summary}
          </p>
          <Button asChild variant="outline" className="gap-2">
            <Link href="/Alex_Panteli_Frontend_Developer_CV.pdf" download>
              <Download className="h-4 w-4" />
              Download CV
            </Link>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  );
}
