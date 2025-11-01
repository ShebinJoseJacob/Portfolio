import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT Products & Solutions | Coders Cafe Hardware & Firmware",
  description: "Production-ready IoT and embedded solutions including Edge Gateway, Smart Sensor Node, AI Vision Module, and Secure MCU Board. Custom hardware and firmware development for rapid deployment.",
  keywords: [
    "IoT products",
    "edge gateway",
    "smart sensor node",
    "AI vision module",
    "secure MCU",
    "embedded hardware",
    "IoT solutions",
    "edge computing devices",
  ],
  openGraph: {
    title: "IoT Products & Solutions | Coders Cafe",
    description: "Production-ready hardware and software solutions: IoT Edge Gateway, Smart Sensor Node, AI Vision Module, and Secure MCU Board for rapid deployment.",
    url: "https://coderscafetech.com/products",
    type: "website",
    images: [
      {
        url: "/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "Coders Cafe IoT Products - Hardware & Firmware Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IoT Products & Solutions | Coders Cafe",
    description: "Production-ready IoT and embedded solutions for rapid deployment.",
    images: ["/twitter-products.jpg"],
  },
  alternates: {
    canonical: "https://coderscafetech.com/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
