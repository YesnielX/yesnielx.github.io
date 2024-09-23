"use client";

import Layout from "@/components/common/Layout";
import Contact from "@/components/home/Contact";
import Home from "@/components/home/Home";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";

export default function Portfolio() {
  return (
    <Layout>
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}
