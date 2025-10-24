"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  project: z.string().min(20, "Please provide more details (minimum 20 characters)"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - Replace with actual form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form data:", data);

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-primary-900 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-blue/5 to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Get Started
          </h2>
          <p className="text-lg text-text-secondary">
            Response within 24h
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-primary-800/50 backdrop-blur-sm border border-primary-700/50 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                Name *
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-md text-white placeholder-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-accent-orange">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                Email *
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-md text-white placeholder-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-accent-orange">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Company */}
          <div className="mb-6">
            <label htmlFor="company" className="block text-white text-sm font-medium mb-2">
              Company/Organization
            </label>
            <input
              {...register("company")}
              type="text"
              id="company"
              className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-md text-white placeholder-text-muted focus:outline-none focus:border-accent-cyan transition-colors"
              placeholder="Your Company"
            />
          </div>

          {/* Project Description */}
          <div className="mb-6">
            <label htmlFor="project" className="block text-white text-sm font-medium mb-2">
              Project Description *
            </label>
            <textarea
              {...register("project")}
              id="project"
              rows={5}
              className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-md text-white placeholder-text-muted focus:outline-none focus:border-accent-cyan transition-colors resize-none"
              placeholder="Tell us about your project idea, requirements, and goals..."
            />
            {errors.project && (
              <p className="mt-1 text-sm text-accent-orange">{errors.project.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-white text-sm font-medium mb-2">
                Budget Range *
              </label>
              <select
                {...register("budget")}
                id="budget"
                className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-md text-white focus:outline-none focus:border-accent-blue transition-colors appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:1.5rem] bg-[right_0.5rem_center] bg-no-repeat"
                style={{ colorScheme: 'dark' }}
              >
                <option value="" className="bg-primary-800 text-text-muted">Select budget range</option>
                <option value="under-5k" className="bg-primary-800 text-white">Under $5,000</option>
                <option value="5k-15k" className="bg-primary-800 text-white">$5,000 - $15,000</option>
                <option value="15k-50k" className="bg-primary-800 text-white">$15,000 - $50,000</option>
                <option value="50k-plus" className="bg-primary-800 text-white">$50,000+</option>
                <option value="not-sure" className="bg-primary-800 text-white">Not sure yet</option>
              </select>
              {errors.budget && (
                <p className="mt-1 text-sm text-accent-orange">{errors.budget.message}</p>
              )}
            </div>

            {/* Timeline */}
            <div>
              <label htmlFor="timeline" className="block text-white text-sm font-medium mb-2">
                Timeline *
              </label>
              <select
                {...register("timeline")}
                id="timeline"
                className="w-full px-4 py-3 bg-primary-800 border border-primary-700 rounded-md text-white focus:outline-none focus:border-accent-blue transition-colors appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27white%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:1.5rem] bg-[right_0.5rem_center] bg-no-repeat"
                style={{ colorScheme: 'dark' }}
              >
                <option value="" className="bg-primary-800 text-text-muted">Select timeline</option>
                <option value="asap" className="bg-primary-800 text-white">ASAP</option>
                <option value="1-3-months" className="bg-primary-800 text-white">1-3 months</option>
                <option value="3-6-months" className="bg-primary-800 text-white">3-6 months</option>
                <option value="6-plus-months" className="bg-primary-800 text-white">6+ months</option>
              </select>
              {errors.timeline && (
                <p className="mt-1 text-sm text-accent-orange">{errors.timeline.message}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent-blue hover:bg-accent-blue-light text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md shadow-accent-blue/20"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send size={20} />
                Send Inquiry
              </>
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-green-500/10 border border-green-500/50 rounded-md text-green-400 text-center"
            >
              Thank you! We'll get back to you within 24 hours.
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-accent-orange/10 border border-accent-orange/50 rounded-md text-accent-orange text-center"
            >
              Something went wrong. Please try again or email us directly.
            </motion.div>
          )}
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:hello@coderscafe.com"
              className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <Mail size={20} />
              hello@coderscafe.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
