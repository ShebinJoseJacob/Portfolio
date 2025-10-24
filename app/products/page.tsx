"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cpu, Microchip, Zap, Shield } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "IoT Edge Gateway",
    category: "Hardware",
    description: "Industrial-grade edge computing gateway with AI acceleration for real-time processing",
    features: ["Multi-protocol support", "Edge AI ready", "Industrial temperature range"],
    icon: Cpu,
  },
  {
    id: 2,
    name: "Smart Sensor Node",
    category: "Hardware",
    description: "Low-power wireless sensor platform for environmental monitoring and automation",
    features: ["Ultra-low power", "Wireless mesh networking", "Battery operated"],
    icon: Microchip,
  },
  {
    id: 3,
    name: "AI Vision Module",
    category: "AI Solution",
    description: "Compact vision processing module with on-device machine learning capabilities",
    features: ["Real-time inference", "Privacy-first", "Multiple camera support"],
    icon: Zap,
  },
  {
    id: 4,
    name: "Secure MCU Board",
    category: "Hardware",
    description: "Security-focused microcontroller development board for critical applications",
    features: ["Hardware encryption", "Secure boot", "Tamper detection"],
    icon: Shield,
  },
];

export default function ProductsPage() {
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
              Our Products
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Production-ready hardware and software solutions for rapid deployment
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="border border-primary-700/50 rounded-lg p-8 bg-primary-900/30 hover:border-primary-600 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent-blue/20 transition-colors">
                    <product.icon className="text-accent-blue" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold text-text-primary">{product.name}</h3>
                      <span className="text-xs text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-text-secondary mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-text-muted text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent-blue rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="text-accent-blue hover:text-accent-blue-light transition-colors text-sm font-medium"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              We design and build custom hardware and software tailored to your specific needs
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent-blue hover:bg-accent-blue-light text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-[1.02]"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
