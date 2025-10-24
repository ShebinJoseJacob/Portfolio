"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import dynamic from "next/dynamic";

const SplineScene = dynamic(() => import("@/components/ui/splite"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-accent-blue/20 border-t-accent-blue rounded-full animate-spin"></div>
    </div>
  ),
});

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-950"
    >
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-none tracking-tight"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
            >
              Build. Ship. Scale.
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-text-secondary mb-8"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.4 }}
            >
              IoT & embedded prototyping in weeks
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.6 }}
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-accent-blue hover:bg-accent-blue-light text-white px-10 py-4 rounded-lg text-base font-semibold transition-all hover:scale-[1.02] w-full sm:w-auto"
              >
                Start Project
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="border border-primary-600 hover:border-text-muted text-text-secondary hover:text-text-primary px-10 py-4 rounded-lg text-base font-medium transition-all w-full sm:w-auto"
              >
                View Work
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Robot */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 1, delay: shouldReduceMotion ? 0 : 0.4 }}
            className="w-full h-auto aspect-square order-1 lg:order-2"
          >
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1, delay: shouldReduceMotion ? 0 : 1 }}
      >
        <button
          onClick={() => scrollToSection("services")}
          className="text-text-muted hover:text-text-secondary transition-colors"
          aria-label="Scroll to services"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
