"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cvData } from "@/data/cv-data";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-56px)] items-center overflow-hidden">

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px]">

          {/* Left: Text content */}
          <div>
            {/* Mono label */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.4, ease: "easeOut" }}
              className="mb-5 font-mono text-[11px] font-medium uppercase tracking-widest text-(--green)"
            >
              {cvData.personal.title}
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 text-[52px] font-bold leading-none tracking-[-0.04em] text-heading sm:text-[64px] lg:text-[72px] xl:text-[84px]"
            >
              {cvData.personal.name}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.45, ease: "easeOut" }}
              className="mb-8 max-w-md text-[16px] leading-[1.7] tracking-[-0.01em] text-muted-foreground"
            >
              A decade shipping production UIs — from design systems to trading
              platforms. React, TypeScript, performance.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4, ease: "easeOut" }}
              className="mb-10 flex flex-wrap gap-3"
            >
              <Button
                asChild
                size="lg"
                className="h-9 rounded-lg px-5 text-[13px] font-medium tracking-[-0.01em] shadow-none"
              >
                <Link href="/experience">View Experience</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group h-9 gap-1.5 rounded-lg border-border/50 px-5 text-[13px] font-medium tracking-[-0.01em] text-muted-foreground shadow-none hover:border-(--green)/50 hover:text-(--green)"
              >
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
              className="flex gap-8 border-t border-border/40 pt-6"
            >
              {cvData.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[22px] font-bold tracking-[-0.03em] text-heading">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl border border-border/40 ring-1 ring-(--green)/10">
              <Image
                src="/avatar3.avif"
                alt={cvData.personal.name}
                fill
                sizes="380px"
                className="object-cover grayscale"
                priority
              />
              {/* Bottom gradient fade */}
              <div className="absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent"
      />
    </section>
  );
}
