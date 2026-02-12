const entries = [
  {
    title: "MARS Rocketry Team",
    role: "Team Captain & Avionics Engineer",
    desc: "Former Team Captain and Avionics Engineer, leading and contributing to the design, integration, and testing of launch vehicle avionics systems.",

  },
  {
    title: "AIAA TMU Student Branch",
    role: "VP Communications",
    desc: "Vice President of Communications, supporting technical outreach, industry engagement, and coordination of student research, professional development events, and aerospace-focused initiatives in alignment with AIAA objectives.",
  },
{
  title: "MetRocketry",
  role: "Avionics Engineer",
  desc: "Contributed to Battery Management System Design and experimental testing activities, with exposure to propulsion concepts, vehicle integration, and hands-on engineering workflows in a collaborative team environment.",
},
  {
    title: "Webicore Digital Agency",
    role: "Founder",
    desc: "Founded and managed a digital agency, leading project delivery, client relations, and technical architecture decisions for website and online platform developments.",
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
