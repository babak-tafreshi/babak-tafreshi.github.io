const experiences = [
  {
    lab: "Mixed-Reality Immersive Motion Simulation (MIMS) Lab",
    role: "Research Assistant",
    highlights: [
      "Multi-user immersive mission control system for space operations",
      "Telemetry pipelines and NASA Open MCT integration",
      "Digital twin environments for spacecraft simulation",
      "Human-in-the-loop simulation frameworks",
      "Aerospace cybersecurity architecture research",
      "Post-quantum communication concepts for safety-critical systems",
      "Safety-critical system design and validation",
    ],
    relevance: ["Autonomy", "System Integration", "Control Environments", "Distributed Systems"],
  },
  {
    lab: "Autonomous Vehicles Laboratory (AVL)",
    role: "Research Assistant",
    highlights: [
      "Legged-manipulator robotic systems (quadruped + robotic arm)",
      "ROS2 architecture design and implementation",
      "Mobility-manipulation coupling algorithms",
      "Perception-driven manipulation pipelines",
      "Visual servoing for autonomous grasping",
      "Autonomous control pipeline development",
    ],
    relevance: ["Robotics", "Autonomy", "Perception-Driven Control", "Mobile Manipulation"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding section-alt">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-1">Research Experience</h2>
        <div className="w-12 h-0.5 bg-accent mb-8" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold text-foreground">{exp.lab}</h3>
              <p className="mono text-xs text-accent mb-4">{exp.role}</p>

              <ul className="space-y-1.5 mb-4">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.relevance.map((r) => (
                  <span key={r} className="px-2 py-0.5 text-xs font-medium highlight-bg text-accent rounded-sm">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
