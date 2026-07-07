import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const education = {
  degree: "Bachelor of Engineering — Aerospace Engineering",
  institution: "Toronto Metropolitan University",
  location: "Toronto, Ontario, Canada",
  period: "2021 – 2026",
  awards: ["Dean's List", "Entrance Scholarship"],
  coursework: [
    "Avionics & Control Systems",
    "Flight Mechanics & Aerodynamics",
    "Systems Engineering",
    "Manufacturing Methods",
  ],
};

const researchInterests = [
  "Navigation & Communication Systems",
  "Control Systems Design & Verification",
  "Manufacturing & Methods Engineering",
  "Machine Learning in Aerospace",
  "Systems Engineering",
  "Safety-Critical Avionics",
];

const skillGroups = [
  {
    category: "Aerospace & Avionics",
    skills: [
      "Navigation Systems",
      "Avionics Integration",
      "Control Systems Design",
      "Signal & Data Analysis",
      "Aerodynamics",
      "Flight Mechanics",
    ],
  },
  {
    category: "Manufacturing & Methods",
    skills: [
      "Engineering Drawing Interpretation",
      "GD&T",
      "DFM / DFA",
      "BOM Preparation",
      "Work Instruction Writing",
    ],
  },
  {
    category: "CAD & Simulation",
    skills: ["CATIA V5", "SolidWorks", "ANSYS", "Simulink", "KiCAD", "Multisim"],
  },
  {
    category: "Software & Programming",
    skills: ["Python", "MATLAB", "C/C++", "ROS2", "Bash", "LaTeX"],
  },
  {
    category: "Professional Skills",
    skills: [
      "Team Leadership",
      "Project Management",
      "Technical Communication",
      "Problem Solving",
      "Time Management",
    ],
  },
];

export default function About() {
  return (
    <section id="profile" className="section-padding bg-background border-b border-border">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="Profile" subtitle="Background and technical expertise" />

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-4 text-sm leading-relaxed"
          >
            <p className="text-foreground text-base">
              I am an aerospace engineering graduate from Toronto Metropolitan University with
              industry and research experience across{" "}
              <strong className="font-semibold text-accent">
                avionics systems, control engineering, aerospace manufacturing, and data analysis.
              </strong>
            </p>
            <p className="text-muted-foreground">
              My current work focuses on aviation navigation and its reliability, embedded control
              systems, machine learning applications in aerospace, and systems integration in
              mission-critical environments.
            </p>
            <p className="text-muted-foreground">
              I am motivated by designing aerospace systems that are safe, reliable, and rigorously
              verified — from initial concept studies through physical hardware validation and
              flight testing.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 }}
              className="card-enhanced p-6"
            >
              <p className="label-caps mb-4 text-accent">Research Interests</p>
              <ul className="space-y-2.5">
                {researchInterests.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + idx * 0.05 }}
                    className="text-sm text-foreground flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 }}
              className="hidden sm:block"
            >
              <div className="w-full aspect-[4/3] overflow-hidden border-2 border-border bg-secondary rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <img
                  src="/Cockpit.png"
                  alt="Cockpit - Aerospace Systems"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15 }}
            className="pt-6 border-t-2 border-accent/20"
          >
            <p className="label-caps mb-5 text-accent">Education</p>
            <article className="card-enhanced p-6 accent-line">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">{education.degree}</h3>
                  <p className="text-sm text-accent font-semibold mt-2">{education.institution}</p>
                  <p className="text-xs text-muted-foreground">{education.location}</p>
                </div>
                <span className="mono text-xs text-muted-foreground whitespace-nowrap font-semibold">
                  {education.period}
                </span>
              </div>
              <div className="mb-4">
                <p className="label-caps mb-2">Awards</p>
                <div className="flex flex-wrap gap-2">
                  {education.awards.map((award) => (
                    <span
                      key={award}
                      className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-accent bg-accent/8 border border-accent/25 rounded-sm"
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span key={c} className="tag">
                    {c}
                  </span>
                ))}
              </div>
            </article>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2 }}
            className="pt-6 border-t-2 border-accent/20"
          >
            <p className="label-caps mb-5 text-accent">Technical Skills</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {skillGroups.map((group, idx) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + idx * 0.05 }}
                  className="card-enhanced p-4"
                >
                  <h3 className="text-xs font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
