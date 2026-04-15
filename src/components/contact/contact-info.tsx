"use client";

import { motion } from "motion/react";
import { cvData } from "@/data/cv-data";

const contactItems = [
  {
    label: "Email",
    value: cvData.personal.email,
    href: `mailto:${cvData.personal.email}`,
  },
  {
    label: "Location",
    value: cvData.personal.location,
    href: undefined,
  },
] as const;

export function ContactInfo() {
  return (
    <div className="space-y-12">
      <div>
        <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-(--cobalt)">
          Contact
        </p>
        {/* Large italic Cormorant heading — distinctive and warm */}
        <h3 className="font-display text-[44px] font-bold italic leading-[1.05] tracking-[-0.02em] text-heading sm:text-[52px]">
          Let&apos;s connect.
        </h3>
        <div className="mt-5 h-px w-12 bg-(--cobalt)" aria-hidden="true" />
        <p className="mt-6 max-w-sm text-[15px] leading-[1.7] tracking-[-0.01em] text-muted-foreground">
          Whether you need a frontend developer for your next project or want to
          explore a collaboration, I&apos;d love to hear from you.
        </p>
      </div>

      <div className="space-y-8">
        {contactItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
            className="border-t border-border/40 pt-5"
          >
            <p className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/45">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                className="font-display text-[22px] italic font-medium text-heading transition-colors duration-150 hover:text-(--cobalt)"
              >
                {item.value}
              </a>
            ) : (
              <p className="font-display text-[22px] italic font-medium text-heading">
                {item.value}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
