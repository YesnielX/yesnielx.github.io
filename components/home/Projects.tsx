"use client";

import { useIntersectionObserver } from "@/context/ActiveSectionProvider";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import AnimatedTitle from "../common/ui/AnimatedTitle";

const projects = [
  {
    name: "Portfolio Website",
    description:
      "This website, built with Next.js, Tailwind CSS, Shadcn/UI, and Framer Motion.",
    image: "/images/projects/portfolio.png",
    sourceCode: "https://github.com/yesnielx/yesnielx.github.io",
    liveDemo: process.env.NEXT_PUBLIC_SITE_URL,
    tags: ["Next.js", "Tailwind CSS", "Shadcn/UI", "Framer Motion"],
  },
];

export default function Projects() {
  useIntersectionObserver("projects");

  return (
    <motion.section
      id="projects"
      className="min-h-screen flex items-center py-20 snap-start bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-orange-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <AnimatedTitle
          text="Projects"
          className="text-6xl font-bold mb-8 text-center pt-4 text-yellow-400 dark:text-purple-500"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={1000}
                height={480}
                className="w-full h-48 object-cover"
                priority
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
                  >
                    <Code size={16} className="mr-1" />
                    Source
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
