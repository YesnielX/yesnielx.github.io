"use client";

import { useIntersectionObserver } from "@/context/ActiveSectionProvider";
import { motion } from "framer-motion";
import AnimatedTitle from "../common/ui/AnimatedTitle";

export default function Contact() {
  useIntersectionObserver("contact");
  return (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center py-20 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-pink-900 snap-start"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 max-w-xl">
        <AnimatedTitle
          text="Contact"
          className="text-6xl font-bold mb-8 text-center pt-4 text-blue-600 dark:text-yellow-400"
        />

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-6 py-3 rounded-md hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
}
