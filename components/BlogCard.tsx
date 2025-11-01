"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";
import { urlFor } from "@/lib/sanity";
import type { BlogPost } from "@/types/sanity";

interface BlogCardProps {
  post: Pick<BlogPost, 'title' | 'slug' | 'excerpt' | 'coverImage' | 'author' | 'publishedAt' | 'categories'>;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const imageUrl = post.coverImage
    ? urlFor(post.coverImage).width(800).height(600).url()
    : "";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative bg-primary-800/50 rounded-lg overflow-hidden border border-primary-700/50 hover:border-primary-600 transition-all duration-300"
    >
      <Link href={`/blog/${post.slug.current}`}>
        {/* Cover Image */}
        <div className="relative h-64 overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-primary-700 flex items-center justify-center">
              <span className="text-text-muted">No image</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        </div>

        {/* Content */}
        <div className="relative p-6">
          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories.slice(0, 2).map((category, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-primary-700/30 text-text-muted border border-primary-700 rounded-full"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="text-2xl font-semibold text-text-primary mb-3 line-clamp-2 transition-colors group-hover:text-accent-blue">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-text-secondary mb-4 line-clamp-2">{post.excerpt}</p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-text-muted">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
