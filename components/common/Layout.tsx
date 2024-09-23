"use client";

import { ActiveSectionProvider } from "@/context/ActiveSectionProvider";
import { useTheme } from "next-themes";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Layout.css";
import ScrollToTopButton from "./ScrollToTop";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ActiveSectionProvider>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="pt-16">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </ActiveSectionProvider>
  );
}
