"use client";

import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  index: number;
}

export function TimelineItem({
  title,
  subtitle,
  period,
  location,
  description,
  highlights,
  index,
}: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative grid gap-4 md:grid-cols-2 md:gap-8">
      {/* Timeline dot and line */}
      <div className="absolute top-8 left-4 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-1/2" />
      <div className="absolute top-8 left-4 hidden h-3 w-3 rounded-full bg-primary md:left-1/2 md:block md:-translate-x-1/2" />

      {/* Card - alternating sides */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={isEven ? "md:col-start-1" : "md:col-start-2"}
      >
        <Card className="transition-shadow hover:shadow-lg">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{period}</Badge>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {location}
              </span>
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{subtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-3 text-sm text-muted-foreground">{description}</p>
            <ul className="space-y-1.5 text-sm">
              {highlights.map((highlight, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {highlight}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Empty spacer for alternating layout */}
      <div className={isEven ? "hidden md:col-start-2 md:block" : "hidden md:col-start-1 md:block"} />
    </div>
  );
}
