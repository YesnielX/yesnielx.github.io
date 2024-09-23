"use client";

import { useActiveSection } from "@/context/ActiveSectionProvider";
import { Code, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

export default function Header({
  theme,
  toggleTheme,
}: {
  theme: string | undefined;
  toggleTheme: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  // const { activeSection, setActiveSection, sectionRefs } = usePortfolio();
  const { activeSection } = useActiveSection();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-50 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Code size={24} className="text-gray-800 dark:text-gray-200 mr-2" />
          <span className="text-xl font-bold text-black dark:text-white">
            Yesniel
          </span>
        </div>
        <div className="hidden md:flex space-x-6">
          {["home", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`text-sm uppercase tracking-wider ${
                activeSection === item
                  ? "text-black dark:text-white font-semibold"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mr-2"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-2 shadow-md">
          {["home", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`block w-full text-left px-4 py-2 ${
                activeSection === item
                  ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-semibold"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
