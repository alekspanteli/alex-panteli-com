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
      {/* Signal rings — broadcast motif, container-bounded */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="relative mx-auto h-full w-full max-w-[1400px] px-6 sm:px-12">
          <svg
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-[28%] select-none opacity-[0.11] md:block"
            width="440" height="440" viewBox="0 0 440 440" fill="none"
          >
            {/* 3 concentric rings — solid, tightened */}
            <circle cx="220" cy="220" r="200" stroke="var(--phosphor)" strokeWidth="0.6" strokeDasharray="2 10" />
            <circle cx="220" cy="220" r="140" stroke="var(--phosphor)" strokeWidth="0.7" strokeDasharray="3 9" />
            <circle cx="220" cy="220" r="80"  stroke="var(--phosphor)" strokeWidth="0.85" strokeDasharray="4 7" />
            {/* Crosshairs — shorter, anchored within outermost ring */}
            <line x1="220" y1="8"   x2="220" y2="432" stroke="var(--phosphor)" strokeWidth="0.4" strokeDasharray="2 12" />
            <line x1="8"   y1="220" x2="432" y2="220" stroke="var(--phosphor)" strokeWidth="0.4" strokeDasharray="2 12" />
            {/* Transmission pulse — diagonal indicator */}
            <line x1="220" y1="220" x2="300" y2="140" stroke="var(--phosphor)" strokeWidth="0.75" />
            <circle cx="300" cy="140" r="2.5" fill="var(--phosphor)" />
            {/* Centre pip — matches hero/about phosphor signature */}
            <circle cx="220" cy="220" r="3" fill="var(--phosphor)" />
            <circle cx="220" cy="220" r="9" stroke="var(--phosphor)" strokeWidth="0.6" />
          </svg>
        </div>
      </div>

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
