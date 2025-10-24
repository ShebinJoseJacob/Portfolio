"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Car, Factory, Home, Waves } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Automotive AI Vision System",
    category: "Automotive",
    description: "Real-time object detection and lane tracking system for autonomous vehicles using edge AI",
    challenge: "Processing high-resolution camera feeds in real-time with minimal latency",
    solution: "Custom AI accelerator integration with optimized computer vision models",
    results: ["95% detection accuracy", "< 50ms latency", "40% power reduction"],
    icon: Car,
  },
  {
    id: 2,
    title: "Industrial IoT Monitoring",
    category: "Manufacturing",
    description: "Predictive maintenance system for factory equipment using sensor fusion and ML",
    challenge: "Monitor 200+ sensors across production line with real-time anomaly detection",
    solution: "Distributed edge computing architecture with centralized dashboard",
    results: ["30% reduction in downtime", "500+ sensors monitored", "ROI in 6 months"],
    icon: Factory,
  },
  {
    id: 3,
    title: "Smart Home Energy Management",
    category: "Consumer IoT",
    description: "AI-powered energy optimization system for residential buildings",
    challenge: "Balance energy consumption while maintaining user comfort",
    solution: "Machine learning model for load prediction and automated scheduling",
    results: ["25% energy savings", "Payback in 18 months", "1000+ deployments"],
    icon: Home,
  },
  {
    id: 4,
    title: "Water Quality Monitoring",
    category: "Environmental",
    description: "Real-time water quality monitoring system for municipal water treatment",
    challenge: "Continuous monitoring of multiple parameters in harsh environments",
    solution: "Low-power sensor network with edge analytics and cloud integration",
    results: ["24/7 monitoring", "99.9% uptime", "Early contamination detection"],
    icon: Waves,
  },
];

export default function CaseStudiesPage() {
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
              Case Studies
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Real-world solutions delivering measurable results across industries
            </p>
          </motion.div>

          {/* Case Studies List */}
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="border border-primary-700/50 rounded-lg p-8 bg-primary-900/30 hover:border-primary-600 transition-all"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Left Column - Header */}
                  <div className="md:col-span-1">
                    <div className="w-16 h-16 bg-accent-blue/10 rounded-lg flex items-center justify-center mb-4">
                      <study.icon className="text-accent-blue" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">{study.title}</h3>
                    <span className="text-sm text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full inline-block">
                      {study.category}
                    </span>
                    <p className="text-text-secondary mt-4">{study.description}</p>
                  </div>

                  {/* Middle Column - Challenge & Solution */}
                  <div className="md:col-span-1 space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">
                        Challenge
                      </h4>
                      <p className="text-text-secondary">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">
                        Solution
                      </h4>
                      <p className="text-text-secondary">{study.solution}</p>
                    </div>
                  </div>

                  {/* Right Column - Results */}
                  <div className="md:col-span-1">
                    <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                      Results
                    </h4>
                    <ul className="space-y-3">
                      {study.results.map((result, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-text-primary font-medium"
                        >
                          <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 flex-shrink-0"></span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Let's discuss how we can bring your vision to life
            </p>
            <a
              href="/contact"
              className="inline-block bg-accent-blue hover:bg-accent-blue-light text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-[1.02]"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
