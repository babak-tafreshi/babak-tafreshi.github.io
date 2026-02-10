import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const projectsData = [
  {
    slug: "aerospace-network-security",
    title: "Aerospace Network Security",
    subtitle: "Undergraduate Thesis",
    brief: "Cybersecurity framework for safety-critical aerospace communication systems with post-quantum cryptographic considerations.",
    problem: "Modern aerospace systems rely on networked communication for mission-critical operations, yet remain vulnerable to evolving cyber threats including quantum computing attacks on classical encryption.",
    approach: "Developed a comprehensive security architecture for aerospace communication networks, analyzing attack vectors specific to safety-critical systems and proposing layered defense mechanisms including post-quantum cryptographic protocols.",
    architecture: "Multi-layered security framework incorporating network segmentation, intrusion detection systems tailored for aerospace protocols, and post-quantum key exchange mechanisms for long-duration mission security.",
    tools: ["Python", "Network Security Tools", "Cryptographic Libraries", "MATLAB", "Wireshark"],
    results: "Identified critical vulnerabilities in current aerospace communication protocols and proposed a defense-in-depth architecture validated through simulation. Demonstrated feasibility of post-quantum cryptographic integration with minimal latency overhead.",
    lessons: "Safety-critical systems require fundamentally different security approaches than commercial IT systems. The intersection of real-time constraints and security requirements demands careful co-design of communication and security architectures.",
  },
  {
    slug: "helicopter-control",
    title: "3-DOF Helicopter Modeling and Control",
    subtitle: "Control Systems Project",
    brief: "Mathematical modeling and controller design for a 3-DOF helicopter system with stability analysis and simulation validation.",
    problem: "Design and implement a control system for a 3-DOF helicopter platform that achieves stable flight dynamics across multiple operating conditions.",
    approach: "Derived equations of motion using Lagrangian mechanics, linearized the system about equilibrium points, and designed PID and state-space controllers with stability analysis using root locus and Bode plot techniques.",
    architecture: "MATLAB/Simulink model incorporating nonlinear dynamics, linearized state-space representation, and multiple controller architectures for comparative performance analysis.",
    tools: ["MATLAB", "Simulink", "Control System Toolbox", "LaTeX"],
    results: "Achieved stable tracking performance across pitch, yaw, and travel axes. Comparative analysis showed state-space controller outperforming PID in disturbance rejection and cross-coupling mitigation.",
    lessons: "Multi-DOF systems require careful consideration of coupling effects between axes. Linearization assumptions must be validated against nonlinear simulation to ensure controller robustness.",
  },
  {
    slug: "flight-dynamics",
    title: "Aircraft Flight Dynamics Simulation",
    subtitle: "Aerospace Engineering Project",
    brief: "Comprehensive flight dynamics simulation environment for analyzing aircraft stability, control response, and performance characteristics.",
    problem: "Develop a simulation framework for analyzing aircraft longitudinal and lateral-directional dynamics, including trim analysis and dynamic response to control inputs.",
    approach: "Implemented full 6-DOF equations of motion with aerodynamic coefficient models, atmospheric models, and numerical integration for time-domain simulation of aircraft response.",
    architecture: "Modular simulation architecture with separate modules for aerodynamics, propulsion, atmosphere, and equations of motion, enabling flexible aircraft configuration analysis.",
    tools: ["MATLAB", "Simulink", "Aerodynamic Databases", "Python"],
    results: "Successfully simulated longitudinal short-period and phugoid modes, lateral-directional dutch roll and spiral modes, with validation against published aircraft data.",
    lessons: "Modular simulation design enables rapid reconfiguration for different aircraft types. Numerical stability of integration schemes is critical for long-duration simulations.",
  },
  {
    slug: "ml-aerospace",
    title: "Machine Learning for Aerospace Data Analysis",
    subtitle: "Data Science & Aerospace Project",
    brief: "Application of machine learning techniques to aerospace datasets for predictive analysis and pattern recognition in flight data.",
    problem: "Extract meaningful patterns and predictive insights from large-scale aerospace datasets to support data-driven decision-making in aircraft operations and maintenance.",
    approach: "Applied supervised and unsupervised learning algorithms to aerospace telemetry data, including feature engineering specific to flight parameters, model selection, and validation frameworks.",
    architecture: "Python-based ML pipeline with data preprocessing, feature extraction, model training, cross-validation, and visualization modules tailored for aerospace time-series data.",
    tools: ["Python", "scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib"],
    results: "Developed predictive models achieving high accuracy on aerospace classification tasks. Identified key flight parameters contributing to operational anomalies through feature importance analysis.",
    lessons: "Domain expertise is essential for meaningful feature engineering in aerospace applications. Model interpretability is as important as accuracy in safety-critical contexts.",
  },
  {
    slug: "landing-gear",
    title: "Ultra-Light Aircraft Landing Gear Design",
    subtitle: "Structural Engineering Project",
    brief: "Structural design and analysis of landing gear for ultra-light aircraft with emphasis on weight optimization and load-bearing capacity.",
    problem: "Design a landing gear system for an ultra-light aircraft that meets structural requirements while minimizing weight to preserve payload capacity and flight performance.",
    approach: "Conducted load analysis per applicable regulations, designed the structural geometry using CAD tools, performed FEA stress analysis, and iterated on material selection and geometry for weight optimization.",
    architecture: "Parametric CAD model integrated with FEA simulation for iterative design optimization, with material property databases and regulatory load case definitions.",
    tools: ["CATIA V5", "ANSYS", "SolidWorks", "MATLAB", "Technical Documentation"],
    results: "Achieved a landing gear design meeting all structural requirements with a weight reduction compared to baseline conventional designs. FEA validation confirmed adequate safety margins under all load cases.",
    lessons: "Ultra-light aircraft design requires aggressive weight optimization at every level. Manufacturing constraints must be considered alongside structural optimization to ensure practical feasibility.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-1">Projects</h2>
        <div className="w-12 h-0.5 bg-accent mb-8" />

        <div className="space-y-4">
          {projectsData.map((p) => (
            <Link
              key={p.slug}
              to={`/project/${p.slug}`}
              className="block p-5 border border-border rounded-sm hover:border-accent/50 transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="mono text-xs text-muted-foreground mb-2">{p.subtitle}</p>
                  <p className="text-sm text-muted-foreground">{p.brief}</p>
                </div>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent transition-colors mt-1 flex-shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
