import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-10 border-b border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row sm:items-start gap-8 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:hidden w-24 h-24 shrink-0 overflow-hidden border border-border bg-secondary rounded transition-all hover:shadow-md"
        >
          <img
            src="/headshot.png"
            alt="Babak Nassir Tafreshi"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.p 
            className="label-caps mb-4 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Aerospace Engineering · Toronto Metropolitan University
          </motion.p>

          <h1 className="serif text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-4 lg:hidden">
            Babak N. Tafreshi
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-base font-medium text-foreground leading-relaxed mb-3">
              Avionics systems · Navigation & communication · Control engineering ·
              Safety-critical systems design
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Aerospace engineering graduate with research and industry experience in
              autonomous flight navigation, embedded control systems, manufacturing methods,
              and systems integration for mission-critical environments.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
