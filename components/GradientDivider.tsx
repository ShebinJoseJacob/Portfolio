"use client";

import { motion } from "framer-motion";

export default function GradientDivider() {
  return (
    <div className="relative h-32 md:h-40 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 opacity-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-blue/5 to-transparent" />
    </div>
  );
}
