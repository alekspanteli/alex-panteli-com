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
        <h3 className="text-[20px] font-semibold tracking-[-0.02em]">
          {"Let's connect"}
          <span className="text-primary">.</span>
        </h3>
        <p className="mt-3 text-[15px] leading-[1.7] text-muted-foreground">
          Whether you need a frontend developer for your next project or want to
          explore a collaboration, I&apos;d love to hear from you.
        </p>
      </div>

      <div className="space-y-3">
        {contactItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
          >
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/20">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <item.icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-[14px] font-medium text-foreground underline decoration-border underline-offset-4 transition-colors duration-200 hover:decoration-primary"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-[14px] font-medium">{item.value}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
