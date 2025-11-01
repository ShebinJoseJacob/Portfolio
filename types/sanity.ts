import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

/**
 * Common Sanity types used across the application
 */

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface Author {
  name: string;
  image?: SanityImage;
  role?: string;
  bio?: string;
}

export interface Category {
  title: string;
  slug: {
    current: string;
  };
}

export interface BlogPost {
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  coverImage: SanityImage;
  author: Author;
  publishedAt: string;
  categories?: Category[];
  tags?: string[];
  content?: any[]; // Portable Text content array
}
