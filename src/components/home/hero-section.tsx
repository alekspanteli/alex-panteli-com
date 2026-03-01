"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cvData } from "@/data/cv-data";

export function HeroSection() {
  return (
    <section className="relative flex flex-1 items-center justify-center overflow-hidden">
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 sm:py-28">
        {/* Role badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-4 py-1.5 text-[13px] font-medium text-muted-foreground backdrop-blur-sm">
            {cvData.personal.title}
            <span className="inline-flex items-center gap-1.5 text-[12px]">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {cvData.personal.location}
              <Image
                src="/cyprus-flag.svg"
                alt="Cyprus flag"
                width={18}
                height={12}
                className="h-[1.25em] w-auto aspect-[3/2]"
              />
            </span>
          </span>
        </motion.div>

        {/* Name — large, bold, left-aligned */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          style={{ fontFamily: "var(--font-display)" }}
          className="mb-6 text-[clamp(3rem,8vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.03em]"
        >
          {cvData.personal.name}
          <span className="text-primary">.</span>
        </motion.h1>

        {/* Summary — editorial, refined */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-12 max-w-[540px] text-[17px] leading-[1.7] text-muted-foreground"
        >
          I build fast, accessible interfaces that scale. A decade of
          shipping production UIs — from design systems to trading
          platforms — with React, TypeScript, and modern CSS.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Button asChild size="lg" className="h-12 rounded-lg px-8 text-[14px] font-medium">
            <Link href="/experience">View Experience</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group h-12 gap-2 rounded-lg px-8 text-[14px] font-medium"
          >
            <Link href="/contact">
              Get In Touch
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
