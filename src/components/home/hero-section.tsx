"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { PersonalInfo, Stat } from "@/data/cv-data";

type HeroSectionProps = {
  personal: PersonalInfo;
  stats: Stat[];
};

export function HeroSection({ personal, stats }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[calc(100svh-56px)] flex-col justify-center overflow-hidden px-6 py-20 sm:px-12">

      {/* HUD corner brackets — viewfinder / precision instrument */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute top-4 left-4 h-6 w-6 border-t border-l border-(--phosphor)/30" />
        <span className="absolute top-4 right-4 h-6 w-6 border-t border-r border-(--phosphor)/30" />
        <span className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-(--phosphor)/30" />
        <span className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-(--phosphor)/30" />
      </div>

      <div className="mx-auto w-full max-w-6xl">

        {/* Role label — monospace, comment-style */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.6, ease: "easeOut" }}
          className="mb-10 font-mono text-[11px] uppercase tracking-widest text-(--phosphor)"
        >
          // {personal.title.toLowerCase().replace(/\s+/g, "_")}
        </motion.p>

        {/* Name — massive monospace, lowercase, blinking cursor */}
        <h1 className="font-display font-bold leading-[0.88] tracking-[-0.03em] text-heading
                       text-[clamp(68px,10vw,132px)]">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            alex
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            panteli<span className="blink text-(--phosphor)">_</span>
          </motion.span>
        </h1>

        {/* Phosphor rule — draws in from left */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{ transformOrigin: "left center" }}
          transition={{ delay: 0.52, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="my-10 h-px w-full bg-(--phosphor)/25"
          aria-hidden="true"
        />

        {/* Bottom row: description left, stats right */}
        <div className="grid gap-12 md:grid-cols-[1fr_auto]">

          {/* Left: description + CTAs */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.66, duration: 0.5, ease: "easeOut" }}
              className="mb-8 max-w-130 text-[17px] leading-[1.65] tracking-[-0.01em] text-muted-foreground"
            >
              A decade crafting precise, accessible interfaces — from design-system
              foundations to real-time trading platforms. React, TypeScript, Next.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.45, ease: "easeOut" }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/experience"
                className="inline-flex h-10 items-center rounded-sm bg-(--phosphor) px-5 text-[13px] font-semibold tracking-wide text-background transition-opacity duration-150 hover:opacity-80"
              >
                View Experience
              </Link>
              <Link
                href="/contact"
                className="group inline-flex h-10 items-center gap-1.5 rounded-sm border border-border/70 px-5 text-[13px] font-semibold tracking-wide text-muted-foreground transition-colors duration-150 hover:border-(--phosphor)/50 hover:text-(--phosphor)"
              >
                Get In Touch
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right: stats — stacked, right-aligned */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.6, ease: "easeOut" }}
            className="flex items-end gap-8 md:flex-col md:items-end md:gap-7"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-right">
                <p className="font-display text-[48px] font-bold leading-none tracking-[-0.03em] text-heading">
                  {stat.value}
                  <span className="text-(--phosphor)">{stat.suffix}</span>
                </p>
                <p className="mt-1.5 font-mono text-[9px] uppercase tracking-widest text-muted-foreground/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

    </section>
  );
}
