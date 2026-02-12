const experiences = [
  {
    lab: "Mixed-Reality Immersive Motion Simulation (MIMS) Lab",
    url: "https://people.ryerson.ca/j3chung/",
    description: "Advanced immersive technologies and mission control systems for space and aerospace applications",
    role: "Research Intern",
    date: "2024 - Present",
    highlights: [
      "Developed multi-user immersive mission control system for space operations",
      "Designed telemetry pipelines and simulation for mission control systems",
      "Contributed to development of interactive digital twin environments for aircraft simulation",
      "Developed human-in-the-loop simulation frameworks",
      "Researched on reliability and security of aerospace systems",
      "Researched on aerospace system vulnerability and mitigation approaches under adversarial conditions",
      "Analysed GPS-denied and adversarial operating condition for AAM systems",
      "Researched on data-driven detection methods for navigation signal spoofing and integrity attacks",
      "Researched post-quantum communication concepts for safety-critical systems",
    ],
    relevance: ["Autonomy", "System Reliability", "Control Environments", "Navigation System", "Simulation" ]
  },
  {
    lab: "Autonomous Vehicles Laboratory (AVL)",
    url: "https://www.torontomu.ca/autonomous-vehicles-lab/",
    description: "Robotics research focused on autonomous legged and mobile manipulation systems",
    role: "Research Intern",
    date: "2025 - 2026",
    highlights: [
      "Autonomous legged-manipulator robotic systems combining quadruped locomotion and arm manipulation",
      "ROS2-based system architecture design for distributed autonomous control",
      "Mobility–manipulation coupling for coordinated whole-body autonomy",
      "Perception-driven manipulation pipelines",
      "Visual servoing algorithms for autonomous grasping and target tracking",
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
              <div className="flex items-center justify-between mb-1">
                <a href={exp.url} target="_blank" rel="noopener noreferrer" title={exp.description} className="text-lg font-semibold text-accent hover:underline">
                  {exp.lab}
                </a>
                <span className="text-xs text-muted-foreground">{exp.date}</span>
              </div>
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
