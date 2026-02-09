import type { Metadata } from "next";
import { PageTransition } from "@/components/shared/page-transition";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Alex Panteli for frontend development projects, collaborations, or opportunities.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl space-y-16 px-4 py-20">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'd love to hear from you"
        />
        <ContactInfo />
        <ContactForm />
      </div>
    </PageTransition>
  );
}
