import { useEffect, useRef } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty("--spotlight-x", `${x}px`);
      document.documentElement.style.setProperty("--spotlight-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen text-foreground selection:bg-primary/20">
      {/* Background Effects */}
      <div className="bg-grid" />
      <div className="bg-grain" />
      <div className="spotlight" />

      <Sidebar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50 bg-background/50 backdrop-blur-sm md:pl-20">
        <p>© {new Date().getFullYear()} Prashant Rajawat. All rights reserved.</p>
        <p className="mt-1">Built with React, TailwindCSS & Framer Motion</p>
      </footer>
    </div>
  );
}
