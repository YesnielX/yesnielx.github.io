"use client";

import { useIntersectionObserver } from "@/context/ActiveSectionProvider";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import AnimatedTitle from "../common/ui/AnimatedTitle";

export default function Home() {
  useIntersectionObserver("home");
  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 snap-start bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <Image
            src="/images/yesniel-profile.jpeg"
            alt="Profile"
            width={128}
            height={128}
            className="rounded-full mx-auto"
          />
        </motion.div>
        <AnimatedTitle
          text="Welcome!"
          className="text-6xl font-bold text-pink-500 dark:text-purple-500"
        />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-black dark:text-white"
        >
          Yesniel
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-gray-600 dark:text-gray-400 mb-4"
        >
          Full-Stack Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto"
        >
          Passionate about creating elegant, efficient, and user-friendly web
          applications. With expertise in both front-end and back-end
          technologies, I bring ideas to life through code.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center space-x-4"
        >
          <a
            href="#"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <Twitter size={20} />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
