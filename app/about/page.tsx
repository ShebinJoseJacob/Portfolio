"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary-950">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
              About Coders Cafe
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Leading the way in embedded innovation and rapid prototyping
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-3 gap-12"
          >
            {/* Mission */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="text-accent-blue" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Our Mission</h3>
              <p className="text-text-secondary">
                Transform ideas into working prototypes with cutting-edge IoT and embedded systems solutions
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="text-accent-blue" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Our Vision</h3>
              <p className="text-text-secondary">
                Empower businesses to innovate faster with rapid prototyping in weeks, not months
              </p>
            </div>

            {/* Team */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-blue/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="text-accent-blue" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">Our Team</h3>
              <p className="text-text-secondary">
                Expert engineers specialized in firmware, hardware, and edge AI solutions
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-text-primary mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-text-secondary text-lg">
              <p>
                Founded with a passion for innovation, Coders Cafe specializes in custom electronics development with a strong focus on edge AI for automation and robotics solutions.
              </p>
              <p>
                We partner with startups and enterprises to bring cutting-edge embedded systems to life, from initial concept to production-ready prototypes.
              </p>
              <p>
                Our expertise spans MCU, MPU, and AI accelerators for next-generation applications, helping clients stay ahead in the rapidly evolving tech landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-primary-700/50 rounded-lg p-6 bg-primary-800/30">
                <h3 className="text-xl font-bold text-text-primary mb-3">Innovation First</h3>
                <p className="text-text-secondary">
                  We push boundaries and embrace new technologies to deliver state-of-the-art solutions.
                </p>
              </div>
              <div className="border border-primary-700/50 rounded-lg p-6 bg-primary-800/30">
                <h3 className="text-xl font-bold text-text-primary mb-3">Quality & Precision</h3>
                <p className="text-text-secondary">
                  Every prototype is built with meticulous attention to detail and rigorous testing.
                </p>
              </div>
              <div className="border border-primary-700/50 rounded-lg p-6 bg-primary-800/30">
                <h3 className="text-xl font-bold text-text-primary mb-3">Client Partnership</h3>
                <p className="text-text-secondary">
                  We work closely with clients, ensuring alignment from concept to delivery.
                </p>
              </div>
              <div className="border border-primary-700/50 rounded-lg p-6 bg-primary-800/30">
                <h3 className="text-xl font-bold text-text-primary mb-3">Speed to Market</h3>
                <p className="text-text-secondary">
                  Rapid iteration and agile development get your products to market faster.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
