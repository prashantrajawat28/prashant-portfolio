import { useEffect, useRef } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Custom cursor logic could go here if implemented in CSS
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty("--spotlight-x", `${x}px`);
      document.documentElement.style.setProperty("--spotlight-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen text-foreground selection:bg-primary/20 relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Background Effects */}
      <div className="bg-grid" />
      <div className="bg-grain" />
      <div className="spotlight" />
      <BackgroundOrbs />

      <Sidebar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50 bg-background/50 backdrop-blur-sm md:pl-20 relative z-10">
        <p>© {new Date().getFullYear()} Prashant Rajawat. All rights reserved.</p>
        <p className="mt-1">Built with React, TailwindCSS & Framer Motion</p>
      </footer>
    </div>
  );
}
