"use client";

import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 border-t border-primary-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Company */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-text-muted hover:text-text-primary transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-text-muted hover:text-text-primary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-text-muted hover:text-text-primary transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-text-muted hover:text-text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-text-muted hover:text-text-primary transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-text-muted hover:text-text-primary transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-text-muted hover:text-text-primary transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-text-muted hover:text-text-primary transition-colors text-sm">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Twitter size={16} />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@coderscafe.com"
                  className="text-text-muted hover:text-text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Mail size={16} />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-800/30">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="text-left">
              <span className="text-text-primary font-bold text-lg">Coders Cafe</span>
              <p className="text-text-muted text-sm mt-1">
                © {currentYear} Coders Cafe. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
