import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const projectsData = [
  {
   slug: "autonomous-aerospace-network-reliability",
title: "Reliability and Security of AAM Networks",
subtitle: "Undergraduate Thesis",
brief: "System-level study of communication and navigation reliability in AAM systems operating under adversarial and degraded conditions.",
problem: "AAM systems increasingly rely on wireless networked communication and navigation for decision-making and control. These systems must operate safely despite adversarial threats, degraded sensing, and stringent real-time constraints, making traditional IT-focused security approaches insufficient for mission-critical autonomy.",
approach: "Developed a system-level reliability and security framework for AAM networks, focusing on how communication and navigation integrity affect decision-making. Analyzed threat models such as GPS spoofing and communication attacks, and evaluated mitigation strategies including data-driven anomaly detection and post-quantum cryptographic concepts within simulation-based mission environments.",
architecture: "Layered autonomy-aware architecture integrating resilient communication links, navigation integrity monitoring, anomaly detection at the system level, and cryptographic mechanisms designed for safety-critical and long-duration aerospace missions.",
tools: ["Python", "MATLAB", "Simulation Frameworks", "Network Analysis Tools", "Telemetry and Sensor Data"],
results: "Identified key failure modes affecting avionics and autonomous system reliability under adversarial and degraded conditions. Demonstrated how simulation-driven evaluation can be used to assess navigation integrity, communication resilience, and the feasibility of emerging security mechanisms without violating real-time operational constraints.",
lessons: "Reliability, security, and autonomy are tightly coupled in safety-critical AAM systems. Effective system design requires co-designing autonomy, communication, and security architectures rather than treating them seperately.",
},
 {
    slug: "helicopter-control",
title: "3-DOF Quanser Helicopter Modeling and Control",
subtitle: "Avionics Project",

brief: "First-principles modeling, linearization, and feedback controller design for a laboratory-scale 3-DOF helicopter, with stability analysis and time-domain validation in simulation.",

problem: "Develop an accurate dynamic model of a 3-DOF helicopter and design feedback controllers that achieve stable regulation and trajectory tracking while accounting for axis coupling and actuator dynamics for a controlled mission with camera.",

approach: "Derived nonlinear equations of motion from first principles and linearized the system about operating points. Identified and modeled individual plant dynamics for travel, pitch, and elevation, then designed and tuned PID controllers. Stability and performance were evaluated using root locus, frequency-domain analysis, and time-domain simulations and performed controlled missions."
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
  slug: "immersive-mission-control",
  title: "Immersive Mission Control Center for Space Applications",
  subtitle: "Conference Paper – APISAT 2025 & SpaceOps 2025",
  brief: "Development of an XR-enabled digital twin mission control architecture integrating real-time orbital simulation, collaborative interaction, and collision-avoidance verification for next-generation space operations.",

  problem: "Traditional mission control systems rely on rigid software architectures and 2D interfaces that limit situational awareness, collaborative efficiency, and intuitive understanding of orbital dynamics. As missions grow in complexity and require distributed global coordination, conventional control rooms struggle to integrate heterogeneous data streams, simulate maneuvers collaboratively, and reduce decision latency during safety-critical events such as debris collision risks.",

  approach: "Designed and implemented an immersive mission control framework that integrates XR visualization, digital twin modeling, real-time orbital simulation, and collaborative decision support. Developed a real-time orbital dynamics engine using a two-body gravity model with Δv maneuver capability and telemetry generation compatible with TLE formats. Integrated this backend with Unreal Engine to render synchronized 3D digital twins of satellites and orbital debris. Implemented collision detection using bounding-box proximity thresholds and time-based trajectory projection, enabling immersive threat identification and maneuver verification before execution.",

  architecture: "Layered immersive mission control architecture consisting of: (1) real-time orbital simulation engine with Euler integration and maneuver modeling, (2) telemetry and TLE generation pipeline, (3) Unreal Engine digital twin environment, (4) collaborative synchronization layer via Veyond Connect server, and (5) XR interaction interfaces including haptic gloves, controllers, and tablet-based command panels. The system synchronizes orbital data, user commands, POV rendering, and live communication streams across distributed participants to support global collaborative operations.",

  tools: [
    "Unreal Engine (XR Development)",
    "Python",
    "Orekit",
    "Open MCT",
    "TLE Processing and Generation",
    "JSON Telemetry Streaming",
    "WebRTC Integration",
    "XR Headsets (VR/AR)",
  ],

  results: "Demonstrated real-time immersive collision avoidance scenario in which operators identified a predicted debris threat, collaboratively designed a new orbital trajectory, simulated post-maneuver behavior within the digital twin environment, and verified safety before command transmission. The system improved spatial awareness of orbital mechanics, reduced decision latency, and enabled synchronized multi-user interaction across distributed locations. Validation showed seamless transition between simulation, collaborative planning, and maneuver execution tracking via updated TLE data.",

  lessons: "Immersive XR environments significantly enhance operator cognition when managing multi-dimensional orbital scenarios. Digital twins are most powerful when tightly integrated with live telemetry and maneuver simulation rather than used purely for visualization. Collaborative mission control requires synchronization not only of data streams but of user perspective, interaction state, and communication channels. Bridging physical operations and digital simulation reduces operational risk and enables safer real-time decision-making in space missions."
},
  {
  slug: "adair-xr-hud-trajectory-operations",
  title: "XR-Enabled HUD Architecture for Trajectory-Based Operations",
  subtitle: "ADAIR Airspace Modernization Project",
  brief: "Contributed to the design and system-level implementation of Extended Reality (XR) Head-Up Display architectures for airport surface navigation and 4D Trajectory-Based Operations within next-generation air traffic management frameworks.",

  problem: "Next-generation airspace concepts such as Trajectory-Based Operations (TBO) and advanced surface navigation require precise time-constrained 4D trajectory management and increased aircraft-ground data exchange. Traditional cockpit workflows rely heavily on verbal ATC instructions and static navigation charts, which can limit situational awareness in congested or low-visibility conditions. A scalable cockpit-level interface architecture is required to support real-time trajectory updates, dynamic route amendments, and increased automation without introducing display clutter or cognitive overload.",

  approach: "Developed an immersive XR-based flight deck simulation environment to prototype and validate advanced HUD symbology configurations for both Surface Operations (SURF) and airborne TBO scenarios. Implemented conformal navigation overlays aligned with certified HUD design standards, integrated real-time trajectory modification logic, and simulated departure sequences including dynamic route amendments. Evaluated system performance through navigation accuracy, trajectory compliance, and operational responsiveness within high-fidelity 4D flight simulations.",

  architecture: "Integrated XR flight simulation stack combining Unreal Engine 5 rendering, JSBSim flight dynamics modeling, Cesium-based geospatial environments, modular HUD symbology layers, trajectory amendment engine, and real-time aircraft state synchronization. The architecture supports conformal 3D symbology projection, visibility-mode switching, dynamic route updates, and scalable deployment for future cockpit integration research within advanced ATM ecosystems.",

  tools: ["Unreal Engine 5", "JSBSim", "Cesium Ion", "XR Headsets (Varjo)", "Flight Dynamics Modeling", "Trajectory Planning Algorithms", "HUD Symbology Frameworks"],

  results: "Successfully implemented a scalable XR-based cockpit environment capable of simulating airport surface navigation and airborne 4D trajectory execution with dynamic route updates. Demonstrated feasibility of integrating time-constrained trajectory guidance directly into conformal HUD symbology while maintaining operational clarity. Established a modular architecture suitable for further automation integration and next-generation ATM research.",

  lessons: "Next-generation airspace modernization requires cockpit interfaces that are tightly coupled with trajectory logic and real-time data exchange. HUD systems must evolve from static information displays to adaptive trajectory-aware guidance systems. XR-based simulation environments provide a powerful platform for accelerating cockpit architecture development before real-world deployment."
},

{
  slug: "avrt-global-7500-digital-twin-training",
  title: "Immersive Digital-Twin Training Environment for Global 7500",
  subtitle: "AVRT Industry Collaboration Project",
  brief: "Development of an immersive digital-twin simulation environment for Bombardier Global 7500 maintenance training, supporting technician skill development and aircraft validation activities.",

  problem: "Modern business aircraft such as the Global 7500 incorporate highly integrated avionics, systems architecture, and maintenance procedures that are difficult and costly to train on using physical aircraft alone. Traditional classroom instruction and limited hands-on access can restrict technician readiness, increase training costs, and reduce exposure to complex or fault-based maintenance scenarios.",

  approach: "Designed and implemented immersive digital-twin simulation modules replicating Global 7500 aircraft systems and maintenance workflows within a real-time XR environment. Modeled aircraft components and maintenance tasks to allow technicians to interact with virtual systems, practice procedural operations, and simulate inspection, troubleshooting, and servicing tasks without requiring direct aircraft access. Supported aircraft testing and on-site evaluation activities to align simulation fidelity with operational maintenance requirements.",

  architecture: "Integrated immersive training architecture combining high-fidelity 3D aircraft models, system-state simulation logic, interactive maintenance task modules, and XR-based visualization. The platform enabled realistic spatial interaction, guided procedural training, and modular expansion for additional aircraft subsystems. The system was designed to mirror real aircraft geometry, access panels, and maintenance sequences to ensure alignment with operational documentation and technical manuals.",

  tools: ["Unreal Engine", "Digital Twin Modeling", "XR/VR Headsets", "Aircraft Systems Documentation", "3D Asset Development", "Interactive Simulation Frameworks"],

  results: "Delivered immersive maintenance training modules supporting Global 7500 technician preparation in a controlled virtual environment. Enabled repeatable practice of procedures, improved spatial familiarity with aircraft systems, and supported collaboration with industry partners for evaluation and validation. Contributed to bridging the gap between digital simulation and real aircraft maintenance workflows.",

  lessons: "Effective aerospace training platforms require high geometric fidelity, procedural accuracy, and system-state realism. Digital twins are most impactful when aligned directly with operational documentation and validated through industry collaboration. Immersive simulation environments can significantly enhance technician preparedness while reducing training constraints tied to physical aircraft availability."
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
