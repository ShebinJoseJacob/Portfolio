import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import { OrganizationSchema, WebsiteSchema, ServiceSchema, FAQSchema } from "@/components/StructuredData";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  adjustFontFallback: true, // Reduces Cumulative Layout Shift (CLS)
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "Coders Cafe | Rapid Prototyping & Embedded Systems Experts",
    template: "%s | Coders Cafe",
  },
  description:
    "Expert rapid prototyping services for IoT, embedded systems, and edge computing. Transform your ideas into working prototypes in weeks, not months. Hardware development, firmware, PCB design, and ML on edge.",
  keywords: [
    "rapid prototyping",
    "embedded systems",
    "IoT development",
    "hardware prototyping",
    "firmware development",
    "PCB design",
    "edge computing",
    "machine learning on edge",
    "IoT consulting",
    "hardware development services",
    "prototype development",
    "embedded software",
    "IoT solutions",
    "electronics prototyping",
  ],
  authors: [{ name: "Coders Cafe", url: "https://coderscafetech.com" }],
  creator: "Coders Cafe",
  publisher: "Coders Cafe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coderscafetech.com",
    title: "Coders Cafe | Rapid Prototyping & Embedded Systems Experts",
    description: "Expert rapid prototyping services for IoT, embedded systems, and edge computing. Transform your ideas into working prototypes in weeks.",
    siteName: "Coders Cafe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Coders Cafe - Rapid Prototyping Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coders Cafe | Rapid Prototyping & Embedded Systems Experts",
    description: "Expert rapid prototyping services for IoT, embedded systems, and edge computing. Transform your ideas into working prototypes in weeks.",
    site: "@coderscafetech",
    creator: "@coderscafetech",
    images: ["/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://coderscafetech.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable} data-scroll-behavior="smooth">
      <head>
        {/* Preconnect to Spline CDN for faster 3D scene loading */}
        <link rel="preconnect" href="https://prod.spline.design" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <OrganizationSchema />
        <WebsiteSchema />
        <ServiceSchema />
        <FAQSchema />
      </head>
      <body className="antialiased">
        {children}
        {/* Google Analytics - only load in production */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
