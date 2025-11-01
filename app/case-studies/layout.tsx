import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT Case Studies | Real-World Solutions by Coders Cafe",
  description: "Explore successful IoT and embedded systems implementations: automotive AI vision systems, industrial monitoring, smart home energy management, and water quality monitoring. Real results from real projects.",
  keywords: [
    "IoT case studies",
    "automotive AI vision",
    "industrial IoT monitoring",
    "smart home energy management",
    "water quality monitoring",
    "embedded systems projects",
    "IoT success stories",
    "hardware prototyping examples",
  ],
  openGraph: {
    title: "IoT Case Studies | Real-World Solutions by Coders Cafe",
    description: "Successful IoT implementations: automotive AI vision, industrial monitoring, smart home energy management, and water quality monitoring systems.",
    url: "https://coderscafetech.com/case-studies",
    type: "website",
    images: [
      {
        url: "/og-case-studies.jpg",
        width: 1200,
        height: 630,
        alt: "Coders Cafe Case Studies - Real IoT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IoT Case Studies | Real-World Solutions",
    description: "Explore successful IoT and embedded systems implementations with measurable results.",
    images: ["/twitter-case-studies.jpg"],
  },
  alternates: {
    canonical: "https://coderscafetech.com/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
