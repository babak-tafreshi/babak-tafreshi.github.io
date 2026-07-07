import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const entries = [
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

export default function Leadership() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeader title="Leadership" subtitle="Organizational roles and community engagement" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {entries.map((e, index) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06 }}
              className="card-gradient p-6 group hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-base font-bold text-foreground leading-tight group-hover:text-accent transition-colors">
                  {e.title}
                </h3>
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex-shrink-0 mt-1"></div>
              </div>
              <p className="text-sm text-accent font-semibold mb-1">{e.role}</p>
              <p className="mono text-xs text-muted-foreground mb-3 font-medium">{e.date}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
