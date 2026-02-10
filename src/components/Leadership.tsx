const entries = [
  {
    title: "MARS Rocketry Team",
    role: "Team Captain & Avionics Engineer",
    desc: "Led multidisciplinary rocketry team in system integration, avionics design, and launch operations coordination.",
  },
  {
    title: "AIAA TMU Student Branch",
    role: "VP Communications",
    desc: "Managed outreach and technical communications for the student chapter, organizing seminars and industry networking events.",
  },
  {
    title: "Velocity Autonomous Systems Team",
    role: "Team Member",
    desc: "Contributed to autonomous vehicle system development, focusing on perception and control subsystems.",
  },
  {
    title: "Webicore Digital Agency",
    role: "Founder",
    desc: "Founded and managed a digital agency, leading project delivery, client relations, and technical architecture decisions.",
  },
];

export default function Leadership() {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-1">Leadership & Teams</h2>
        <div className="w-12 h-0.5 bg-accent mb-8" />

        <div className="grid sm:grid-cols-2 gap-6">
          {entries.map((e) => (
            <div key={e.title} className="highlight-border pl-4">
              <h3 className="text-sm font-semibold text-foreground">{e.title}</h3>
              <p className="mono text-xs text-accent mb-1">{e.role}</p>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
