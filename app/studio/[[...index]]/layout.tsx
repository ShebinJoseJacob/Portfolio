import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanity Studio | Coders Cafe Blog CMS",
  description: "Content management system for Coders Cafe blog",
  robots: {
    index: false, // Don't index the CMS
    follow: false,
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
