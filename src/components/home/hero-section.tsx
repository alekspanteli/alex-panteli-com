"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cvData } from "@/data/cv-data";

export function HeroSection() {
  return (
    <section className="relative flex flex-1 items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-30" />
      {/* Radial fade overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-center sm:py-20">
        {/* Role badge */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-6 text-[14px] font-medium text-muted-foreground"
        >
          {cvData.personal.title} &middot; {cvData.personal.location}
        </motion.p>

        {/* Name — large, bold, confident */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          style={{ fontFamily: "var(--font-display)" }}
          className="mb-6 text-[48px] font-bold leading-[1.1] tracking-[0.02em] sm:text-[64px] lg:text-[80px]"
        >
          {cvData.personal.name}
        </motion.h1>

        {/* Summary — calm, readable */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          style={{ fontFamily: "var(--font-display)" }}
          className="mx-auto mb-12 max-w-140 text-[18px] leading-[1.6] text-muted-foreground"
        >
          Building modern, performant web applications with React, TypeScript,
          and Next.js. Focused on clarity and craft.
        </motion.p>

        {/* CTA Buttons — primary blue + ghost with arrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Button asChild size="lg" className="h-11 rounded-lg px-8 text-[14px] font-medium">
            <Link href="/experience">View Experience</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="group h-11 gap-2 rounded-lg px-8 text-[14px] font-medium text-muted-foreground hover:text-foreground"
          >
            <Link href="/contact">
              Get In Touch
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
