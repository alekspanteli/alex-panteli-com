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
