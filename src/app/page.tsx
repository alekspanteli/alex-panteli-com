import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
};

export default function HomePage() {
  return <HeroSection />;
}
