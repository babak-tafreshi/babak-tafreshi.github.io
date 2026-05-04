import { motion } from "framer-motion";
import { Briefcase, Rocket, Cpu, ShieldCheck } from "lucide-react";

const experiences = [
  {
    role: "Research Assistant",
    company: "Mixed-Reality Immersive Motion Simulation (MIMS) Lab",
    date: "Nov 2024 – Present",
    icon: ShieldCheck,
    highlights: [
      "Contributed to the AVRT project in collaboration with Centennial College, Bombardier, and AERIAS — analyzed technician training workflows for the FSECU of the Bombardier Global 7500, supporting immersive simulation design, structured feedback analysis, and end-to-end project documentation.",
      "Contributed to the AIDAIR project by researching and documenting HUD update procedures in commercial aircraft, completing Research Ethics Board (REB) protocols, and maintaining rigorous technical and professional documentation standards.",
      "Developed a multi-user immersive mission control dashboard in collaboration with Columbiad Launch Services, integrating Python-based data pipelines, real-time visualization, and NASA Open MCT for live system monitoring and team collaboration.",
      "Supported human-in-the-loop simulation frameworks and maintained structured research documentation aligned with academic and industry standards throughout multiple concurrent lab projects."
    ],
    relevance: ["HUD Systems", "REB Compliance", "Python", "Simulations", "Avionics Systems"]
  },
  {
    role: "Research Assistant",
    company: "Autonomous Vehicles Laboratory (AVL)",
    date: "2025 – 2026",
    icon: Briefcase,
    highlights: [
      "Designed a ROS2 control pipeline integrating the AgileX Piper manipulator arm with the Unitree Go2 Pro quadruped platform, defining inter-process communication architecture, build sequencing, and component-level integration strategy across the full legged-manipulation stack.",
      "Developed and validated closed-loop visual servoing simulations using an iterative design and verification methodology, ensuring repeatable end-effector positioning performance across varied dynamic scenarios.",
      "Defined and documented system-level integration architecture for multi-node ROS2 deployments, establishing message passing protocols, topic structures, and dependency management to support reliable real-time operation.",
    ],
    relevance: ["ROS2", "Visual Servoing", "AgileX Piper", "Unitree Go2 Pro", "Control Systems", "HIL Testing"]
  },
  {
    role: "Avionics Technician",
    company: "MetRocketry (Formerly Ryerson Rocketry Club)",
    date: "May 2024 – Dec 2024",
    icon: Cpu,
    highlights: [
      "Collaborated with multidisciplinary teams in daily and weekly meetings to design, verify, and validate competition-grade rocket avionics architectures.",
      "Designed and modeled complex rocket components using CATIA V5 and SolidWorks, coordinating across sub-teams to guarantee structural integrity and seamless avionics integration.",
      "Maintained rigorous technical documentation across all phases including conceptual design, schematic reviews, manufacturing, and post-launch telemetry analysis."
    ],
    relevance: ["CAD", "Manufacturing", "Avionics Integration", "Technical Documentation"]
  },
  {
    role: "Team Captain",
    company: "Metropolitan Aerospace Rocket Society (MARS)",
    date: "May 2024 – Dec 2024",
    icon: Rocket,
    highlights: [
      "Led a multidisciplinary engineering team in designing and manufacturing an ultra-light competition rocket from scratch.",
      "Managed the full engineering lifecycle from technical drawings and GD&T principles to aerodynamics, structures, and avionics to ensure payload constraints and competition safety standards were met.",
      "Facilitated critical design reviews (PDR, CDR) and spearheaded final integration, launch-day operations, and in-field troubleshooting strategies."
    ],
    relevance: ["Systems Engineering", "Manufacturing", "Leadership", "CAD"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Professional Experience</h2>
          <div className="section-rule" />
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.07 * i }}
                className="group relative border-l-2 border-border hover:border-accent transition-colors duration-300 pl-6 pb-10 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 border-2 border-border group-hover:border-accent bg-background transition-colors duration-300 rounded-full" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-accent mt-0.5">{exp.company}</p>
                  </div>
                  <span className="mono text-xs text-muted-foreground whitespace-nowrap mt-1 sm:mt-1.5 flex-shrink-0">
                    {exp.date}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2.5 leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.relevance.map((r) => (
                    <span key={r} className="tag">{r}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
