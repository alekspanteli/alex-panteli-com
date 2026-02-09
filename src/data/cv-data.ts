export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;

  summary: string;
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
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface CVData {
  personal: PersonalInfo;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  stats: Stat[];
}

export const cvData: CVData = {
  personal: {
    name: "Alex Panteli",
    title: "Senior Frontend Developer",
    location: "Cyprus",
    email: "alekspanteli@gmail.com",

    summary:
      "Senior Frontend Developer with extensive experience building accessible, high-performance interfaces, with a strong focus on semantic HTML, WCAG compliance, and scalable UI architecture. Known for translating design systems into pixel-perfect, reusable components and collaborating closely with designers and engineers. Modern CSS, Angular, React, TypeScript.",
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
    { name: "Framer Motion", category: "frontend" },
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
      company: "XM / Trading.com",
      role: "Senior Frontend Developer",
      period: "Aug 2019 – Jun 2025",
      location: "Limassol, Cyprus",
      description:
        "Led frontend development for Trading.com's web trader platform and public website using React, Angular, and TypeScript.",
      highlights: [
        "Designed and maintained a scalable design system adopted across multiple teams",
        "Delivered WCAG-compliant, high-performance UIs and pixel-perfect landing pages",
        "Improved code quality through reviews, mentoring, and Agile practices",
        "Contributed to hiring, onboarding, and team leadership",
      ],
    },
    {
      company: "easyMarkets",
      role: "Frontend Developer",
      period: "Aug 2017 – Jul 2019",
      location: "Limassol, Cyprus",
      description:
        "Built and maintained main sites, microsites, and landing pages using HTML, CSS (BEM), and React.",
      highlights: [
        "Led responsive HTML email development",
        "Migrated UI from Bootstrap 3 to 4, improving maintainability",
        "Improved SEO and cross-browser performance through semantic markup",
      ],
    },
    {
      company: "FxPro",
      role: "Frontend Developer",
      period: "Apr 2015 – Jun 2017",
      location: "Limassol, Cyprus",
      description:
        "Developed IB websites, partner portals, and widgets using responsive HTML/CSS and WordPress.",
      highlights: [
        "Led WordPress theme development from PSD to production",
        "Collaborated with SEO teams on best practices and site structure",
      ],
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
  stats: [
    { label: "Years Experience", value: 10, suffix: "+" },
    { label: "Companies", value: 3, suffix: "" },
    { label: "Technologies", value: 15, suffix: "+" },
  ],
};
