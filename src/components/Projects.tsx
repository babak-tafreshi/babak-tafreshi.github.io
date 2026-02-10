import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const projectsData = [
  {
   slug: "autonomous-aerospace-network-reliability",
title: "Reliability and Security of Autonomous Aerospace Networks",
subtitle: "Undergraduate Thesis",
brief: "System-level study of communication and navigation reliability in autonomous aerospace systems operating under adversarial and degraded conditions.",
problem: "Autonomous aerospace systems increasingly rely on networked communication and navigation for decision-making and control. These systems must operate safely despite adversarial threats, degraded sensing, and stringent real-time constraints, making traditional IT-focused security approaches insufficient for mission-critical autonomy.",
approach: "Developed a system-level reliability and security framework for autonomous aerospace networks, focusing on how communication and navigation integrity affect autonomous decision-making. Analyzed threat models such as GPS spoofing and communication attacks, and evaluated mitigation strategies including data-driven anomaly detection and post-quantum cryptographic concepts within simulation-based mission environments.",
architecture: "Layered autonomy-aware architecture integrating resilient communication links, navigation integrity monitoring, anomaly detection at the system level, and cryptographic mechanisms designed for safety-critical and long-duration aerospace missions.",
tools: ["Python", "MATLAB", "Simulation Frameworks", "Network Analysis Tools", "Telemetry and Sensor Data"],
results: "Identified key failure modes affecting autonomous system reliability under adversarial and degraded conditions. Demonstrated how simulation-driven evaluation can be used to assess navigation integrity, communication resilience, and the feasibility of emerging security mechanisms without violating real-time operational constraints.",
lessons: "Reliability, security, and autonomy are tightly coupled in safety-critical aerospace systems. Effective system design requires co-designing autonomy, communication, and security architectures rather than treating them seperately.",
},
  {
    slug: "helicopter-control",
title: "3-DOF Quanser Helicopter Modeling and Control",
subtitle: "Avionics Project",

brief: "First-principles modeling, linearization, and feedback controller design for a laboratory-scale 3-DOF helicopter, with stability analysis and time-domain validation in simulation.",

problem: "Develop an accurate dynamic model of a 3-DOF helicopter and design feedback controllers that achieve stable regulation and trajectory tracking while accounting for axis coupling and actuator dynamics.",

approach: "Derived nonlinear equations of motion from first principles and linearized the system about operating points. Identified and modeled individual plant dynamics for travel, pitch, and elevation, then designed and tuned PID controllers. Stability and performance were evaluated using root locus, frequency-domain analysis, and time-domain simulations."
,
architecture: "Modular MATLAB/Simulink architecture consisting of nonlinear plant models, linearized transfer functions, axis-specific controllers, and closed-loop simulation blocks for step and sinusoidal reference tracking."
,
tools: ["MATLAB", "Simulink", "Control System Toolbox"]
,
results: "Achieved stable closed-loop response for travel and pitch dynamics with acceptable settling time and overshoot. Simulation results demonstrated the impact of controller bandwidth, derivative filtering, and axis coupling on performance."
,
lessons: "Accurate linearization and plant separation are critical for multi-DOF systems. Controller tuning must balance robustness, noise sensitivity, and coupling effects, particularly when using high-gain or derivative-dominant designs."
,
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
    subtitle: "Data-Driven Modeling and Pattern Discovery",
    brief: "Application of machine learning methods to aerospace-relevant datasets for exploratory analysis, prediction, and anomaly identification in flight and system data.",
    problem: "Aerospace systems generate high-dimensional, time-dependent data that is difficult to analyze using classical methods alone. The challenge is to extract meaningful patterns and predictive insights that can support monitoring, diagnostics, and decision-making."
,approach: "Implemented supervised and unsupervised learning workflows on aerospace-style telemetry data. Performed domain-informed feature engineering, data normalization, model selection, and performance evaluation, with emphasis on understanding model behavior rather than maximizing raw accuracy."
,
architecture: "Python-based machine learning pipeline consisting of data preprocessing, feature extraction, model training, validation, and visualization stages, designed for structured and time-series aerospace data."
,
tools: ["Python", "scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib"]
,
results: "Trained predictive and clustering models capable of capturing trends and deviations in aerospace datasets. Feature analysis highlighted the influence of key flight and system parameters on model predictions."
,
lessons: "Effective machine learning in aerospace requires strong domain knowledge to guide feature design and data interpretation. In safety-critical contexts, model transparency and validation are as important as predictive performance."
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
