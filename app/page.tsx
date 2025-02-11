"use client";
import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Line from "@/components/ui/Line";
import Contact from "@/components/sections/Contact";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Variants for individual sections
const sectionVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Line animation variant
const lineVariants = {
  hidden: { 
    scaleX: 0,
    opacity: 0
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <motion.div 
        className="min-h-screen w-[90%] bg-background mx-auto md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] p-4 mt-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={sectionVariants}>
          <Hero />
        </motion.div>

        <motion.div variants={lineVariants}>
          <Line />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Stats />
        </motion.div>

        <motion.div variants={lineVariants}>
          <Line />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Skills />
        </motion.div>

        <motion.div variants={lineVariants}>
          <Line />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Experience />
        </motion.div>

        <motion.div variants={lineVariants}>
          <Line />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Projects />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Contact />
        </motion.div>
      </motion.div>
    </QueryClientProvider>
  );
}