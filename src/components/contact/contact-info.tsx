"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { cvData } from "@/data/cv-data";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: cvData.personal.email,
    href: `mailto:${cvData.personal.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: cvData.personal.phone,
    href: `tel:${cvData.personal.phone.replace(/\s/g, "")}`,
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
    <div className="space-y-6">
      <div>
        <h3 className="text-[20px] font-semibold tracking-tight">Let&apos;s connect</h3>
        <p className="mt-2 text-[14px] leading-[1.6] text-muted-foreground">
          Have a project in mind or want to discuss an opportunity? Reach out
          through any of the channels below.
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
            <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors duration-200 hover:border-border/80">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent">
                <item.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-[12px] font-medium uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-[14px] font-medium text-foreground transition-colors duration-200 hover:underline"
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
