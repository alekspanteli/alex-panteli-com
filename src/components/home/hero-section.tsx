"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cvData } from "@/data/cv-data";

const nameLetters = cvData.personal.name.split("");

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-3.5rem)] items-center justify-center overflow-hidden">
      {/* Subtle grid background — nextjs.org style */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      {/* Radial fade overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="mb-8 gap-1.5 border-border/60 px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <MapPin className="h-3 w-3" />
            {cvData.personal.location}
          </Badge>
        </motion.div>

        {/* Name with letter-by-letter reveal */}
        <h1 className="mb-6 text-5xl font-bold tracking-tighter sm:text-6xl lg:text-8xl">
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + i * 0.04,
                duration: 0.4,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        {/* Title — muted, slightly larger */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground sm:text-xl"
        >
          {cvData.personal.title}
        </motion.p>

        {/* CTA Buttons — nextjs.org style: filled primary + ghost with arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="rounded-full px-8 font-medium">
            <Link href="/experience">View My Experience</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="gap-2 rounded-full px-8 font-medium text-muted-foreground hover:text-foreground"
          >
            <Link href="/contact">
              Get In Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
