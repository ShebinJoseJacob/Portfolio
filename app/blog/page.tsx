"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { client } from "@/lib/sanity";
import { useEffect, useState } from "react";
import type { BlogPost } from "@/types/sanity";

type Post = Pick<BlogPost, 'title' | 'slug' | 'excerpt' | 'coverImage' | 'author' | 'publishedAt' | 'categories'>;

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          title,
          slug,
          excerpt,
          coverImage,
          author->{
            name,
            image
          },
          categories[]->{
            title
          },
          publishedAt
        }`;

        const data = await client.fetch(query);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-primary-950">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
              Blog
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Technical insights, tutorials, and stories from the world of IoT, Edge AI, and embedded systems
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          {loading ? (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg">Loading posts...</p>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <BlogCard key={post.slug.current} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg mb-4">No blog posts yet.</p>
              <p className="text-text-muted">Check back soon for technical content and insights!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
