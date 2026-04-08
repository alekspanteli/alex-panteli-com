"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cvData } from "@/data/cv-data";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-56px)] flex-col items-center justify-center overflow-hidden">

      {/* Linear signature: top-edge purple bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
      >
        <div
          className="h-105 w-225 opacity-50 dark:opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, #6366f1 0%, #8b9cf4 30%, transparent 70%)",
            filter: "blur(2px)",
          }}
        />
      </div>

      {/* Secondary warm violet orb — center, stronger in dark mode */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="h-125 w-125 opacity-30 dark:opacity-25"
          style={{
            background:
              "radial-gradient(circle, #a5b4fc 0%, #818cf8 25%, #6366f1 50%, transparent 70%)",
            filter: "blur(50px)",
            transform: "translateY(-20%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl -translate-y-8 px-6 py-16 text-center sm:-translate-y-12">

        {/* Announcement pill */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.4, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <span className="linear-tag">
            <Sparkles className="h-3 w-3 text-(--accent-purple)" aria-hidden="true" />
            {cvData.personal.title}
            <span className="h-3 w-px bg-border/80" aria-hidden="true" />
            <MapPin className="h-3 w-3" aria-hidden="true" />
            {cvData.personal.location}
            <Image
              src="/cyprus-flag.svg"
              alt="Cyprus flag"
              width={18}
              height={12}
              className="h-[1.1em] w-auto"
            />
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "var(--font-display)" }}
          className="mb-5 text-[56px] font-bold leading-[1.04] tracking-[-0.045em] sm:text-[72px] lg:text-[88px]"
        >
          {cvData.personal.name}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.45, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-120 text-[16px] leading-[1.7] tracking-[-0.01em] text-muted-foreground"
        >
          A decade shipping production UIs — from design systems to trading
          platforms. React, TypeScript, performance.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-2.5 sm:flex-row"
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
            className="group h-9 gap-1.5 rounded-lg border-border/50 px-5 text-[13px] font-medium tracking-[-0.01em] text-muted-foreground shadow-none hover:border-border hover:text-foreground dark:border-white/10 dark:hover:border-white/20"
          >
            <Link href="/contact">
              Get In Touch
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Bottom fade gradient — keeps transition into next section clean */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent"
      />
    </section>
  );
}
