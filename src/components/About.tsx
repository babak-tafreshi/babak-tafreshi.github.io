import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">About Me</h2>
          <div className="section-rule" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              I am an aerospace engineering graduate from Toronto Metropolitan University with 
              industry and research experience across{" "}
              <span className="font-semibold text-primary">avionics systems, control engineering, 
              aerospace manufacturing, and data analysis.</span>
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              My current work is in aviation navigation and its reliability, embedded control systems, 
              machine learning applications in aerospace, and systems integration in mission-critical environments.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Motivated by designing aerospace systems that are safe, reliable, and rigorously verified 
              from initial concept studies to physical hardware validation and flight testing.
            </p>

            {/* Key competencies in a clean list */}
            <div className="pt-4 border-t border-border">
              <p className="mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Core Competency Areas</p>
              <ul className="space-y-1.5">
                {[
                  "Navigation and Communication Systems",
                  "Control Systems Design and Verification",
                  "Manufacturing and Methods Engineering",
                  "Machine Learning",
                  "Systems Engineering"
                ].map(item => (
                  <li key={item} className="text-sm text-foreground flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full aspect-[4/3] overflow-hidden border border-border bg-secondary">
              <img
                src="/about-pic.jpg"
                alt="Babak Nassir Tafreshi"
                className="w-full h-full object-cover object-center hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            {/* Decorative offset border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-primary/20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
