"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Button } from "@/components/ui/button";
import { cvData } from "@/data/cv-data";
import { Download } from "lucide-react";

export function ProfileSection() {
  return (
    <div className="grid gap-14 md:grid-cols-[260px_1fr] md:items-start">
      <ScrollReveal direction="left">
        {/* Photo — sharp corners, Linear aesthetic */}
        <div className="group relative aspect-square w-full max-w-65 overflow-hidden rounded-xl border border-border/60">
          <Image
            src="/avatar3.avif"
            alt={cvData.personal.name}
            fill
            sizes="260px"
            className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
            priority
          />
          {/* Linear-style subtle overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-0" />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="right" delay={0.1}>
        <div className="space-y-5">
          <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-(--accent-purple)">
            About
          </p>
          <h3 className="text-[22px] font-semibold tracking-[-0.025em] text-heading">
            {cvData.personal.title}
          </h3>
          <p className="text-[15px] leading-[1.7] tracking-[-0.01em] text-muted-foreground">
            {cvData.personal.summary}
          </p>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="gap-2 rounded-lg border-border/60 text-[13px] font-medium tracking-[-0.01em] shadow-none hover:border-border"
          >
            <Link href="/Alex_Panteli_Frontend_Developer_CV.pdf" download>
              <Download className="h-3.5 w-3.5" />
              Download CV
            </Link>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  );
}
