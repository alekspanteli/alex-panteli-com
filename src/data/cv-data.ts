export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
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
    email: "alex.panteli@example.com",
    phone: "+35799121577",
    summary:
      "Passionate Senior Frontend Developer with over 10 years of experience building modern, performant web applications. Specializing in React, TypeScript, and Next.js, I create elegant user interfaces that delight users and drive business results. Based in Cyprus, I bring a global perspective to every project.",
  },
  skills: [
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "HTML5", category: "frontend" },
    { name: "CSS3", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Framer Motion", category: "frontend" },
    { name: "Redux", category: "frontend" },
    { name: "Vue.js", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "GraphQL", category: "backend" },
    { name: "REST APIs", category: "backend" },
    { name: "Git", category: "tools" },
    { name: "Docker", category: "tools" },
    { name: "CI/CD", category: "tools" },
    { name: "Jest", category: "tools" },
    { name: "Cypress", category: "tools" },
    { name: "Figma", category: "tools" },
    { name: "Agile/Scrum", category: "other" },
    { name: "Performance Optimization", category: "other" },
    { name: "Accessibility", category: "other" },
    { name: "Responsive Design", category: "other" },
  ],
  experience: [
    {
      company: "TechCorp Solutions",
      role: "Senior Frontend Developer",
      period: "2021 – Present",
      location: "Limassol, Cyprus",
      description:
        "Leading frontend architecture and development for a suite of fintech products serving over 100,000 users.",
      highlights: [
        "Architected and led migration from legacy jQuery codebase to React/TypeScript, improving performance by 40%",
        "Built a component library used across 5 product teams, reducing development time by 30%",
        "Implemented real-time data visualization dashboards using D3.js and WebSockets",
        "Mentored a team of 4 junior developers through code reviews and pair programming",
      ],
    },
    {
      company: "Digital Innovations Ltd",
      role: "Frontend Developer",
      period: "2017 – 2021",
      location: "Nicosia, Cyprus",
      description:
        "Developed and maintained multiple client-facing web applications for the e-commerce sector.",
      highlights: [
        "Built responsive e-commerce platforms handling 50,000+ daily transactions",
        "Introduced automated testing with Jest and Cypress, achieving 85% code coverage",
        "Optimized Core Web Vitals scores, improving SEO rankings by 25%",
        "Collaborated with UX designers to implement pixel-perfect, accessible interfaces",
      ],
    },
    {
      company: "WebStudio Agency",
      role: "Junior Frontend Developer",
      period: "2014 – 2017",
      location: "Paphos, Cyprus",
      description:
        "Started career building websites and web applications for local businesses and startups.",
      highlights: [
        "Developed 30+ client websites using modern HTML, CSS, and JavaScript",
        "Introduced responsive design practices to the team's workflow",
        "Built interactive prototypes and animations that increased client engagement",
        "Gained expertise in cross-browser compatibility and progressive enhancement",
      ],
    },
  ],
  education: [
    {
      institution: "University of Cyprus",
      degree: "BSc in Computer Science",
      period: "2010 – 2014",
      location: "Nicosia, Cyprus",
    },
  ],
  stats: [
    { label: "Years Experience", value: 10, suffix: "+" },
    { label: "Companies", value: 3, suffix: "" },
    { label: "Technologies", value: 15, suffix: "+" },
  ],
};
