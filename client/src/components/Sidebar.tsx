import { Home, User, FolderOpen, Briefcase, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "projects", icon: FolderOpen, label: "Projects" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-full w-20 flex-col items-center justify-center gap-8 border-r border-border/50 bg-background/80 backdrop-blur-md md:flex">
      {navItems.map(({ id, icon: Icon, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
          }}
          className={cn(
            "group relative flex h-12 w-12 items-center justify-center rounded-xl transition-all hover:bg-primary/10 hover:text-primary",
            activeSection === id ? "bg-primary/10 text-primary shadow-[0_0_20px_rgba(34,197,94,0.3)]" : "text-muted-foreground"
          )}
          aria-label={label}
        >
          <Icon className="h-6 w-6" />
          <span className="absolute left-14 rounded-md bg-popover px-2 py-1 text-xs font-medium text-popover-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100">
            {label}
          </span>
          {activeSection === id && (
            <span className="absolute left-0 h-8 w-1 rounded-r-full bg-primary" />
          )}
        </a>
      ))}
    </aside>
  );
}
