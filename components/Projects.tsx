"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Environmental Monitor",
    description: "Multi-sensor system with real-time analytics.",
    tags: ["Arduino", "Edge ML", "Sensing"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    title: "Vision System",
    description: "AI-powered visual inspection for quality control.",
    tags: ["Computer Vision", "QA", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
  {
    title: "Wireless Logger",
    description: "Battery-powered data acquisition with 2-year life.",
    tags: ["IoT", "Low Power", "LoRaWAN"],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
  },
  {
    title: "Meter Digitizer",
    description: "Computer vision retrofit for legacy analog gauges.",
    tags: ["Retrofit", "Edge AI", "Industrial"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Projects
          </h2>
          <p className="text-lg text-text-secondary">
            Real-world solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-primary-800/50 rounded-lg overflow-hidden border border-primary-700/50 hover:border-primary-600 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.15, margin: "0px 0px -80px 0px" }}
              whileHover={{ y: -4 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-primary-700/30 text-text-muted border border-primary-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-text-primary mb-3 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-4">{project.description}</p>

                {/* Link */}
                <button className="flex items-center gap-2 text-accent-blue hover:gap-3 transition-all">
                  <span>View Case Study</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
