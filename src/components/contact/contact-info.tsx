"use client";

import { motion } from "motion/react";
import { cvData } from "@/data/cv-data";

const [emailLocal, emailDomain] = cvData.personal.email.split("@");

const contactItems = [
  {
    label: "Email",
    value: `${emailLocal} [at] ${emailDomain}`,
    href: `mailto:${cvData.personal.email}`,
    obfuscated: true,
  },
  {
    label: "Location",
    value: cvData.personal.location,
    href: undefined,
  },
  {
    label: "GitHub",
    value: "github.com/alekspanteli",
    href: "https://github.com/alekspanteli",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/alexpanteli",
    href: "https://www.linkedin.com/in/alexpanteli/",
    external: true,
  },
] as const;

export function ContactInfo() {
  return (
    <div className="space-y-12">
      <div>
        <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-(--phosphor)">
          Contact
        </p>
        <h3 className="font-display text-[32px] font-bold leading-[1.1] tracking-[-0.025em] text-heading">
          <span className="text-(--phosphor) mr-2" aria-hidden="true">$</span>connect --open
        </h3>
        <span
          className="mt-4 block font-mono text-[13px] leading-none text-(--phosphor)/70"
          aria-hidden="true"
        >
          └──
        </span>
        <p className="mt-6 max-w-sm text-[15px] leading-[1.7] tracking-[-0.01em] text-muted-foreground">
          Whether you need a frontend developer for your next project or want to
          explore a collaboration, I&apos;d love to hear from you.
        </p>
      </div>

      <div className="space-y-0">
        {contactItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
            className="border-t border-(--phosphor)/30 py-5 dark:border-(--phosphor)/10"
          >
            <p className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                {...("external" in item && item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="font-mono text-[15px] font-medium text-heading transition-colors duration-150 hover:text-(--phosphor)"
              >
                {item.value}
              </a>
            ) : (
              <p className="font-mono text-[15px] font-medium text-heading">
                {item.value}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
