import { ExternalLink, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const publications = [
  {
    title: "Resilient Navigation and Communication Architecture for Urban Air Mobility",
    authors: "B. N. Tafreshi",
    venue: "Toronto Metropolitan University",
    year: "2026",
    link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=tBIeN4oAAAAJ&citation_for_view=tBIeN4oAAAAJ:u-x6o8ySG0sC",
    abstract:
      "Urban Air Mobility (UAM) vehicles operating at Very Low Level (VLL) altitudes depend on GNSS navigation and external traffic management communication for safe autonomous operation, yet both subsystems are vulnerable to spoofing, jamming, and link degradation. This thesis designs and partially verifies a Resilient Navigation and Communication Architecture (RNCA) for a representative UAM vehicle, integrating an Integrity Monitoring Subsystem based on the Normalised Innovation Squared chi-square test, a Degraded-Mode Decision Module implementing graceful-degradation, and a Communication Resilience Policy grounded in FAA and ICAO regulatory standards.",
    contribution:
      "Designed the RNCA framework integrating integrity monitoring, degraded-mode decision logic, and communication resilience policies. Developed Extended Kalman Filter fusion algorithms for GNSS/INS, implemented the NIS-based fault detection with analytically derived thresholds, and validated the four-state graceful-degradation state machine with simulation results demonstrating compliance with airworthiness requirements.",
    keywords: ["GNSS Integrity Monitoring", "Urban Air Mobility", "Kalman Filtering", "Fault Detection", "Communication Resilience", "Autonomous Navigation"],
  },
  {
    title: "Advanced Immersive Mission Control Center for Space Applications",
    authors: "B. N. Tafreshi et al.",
    venue: "TechRxiv",
    year: "2025",
    link: "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=tBIeN4oAAAAJ&citation_for_view=tBIeN4oAAAAJ:u5HHmVD_uO8C",
    abstract:
      "An advanced mission control center framework leveraging immersive technologies for enhanced situational awareness and decision-making in space operations, featuring human-in-the-loop simulation and real-time data visualization.",
    contribution:
      "Designed the system architecture for immersive mission control, implemented real-time data visualization pipelines, and contributed to the human-in-the-loop simulation framework.",
    keywords: ["System Architecture", "Real-time Visualization", "Human-in-the-Loop", "Simulation"],
  },
  {
    title: "Immersive Control Centre for Space Mission Management and Collaboration",
    authors: "B. N. Tafreshi et al.",
    venue: "SpaceOps Conference",
    year: "2025",
    link: "https://star.spaceops.org/2025/paper_lists.php",
    abstract:
      "This paper presents the design and implementation of an immersive control centre architecture for space mission management, enabling multi-user collaboration through mixed-reality environments integrated with real-time telemetry and digital twin systems.",
    contribution:
      "Developed the mission control interface architecture, integrated NASA Open MCT telemetry pipelines, and designed the multi-user collaboration framework for immersive environments.",
    keywords: ["Unreal Engine", "NASA Open MCT", "Telemetry Pipelines", "Digital Twins", "Mixed Reality"],
  },
];

const SCHOLAR_URL = "https://scholar.google.ca/citations?user=tBIeN4oAAAAJ&hl=en&oi=ao";

export default function Research() {
  return (
    <section id="research" className="section-padding section-alt">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeader
            title="Publications"
            subtitle="Peer-reviewed and preprint research"
            action={
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={SCHOLAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-accent rounded-lg text-xs font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-all shrink-0"
              >
                <GraduationCap size={14} />
                Google Scholar
                <ExternalLink size={11} />
              </motion.a>
            }
          />
        </motion.div>

        <Accordion type="multiple" className="max-w-3xl">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
            >
              <AccordionItem value={`pub-${i}`} className="border-border/50 bg-white/50 mb-3 rounded-lg px-4 border transition-all hover:bg-white hover:border-accent/20">
                <AccordionTrigger className="hover:no-underline py-4 text-left">
                  <div className="flex gap-4 pr-4 w-full">
                    <span className="mono text-xs text-accent font-bold tabular-nums pt-1 shrink-0">
                      [{i + 1}]
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-foreground leading-snug">
                        {pub.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 font-normal">
                        {pub.authors} · <em>{pub.venue}</em>, {pub.year}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-12">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {pub.abstract}
                  </p>
                  <p className="text-sm text-foreground leading-relaxed mb-4">
                    <span className="label-caps text-[9px] mr-2 text-accent font-bold">Contribution</span>
                    <span className="text-muted-foreground">{pub.contribution}</span>
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {pub.keywords.map((k) => (
                        <span key={k} className="tag">
                          {k}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      whileHover={{ x: 4 }}
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="academic-link text-xs font-semibold inline-flex items-center gap-1.5"
                    >
                      View paper <ExternalLink size={12} />
                    </motion.a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
