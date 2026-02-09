import { TimelineItem } from "./timeline-item";
import { cvData } from "@/data/cv-data";

export function Timeline() {
  return (
    <div className="relative">
      {/* Center vertical timeline line */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-6 bottom-6 w-px bg-border" />

      <div className="space-y-8">
        {cvData.experience.map((exp, index) => (
          <TimelineItem
            key={exp.company}
            title={exp.role}
            subtitle={exp.company}
            period={exp.period}
            location={exp.location}
            description={exp.description}
            highlights={exp.highlights}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
