import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-1">Contact</h2>
        <div className="w-12 h-0.5 bg-accent mb-8" />

        <p className="text-muted-foreground mb-6">
          Open to research collaborations and graduate research opportunities in autonomy, robotics,
          and aerospace systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:babak@example.com"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
          >
            <Mail size={16} /> babak@example.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
