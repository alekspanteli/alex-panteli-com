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
      {/* Handshake — two endpoints connecting, packet in flight */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="relative mx-auto h-full w-full max-w-[1400px] px-6 sm:px-12">
          <svg
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-[25%] select-none opacity-[0.12] md:block"
            width="440" height="440" viewBox="0 0 440 440" fill="none"
          >
            {/* Registration marks — subtle frame */}
            <line x1="20" y1="20" x2="34" y2="20" stroke="var(--phosphor)" strokeWidth="0.6" />
            <line x1="20" y1="20" x2="20" y2="34" stroke="var(--phosphor)" strokeWidth="0.6" />
            <line x1="420" y1="420" x2="406" y2="420" stroke="var(--phosphor)" strokeWidth="0.6" />
            <line x1="420" y1="420" x2="420" y2="406" stroke="var(--phosphor)" strokeWidth="0.6" />

            {/* Packet trail — dashed, gently curved */}
            <path
              d="M 90 110 Q 260 160 360 340"
              stroke="var(--phosphor)"
              strokeWidth="0.6"
              strokeDasharray="3 6"
              fill="none"
            />

            {/* In-flight packet — solid pip with dashed halo */}
            <circle cx="242" cy="193" r="2.5" fill="var(--phosphor)" />
            <circle cx="242" cy="193" r="7" stroke="var(--phosphor)" strokeWidth="0.5" strokeDasharray="1.5 2.5" />

            {/* Node A — origin (TX) */}
            <circle cx="90" cy="110" r="3" fill="var(--phosphor)" />
            <circle cx="90" cy="110" r="9" stroke="var(--phosphor)" strokeWidth="0.6" />
            <text x="106" y="102" fill="var(--phosphor)" fontSize="7" fontFamily="monospace" letterSpacing="0.15em" opacity="0.75">
              TX
            </text>

            {/* Node B — destination (RX) */}
            <circle cx="360" cy="340" r="3" fill="var(--phosphor)" />
            <circle cx="360" cy="340" r="9" stroke="var(--phosphor)" strokeWidth="0.6" />
            <text x="332" y="360" fill="var(--phosphor)" fontSize="7" fontFamily="monospace" letterSpacing="0.15em" opacity="0.75">
              RX
            </text>
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-24 lg:py-28">
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
