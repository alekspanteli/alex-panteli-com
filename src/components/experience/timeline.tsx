import { TimelineItem } from "./timeline-item";
import { cvData } from "@/data/cv-data";

export function Timeline() {
  return (
    <div>
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
  );
}
