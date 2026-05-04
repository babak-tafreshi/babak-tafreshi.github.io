import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Aerospace & Avionics",
    skills: [
      "Navigation Systems", "Avionics Integration",
      "Control Systems Design", "Signal & Data Analysis", "Aerodynamics", "Flight Mechanics"
    ],
  },
  {
    category: "Manufacturing & Methods",
    skills: [
      "Engineering Drawing Interpretation", "GD&T", "DFM / DFA",
      "BOM Preparation", "Work Instruction Writing"
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
    category: "Soft Skills",
    skills: ["Team Leadership", "Project Management", "Technical Communication", "Problem Solving", "Time-Management"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Technical Skills</h2>
          <div className="section-rule" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 border-b border-border pb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium border border-border bg-secondary text-foreground hover:border-primary/40 hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
