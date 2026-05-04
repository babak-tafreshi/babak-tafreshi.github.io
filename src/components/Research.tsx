import { motion } from "framer-motion";
import { ExternalLink, BookOpen, GraduationCap, FileText } from "lucide-react";

const publications = [
  {
    title: "Advanced Immersive Mission Control Center for Space Applications",
    venue: "TechRxiv 2025",
    link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=tBIeN4oAAAAJ&citation_for_view=tBIeN4oAAAAJ:u5HHmVD_uO8C",
    abstract:
      "An advanced mission control center framework leveraging immersive technologies for enhanced situational awareness and decision-making in space operations, featuring human-in-the-loop simulation and real-time data visualization.",
    contribution:
      "Designed the system architecture for immersive mission control, implemented real-time data visualization pipelines, and contributed to the human-in-the-loop simulation framework.",
    tech: ["System Architecture", "Real-time Visualization", "Human-in-the-Loop", "Simulation"],
  },
  {
    title: "Immersive Control Centre for Space Mission Management and Collaboration",
    venue: "SpaceOps 2025",
    link: "https://star.spaceops.org/2025/paper_lists.php",
    abstract:
      "This paper presents the design and implementation of an immersive control centre architecture for space mission management, enabling multi-user collaboration through mixed-reality environments integrated with real-time telemetry and digital twin systems.",
    contribution:
      "Developed the mission control interface architecture, integrated NASA Open MCT telemetry pipelines, and designed the multi-user collaboration framework for immersive environments.",
    tech: ["Unreal Engine", "NASA Open MCT", "Telemetry Pipelines", "Digital Twins", "Mixed Reality"],
  },
];

const SCHOLAR_URL = "https://scholar.google.ca/citations?user=tBIeN4oAAAAJ&hl=en&oi=ao";

export default function Research() {
  return (
    <section id="research" className="section-padding section-alt">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Research & Publications</h2>
            <div className="section-rule" />
          </div>
          <a
            href={SCHOLAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-200 group"
          >
            <GraduationCap size={16} />
            Google Scholar
            <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Publication list */}
        <div className="space-y-6">
          {publications.map((pub, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-white border border-border hover:border-primary/30 transition-colors duration-300 p-7 md:p-9 group"
            >
              {/* Venue */}
              <div className="flex items-center gap-2 mb-3">
                <span className="mono text-xs uppercase tracking-wider text-accent font-medium">{pub.venue}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-5 leading-tight group-hover:text-primary transition-colors">
                {pub.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen size={13} /> Abstract
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pub.abstract}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FileText size={13} /> Contribution
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pub.contribution}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-border">
                <div className="flex flex-wrap gap-1.5">
                  {pub.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline"
                >
                  View Publication <ExternalLink size={13} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
