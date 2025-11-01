import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT & Embedded Systems Blog | Technical Tutorials & Insights",
  description: "Expert articles, tutorials, and guides on embedded systems, IoT security, rapid prototyping, edge AI development, MCU selection, and wireless protocols. Stay updated with the latest in hardware innovation.",
  keywords: [
    "IoT blog",
    "embedded systems tutorials",
    "edge AI articles",
    "IoT security",
    "hardware prototyping guides",
    "MCU tutorials",
    "wireless protocols",
    "firmware development",
  ],
  openGraph: {
    title: "IoT & Embedded Systems Blog | Coders Cafe",
    description: "Technical articles, tutorials, and guides on embedded systems, IoT security, rapid prototyping, and edge AI development.",
    url: "https://coderscafetech.com/blog",
    type: "website",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Coders Cafe Blog - IoT & Embedded Systems Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IoT & Embedded Systems Blog | Coders Cafe",
    description: "Expert articles and tutorials on embedded systems, IoT, and edge AI development.",
    images: ["/twitter-blog.jpg"],
  },
  alternates: {
    canonical: "https://coderscafetech.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
