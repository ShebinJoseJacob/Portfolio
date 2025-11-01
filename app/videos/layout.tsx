import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Videos | Coders Cafe - IoT, Edge AI & Hardware Tutorials",
  description: "Watch our technical video content covering IoT development, Edge AI, hardware prototyping, PCB design, and embedded systems tutorials.",
  keywords: [
    "IoT tutorials",
    "Edge AI videos",
    "hardware prototyping",
    "Arduino tutorials",
    "ESP32 tutorials",
    "PCB design",
    "embedded systems",
    "technical content",
    "Coders Cafe",
    "YouTube channel",
  ],
  openGraph: {
    title: "Technical Videos | Coders Cafe",
    description: "Watch our technical video content covering IoT development, Edge AI, and hardware prototyping.",
    type: "website",
  },
};

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
