import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    role: "Research Assistant",
    company: "Mixed-Reality Immersive Motion Simulation (MIMS) Lab",
    date: "Nov 2024 – Present",
    highlights: [
      "Contributed to the AVRT project in collaboration with Centennial College, Bombardier, and AERIAS — analyzed technician training workflows for the FSECU of the Bombardier Global 7500, supporting immersive simulation design, structured feedback analysis, and end-to-end project documentation.",
      "Contributed to the AIDAIR project by researching and documenting HUD update procedures in commercial aircraft, completing Research Ethics Board (REB) protocols, and maintaining rigorous technical and professional documentation standards.",
      "Developed a multi-user immersive mission control dashboard in collaboration with Columbiad Launch Services, integrating Python-based data pipelines, real-time visualization, and NASA Open MCT for live system monitoring and team collaboration.",
      "Supported human-in-the-loop simulation frameworks and maintained structured research documentation aligned with academic and industry standards throughout multiple concurrent lab projects.",
    ],
    relevance: ["HUD Systems", "REB Compliance", "Python", "Simulations", "Avionics Systems"],
  },
  {
    role: "Research Assistant",
    company: "Autonomous Vehicles Laboratory (AVL)",
    date: "2025 – 2026",
    highlights: [
      "Designed a ROS2 control pipeline integrating the AgileX Piper manipulator arm with the Unitree Go2 Pro quadruped platform, defining inter-process communication architecture, build sequencing, and component-level integration strategy across the full legged-manipulation stack.",
      "Developed and validated closed-loop visual servoing simulations using an iterative design and verification methodology, ensuring repeatable end-effector positioning performance across varied dynamic scenarios.",
      "Defined and documented system-level integration architecture for multi-node ROS2 deployments, establishing message passing protocols, topic structures, and dependency management to support reliable real-time operation.",
    ],
    relevance: ["ROS2", "Visual Servoing", "AgileX Piper", "Unitree Go2 Pro", "Control Systems", "HIL Testing"],
  },
  {
    role: "Avionics Technician",
    company: "MetRocketry (Formerly Ryerson Rocketry Club)",
    date: "May 2024 – Dec 2024",
    highlights: [
      "Collaborated with multidisciplinary teams in daily and weekly meetings to design, verify, and validate competition-grade rocket avionics architectures.",
      "Designed and modeled complex rocket components using CATIA V5 and SolidWorks, coordinating across sub-teams to guarantee structural integrity and seamless avionics integration.",
      "Maintained rigorous technical documentation across all phases including conceptual design, schematic reviews, manufacturing, and post-launch telemetry analysis.",
    ],
    relevance: ["CAD", "Manufacturing", "Avionics Integration", "Technical Documentation"],
  },
  {
    role: "Team Captain",
    company: "Metropolitan Aerospace Rocket Society (MARS)",
    date: "May 2024 – Dec 2024",
    highlights: [
      "Led a multidisciplinary engineering team in designing and manufacturing an ultra-light competition rocket from scratch.",
      "Managed the full engineering lifecycle from technical drawings and GD&T principles to aerodynamics, structures, and avionics to ensure payload constraints and competition safety standards were met.",
      "Facilitated critical design reviews (PDR, CDR) and spearheaded final integration, launch-day operations, and in-field troubleshooting strategies.",
    ],
    relevance: ["Systems Engineering", "Manufacturing", "Leadership", "CAD"],
  },
];

const leadership = [
  {
    title: "MARS Rocketry",
    role: "Team Captain",
    date: "May 2024 – Dec 2024",
    desc: "Led a multidisciplinary engineering team in system integration, rapid avionics design, and launch operation coordination from scratch.",
  },
  {
    title: "AIAA TMU Chapter",
    role: "VP Communications",
    date: "2025 – 2026",
    desc: "Managed strategic outreach for the student chapter, organizing key technical seminars and industry networking events.",
  },
  {
    title: "MetRocketry",
    role: "Avionics Engineer",
    date: "2023 – 2024",
    desc: "Contributed to Battery Management System Design and experimental testing activities, with exposure to propulsion concepts, vehicle integration, and hands-on engineering workflows in a collaborative team environment.",
  },
  {
    title: "Webicore Digital Agency",
    role: "Founder",
    date: "2022 – 2024",
    desc: "Founded a digital agency, directly leading project delivery, client relations, and technical decisions.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-background border-b border-border">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          title="Experience"
          subtitle="Research, industry, and professional engagement"
        />

        <Accordion type="multiple" defaultValue={["exp-0"]} className="max-w-3xl mb-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.05 }}
            >
              <AccordionItem key={i} value={`exp-${i}`} className="border-border/50 bg-white/50 mb-3 rounded-lg px-4 border transition-all hover:bg-white hover:border-accent/20">
                <AccordionTrigger className="hover:no-underline py-4 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 w-full pr-4">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-xs text-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="mono text-xs text-muted-foreground whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 mb-4 ml-0">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground flex items-start gap-3 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.relevance.map((r) => (
                      <span key={r} className="tag">
                        {r}
                      </span>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl"
        >
          <p className="label-caps mb-5 text-accent">Leadership &amp; Involvement</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {leadership.map((e, idx) => (
              <motion.article
                key={e.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="card-gradient p-5 group hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-2 items-start mb-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex-shrink-0 mt-1.5"></div>
                  <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-accent transition-colors">{e.title}</h3>
                </div>
                <p className="text-xs text-accent font-semibold mt-2">{e.role}</p>
                <p className="mono text-[10px] text-muted-foreground mt-1 mb-2.5">{e.date}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{e.desc}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
