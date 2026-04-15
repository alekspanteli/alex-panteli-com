import { cvData } from "@/data/cv-data";

const socialLinks = [
  { href: `mailto:${cvData.personal.email}`, label: "Email", external: false },
  { href: "https://github.com/alekspanteli", label: "GitHub", external: true },
  { href: "https://www.linkedin.com/in/alexpanteli/", label: "LinkedIn", external: true },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">
          &copy; {new Date().getFullYear()} {cvData.personal.name}
        </p>
        <div className="flex items-center gap-6">
          {socialLinks.map(({ href, label, external }) => (
            <a
              key={label}
              href={href}
              className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40 transition-colors duration-150 hover:text-(--cobalt)"
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
