"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Clock } from "lucide-react";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client, urlFor } from "@/lib/sanity";
import { components } from "@/components/PortableTextComponents";
import type { BlogPost as BlogPostType, Category } from "@/types/sanity";

type BlogPost = BlogPostType;

interface RelatedPost {
  title: string;
  slug: { current: string };
  excerpt: string;
  coverImage: BlogPostType['coverImage'];
  publishedAt: string;
  categories?: Array<{ title: string }>;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0] {
          title,
          slug,
          excerpt,
          coverImage,
          author->{
            name,
            image,
            role,
            bio
          },
          categories[]->{
            title,
            slug
          },
          tags,
          content,
          publishedAt
        }`;

        const data = await client.fetch(query, { slug });
        setPost(data);

        // Fetch related posts based on categories
        if (data && data.categories && data.categories.length > 0) {
          const categoryTitles = data.categories.map((c: any) => c.title);
          const relatedQuery = `*[_type == "post" && slug.current != $slug && count((categories[]->title)[@ in $categoryTitles]) > 0] | order(publishedAt desc) [0...3] {
            title,
            slug,
            excerpt,
            coverImage,
            publishedAt,
            categories[]->{
              title
            }
          }`;

          const relatedData = await client.fetch(relatedQuery, { slug, categoryTitles });
          setRelatedPosts(relatedData);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-primary-950 flex items-center justify-center">
        <p className="text-text-secondary text-lg">Loading...</p>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  const coverImageUrl = post.coverImage
    ? urlFor(post.coverImage).width(1920).height(1080).url()
    : "";

  const authorImageUrl = post.author.image
    ? urlFor(post.author.image).width(200).height(200).url()
    : "";

  // Calculate reading time from actual text content, not JSON
  const calculateReadingTime = (content: any[]): number => {
    if (!content || !Array.isArray(content)) return 1;

    let wordCount = 0;
    content.forEach((block: any) => {
      if (block._type === 'block' && block.children) {
        block.children.forEach((child: any) => {
          if (child.text) {
            wordCount += child.text.split(/\s+/).filter((word: string) => word.length > 0).length;
          }
        });
      }
    });

    // Average reading speed: 200 words per minute
    return Math.max(1, Math.ceil(wordCount / 200));
  };

  const readingTime = post.content ? calculateReadingTime(post.content) : 1;

  return (
    <div className="min-h-screen bg-primary-950">
      <Navbar />

      <article className="pt-32 pb-20">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((category, i) => (
                  <span
                    key={i}
                    className="text-sm px-4 py-2 bg-primary-700/30 text-accent-blue border border-primary-700 rounded-full"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-text-secondary mb-8">{post.excerpt}</p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-text-muted">
              <div className="flex items-center gap-2">
                {authorImageUrl && (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={authorImageUrl}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="text-text-primary font-medium">{post.author.name}</p>
                  {post.author.role && (
                    <p className="text-sm text-text-muted">{post.author.role}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{readingTime} min read</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cover Image */}
        {coverImageUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
          >
            <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-primary-700/30 shadow-lg">
              <Image
                src={coverImageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </motion.div>
        )}

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <PortableText value={post.content} components={components} />
            </div>
          </motion.div>

          {/* Info Sections */}
          <div className="space-y-6 mb-12">
            {/* Tags Section */}
            {post.tags && post.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-primary-900/50 border border-primary-700/30 rounded-lg p-6"
              >
                <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1.5 bg-primary-800 text-text-secondary border border-primary-600/50 rounded hover:border-accent-blue/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Author Bio Section */}
            {post.author.bio && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-primary-900/50 border border-primary-700/30 rounded-lg p-6"
              >
                <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                  About the Author
                </h3>
                <div className="flex gap-4">
                  {authorImageUrl && (
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-700/50">
                      <Image
                        src={authorImageUrl}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-text-primary font-semibold mb-1">
                      {post.author.name}
                    </p>
                    {post.author.role && (
                      <p className="text-accent-blue text-sm mb-2">{post.author.role}</p>
                    )}
                    <p className="text-text-secondary text-sm leading-relaxed">{post.author.bio}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </article>

      {/* Related Posts Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary-900/20 border-t border-primary-700/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
              Related Projects
            </h2>
            <p className="text-text-muted text-sm">
              More projects you might find interesting
            </p>
          </motion.div>

          {relatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => {
                const relatedImageUrl = relatedPost.coverImage
                  ? urlFor(relatedPost.coverImage).width(600).height(400).url()
                  : "";

                return (
                  <motion.article
                    key={relatedPost.slug.current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-primary-900/40 border border-primary-700/30 rounded-lg overflow-hidden hover:border-accent-blue/50 transition-all"
                  >
                    <Link href={`/blog/${relatedPost.slug.current}`}>
                      {/* Image */}
                      {relatedImageUrl && (
                        <div className="relative h-40 overflow-hidden bg-primary-800">
                          <Image
                            src={relatedImageUrl}
                            alt={relatedPost.title}
                            fill
                            className="object-cover group-hover:opacity-90 transition-opacity"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-5">
                        {/* Categories */}
                        {relatedPost.categories && relatedPost.categories.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {relatedPost.categories.slice(0, 2).map((cat, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-0.5 bg-accent-blue/10 text-accent-blue border border-accent-blue/20 rounded"
                              >
                                {cat.title}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-accent-blue transition-colors">
                          {relatedPost.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-text-secondary text-sm mb-3 line-clamp-2 leading-relaxed">
                          {relatedPost.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center gap-1.5 text-xs text-text-muted">
                          <Calendar size={12} />
                          <time dateTime={relatedPost.publishedAt}>
                            {new Date(relatedPost.publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8 bg-primary-900/30 border border-primary-700/20 rounded-lg">
              <p className="text-text-muted">
                No related projects yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
