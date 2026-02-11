import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Sora } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { NavigationProgress } from "@/components/layout/navigation-progress";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s — ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Alex Panteli — Senior Frontend Developer | React & Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/twitter-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} ${sora.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Suspense fallback={null}>
            <NavigationProgress />
          </Suspense>
          <div className="relative min-h-svh">
            <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(15,23,42,0.05)_0,rgba(15,23,42,0.05)_1px,transparent_1px,transparent_10px)] dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_12px)] opacity-60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--background)_75%)]" />
            <div className="relative z-10 flex min-h-svh flex-col">
              <Navbar />
              <main className="flex flex-1 flex-col">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
