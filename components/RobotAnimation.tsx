"use client";

import { motion } from "framer-motion";

export default function RobotAnimation() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-primary-900/30 border border-primary-700/50 rounded-lg overflow-hidden relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>

      {/* Robot Container */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Antenna */}
          <motion.div
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-gradient-to-t from-text-muted to-transparent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent-blue rounded-full"
            animate={{
              boxShadow: [
                "0 0 10px rgba(59, 130, 246, 0.5)",
                "0 0 20px rgba(59, 130, 246, 1)",
                "0 0 10px rgba(59, 130, 246, 0.5)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Head */}
          <motion.div
            className="w-24 h-24 bg-gradient-to-br from-accent-blue to-accent-blue-dark rounded-lg mb-2 relative shadow-lg shadow-accent-blue/30"
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Eyes */}
            <motion.div
              className="absolute top-8 left-6 w-3 h-3 bg-white rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute top-8 right-6 w-3 h-3 bg-white rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Mouth */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white/50 rounded-full" />
          </motion.div>

          {/* Body */}
          <div className="w-32 h-40 bg-gradient-to-br from-primary-700 to-primary-900 rounded-lg relative shadow-xl border border-primary-600">
            {/* Chest Panel */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-gradient-to-br from-accent-blue/30 to-accent-blue-dark/30 rounded border border-accent-blue/50">
              {/* Status lights */}
              <motion.div
                className="absolute top-2 left-2 w-2 h-2 bg-accent-blue rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-2 right-2 w-2 h-2 bg-accent-blue rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />

              {/* Center display */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-primary-900/50 rounded flex items-center justify-center">
                <motion.div
                  className="w-6 h-1 bg-accent-blue"
                  animate={{ scaleX: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Arms */}
            <motion.div
              className="absolute -left-6 top-8 w-5 h-20 bg-gradient-to-b from-primary-600 to-primary-800 rounded-full"
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -right-6 top-8 w-5 h-20 bg-gradient-to-b from-primary-600 to-primary-800 rounded-full"
              animate={{ rotate: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Legs */}
          <div className="flex gap-4 mt-2 justify-center">
            <motion.div
              className="w-6 h-16 bg-gradient-to-b from-primary-600 to-primary-800 rounded-full"
              animate={{ scaleY: [1, 0.95, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="w-6 h-16 bg-gradient-to-b from-primary-600 to-primary-800 rounded-full"
              animate={{ scaleY: [1, 0.95, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Feet */}
          <div className="flex gap-4 justify-center -mt-2">
            <div className="w-8 h-3 bg-gradient-to-r from-accent-blue to-accent-blue-dark rounded-full shadow-md shadow-accent-blue/30" />
            <div className="w-8 h-3 bg-gradient-to-r from-accent-blue to-accent-blue-dark rounded-full shadow-md shadow-accent-blue/30" />
          </div>
        </motion.div>

        {/* Interaction hint */}
        <motion.div
          className="text-center mt-8 text-text-muted text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        >
          Autonomous prototype
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <motion.div
        className="absolute top-20 left-20 w-1 h-1 bg-accent-blue rounded-full"
        animate={{
          y: [-20, -100, -20],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 right-16 w-1 h-1 bg-accent-blue rounded-full"
        animate={{
          y: [20, 100, 20],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
    </div>
  );
}
