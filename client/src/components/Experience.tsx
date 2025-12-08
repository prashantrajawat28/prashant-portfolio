import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, Briefcase, ChevronRight } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    id: 1,
    role: "AI Data Science Engineer",
    company: "Mina Tech Labs Pvt. Ltd",
    period: "Oct 2025 – Present",
    description: [
      "Working in a dynamic startup environment with full ownership of feature development.",
      "Contributing across backend development, frontend integration, API engineering.",
      "Enhancing core modules: Authentication, RBAC, Applicant Tracking.",
      "Architecting database schema strategy: entities, relationships, indexing."
    ]
  },
  // Added a placeholder past experience to demonstrate the timeline effect better
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "Tech Solutions Inc.",
    period: "Jan 2025 – Sep 2025",
    description: [
      "Developed responsive UI components using React and TailwindCSS.",
      "Integrated RESTful APIs and optimized frontend performance.",
      "Collaborated with the design team to implement pixel-perfect interfaces."
    ]
  }
];

function TimelineItem({ data, index }: { data: typeof experiences[0], index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative mb-12 flex w-full ${isEven ? 'md:justify-start' : 'md:justify-end'} justify-center`}
    >
      {/* Timeline Center Line Connection */}
      <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:-translate-x-1/2 md:block" />
      
      {/* Dot on Line */}
      <div className="absolute left-4 top-0 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2 md:block" />

      {/* Content Card */}
      <div className={`relative w-full max-w-xl pl-12 md:w-[45%] md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/60">
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
          
          <div className="mb-4 flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{data.role}</h3>
              <div className="flex items-center gap-2 text-lg font-medium text-muted-foreground">
                <Briefcase className="h-4 w-4" />
                {data.company}
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Calendar className="h-3 w-3" />
              {data.period}
            </div>
          </div>

          <ul className="space-y-3">
            {data.description.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary/50" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="relative px-6 py-24 md:pl-20">
      <div className="container mx-auto max-w-6xl" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            My <span className="text-primary">Experience</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            My professional journey and career milestones.
          </p>
        </motion.div>

        <div className="relative">
          {/* Mobile Timeline Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border md:hidden" />
          
          {/* Desktop Animated Line Progress */}
          <motion.div 
            className="absolute left-1/2 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-primary to-transparent md:block"
            style={{ scaleY }} 
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} data={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
