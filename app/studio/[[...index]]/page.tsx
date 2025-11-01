"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import "../layout.css";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
