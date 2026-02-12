const skillGroups = [
  {
    category: "Programming",
    skills: ["Python", "C/C++", "MATLAB", "Bash", "JavaScript"],
  },
  {
    category: "Robotics & Systems",
    skills: ["ROS2", "Sensor Integration", "Actuator Control", "Control Architectures"],
  },
  {
    category: "Simulation & Engineering",
    skills: ["Simulink", "ANSYS", "Unreal Engine", "CATIA V5", "SolidWorks"],
  },
  {
    category: "Software & Systems",
    skills: ["Telemetry Pipelines", "Digital Twins", "Mission Control Interfaces", "Git", "Linux"],
  },
  {
    category: "Soft Skills",
    skills: ["Team Leadership", "Project Management", "Technical Communication", "Problem Solving", "Time-Management"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding section-alt">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-1">Technical Skills</h2>
        <div className="w-12 h-0.5 bg-accent mb-8" />

        <div className="grid sm:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm mono bg-background border border-border text-muted-foreground rounded-sm"
                  >
                    {skill}
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
