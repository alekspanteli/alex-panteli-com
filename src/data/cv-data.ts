export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;

  summary: string;
}

export interface Currently {
  role: string;
  company: string;
  availability: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  stack?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface Project {
  title: string;
  context: string;
  outcome: string;
  tags: string[];
  href?: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface CVData {
  personal: PersonalInfo;
  currently: Currently;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  stats: Stat[];
}

const CAREER_START = new Date(2015, 3); // April 2015
export const yearsExperience = Math.floor(
  (Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000),
);

export const cvData: CVData = {
  personal: {
    name: "Alex Panteli",
    title: "Senior Frontend Developer",
    location: "Cyprus",
    email: "alekspanteli@gmail.com",

    summary:
      "I craft fast, accessible web interfaces that users love and teams can scale. Over a decade of shipping production UIs — from design-system foundations to complex trading platforms — I bring deep expertise in React, TypeScript, and modern CSS, with a relentless focus on performance, WCAG compliance, and pixel-perfect execution.",
  },
  currently: {
    role: "Frontend Developer",
    company: "iGaming & Trading (contract)",
    availability: "Available for new work",
  },
  skills: [
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Angular", category: "frontend" },
    { name: "Motion", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "GraphQL", category: "backend" },
    { name: "REST APIs", category: "backend" },
    { name: "Git", category: "tools" },
    { name: "AI assisted coding", category: "tools" },
    { name: "Figma", category: "tools" },
    { name: "Agile/Scrum", category: "other" },
    { name: "Performance Optimization", category: "other" },
    { name: "Accessibility", category: "other" },
    { name: "Responsive Design", category: "other" },
  ],
  experience: [
    {
      company: "NDA",
      role: "Frontend Developer",
      period: "Jul 2025 – Present",
      location: "Remote",
      description:
        "Delivering high-performance iGaming and trading web applications as an independent contractor, working directly with product and design teams.",
      highlights: [
        "Architecting component libraries with full WCAG AA compliance and semantic markup, enabling rapid feature delivery across products.",
        "Driving frontend quality through close collaboration with designers and backend engineers, reducing UI bugs and accelerating release cycles.",
      ],
      stack: ["React", "TypeScript", "Next.js", "Tailwind", "Motion"],
    },
    {
      company: "XM / Trading.com",
      role: "Senior Frontend Developer",
      period: "Aug 2019 – Jun 2025",
      location: "Limassol, Cyprus",
      description:
        "Owned the frontend architecture for Trading.com's web trader and public-facing site, leading a cross-functional team through a multi-year platform evolution.",
      highlights: [
        "Built and maintained a design system used by 4+ teams, standardising UI patterns and cutting new-feature delivery time",
        "Shipped WCAG AA-compliant trading dashboards handling real-time data with sub-second render performance",
        "Established code-review culture, mentored junior developers, and drove adoption of Agile best practices",
        "Led technical interviews and shaped the hiring pipeline that grew the frontend team",
      ],
      stack: ["React", "TypeScript", "Angular", "GraphQL", "Design Systems"],
    },
    {
      company: "easyMarkets",
      role: "Frontend Developer",
      period: "Aug 2017 – Jul 2019",
      location: "Limassol, Cyprus",
      description:
        "Developed the company's main website, campaign microsites, and conversion-focused landing pages across a fast-paced fintech environment.",
      highlights: [
        "Owned the responsive HTML email system, delivering pixel-perfect campaigns across 30+ email clients",
        "Led the Bootstrap 3-to-4 migration, reducing CSS bundle size and improving long-term maintainability",
        "Boosted organic traffic through semantic markup overhaul and structured data implementation",
      ],
      stack: ["JavaScript", "Bootstrap", "HTML Email", "SEO"],
    },
    {
      company: "FxPro",
      role: "Frontend Developer",
      period: "Apr 2015 – Jun 2017",
      location: "Limassol, Cyprus",
      description:
        "Built partner-facing portals, introducing-broker websites, and marketing widgets for one of the world's largest forex brokers.",
      highlights: [
        "Delivered custom WordPress themes end-to-end — from PSD comps to production-ready, mobile-first code",
        "Partnered with the SEO team to implement site-wide structural improvements that increased search visibility",
      ],
      stack: ["JavaScript", "WordPress", "PHP", "Responsive Design"],
    },
  ],
  education: [
    {
      institution: "Abertay University",
      degree: "BSc (Hons) Web Design & Development",
      period: "2010 – 2014",
      location: "Dundee, Scotland",
    },
  ],
  // Selected Work — placeholder content to scaffold the homepage section.
  // Replace context/outcome/tags with real case-study data when ready.
  projects: [
    {
      title: "Real-time trading dashboard",
      context: "XM / Trading.com",
      outcome: "Sub-second rendering for live market data across 40+ widgets",
      tags: ["React", "WebSockets", "Perf"],
    },
    {
      title: "Cross-team design system",
      context: "XM / Trading.com",
      outcome: "Adopted by 4+ product teams; cut new-feature delivery time",
      tags: ["Design Systems", "A11y", "TypeScript"],
    },
    {
      title: "iGaming component library",
      context: "NDA · Contract",
      outcome: "WCAG AA-compliant primitives shipped across multiple products",
      tags: ["Next.js", "Tailwind", "A11y"],
    },
    {
      title: "Campaign microsites",
      context: "easyMarkets",
      outcome: "Conversion-optimised landing pages across 30+ email clients",
      tags: ["JavaScript", "HTML Email", "SEO"],
    },
  ],
  stats: [
    { label: "Years Experience", value: yearsExperience, suffix: "+" },
    { label: "Companies", value: 4, suffix: "" },
    { label: "Technologies", value: 15, suffix: "+" },
  ],
};
