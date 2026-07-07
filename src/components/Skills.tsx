import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const skillGroups = [
  {
    category: "Aerospace & Avionics",
    skills: [
      "Navigation Systems", "Avionics Integration",
      "Control Systems Design", "Signal & Data Analysis", "Aerodynamics", "Flight Mechanics",
    ],
  },
  {
    category: "Manufacturing & Methods",
    skills: [
      "Engineering Drawing Interpretation", "GD&T", "DFM / DFA",
      "BOM Preparation", "Work Instruction Writing",
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
    skills: ["Team Leadership", "Project Management", "Technical Communication", "Problem Solving", "Time Management"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeader title="Technical Skills" subtitle="Expertise across aerospace systems and engineering domains" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
              className="card-enhanced p-5 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-accent to-accent-secondary rounded-full"></div>
                <h3 className="label-caps text-foreground">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + idx * 0.04 }}
                    className="tag hover:scale-105"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
