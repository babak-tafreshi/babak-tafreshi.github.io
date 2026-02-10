export default function About() {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-1">About</h2>
        <div className="w-12 h-0.5 bg-accent mb-8" />

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I am an aerospace engineering undergraduate with active research experience in mission
            control systems, immersive simulation environments, and autonomous robotic systems. My
            work spans the intersection of aerospace systems engineering, robotics, and
            safety-critical software design.
          </p>
          <p>
            At the Mixed-Reality Immersive Motion Simulation (MIMS) Lab, I contribute to the
            development of multi-user immersive mission control environments integrating real-time
            telemetry, digital twin technology, and human-in-the-loop simulation for space
            applications. I also research cybersecurity architectures for safety-critical aerospace
            communication systems, including post-quantum cryptographic frameworks.
          </p>
          <p>
            At the Autonomous Vehicles Laboratory (AVL), I work on legged-manipulator robotic
            systems—integrating quadruped locomotion with robotic arm manipulation using ROS2
            architectures, perception-driven control, and visual servoing pipelines.
          </p>
          <p>
            My research interests center on autonomy, perception-driven control, aerospace system
            simulation, and human-machine interaction. I am pursuing graduate research opportunities
            in autonomy, robotics, and aerospace systems at the University of Toronto.
          </p>
        </div>
      </div>
    </section>
  );
}
