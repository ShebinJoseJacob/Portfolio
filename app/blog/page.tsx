"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Code, Lightbulb, Wrench } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Edge AI on Embedded Systems",
    category: "Tutorial",
    date: "2024-10-20",
    readTime: "8 min read",
    description: "Learn how to deploy machine learning models on resource-constrained devices for real-time inference",
    icon: Code,
  },
  {
    id: 2,
    title: "IoT Security Best Practices for 2024",
    category: "Security",
    date: "2024-10-15",
    readTime: "6 min read",
    description: "Essential security measures to protect your IoT deployments from emerging threats",
    icon: Wrench,
  },
  {
    id: 3,
    title: "Rapid Prototyping Strategies for Hardware Startups",
    category: "Guide",
    date: "2024-10-10",
    readTime: "10 min read",
    description: "From concept to prototype: A comprehensive guide to accelerating your hardware development",
    icon: Lightbulb,
  },
  {
    id: 4,
    title: "Low-Power Design Techniques for Battery-Operated Devices",
    category: "Technical",
    date: "2024-10-05",
    readTime: "12 min read",
    description: "Optimize power consumption in embedded systems to extend battery life by months",
    icon: BookOpen,
  },
  {
    id: 5,
    title: "Choosing the Right MCU for Your Project",
    category: "Guide",
    date: "2024-09-28",
    readTime: "7 min read",
    description: "A practical comparison of popular microcontrollers and how to select the best fit",
    icon: Code,
  },
  {
    id: 6,
    title: "Wireless Communication Protocols Compared",
    category: "Technical",
    date: "2024-09-20",
    readTime: "9 min read",
    description: "WiFi, BLE, LoRa, Zigbee: Understanding the trade-offs for IoT applications",
    icon: Wrench,
  },
];

export default function BlogPage() {
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
              Blog & Resources
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Technical insights, tutorials, and guides for embedded systems development
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="border border-primary-700/50 rounded-lg p-6 bg-primary-900/30 hover:border-primary-600 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-blue/20 transition-colors">
                  <post.icon className="text-accent-blue" size={24} />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-accent-blue bg-accent-blue/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-text-muted">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-blue transition-colors">
                  {post.title}
                </h3>

                <p className="text-text-secondary text-sm mb-4">{post.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-primary-700/50">
                  <time className="text-xs text-text-muted">{post.date}</time>
                  <span className="text-accent-blue text-sm font-medium group-hover:translate-x-1 transition-transform inline-block">
                    Read More →
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Get the latest articles and resources delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-primary-800 border border-primary-700 rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors"
              />
              <button className="bg-accent-blue hover:bg-accent-blue-light text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-[1.02] whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
