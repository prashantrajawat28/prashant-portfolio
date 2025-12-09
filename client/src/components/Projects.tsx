import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Your project images (from your screenshot folder)
import p1_1 from "@assets/generated_images/project-1.png";
import p1_2 from "@assets/generated_images/project-1(2).png";
import p1_3 from "@assets/generated_images/project-1(3).png";
import p1_4 from "@assets/generated_images/project-1(4).png";
import p1_5 from "@assets/generated_images/project-1(5).png";

import p2_1 from "@assets/generated_images/project-2.png";
import p2_2 from "@assets/generated_images/project-2(2).png";
import p2_3 from "@assets/generated_images/project-2(3).png";

import smart_1 from "@assets/generated_images/smartreg-1.jpeg";
import smart_2 from "@assets/generated_images/smartreg-2.jpeg";
import smart_3 from "@assets/generated_images/smartreg-3.jpeg";

import travel_1 from "@assets/generated_images/ui-travel-1.png";
import spotify_1 from "@assets/generated_images/ui-spotify-1.png";
import netflix_1 from "@assets/generated_images/ui-netflix-1.png";
import netflix_2 from "@assets/generated_images/ui-netflix-2.png";

// ✅ If you add these later, then uncomment + add to images array
// import travel_2 from "@assets/generated_images/ui-travel-2.png";
// import netflix_1 from "@assets/generated_images/ui-netflix-1.png";

type Project = {
  id: string;
  title: string;
  images: string[];
  category: string;
  desc: string;
  features: string[];
  github: string;
  live: string;
  stack: string[];
};

