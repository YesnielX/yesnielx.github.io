"use client";

import { Code } from "lucide-react";
import { BiLogoMongodb } from "react-icons/bi";
import {
  FaCss3,
  FaDiscord,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaNpm,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiTypescript, SiVercel } from "react-icons/si";
import { TbAuth2Fa } from "react-icons/tb";

import { useIntersectionObserver } from "@/context/ActiveSectionProvider";
import { motion } from "framer-motion";
import { RiNextjsLine, RiSupabaseLine } from "react-icons/ri";
import {
  SiCloudflare,
  SiEslint,
  SiPrettier,
  SiRedis,
  SiTailwindcss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import AnimatedTitle from "../common/ui/AnimatedTitle";

const skills = [
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3, color: "text-blue-600" },
  { name: "React", icon: FaReact, color: "text-blue-500" },
  { name: "Next.JS", icon: RiNextjsLine, color: "text-black" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-500" },
  { name: "NextAuth.JS", icon: TbAuth2Fa, color: "text-blue-500" },
  { name: "ESLint", icon: SiEslint, color: "text-blue-500" },
  { name: "Prettier", icon: SiPrettier, color: "text-blue-500" },
  { name: "Python", icon: FaPython, color: "text-blue-600" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "MongoDB", icon: BiLogoMongodb, color: "text-green-500" },
  { name: "Supabase", icon: RiSupabaseLine, color: "text-blue-500" },
  { name: "Redis", icon: SiRedis, color: "text-red-500" },
  { name: "Discord.JS", icon: FaDiscord, color: "text-blue-500" },
  { name: "Bun", icon: null, color: "text-blue-500" },
  { name: "Linux", icon: FaLinux, color: "text-green-500" },
  { name: "VSCode", icon: VscVscode, color: "text-blue-500" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "GitHub", icon: FaGithub, color: "text-black" },
  { name: "NPM", icon: FaNpm, color: "text-red-500" },
  { name: "Vercel", icon: SiVercel, color: "text-black" },
  { name: "Cloudflare", icon: SiCloudflare, color: "text-orange-500" },
];

export default function Skills() {
  useIntersectionObserver("skills");

  return (
    <motion.section
      id="skills"
      className="min-h-screen flex items-center py-20 bg-gradient-to-br from-green-50 to-teal-100 dark:from-gray-900 dark:to-teal-900 overflow-hidden snap-start"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="w-full mx-auto px-4">
        <AnimatedTitle
          text="Skills"
          className="text-6xl font-bold mb-8 text-center pt-4 text-green-400 dark:text-blue-500"
        />

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="relative overflow-x-hidden text-white w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-100px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
              <div className="py-10 animate-marquee whitespace-nowrap flex">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`inline-flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-sm mx-2 text-sm 
                      md:text-base ${skill.color} font-handwriting`}
                  >
                    {skill.icon ? (
                      <skill.icon size={36} className={`mr-2 ${skill.color}`} />
                    ) : (
                      <Code size={36} className={`mr-2 ${skill.color}`} />
                    )}
                    {skill.name}
                  </div>
                ))}
              </div>
              <div className="absolute top-0 py-10 animate-marquee2 whitespace-nowrap flex">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`inline-flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-sm mx-2 text-sm 
                      md:text-base ${skill.color} font-handwriting`}
                  >
                    {skill.icon ? (
                      <skill.icon size={36} className={`mr-2 ${skill.color}`} />
                    ) : (
                      <Code size={36} className={`mr-2 ${skill.color}`} />
                    )}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="relative overflow-x-hidden text-white w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-100px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
              <div className="py-10 animate-marqueeReverse whitespace-nowrap flex">
                {skills
                  .slice()
                  .reverse()
                  .map((skill, index) => (
                    <div
                      key={index}
                      className={`inline-flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-sm mx-2 text-sm 
                      md:text-base ${skill.color} font-handwriting`}
                    >
                      {skill.icon ? (
                        <skill.icon
                          size={36}
                          className={`mr-2 ${skill.color}`}
                        />
                      ) : (
                        <Code size={36} className={`mr-2 ${skill.color}`} />
                      )}
                      {skill.name}
                    </div>
                  ))}
              </div>
              <div className="absolute top-0 py-10 animate-marquee2Reverse whitespace-nowrap flex">
                {skills
                  .slice()
                  .reverse()
                  .map((skill, index) => (
                    <div
                      key={index}
                      className={`inline-flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-sm mx-2 text-sm 
                      md:text-base ${skill.color} font-handwriting`}
                    >
                      {skill.icon ? (
                        <skill.icon
                          size={36}
                          className={`mr-2 ${skill.color}`}
                        />
                      ) : (
                        <Code size={36} className={`mr-2 ${skill.color}`} />
                      )}
                      {skill.name}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
