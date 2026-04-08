"use client";

import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { Mail, MapPin } from "lucide-react";
import { cvData } from "@/data/cv-data";

interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | undefined;
}

const contactItems: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: cvData.personal.email,
    href: `mailto:${cvData.personal.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: cvData.personal.location,
    href: undefined,
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.12em] text-(--accent-purple)">
          Contact
        </p>
        <h3 className="text-[22px] font-semibold tracking-[-0.025em] text-heading">
          Let&apos;s connect
        </h3>
        <p className="mt-3 text-[14px] leading-[1.7] tracking-[-0.01em] text-muted-foreground">
          Whether you need a frontend developer for your next project or want to
          explore a collaboration, I&apos;d love to hear from you.
        </p>
      </div>

      <div className="space-y-2">
        {contactItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 transition-colors duration-150 hover:border-border">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/50">
                <item.icon className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/60">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-[13px] font-medium tracking-[-0.01em] text-foreground transition-colors duration-150 hover:text-(--accent-purple)"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-[13px] font-medium tracking-[-0.01em]">{item.value}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
