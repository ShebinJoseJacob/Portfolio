"use client";

import { motion } from "framer-motion";
import { Cpu, Code, Cloud, Brain, CircuitBoard, TestTube } from "lucide-react";

const services = [
  {
    icon: CircuitBoard,
    title: "Hardware Prototyping",
    description: "From breadboard to custom PCB designs",
  },
  {
    icon: Code,
    title: "Firmware Development",
    description: "Embedded software for MCU, MPU, and FPGA",
  },
  {
    icon: Cloud,
    title: "IoT Integration",
    description: "Connect your devices from edge to cloud",
  },
  {
    icon: Brain,
    title: "ML/AI on Edge",
    description: "Deploy intelligent models on resource-constrained devices",
  },
  {
    icon: Cpu,
    title: "PCB Design & Manufacturing",
    description: "Professional board layouts and assembly services",
  },
  {
    icon: TestTube,
    title: "Product Testing & Validation",
    description: "Comprehensive testing and certification support",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Services
          </h2>
          <p className="text-lg text-text-secondary">
            Full-stack prototyping
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -4 }}
              className="group relative bg-primary-800/30 border border-primary-700 rounded-lg p-8 transition-all hover:border-primary-600"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary-700/50 rounded-lg flex items-center justify-center">
                  <service.icon className="text-text-muted" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
