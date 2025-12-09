import { motion } from "framer-motion";

export function Skills() {
  const skills = [
    { category: "Programming", items: ["Python", "JavaScript", "TypeScript", "C++"] },
    { category: "Web & Backend", items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets"] },
    { category: "Frontend", items: ["React.js", "TailwindCSS", "HTML5", "CSS3", "Framer Motion"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB",] },
    { category: "AI & Automation", items: ["Twilio Voice", "OpenAI API", "LangChain", "STT/TTS", "Prompt Eng"] },
    { category: "Tools", items: ["Git", "Docker", "Postman"] },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="px-6 py-24 md:pl-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Key <span className="text-primary">Skills</span>
          </h2>
        </motion.div>

        <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              variants={item}
              whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 } 
              }}
              className="group rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/50 hover:shadow-lg"
            >
              <h3 className="mb-4 text-lg font-semibold text-white group-hover:text-primary">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, rotate: Math.random() * 4 - 2 }}
                    className="cursor-default rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-black"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
