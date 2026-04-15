import type { Metadata } from "next";
import { ViewTransition, Suspense } from "react";
import { IBM_Plex_Sans, Fira_Code } from "next/font/google";
import { MotionConfig } from "motion/react";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { NavigationProgress } from "@/components/layout/navigation-progress";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CookieConsent } from "@/components/shared/cookie-consent";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const ibm = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s - ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  icons: {
    icon: [
      {
        url: "/icon-light.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
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
        className={`${ibm.variable} ${firaCode.variable} font-sans antialiased`}
      >
        <MotionConfig reducedMotion="user">
        <ThemeProvider>
          <div className="relative min-h-svh">
            {/* Vertical scan columns — frequency grid */}
            <div className="scanlines pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
            <div className="relative z-10 flex min-h-svh flex-col">
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                Skip to content
              </a>
              <Suspense fallback={null}>
                <NavigationProgress />
              </Suspense>
              <Navbar />
              <main id="main-content" className="flex flex-1 flex-col">
                <ViewTransition>{children}</ViewTransition>
              </main>
              <Footer />
            </div>
          </div>
          <CookieConsent />
        </ThemeProvider>
        </MotionConfig>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
