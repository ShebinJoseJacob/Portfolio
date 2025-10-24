"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "Renesas",
    description: "MCU & Analog Components",
  },
  {
    name: "STMicroelectronics",
    description: "Sensors & MCUs",
  },
  {
    name: "Arduino",
    description: "Development Boards",
  },
  {
    name: "Edge Impulse",
    description: "ML Platform",
  },
  {
    name: "Particle",
    description: "IoT Connectivity",
  },
  {
    name: "NVIDIA",
    description: "AI Acceleration",
  },
  {
    name: "Raspberry Pi",
    description: "Computing Modules",
  },
  {
    name: "Seeed Studio",
    description: "Grove Ecosystem",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 md:py-32 bg-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Partners
          </h2>
          <p className="text-lg text-text-secondary">
            Industry leaders
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="group relative bg-primary-900/50 backdrop-blur-sm border border-primary-700/50 rounded-lg p-6 md:p-8 flex flex-col items-center justify-center aspect-square hover:border-primary-600 hover:bg-primary-900/80 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Partner Name */}
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-bold text-text-secondary group-hover:text-text-primary transition-colors mb-2">
                  {partner.name}
                </h3>
                <p className="text-xs md:text-sm text-text-muted group-hover:text-text-secondary transition-colors">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
