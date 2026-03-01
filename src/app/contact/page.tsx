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
        <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's build something great together"
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </PageTransition>
  );
}
