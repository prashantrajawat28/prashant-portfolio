import { motion } from "framer-motion";
import { Code, Server, Bot, Database } from "lucide-react";

export function About() {
  const stats = [
    { label: "Full Stack Projects", value: "2", icon: Code },
    { label: "Web Dev Projects", value: "3", icon: Server },
    { label: "GenAI Projects", value: "1", icon: Bot },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden px-6 py-24 md:pl-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 grid gap-6 md:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/50"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="mb-6 text-xl font-medium text-white">
              Full Stack & AI Engineer 🚀
            </p>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I build scalable web applications, backend APIs, and real-time AI automation systems. 
                I have hands-on experience working in fast-paced startup environments, taking full 
                ownership of core features — from architecture and development to testing and deployment.
              </p>
              <p>
                My work spans full stack engineering, backend systems, data-driven workflows, and 
                AI-powered automation using Twilio, WebSockets, and LLM integrations. I love solving 
                complex problems, designing clean architectures, and turning ideas into production-ready solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card/30 p-8 backdrop-blur-sm"
          >
            <h3 className="mb-6 text-xl font-semibold text-white">What I Do</h3>
            <ul className="space-y-3">
              {[
                "Full Stack Development (React, Node, Express, FastAPI)",
                "Backend Architecture & API Engineering",
                "AI Voice Automation (STT → LLM → TTS)",
                "Database Design (PostgreSQL, MongoDB)",
                "Real-time communication with WebSockets",
                "Secure Authentication & Authorization"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
