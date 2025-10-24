"use client";

import { motion } from "framer-motion";
import { Zap, Award, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    stat: "2-8 Weeks",
    title: "Fast",
    description: "Concept to working prototype.",
  },
  {
    icon: Award,
    stat: "10+ Years",
    title: "Experienced",
    description: "Deep expertise in embedded systems.",
  },
  {
    icon: Layers,
    stat: "Full Stack",
    title: "End-to-End",
    description: "Hardware to software to documentation.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Why Us
          </h2>
          <p className="text-lg text-text-secondary">
            Trusted by enterprises & startups
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-primary-800/50 border border-primary-700/50 rounded-lg p-8 hover:border-primary-600 hover:bg-primary-800/80 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary-700/30 border border-primary-700 rounded-lg flex items-center justify-center group-hover:bg-primary-700/50 transition-all">
                  <feature.icon className="text-text-muted" size={32} />
                </div>
              </div>

              {/* Stat */}
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-text-primary">
                  {feature.stat}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-text-primary mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
