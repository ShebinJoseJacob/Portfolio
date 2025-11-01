"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Arduino",
    logo: "/partners/arduino-logo.svg",
    website: "https://www.arduino.cc/",
    showName: true,
    scale: 1.35,
  },
  {
    name: "Edge Impulse",
    logo: "/partners/edge-impulse-logo.svg",
    website: "https://www.edgeimpulse.com/",
    showName: true,
    scale: 0.75,
  },
  {
    name: "Particle",
    logo: "/partners/particle-logo.svg",
    website: "https://www.particle.io/",
    showName: true,
    scale: 1.15,
  },
  {
    name: "Viam Robotics",
    logo: "/partners/viam-logo.svg",
    website: "https://www.viam.com/",
    showName: true,
    scale: 1.3,
  },
  {
    name: "Blues",
    logo: "/partners/blues-logo.svg",
    website: "https://blues.com/",
    showName: true,
    scale: 1.15,
  },
  {
    name: "Hackster.io",
    logo: "/partners/hackster-logo.svg",
    website: "https://www.hackster.io/",
    showName: true,
    scale: 1.3,
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
          className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-primary-900/50 backdrop-blur-sm border border-primary-700/50 rounded-lg p-8 flex flex-col items-center justify-center hover:border-primary-600 hover:bg-primary-900/80 transition-all duration-300 min-h-[180px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
              style={{ willChange: 'transform, opacity' }}
              aria-label={`Visit ${partner.name} website`}
            >
              {/* Partner Logo */}
              <div className="relative flex items-center justify-center w-full" style={{
                height: '80px',
                marginBottom: partner.name === "Viam Robotics" ? '0.5rem' : '1rem'
              }}>
                <div className="relative" style={{
                  width: '120px',
                  height: '80px',
                  transform: `scale(${partner.scale})`,
                  marginTop: partner.name === "Viam Robotics" ? '1rem' : '0'
                }}>
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </div>
              {/* Partner Name */}
              {partner.showName && (
                <p className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300 text-center">
                  {partner.name}
                </p>
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
