"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "TrunkLink: Edge AIoT for Elephant Safety",
    description: "Smart collars with GPS tracking and geofencing for peaceful coexistence.",
    tags: ["Edge AI", "IoT", "Wildlife"],
    image: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?w=800&h=600&q=85&fm=webp&fit=crop",
    alt: "Elephant with IoT tracking collar for wildlife conservation",
    link: "https://www.hackster.io/coderscafe/trunklink-edge-aiot-for-peaceful-human-elephant-coexistence-fdd299",
  },
  {
    title: "Emo - Personal Companion Robot",
    description: "DIY companion robot with emotions, servo movements, and sensors.",
    tags: ["Robotics", "AI", "IoT"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&q=85&fm=webp&fit=crop",
    alt: "Friendly companion robot with expressive display",
    link: "https://www.hackster.io/coderscafe/emo-your-personal-companion-robot-dc8afe",
  },
  {
    title: "Modular IoT Kit",
    description: "Affordable smart home solution with drag-and-drop dashboard for monitoring and control.",
    tags: ["IoT", "Smart Home", "Automation"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&q=85&fm=webp&fit=crop",
    alt: "Modular IoT smart home automation kit with sensors and dashboard",
    link: "https://www.hackster.io/coderscafe/modular-iot-kit-5b1a39",
  },
  {
    title: "Fall Detection for Industrial Workers",
    description: "Computer vision system detecting worker falls in real-time with 98% accuracy.",
    tags: ["Computer Vision", "AI", "Safety"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&q=85&fm=webp&fit=crop",
    alt: "Industrial worker safety monitoring system",
    link: "https://www.hackster.io/coderscafe/fall-detection-using-computer-vision-for-industrial-workers-b3a420",
  },
  {
    title: "Smart Pill Dispenser",
    description: "Automated medication system with web app for dispensing reminders.",
    tags: ["IoT", "Healthcare", "Automation"],
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&h=600&q=85&fm=webp&fit=crop",
    alt: "Smart automated pill dispenser for medication management",
    link: "https://www.hackster.io/coderscafe/smart-pill-dispenser-ebbb16",
  },
  {
    title: "Automated Label Inspection with FOMO",
    description: "ML-powered defect detection for manufacturing with 97% accuracy.",
    tags: ["Edge AI", "Computer Vision", "Manufacturing"],
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&q=85&fm=webp&fit=crop",
    alt: "Automated quality control label inspection system",
    link: "https://www.hackster.io/coderscafe/automated-label-inspection-with-fomo-320a69",
  },
  {
    title: "Predictive Maintenance with Sound",
    description: "Acoustic anomaly detection for machinery with 94.7% accuracy on Arduino.",
    tags: ["Edge AI", "IoT", "Industrial"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&q=85&fm=webp&fit=crop",
    alt: "Industrial machinery predictive maintenance system",
    link: "https://www.hackster.io/coderscafe/predictive-maintenance-with-sound-92e912",
  },
  {
    title: "Automated Inventory Management",
    description: "Computer vision for real-time shelf monitoring and automatic stock alerts.",
    tags: ["Computer Vision", "AI", "Retail"],
    image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=800&h=600&q=85&fm=webp&fit=crop",
    alt: "Automated retail inventory management with computer vision",
    link: "https://www.hackster.io/coderscafe/automated-inventory-management-with-fomo-10a8f0",
  },
  {
    title: "Shrimp Monitoring Buoy",
    description: "Affordable aquaculture intelligence with IoT sensors from pond to cloud.",
    tags: ["IoT", "Agriculture", "Monitoring"],
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&h=600&q=85&fm=webp&fit=crop",
    alt: "IoT buoy for shrimp farm monitoring",
    link: "https://www.hackster.io/coderscafe/shrimp-monitoring-buoy-with-particle-b-som-e604e1",
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
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Projects
          </h2>
          <p className="text-lg text-text-secondary">
            Real-world solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-primary-800/50 rounded-lg overflow-hidden border border-primary-700/50 hover:border-primary-600 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={85}
                  loading="lazy"
                />
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent-blue hover:gap-3 transition-all"
                >
                  <span>View on Hackster.io</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
