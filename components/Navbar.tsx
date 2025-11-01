"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/", type: "link" },
  { name: "About", href: "/about", type: "link" },
  { name: "Products", href: "/products", type: "link" },
  { name: "Videos", href: "/videos", type: "link" },
  { name: "Case Studies", href: "/case-studies", type: "link" },
  { name: "Blog", href: "/blog", type: "link" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 border-b ${
        scrolled || isOpen
          ? "bg-black border-primary-700/50 shadow-lg"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[80]">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 relative z-[80] h-full">
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div className="relative w-8 h-8 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/coders-cafe-logo.png"
                  alt="Coders Cafe Logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-[32px] font-bold text-text-primary group-hover:text-accent-blue transition-colors leading-none inline-block">
                Coders Cafe
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 relative z-[80] h-full">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-medium transition-colors leading-none inline-block ${
                  pathname === link.href
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                if (pathname === "/") {
                  scrollToSection("contact");
                } else {
                  window.location.href = "/#contact";
                }
              }}
              className="bg-accent-blue hover:bg-accent-blue-light text-white px-6 py-2.5 rounded-lg text-base font-semibold transition-all hover:scale-[1.02] leading-tight inline-flex items-center justify-center"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden relative z-[80] flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-primary p-2 rounded-md hover:bg-primary-700/50 transition-colors relative z-[80] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 left-0 right-0 bottom-0 z-[60] bg-black w-full h-screen overflow-hidden"
            style={{ backgroundColor: '#000000' }}
          >
            <div className="flex flex-col items-center justify-center h-full w-full px-8 pt-24 pb-8">
              <div className="w-full max-w-sm space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block w-full text-center py-4 text-2xl font-semibold transition-colors ${
                        pathname === link.href
                          ? "text-accent-blue"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                  className="pt-4"
                >
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      if (pathname === "/") {
                        scrollToSection("contact");
                      } else {
                        window.location.href = "/#contact";
                      }
                    }}
                    className="w-full bg-accent-blue hover:bg-accent-blue-light text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-[1.02]"
                  >
                    Start Your Project
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
