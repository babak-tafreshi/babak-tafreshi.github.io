import { motion } from "framer-motion";
import { Users, Rocket, Target, Code } from "lucide-react";

const entries = [
  {
    title: "MARS Rocketry",
    role: "Team Captain",
    date: "May 2024 – Dec 2024",
    icon: Rocket,
    desc: "Led a multidisciplinary engineering team in system integration, rapid avionics design, and launch operation coordination from scratch.",
  },
  {
    title: "MetRocketry",
    role: "Avionics Team Member",
    date: "May 2024 – Dec 2024",
    icon: Target,
    desc: "Spearheaded advanced avionics testing, custom payload integration, and structural validation within extreme competition-grade limits.",
  },
  {
    title: "AIAA TMU Chapter",
    role: "VP Communications",
    date: "2025 – 2026",
    icon: Users,
    desc: "Managed strategic outreach for the student chapter, organizing key technical seminars and industry networking events.",
  },
  {
    title: "Webicore Digital Agency",
    role: "Founder",
    date: "2022 – 2024",
    icon: Code,
    desc: "Founded a digital agency, directly leading project delivery, client relations, and technical decisions.",
  },
];

export default function Leadership() {
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Leadership & Involvement</h2>
          <div className="section-rule" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {entries.map((e, index) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white border border-border hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 p-2.5 border border-border text-primary group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-200">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">{e.title}</h3>
                    </div>
                    <p className="mono text-xs text-accent mb-0.5">{e.role}</p>
                    <p className="mono text-xs text-muted-foreground mb-3">{e.date}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
