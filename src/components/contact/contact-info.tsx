"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="grid gap-4 sm:grid-cols-3">
      {contactItems.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <Card className="group transition-shadow hover:shadow-lg">
            <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
              <div className="rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm font-semibold transition-colors hover:text-primary"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-semibold">{item.value}</p>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
