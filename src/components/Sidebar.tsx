import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Publications", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="hidden lg:flex flex-col w-[260px] shrink-0 sticky top-0 h-screen border-r border-border bg-card">
      <div className="flex flex-col h-full px-6 py-8">
        <Link to="/" className="mb-6 group">
          <div className="w-28 h-28 mx-auto mb-4 overflow-hidden border border-border bg-secondary">
            <img
              src="/headshot.png"
              alt="Babak Nassir Tafreshi"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <h1 className="serif text-lg font-semibold text-foreground text-center leading-tight group-hover:text-accent transition-colors">
            Babak N. Tafreshi
          </h1>
          <p className="text-[11px] text-muted-foreground text-center mt-1.5 leading-snug">
            B.Eng. Aerospace Engineering
          </p>
          <p className="text-[11px] text-muted-foreground/80 text-center">
            Toronto Metropolitan University
          </p>
        </Link>

        <div className="w-8 h-px bg-accent mx-auto mb-6" />

        <nav className="flex-1">
          <ul className="space-y-0.5">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className={`w-full text-left px-3 py-2 text-[13px] transition-colors border-l-2 ${
                      isActive
                        ? "border-accent text-foreground font-medium bg-accent/5"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="pt-6 border-t border-border space-y-4">
          <div className="space-y-2">
            <motion.a
              whileHover={{ x: 2 }}
              href="mailto:babaktafreshi9@gmail.com"
              className="flex items-center gap-3 px-3 py-2 text-xs text-muted-foreground hover:text-accent hover:bg-accent/5 rounded transition-all"
            >
              <Mail size={14} />
              <span className="truncate font-medium">babaktafreshi9@gmail.com</span>
            </motion.a>
            <motion.a
              whileHover={{ x: 2 }}
              href="https://scholar.google.ca/citations?user=tBIeN4oAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2 text-xs text-muted-foreground hover:text-accent hover:bg-accent/5 rounded transition-all"
              aria-label="Google Scholar"
            >
              <BookOpen size={14} />
              <span className="truncate font-medium">Scholar</span>
            </motion.a>
          </div>

          <div className="pt-2 border-t border-border">
            <p className="text-[10px] text-muted-foreground/60 font-medium uppercase tracking-wide mb-3">Connect</p>
            <div className="flex items-center gap-3 px-1">
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                href="https://www.linkedin.com/in/babak-tafreshi-638419261"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                href="https://github.com/babak-tafreshi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