const projects: Project[] = [
  {
    id: "project1",
    title: "StudyNotion-Edtech Platform",
    images: [p1_1, p1_2, p1_3, p1_4, p1_5],
    category: "Full Stack",
    desc:
      "StudyNotion is a full-stack EdTech platform where students can buy and learn courses while instructors can create and manage educational content. It includes secure user authentication, real-time payments, role-based dashboards, and a scalable backend powered by Node.js, Express, and MongoDB.",
    features: [
      "User authentication with JWT and role-based access (student/instructor/admin)",
      "Course creation, management, and structured content delivery",
      "Razorpay payment integration with real-time order tracking",
      "Dynamic dashboards for students and instructors",
      "Progress tracking for enrolled courses",
      "Responsive UI built with React & TailwindCSS",
      "Optimized backend with caching and efficient MongoDB queries",
      "Secure API design for payments, user data, and content management",
    ],
    github: "https://github.com/YOUR_USERNAME/YOUR_REPO",
    live: "https://studynotion-frontend-iota-three.vercel.app/",
    stack: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
  },
  {
    id: "project2",
    title: "Web Development / Backend API & CRUD Operations",
    images: [p2_1, p2_2, p2_3],
    category: "Backend",
    desc:
      "This project is a simple yet structured CRUD web application built using Express.js to demonstrate RESTful API design, data management, and interaction between backend routes and a dynamic frontend interface.",
    features: [
      "CRUD operations (Create, Read, Update, Delete) with Express.js",
      "RESTful API architecture with structured routes",
      "Server-side data handling and validation",
      "Dynamic frontend integrated with backend APIs",
      "Lightweight UI using HTML & CSS",
      "Modular, clean folder structure for scalability",
    ],
    github: "https://github.com/YOUR_USERNAME/YOUR_REPO",
    live: "https://express-crud-hj5j.onrender.com/posts",
    stack: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    id: "project3",
    title: "SmartCallReg",
    images: [smart_2, smart_1, smart_3],
    category: "AI & Automation",
    desc:
      "This project is a real-time AI voice assistant built using Twilio, FastAPI, and WebSockets, enabling users to interact through natural voice conversations.",
    features: [
      "Real-time voice interaction using Twilio",
      "Speech-to-Text (STT) for understanding user queries",
      "LLM-based dynamic response generation",
      "Text-to-Speech (TTS) for natural voice replies",
      "WebSocket-based bi-directional communication",
      "Automated voice workflow (e.g., test booking)",
      "Built using FastAPI for fast, scalable backend",
    ],
    github: "https://github.com/prashantrajawat28",
    live: "https://YOUR-LIVE-LINK.com",
    stack: ["FastAPI", "Python", "Twilio", "WebSockets"],
  },
  {
    id: "project4",
    title: "Travel Landing Page UI (Design Showcase)",
    images: [travel_1 /*, travel_2 */],
    category: "Design",
    desc:
      "A modern travel landing page UI built as a design showcase. Focused on clean hero layout, strong typography, CTA placement, and responsive spacing. (UI Preview — Not Hosted)",
    features: [
      "Full-screen hero section with strong typography and CTA",
      "Clean navbar and section layout structure",
      "Featured content card UI ('best places to visit')",
      "Responsive layout for desktop/tablet/mobile",
      "Consistent spacing, alignment, and visual hierarchy",
      "Smooth hover + modern glass UI styling",
    ],
    github: "",
    live: "",
    stack: ["UI/UX", "HTML/CSS"],
  },
  {
    id: "project5",
    title: "Spotify Web Player UI Clone (Design Showcase)",
    images: [spotify_1],
    category: "Design",
    desc:
      "A Spotify-inspired web player dashboard UI clone. Built to practice layout systems, sidebar navigation, card grids, and dark theme consistency. (UI Preview — Not Hosted)",
    features: [
      "Sidebar navigation layout (Home / Search / Library)",
      "Trending & Featured sections with card grid UI",
      "Dark theme styling with consistent contrast",
      "Hover states and polished spacing system",
      "Responsive dashboard layout structure",
    ],
    github: "",
    live: "",
    stack: ["UI/UX", "HTML/CSS"],
  },
  {
    id: "project6",
    title: "Netflix Landing Page UI Clone (Design Showcase)",
    images: [netflix_1 ,netflix_2  ],
    category: "Design",
    desc:
      "A Netflix-inspired landing page UI clone featuring hero banner, email CTA, and feature section layout. Built to practice modern responsive sections and typography. (UI Preview — Not Hosted)",
    features: [
      "Hero banner + email capture CTA UI",
      "Feature sections (TV / Download / Watch anywhere layout)",
      "Dark theme with strong typography hierarchy",
      "Responsive section spacing and grid alignment",
      "Button and header styling inspired by Netflix UI",
    ],
    github: "",
    live: "",
    stack: ["UI/UX", "HTML/CSS"],
  },
];

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 200);
    y.set(yPct * 200);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer rounded-xl border border-border bg-card relative perspective-1000"
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="relative aspect-video overflow-hidden rounded-t-xl"
      >
        <img
          src={project.images[0]}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
          <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black">
            View Details
          </span>
        </div>
      </div>

      <div
        style={{ transform: "translateZ(20px)" }}
        className="p-6 bg-card rounded-b-xl border-t border-border/10"
      >
        <div className="mb-2 text-xs font-medium text-primary uppercase tracking-wider">
          {project.category}
        </div>
        <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {project.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    setActiveImg(0);
  }, [selectedProject?.id]);

  const images = selectedProject?.images ?? [];
  const total = images.length;

  const prev = () => {
    if (!total) return;
    setActiveImg((i) => (i - 1 + total) % total);
  };

  const next = () => {
    if (!total) return;
    setActiveImg((i) => (i + 1) % total);
  };

  return (
    <section id="projects" className="px-6 py-24 md:pl-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A selection of my recent work in Full Stack and AI Engineering.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl border-border bg-card p-0 overflow-hidden text-foreground">
            {selectedProject && (
              <div className="flex flex-col max-h-[90vh] overflow-y-auto">
                {/* ✅ Slider */}
                <div className="relative aspect-video w-full bg-muted">
                  <img
                    src={images[activeImg]}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover"
                  />

                  {/* close */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  {/* arrows only if multiple images */}
                  {total > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                        aria-label="Next image"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>

                      {/* dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setActiveImg(i)}
                            className={`h-2.5 w-2.5 rounded-full ${
                              i === activeImg ? "bg-primary" : "bg-white/40"
                            }`}
                            aria-label={`Go to image ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="p-6 md:p-8">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {selectedProject.title}
                      </h2>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {selectedProject.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      {selectedProject.github && selectedProject.github !== "#" && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
                        >
                          <Github className="h-4 w-4" /> Code
                        </a>
                      )}
                      {selectedProject.live && selectedProject.live !== "#" && (
                        <a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-black hover:bg-primary/90"
                        >
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-2 font-semibold text-white">Overview</h3>
                      <p className="text-muted-foreground">{selectedProject.desc}</p>
                    </div>

                    <div>
                      <h3 className="mb-2 font-semibold text-white">Key Features</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
