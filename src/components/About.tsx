export default function About() {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-1">About</h2>
        <div className="w-12 h-0.5 bg-accent mb-8" />

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I am an aerospace engineering student at Toronto Metropolitan University with research experience in autonomy, navigation, avionics,
             aerospace network reliability and security, simulations, and immersive environments.
          
       
          </p>
          <p>
            At the Mixed-Reality Immersive Motion Simulation (MIMS) Lab, I have contributed to multiple
             academic and industry-oriented projects focused on the development of immersive simulation 
             and digital-twin environments for aerospace systems. My work involves integrating real-time 
             telemetry and human-in-the-loop simulation to study the operation and decision-making processes
              associated with complex, safety-critical aerospace platforms. Building on this simulation framework, 
              I have begun researching the reliability of autonomous aerospace systems under adversarial and degraded
               operating conditions, where traditional assumptions about signal integrity no longer hold. This includes 
               studying threats such as GPS spoofing in UAV and advanced air mobility systems, as well as exploring 
               detection and mitigation approaches using data-driven methods and emerging security architectures such 
               as post-quantum cryptography.
          </p>
          <p>
            At the Autonomous Vehicles Laboratory (AVL), I work on legged-manipulator robotic
            systems—integrating quadruped locomotion with robotic arm manipulation using ROS2
            architectures, perception-driven control, and visual servoing pipelines.
          </p>
          <p>
           My research interests focus on autonomy, control, and reliability in safety-critical 
           aerospace systems. I aim to pursue graduate research in autonomy, robotics, and 
           aerospace systems, contributing to the development of robust and trustworthy flight
            and space technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
