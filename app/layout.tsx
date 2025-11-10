import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import fs from "fs";
import path from "path";
import "./globals.css";
import GoogleTagManager, {
  GoogleTagManagerNoScript,
} from "@/components/analytics/gtm";
import GoogleAds from "@/components/analytics/google-ads";
import GoogleAdManager from "@/components/analytics/gam";
import UtmPersister from "@/components/analytics/utm-persister";
import UtmLinkInjector from "@/components/analytics/utm-link-injector";
import UtmMonitor from "@/components/analytics/utm-monitor";
import AdZep from "@/components/analytics/adzep";
import AdZepTest from "@/components/analytics/adzep-test";
import AdZepSPABridge from "@/components/analytics/adzep-spa-bridge";
import AdZepInterstitialBlocker from "@/components/analytics/adzep-interstitial-blocker";
import AdZepAccessibilityFix from "@/components/analytics/adzep-accessibility-fix";
import AnalyticsValidationPanel from "@/components/analytics/validation-panel";
import ResourceHints from "@/components/resource-hints";
import NavigationProvider from "@/components/providers/navigation-provider";
{
  /*import PreloaderProvider from "@/components/providers/preloader-provider";*/
}
import ClientOnly from "@/components/ClientOnly";

// Use Google Fonts Inter - highly readable geometric sans-serif
// Perfect for modern financial content portals with excellent legibility
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
  fallback: [
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
});

// Define base URL for metadata
const baseUrl = "https://kardtrust.com";

// Read critical CSS at build time to inline it
let criticalCSS = "";
try {
  // Read the critical CSS file
  criticalCSS = fs.readFileSync(
    path.join(process.cwd(), "app/critical.css"),
    "utf8",
  );
} catch (e) {
  console.warn("Failed to read critical CSS:", e);
}

// Add viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  // Updated Title and Description for US focus
  title: "KardTrust - Your Guide to US Credit Cards & Loans",
  description:
    "Compare the best US credit cards, loans, and financial solutions with KardTrust. Expert guides and tools tailored for the US market.",
  keywords:
    "credit cards US, personal loans US, compare credit cards, compare loans, financial advice US, KardTrust", // Updated keywords
  // Removed generator tag

  // Canonical URL
  alternates: {
    canonical: baseUrl,
  },

  // Added Open Graph Metadata
  openGraph: {
    title: "KardTrust - Your Guide to US Credit Cards & Loans",
    description:
      "Compare the best US credit cards, loans, and financial solutions with KardTrust.",
    url: baseUrl,
    siteName: "KardTrust",
    images: [
      {
        url: `https://media.topfinanzas.com/images/kardtrust/kardtrust-og-image.webp`, // Using the provided image URL
        width: 900, // Assuming standard OG image width
        height: 600, // Assuming standard OG image height
        alt: "KardTrust - Financial Guides and Solutions", // Updated Alt Text
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Added Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "KardTrust - Your Guide to US Credit Cards & Loans",
    description:
      "Compare the best US credit cards, loans, and financial solutions with KardTrust.",
    // siteId: "[Optional Twitter ID]",
    // creator: "[Optional Twitter Handle]",
    // creatorId: "[Optional Twitter ID]",
    images: [
      `https://media.topfinanzas.com/images/kardtrust/kardtrust-og-image.webp`,
    ], // Using the provided image URL
  },

  // Use simplified favicon configuration
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest", // Use relative path for local manifest

  // Optional: Define metadataBase for resolving relative image URLs
  metadataBase: new URL(baseUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-us">
      <head>
        {/* Inline critical CSS for faster rendering */}
        <style
          dangerouslySetInnerHTML={{
            __html: criticalCSS,
          }}
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta
          httpEquiv="Cache-Control"
          content="public, max-age=31536000, immutable"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Preconnect to media domain to establish early connection */}
        <link
          rel="preconnect"
          href="https://media.topfinanzas.com"
          crossOrigin="anonymous"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "KardTrust",
                url: baseUrl,
                logo: "https://media.topfinanzas.com/images/kardtrust/kardtrust-logo-dark.png",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Calle 50, Edificio BMW",
                  addressLocality: "Esquina con Vía Porras",
                  postalCode: "Panamá",
                  addressCountry: "PA",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+44-20-1234-5678",
                  contactType: "customer support",
                  email: "info@kardtrust.com",
                },
                sameAs: ["https://www.instagram.com/kardtrust/"],
              },
              null,
              2,
            ),
          }}
        />

        <ClientOnly>
          <GoogleTagManager />
          <GoogleAds />
          <GoogleAdManager />
          <AdZep />
        </ClientOnly>

        <ResourceHints />

        {/* Explicit favicon and manifest links with proper MIME types */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
          type="application/manifest+json"
          crossOrigin="anonymous"
        />

        {/* Fallback api routes for browsers that might have issues with static files */}
        <link
          rel="alternate"
          href="/api/webmanifest"
          type="application/manifest+json"
        />
      </head>
      <body className={`${inter.variable} font-sans text-left sm:text-left`}>
        <GoogleTagManagerNoScript />
        {/*<PreloaderProvider
          defaultConfig={{
            duration: 4000,
            primaryColor: "#DC2626",
            secondaryColor: "#2563EB",
            backgroundColor: "#ffffff",
            showLogo: true,
            showProgress: true,
          }}
          showOnNavigation={true}
        >*/}
        <NavigationProvider>
          <Suspense fallback={null}>
            <UtmPersister />
            <UtmLinkInjector />
            <AdZepSPABridge />
            <AdZepInterstitialBlocker />
            <AdZepAccessibilityFix />
            {process.env.NODE_ENV === "development" && <UtmMonitor />}
            {process.env.NODE_ENV === "development" && <AdZepTest />}
            {process.env.NODE_ENV === "development" && (
              <AnalyticsValidationPanel />
            )}
          </Suspense>
          {children}
        </NavigationProvider>
        {/*</PreloaderProvider>*/}
      </body>
    </html>
  );
}
