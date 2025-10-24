"use client";

import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Contact",
    description: "Share your idea. 24h response.",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Quote",
    description: "Technical assessment & timeline.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Build",
    description: "Rapid iterations with regular updates.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Deliver",
    description: "Working prototype with full documentation.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Process
          </h2>
          <p className="text-lg text-text-secondary">
            Idea to prototype in 4 steps
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-primary-700/30"></div>

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* Number Badge */}
                  <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-primary-700 rounded-full flex items-center justify-center text-text-primary text-xl font-bold">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary-800 border border-primary-700 rounded-full flex items-center justify-center">
                    <step.icon className="text-text-muted" size={24} />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Left Side - Number and Line */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-primary-700 rounded-full flex items-center justify-center text-text-primary text-lg font-bold flex-shrink-0">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-grow bg-primary-700/30 mt-2"></div>
                )}
              </div>

              {/* Right Side - Content */}
              <div className="flex-grow pb-8">
                <div className="w-10 h-10 mb-3 bg-primary-800 border border-primary-700 rounded-full flex items-center justify-center">
                  <step.icon className="text-text-muted" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
