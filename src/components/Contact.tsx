import { Mail, Linkedin, Github, BookOpen, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
  const links = [
    { href: "mailto:babaktafreshi9@gmail.com", icon: Mail, label: "Email", value: "babaktafreshi9@gmail.com", external: false },
    { href: "https://www.linkedin.com/in/babak-tafreshi-638419261", icon: Linkedin, label: "LinkedIn", value: "babak-tafreshi", external: true },
    { href: "https://github.com/babak-tafreshi", icon: Github, label: "GitHub", value: "babak-tafreshi", external: true },
    { href: "https://scholar.google.ca/citations?user=tBIeN4oAAAAJ&hl=en&oi=ao", icon: BookOpen, label: "Google Scholar", value: "My Research", external: true },
  ];

  return (
    <section id="contact" className="section-padding bg-background border-b border-border">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeader title="Contact" subtitle="Let's collaborate on aerospace and engineering projects" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl"
        >
          <p className="text-sm text-muted-foreground leading-relaxed mb-10">
            I'm always interested in discussing research opportunities, collaboration on aerospace
            systems, and challenging problems in avionics and navigation. Feel free to reach out.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {links.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="flex flex-col items-center gap-3 text-center px-4 py-5 border border-border bg-white rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="text-muted-foreground group-hover:text-accent transition-colors"
                >
                  <link.icon size={20} />
                </motion.div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xs font-semibold text-foreground leading-tight">{link.label}</span>
                  <span className="text-[10px] text-muted-foreground/70 leading-tight max-w-xs truncate">
                    {link.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-border text-center"
          >
            <p className="text-xs text-muted-foreground/60 font-medium uppercase tracking-wide mb-4">
              Quick Links
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {links.map((link) => (
                <motion.a
                  key={`quick-${link.label}`}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 text-xs font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  {link.label}
                  {link.external && <ExternalLink size={12} />}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
