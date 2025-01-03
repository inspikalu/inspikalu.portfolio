"use client";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Line from "@/components/ui/Line";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen w-[90%] bg-background mx-auto md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] p-4 mt-2">
      <Hero />
      <Line />
      <Stats />
      <Line />
      <Skills />
      <Line />
      <Experience />
      <Line />
      <Projects />
      <Line />
      <Contact />
    </div>
  );
}
