import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Coders Cafe | Rapid Prototyping & Embedded Systems",
  description:
    "Expert rapid prototyping services for IoT, embedded systems, and edge computing. Transform your ideas into working prototypes in weeks, not months.",
  keywords: [
    "rapid prototyping",
    "embedded systems",
    "IoT",
    "hardware development",
    "firmware development",
    "PCB design",
    "edge computing",
    "ML on edge",
  ],
  authors: [{ name: "Coders Cafe" }],
  creator: "Coders Cafe",
  publisher: "Coders Cafe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coderscafe.com",
    title: "Coders Cafe | Rapid Prototyping Services",
    description: "Transform your ideas into working prototypes",
    siteName: "Coders Cafe",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coders Cafe | Rapid Prototyping Services",
    description: "Transform your ideas into working prototypes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
