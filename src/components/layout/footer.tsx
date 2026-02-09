import { cvData } from "@/data/cv-data";

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {cvData.personal.name}. All rights
          reserved.
        </p>
        <a
          href={`mailto:${cvData.personal.email}`}
          className="transition-colors hover:text-foreground"
        >
          {cvData.personal.email}
        </a>
      </div>
    </footer>
  );
}
