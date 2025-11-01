import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Coders Cafe | Expert IoT & Embedded Systems Team",
  description: "Learn about Coders Cafe's mission to transform ideas into working prototypes with cutting-edge IoT, embedded systems, and edge AI solutions. 5+ years of expertise in rapid prototyping.",
  keywords: [
    "about coders cafe",
    "embedded systems team",
    "IoT experts",
    "firmware engineers",
    "hardware prototyping company",
    "edge AI team",
  ],
  openGraph: {
    title: "About Coders Cafe | Expert IoT & Embedded Systems Team",
    description: "Expert engineers specialized in firmware, hardware, and edge AI solutions with 5+ years of experience in rapid prototyping.",
    url: "https://coderscafetech.com/about",
    type: "website",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Coders Cafe Team - IoT & Embedded Systems Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Coders Cafe | Expert IoT & Embedded Systems Team",
    description: "Expert engineers specialized in firmware, hardware, and edge AI solutions for rapid prototyping.",
    images: ["/twitter-about.jpg"],
  },
  alternates: {
    canonical: "https://coderscafetech.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
