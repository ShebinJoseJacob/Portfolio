"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Video } from "@/types";

const videos: Video[] = [
  {
    id: 1,
    title: "Build Your Own Personal AI Companion Robot",
    description: "Create a Pomodoro productivity bot with AI and voice interaction using Raspberry Pi 5 and local language models.",
    youtubeId: "PwDoYDCD_g0",
    category: "AI/Robotics",
  },
  {
    id: 2,
    title: "Arduino Plug And Make Kit: The Game Changer For IoT?",
    description: "Build functional IoT projects without soldering or breadboards. Chainable Modulinos sensors make prototyping simple and fast.",
    youtubeId: "XFPbzT6VMU4",
    category: "IoT/Hardware",
  },
  {
    id: 3,
    title: "AI Stethoscope For Cardiac Health Diagnostics",
    description: "ML-powered cardiac diagnostics detecting 5 heart conditions with 93% accuracy using Raspberry Pi and TensorFlow.",
    youtubeId: "4-4FmyaZFuY",
    category: "Healthcare/AI",
  },
  {
    id: 4,
    title: "Sign Language Translator Using AI and Computer Vision",
    description: "AI-powered wearable device that translates hand gestures into spoken words in real-time using Raspberry Pi Zero 2W and VIAM.",
    youtubeId: "ByrtJx1cG8o",
    category: "AI/Accessibility",
  },
  {
    id: 5,
    title: "Modular IoT Kit for Complete Smart Home Automation",
    description: "Affordable smart home solution with modular sensors and customizable dashboard. BLE connectivity and MQTT cloud integration.",
    youtubeId: "vn4FT4M9Qqg",
    category: "IoT/Smart Home",
  },
  {
    id: 6,
    title: "Emo - Your Personal Companion Robot With Emotions",
    description: "DIY companion robot with animated display, servo movements, and touch sensors. Features emotion-based animations and multi-sensory interactions.",
    youtubeId: "3RIea8zPLhQ",
    category: "Robotics",
  },
];

export default function Videos() {
  return (
    <section id="videos" className="py-20 md:py-32 bg-primary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Technical Content
          </h2>
          <p className="text-lg text-text-secondary">
            Video tutorials and demos from our projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="group relative bg-primary-800/50 rounded-lg overflow-hidden border border-primary-700/50 hover:border-primary-600 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Video Thumbnail */}
              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video bg-primary-900 overflow-hidden"
              >
                <div
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg)`,
                    backgroundSize: video.youtubeId === 'PwDoYDCD_g0' ? '107%' : '100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>

                {/* Play Button Overlay - Only on Hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-accent-blue backdrop-blur-md">
                    <Play size={28} className="text-white ml-0.5" />
                  </div>
                </div>

                {/* Duration Overlay */}
                {video.duration && (
                  <div className="absolute bottom-3 right-3 bg-primary-950/90 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-medium">
                    {video.duration}
                  </div>
                )}
              </a>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                  <span className="text-xs px-3 py-1 bg-primary-700/30 text-accent-blue border border-primary-700 rounded-full">
                    {video.category}
                  </span>
                </div>

                {/* Title - Max 2 lines */}
                <h3 className="text-xl font-semibold text-text-primary mb-3 line-clamp-2 transition-colors">
                  {video.title}
                </h3>

                {/* Description - Max 2 lines */}
                <p className="text-text-secondary text-sm line-clamp-2">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://www.youtube.com/@CodersCafeTech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-blue hover:bg-accent-blue/90 text-white rounded-lg transition-all hover:gap-3"
          >
            <Play size={20} />
            <span>View All Videos on YouTube</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
