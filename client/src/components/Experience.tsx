import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:pl-20">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
        >
          My <span className="text-primary">Experience</span>
        </motion.h2>

        <div className="relative border-l border-border pl-8 ml-4 md:ml-0">
          {/* Mina Tech Labs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-4 ring-background" />

            <div className="rounded-2xl border border-border bg-card/50 p-8 transition-colors hover:border-primary/30">
              <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    AI Data Science Engineer
                  </h3>
                  <p className="text-lg text-primary">Mina Tech Labs Pvt. Ltd</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Oct 2025 – Present</span>
                </div>
              </div>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Working in a dynamic startup environment with full ownership of
                  feature development from planning to deployment.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Contributing across backend development, frontend integration,
                  API engineering, and overall product improvement.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Enhancing core modules: Authentication, RBAC, Applicant
                  Tracking, and Workflow Automation.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Architecting database schema strategy: entities,
                  relationships, indexing, constraints.
                </li>
              </ul>

              <p className="mt-5 text-sm text-muted-foreground">
                <span className="font-semibold text-white">Skills:</span> Python,
                PostgreSQL, FastAPI, AWS, React.js, Node.js, REST APIs, Git,
                Docker, System Design.
              </p>
            </div>
          </motion.div>

          {/* REGex Software Services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-4 ring-background" />

            <div className="rounded-2xl border border-border bg-card/50 p-8 transition-colors hover:border-primary/30">
              <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-bold text-white">Web Developer</h3>
                  <p className="text-lg text-primary">REGex Software Services</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>May 2023 – July 2023</span>
                </div>
              </div>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Integrated REST APIs and optimized backend logic for smoother
                  data flow and faster response.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Designed production-ready modules with senior developers for
                  better reliability and UX.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Optimized queries and workflows to reduce load times.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Collaborated with cross-functional teams to define
                  requirements and solutions.
                </li>
              </ul>

              <p className="mt-5 text-sm text-muted-foreground">
                <span className="font-semibold text-white">Skills:</span>{" "}
                Node.js, Express.js, HTML, CSS, JavaScript, REST APIs, SQL/NoSQL,
                Debugging, Optimization, Git.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
