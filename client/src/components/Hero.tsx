import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, Briefcase } from "lucide-react";
import profilePhoto from "@assets/generated_images/professional_profile_photo_of_a_software_engineer.png";
import { useRef } from "react";

function TypewriterText({ text }: { text: string }) {
  // Split text into characters
  const characters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ display: "inline-block" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {characters.map((char, index) => (
        <motion.span variants={child} key={index} style={{ display: "inline-block", minWidth: char === " " ? "0.3em" : undefined }}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

function MagneticButton({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.3);
    y.set((clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.button>
  );
}

function MagneticLink({ children, href, className, target, rel }: { children: React.ReactNode; href: string; className?: string; target?: string; rel?: string }) {
    const ref = useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!ref.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      x.set((clientX - centerX) * 0.3);
      y.set((clientY - centerY) * 0.3);
    };
  
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };
  
    return (
      <motion.a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
      >
        {children}
      </motion.a>
    );
  }

export function Hero() {
  return (
    <section id="hero" className="flex min-h-screen items-center justify-center px-6 pt-20 md:pl-20">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <p className="mb-4 font-display text-2xl text-primary md:text-3xl">Hello, I am</p>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
            Prashant <span className="text-primary text-glow">Rajawat</span>
          </h1>
          
          <div className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
             <TypewriterText text="Full Stack & AI Engineer building scalable web apps and real-time AI automation." />
            <span className="mt-2 block text-sm font-semibold text-primary/80">
              React • Node/Express • FastAPI • PostgreSQL • Twilio • LLMs
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            <MagneticLink
              href="/assets/PrashantRajawat_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-background hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              Resume <Download className="h-4 w-4" />
            </MagneticLink>
            <MagneticButton
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              Hire Me <Briefcase className="h-4 w-4" />
            </MagneticButton>
            
            <div className="flex items-center gap-4 pl-4">
              <a href="https://linkedin.com" className="text-muted-foreground transition-colors hover:text-primary hover:scale-110 transform duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com" className="text-muted-foreground transition-colors hover:text-primary hover:scale-110 transform duration-200">
                <Github className="h-6 w-6" />
              </a>
              <a href="mailto:email@example.com" className="text-muted-foreground transition-colors hover:text-primary hover:scale-110 transform duration-200">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-emerald-600 opacity-75 blur-xl filter animate-pulse" />
            <motion.div 
                className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-background md:h-80 md:w-80"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={profilePhoto}
                alt="Prashant Rajawat"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <ArrowDown className="h-6 w-6 animate-bounce text-muted-foreground" />
      </motion.div>
    </section>
  );
}
