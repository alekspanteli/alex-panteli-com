import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { SelectedWork } from "@/components/home/selected-work";
import { SITE_CONFIG } from "@/lib/constants";
import { cvData } from "@/data/cv-data";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection personal={cvData.personal} currently={cvData.currently} />
      <SelectedWork />
    </>
  );
}
