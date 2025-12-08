import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, ExternalLink, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import edtechImg from "@assets/generated_images/edtech_platform_dashboard_ui.png";
import aiImg from "@assets/generated_images/ai_voice_assistant_visualization.png";
import travelImg from "@assets/generated_images/travel_website_landing_page_ui.png";
import spotifyImg from "@assets/generated_images/music_streaming_app_ui.png";
import netflixImg from "@assets/generated_images/movie_streaming_landing_page_ui.png";

// Placeholder for project 2 since we don't have a specific image
const webDevImg = edtechImg; 

const projects = [
  {
    id: "project1",
    title: "StudyNotion - Edtech Platform",
    image: edtechImg,
    category: "Full Stack",
    desc: "A comprehensive EdTech platform for students and instructors with secure auth, payments, and content management.",
    features: [
      "Role-based access (Student/Instructor/Admin)",
      "Course creation and purchase workflow",
      "Razorpay payment integration",
      "Real-time progress tracking",
      "Secure API with Node.js & Express"
    ],
    github: "https://github.com",
    live: "https://vercel.com",
    stack: ["React", "Node.js", "MongoDB", "Express", "Tailwind"]
  },
  {
    id: "project2",
    title: "Express CRUD API System",
    image: webDevImg,
    category: "Backend",
    desc: "Robust RESTful API system demonstrating advanced CRUD operations, validation, and database interactions.",
    features: [
      "Complete CRUD operations",
      "RESTful architecture patterns",
      "Server-side validation with Zod",
      "Optimized database queries",
      "Clean modular code structure"
    ],
    github: "https://github.com",
    live: "https://render.com",
    stack: ["Node.js", "Express", "PostgreSQL"]
  },
  {
    id: "project3",
    title: "SmartCallReg - AI Voice Assistant",
    image: aiImg,
    category: "AI & Automation",
    desc: "Real-time AI voice assistant capable of natural conversations using STT, LLMs, and TTS pipelines.",
    features: [
      "Real-time Twilio Voice integration",
      "Speech-to-Text & Text-to-Speech pipeline",
      "LLM dynamic response generation",
      "WebSocket bi-directional streaming",
      "Automated workflow handling"
    ],
    github: "https://github.com",
    live: "#",
    stack: ["FastAPI", "Python", "Twilio", "OpenAI", "WebSockets"]
  },
  {
    id: "project4",
    title: "Travel Landing UI",
    image: travelImg,
    category: "Design",
    desc: "Modern, high-fidelity landing page for a travel agency focusing on visual hierarchy and typography.",
    features: [
      "Glassmorphism design elements",
      "Responsive hero layout",
      "Interactive card hover states",
      "Clean typographic scale"
    ],
    github: "#",
    live: "#",
    stack: ["React", "TailwindCSS", "Framer Motion"]
  },
  {
    id: "project5",
    title: "Spotify Clone UI",
    image: spotifyImg,
    category: "Design",
    desc: "Pixel-perfect clone of the Spotify web player interface with complex grid layouts and custom scrollbars.",
    features: [
      "Complex grid layouts",
      "Custom audio player UI controls",
      "Sidebar navigation system",
      "Dark mode color palette"
    ],
    github: "#",
    live: "#",
    stack: ["React", "CSS Modules"]
  },
  {
    id: "project6",
    title: "Netflix Clone UI",
    image: netflixImg,
    category: "Design",
    desc: "Responsive landing page clone of Netflix featuring hero banners and content rows.",
    features: [
      "Hero video background support",
      "Horizontal content scrolling",
      "Email capture form UI",
      "Responsive accordion FAQ"
    ],
    github: "#",
    live: "#",
    stack: ["React", "TailwindCSS"]
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                  <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-black">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2 text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl border-border bg-card p-0 overflow-hidden text-foreground">
            {selectedProject && (
              <div className="flex flex-col max-h-[90vh] overflow-y-auto">
                <div className="relative aspect-video w-full bg-muted">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="h-full w-full object-cover"
                  />
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {selectedProject.stack.map((tech) => (
                          <span key={tech} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
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
