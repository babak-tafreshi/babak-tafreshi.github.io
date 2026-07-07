import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const education = [
  {
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
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeader title="Education" number="01" />
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="academic-entry"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-accent font-medium mt-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                </div>
                <span className="mono text-xs text-muted-foreground whitespace-nowrap">
                  {edu.period}
                </span>
              </div>

              <div className="mb-4">
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Awards
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.awards.map((award) => (
                    <span
                      key={award}
                      className="inline-flex items-center px-2.5 py-0.5 text-[11px] font-medium text-accent bg-accent/8 border border-accent/25 rounded-sm"
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((c) => (
                    <span key={c} className="tag">{c}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
