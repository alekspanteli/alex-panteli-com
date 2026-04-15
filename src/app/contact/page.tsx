import type { Metadata } from "next";
import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Looking for a senior frontend developer? Get in touch to discuss your next project or collaboration.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageTransition>
      {/* Signal rings — transmission / broadcast motif */}
      <svg
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-[38%] select-none opacity-[0.09]"
        width="480" height="480" viewBox="0 0 480 480" fill="none"
        aria-hidden="true"
      >
        {/* Concentric rings */}
        <circle cx="240" cy="240" r="55"  stroke="var(--phosphor)" strokeWidth="1"    strokeDasharray="4 8" />
        <circle cx="240" cy="240" r="105" stroke="var(--phosphor)" strokeWidth="0.85" strokeDasharray="4 9" />
        <circle cx="240" cy="240" r="155" stroke="var(--phosphor)" strokeWidth="0.75" strokeDasharray="3 10" />
        <circle cx="240" cy="240" r="205" stroke="var(--phosphor)" strokeWidth="0.6"  strokeDasharray="3 11" />
        <circle cx="240" cy="240" r="235" stroke="var(--phosphor)" strokeWidth="0.5"  strokeDasharray="2 14" />
        {/* Crosshairs */}
        <line x1="240" y1="0"   x2="240" y2="480" stroke="var(--phosphor)" strokeWidth="0.4" strokeDasharray="2 12" />
        <line x1="0"   y1="240" x2="480" y2="240" stroke="var(--phosphor)" strokeWidth="0.4" strokeDasharray="2 12" />
        {/* Centre pip */}
        <circle cx="240" cy="240" r="4"  fill="var(--phosphor)" />
        <circle cx="240" cy="240" r="9"  stroke="var(--phosphor)" strokeWidth="0.75" />
        <circle cx="240" cy="240" r="18" stroke="var(--phosphor)" strokeWidth="0.4" strokeDasharray="2 5" />
      </svg>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's build something great together"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <ContactInfo />
          </div>
          <ContactForm />
        </div>
      </div>
    </PageTransition>
  );
}
