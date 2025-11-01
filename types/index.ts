import { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  icon: LucideIcon;
}

export interface CaseStudy {
  id: number;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  icon: LucideIcon;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export interface Partner {
  name: string;
  logo?: string;
}

export interface NavLink {
  name: string;
  href: string;
  type: 'link' | 'scroll';
}

export interface FormData {
  name: string;
  email: string;
  company?: string;
  project: string;
  budget: string;
  timeline: string;
}

export type SubmitStatus = 'success' | 'error' | null;

export interface Video {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  thumbnail?: string;
  category: string;
  views?: string;
  duration?: string;
}
