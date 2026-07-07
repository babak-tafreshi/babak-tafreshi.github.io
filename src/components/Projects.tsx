import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

export const projectsData = [
  {
    slug: "resilient-navigation-communication-architecture",
    title: "Resilient Navigation and Communication Architecture for Urban Air Mobility",
    subtitle: "Undergraduate Thesis",
    brief: "Designed and verified a Resilient Navigation and Communication Architecture (RNCA) for Urban Air Mobility vehicles, integrating GNSS integrity monitoring and graceful degradation mechanisms.",
    problem: "Urban Air Mobility (UAM) vehicles operating at Very Low Level (VLL) altitudes depend on GNSS navigation and external traffic management communication for safe autonomous operation. Both subsystems are highly vulnerable to spoofing, jamming, and link degradation.",
    approach: "Developed an Extended Kalman Filter (EKF) to fuse GNSS position measurements and INS dead-reckoning. Designed an Integrity Monitoring Subsystem (IMS) based on the Normalised Innovation Squared (NIS) chi-square test, and a Degraded-Mode Decision Module (DMDM) implementing a four-state graceful-degradation machine (Nominal → Caution → Degraded → Recovery → Nominal).",
    architecture: "Integrated three core subsystems: an Integrity Monitoring Subsystem (IMS), a Degraded-Mode Decision Module (DMDM), and a Communication Resilience Policy (CRP) grounded in FAA ConOps and ICAO UTM Framework parameters.",
    tools: ["Kalman Filter", "GNSS / INS Integration", "System Architecting", "NIS Chi-Square"],
    results: "Simulation of a 10 m GNSS step-bias fault successfully demonstrated 0.0 s detection latency with guaranteed false alarm rates below 1%. The DMDM successfully executed the full graceful degradation phase cycle.",
    lessons: "Detected slow-ramp spoofing sensitivity and highlighted the limitations of dropout detection via NIS alone. Proposed AIME sliding-window monitoring and Monte Carlo PLOS quantification as future mechanisms.",
    gallery: ["/projects/pp0.avif", "/projects/RNCA2.png", "/projects/RNCA3.jpg"],
  },
  {
    slug: "helicopter-control",
    title: "Control System Design for a 3-DOF Helicopter",
    subtitle: "Avionics Capstone Project",
    brief: "End-to-end design, modeling, and real-time implementation of a closed-loop cascaded control system for a laboratory-scale 3-DOF helicopter platform.",
    problem: "Achieve stable, high-performance control of highly coupled elevation, pitch, and travel dynamics while meeting strict transient and steady-state performance requirements for a multi-axis physical platform.",
    approach: "Derived nonlinear equations of motion using Newton–Euler mechanics and linearized about steady-level-flight. Designed a cascaded control architecture with independent PID for elevation and a coupled PD inner-outer loop structure for pitch and travel.",
    architecture: "Integrated trajectory generation using smooth polynomial profiles, cascaded controller architecture, IMU-assisted landing estimation, and a real-time tracking GUI enabling autonomous visual mission execution.",
    tools: ["MATLAB", "Simulink", "Root-Locus Synthesis", "Real-Time Embedded Systems", "Computer Vision"],
    results: "Validated on a physical Quanser 3-DOF helicopter with loops executing at 500 Hz. Achieved stable flight with low tracking error, robust overshoot suppression, and embedded vision-based target localization using blob detection.",
    lessons: "Hardware implementation exposes non-ideal dynamics such as actuator saturation and cross-axis coupling. Mitigating these via axis isolation and derivative filtering is critical for transforming analytical controller designs into real-world functional avionics.",
    gallery: ["/projects/CS1.jpg", "/projects/CS2.png", "/projects/CS3.png", "/projects/CS4.png"],
  },
  {
    slug: "mars-rocket-competition",
    title: "MARS Competition Rocket",
    subtitle: "Aerospace Systems & Manufacturing",
    brief: "End-to-end design, manufacturing, and launch of a custom model rocket for the Metropolitan Aerospace Rocket Society (MARS).",
    problem: "Designing and constructing a functional competition-grade rocket from absolute scratch. Requires navigating complex constraints involving center-of-pressure vs. center-of-gravity aerodynamic stability, and optimizing recovery deployment mechanisms.",
    approach: "Led Team 'To Be Determined' (2BD) through iterative design optimization using Onshape parametric CAD models. Employed meticulous methods engineering techniques to validate flight trajectories prior to establishing the build.",
    architecture: "Structured manufacturing pipeline prioritizing geometric tolerances. Engineered precision fin alignment jigs, custom fiberglass layup regimens for the body tube reinforcement, and aerodynamic composite fillets for drag reduction.",
    tools: ["Onshape CAD", "Composite Manufacturing", "Aerodynamics Formulation", "Methods Engineering", "Flight Data Analysis"],
    results: "Successfully completed final flight launch and recovery without structural failure. Telemetry and launch data analysis verified pre-flight aerodynamic simulations, resulting in a highly successful flight trajectory.",
    lessons: "Hands-on manufacturing emphasizes that physical material tolerances and assembly techniques (epoxy curing, precision fin alignment) are exactly as critical as theoretical CAD geometry for successful atmospheric flight.",
    gallery: ["/projects/M1.png", "/projects/M2.png", "/projects/M3.png", "/projects/M4.png"],
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

  lessons: "Immersive XR environments significantly enhance operator cognition when managing multi-dimensional orbital scenarios. Digital twins are most powerful when tightly integrated with live telemetry and maneuver simulation rather than used purely for visualization. Collaborative mission control requires synchronization not only of data streams but of user perspective, interaction state, and communication channels. Bridging physical operations and digital simulation reduces operational risk and enables safer real-time decision-making in space missions.",
  gallery: ["/projects/ss1.png"],
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

  lessons: "Next-generation airspace modernization requires cockpit interfaces that are tightly coupled with trajectory logic and real-time data exchange. HUD systems must evolve from static information displays to adaptive trajectory-aware guidance systems. XR-based simulation environments provide a powerful platform for accelerating cockpit architecture development before real-world deployment.",
  gallery: ["/projects/ad1.jpg"],
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

  lessons: "Effective aerospace training platforms require high geometric fidelity, procedural accuracy, and system-state realism. Digital twins are most impactful when aligned directly with operational documentation and validated through industry collaboration. Immersive simulation environments can significantly enhance technician preparedness while reducing training constraints tied to physical aircraft availability.",
  gallery: ["/projects/AV1.webp"],
},
  {
    slug: "predictive-maintenance-spatial-ml",
    title: "Predictive Maintenance via Spatial ML (AR-Oriented)",
    subtitle: "Machine Learning & Augmented Reality",
    brief: "Application of supervised machine learning to predict aerospace maintenance steps using spatial coordinate data, forming the foundation for intelligent AR-assisted guidance systems.",
    problem: "Aircraft maintenance procedures are complex and cognitively demanding. Developing intelligent Augmented Reality (AR) systems requires recognizing exactly which disassembly step a technician is currently performing based purely on spatial tool coordinates.",
    approach: "Formulated a multi-class classification pipeline where input features consist of 3D spatial coordinates (X, Y, Z). Conducted exploratory data analysis to verify spatial clustering, observing that the X-coordinate strongly correlates to step classification. Developed and benchmarked K-Nearest Neighbors, Support Vector Machines, Random Forests, and Gradient Boosting models.",
    architecture: "Serialized model deployment executing real-time inference on continuous 3D coordinate inputs, enabling procedural intelligence intended for wearable aerospace AR interfaces.",
    tools: ["Python", "Gradient Boosting", "Scikit-Learn", "3D Spatial Analytics", "AR Systems"],
    results: "The Gradient Boosting model outperformed baseline algorithms, achieving an exceptional 99.53% accuracy with near-perfect precision and F1-score, confirming strong separability of spatial patterns across structural maintenance steps.",
    lessons: "Lightweight machine learning models can be effectively leveraged for procedural intelligence within aerospace environments, massively reducing technician cognitive load without requiring heavy computational infrastructure.",
    gallery: ["/projects/ML10.png", "/projects/ML11.png"],
  },

  
  {
    slug: "pcb-inspection-yolov11",
    title: "PCB Inspection & Component Detection (YOLOv11)",
    subtitle: "Computer Vision & Deep Learning",
    brief: "Integrated classical image processing with YOLOv11-nano object detection for automated printed circuit board (PCB) inspection in aerospace manufacturing.",
    problem: "Visual inspection of PCBs requires highly robust systems capable of isolating complex features from intricate backgrounds and reliably detecting electronic components like resistors, capacitors, and ICs across scale variance.",
    approach: "Developed an OpenCV preprocessing pipeline leveraging grayscale conversion, Gaussian filtering, Otsu thresholding, and Canny edge detection for contour analysis. Fine-tuned a COCO-pretrained YOLOv11-nano model using mixed-precision GPU optimization across 13 PCB component classes.",
    architecture: "End-to-end Python pipeline chaining classical filtering algorithms with PyTorch-based YOLOv11 neural network inferences, enabling generalized visual inspection on diverse boards including Arduino and Raspberry Pi circuits.",
    tools: ["Python", "YOLOv11", "PyTorch", "OpenCV", "GPU Mixed-Precision"],
    results: "Achieved a mAP50 ≈ 0.60 across precision-recall metrics. Demonstrated pronounced detection resilience for macro and medium components against heavily cluttered manufacturing backdrops.",
    lessons: "Analysis isolated scale variance as a persistent limitation for small-object detection paradigms in dense layouts. Highlighted that classical image preprocessing directly enhances bounding-box precision in downstream deep learning pipelines.",
    gallery: ["/projects/ML30.png", "/projects/ML31.png", "/projects/ML32.png", "/projects/ML33.png", "/projects/ML34.png"],
  },
  {
    slug: "aircraft-defect-classification",
    title: "Aircraft Defect Classification (EfficientNet Transfer Learning)",
    subtitle: "Computer Vision & Deep Learning",
    brief: "Deep learning image classification system utilizing EfficientNet-B0 transfer learning for automated detection of critical structural defects in aircraft surfaces.",
    problem: "Targeting critical maintenance scenarios such as crack formation, missing fastener heads, and coating degradation. The goal was to build a high-accuracy classifier suitable for integration into automated aerospace inspection pipelines.",
    approach: "Employed transfer learning via EfficientNet-B0 utilizing pretrained ImageNet weights. Utilized a staged training process, initiating head-only training followed by deeper network fine-tuning. Applied label smoothing and class-weighted loss functions to stabilize class imbalances.",
    architecture: "Scalable transfer learning pipeline engineered around PyTorch and EfficientNet-B0, evaluated against over 2,000 independent labeled images for high-throughput structural predictive maintenance workflows.",
    tools: ["Python", "EfficientNet-B0", "Transfer Learning", "PyTorch", "Computer Vision"],
    results: "Achieved extensive 94.81% test accuracy with a macro F1-score of ~0.944. Demonstrated exceptionally high precision isolating missing fastener heads and balanced performance for complex crack/degradation instances.",
    lessons: "Confirmed the massive scalability and precision effectiveness of targeted transfer learning in unstructured aerospace settings. Demonstrated the viability of reducing manual inspection burdens while actively improving detection consistency.",
    gallery: ["/projects/ML20.png", "/projects/ML21.png", "/projects/ML22.png", "/projects/ML23.png", "/projects/ML24.png"],
  },
  {
    slug: "ultralight-landing-gear",
    title: "Lightweight ASTM A709 Steel Landing Gear System",
    subtitle: "Structural Engineering & Design",
    brief: "End-to-end design, FEA analysis, and validation of an optimized leaf spring-style landing gear system for an ultralight aircraft.",
    problem: "Ultralight aviation demands landing gear systems that maximize structural efficiency and flexibility without exceeding stringent weight constraints, where existing 7075-T6 aluminum solutions suffer from fatigue overhead.",
    approach: "Designed a rectangular leaf spring-style configuration. Benchmarked traditional aluminum parameters against ASTM A709 Grade 50 steel to evaluate tensile strength, stress distribution, fatigue resistance, and environmental durability.",
    architecture: "Parametric CAD and High-Fidelity FEA isolating peak stress nodes under acute 4g landing load simulations to recursively optimize the cross-sectional geometry.",
    tools: ["Structural Analysis", "FEA", "ASTM A709 Grade 50", "CAD Modeling", "Aviation Standards"],
    results: "Validated that the A709 Grade 50 steel geometry maintains a safety factor of 1.65 under extreme 4g load conditions, improving service life and reducing corrosion susceptibility.",
    lessons: "Strategic material choice (shifting from traditional aluminum to ASTM A709 steel) yields highly robust, low-maintenance structural components without compromising the weight-critical physics of a 1200 lbs MTOW craft.",
    gallery: ["/projects/LG22.jpg", "/projects/LG1.png"],
  },
  {
    slug: "supersonic-propulsion-design",
    title: "Supersonic Propulsion Design (Mach 3.2)",
    subtitle: "Aerodynamics & Propulsion",
    brief: "Preliminary propulsion system design encompassing an Oswatitsch-optimized supersonic inlet and parametric cycle analysis for a Mach 3.2 commercial route.",
    problem: "Designing efficient commercial propulsion at Mach 3.2. Extreme speeds natively trigger ram compression that intensely heats inlet airflow (675 K), actively restricting allowable compressor pressure ratios against standard benchmarks.",
    approach: "Designed a three-oblique-shock ramp inlet targeting the Oswatitsch equal-strength principle. Performed comprehensive 1D parametric cycle analysis to contrast a custom-designed mixed-flow turbofan against the off-the-shelf P&W J58-class turbojet.",
    architecture: "Phase I optimized shock angles (β₁ = 27.82°, β₂ = 35.60°, β₃ = 49.98°) for pressure recovery. Phase II mapped hard thermal limits (π_c = 4.0) into custom specific-thrust thermodynamic constraints.",
    tools: ["Parametric Cycle Analysis", "Oswatitsch Optimization", "Aerodynamics Dynamics", "Thermodynamics"],
    results: "The 3-shock inlet realized an immense 79.3% pressure recovery (vs. 22% for normal shocks). The custom turbofan demonstrated an exceptional 71.8% overall efficiency with a 0.110 kg/N·hr TSFC, decisively outperforming military baselines for endurance applications.",
    lessons: "Validates that sophisticated multi-shock compression sequencing and highly specialized mixed-flow turbofans are an absolute imperative to balance extreme thermal bounds with rigorous commercial fuel-economy constraints at Mach 3+.",
    gallery: ["/projects/P1.jpg", "/projects/P2.png"],
  },
  {
    slug: "high-performance-glider",
    title: "High-Performance Composite Glider",
    subtitle: "Aerodynamics & Manufacturing",
    brief: "Design, analysis, and precision fabrication of a 156g championship-winning composite glider maximizing payload-to-weight ratio.",
    problem: "Develop a functional glider maximizing payload-to-weight ratio under strict competition constraints (200g max limit) while maintaining extreme structural integrity and gliding efficiency.",
    approach: "Modeled the wing as a cantilever beam with elliptical lift distribution, validated through numerical MATLAB analysis. Selected carbon fiber-reinforced polymer (CFRP) for the upper surface and glass fiber-reinforced polymer (GFRP) for the lower surface, supported by polyurethane foam ribs.",
    architecture: "Lightweight balsa wood and carbon fiber boom fuselage integrating a NACA M22 customized airfoil. Fabricated using high-precision CNC-milled molds and laser cutting.",
    tools: ["Advanced Manufacturing", "CFRP / GFRP Composites", "MATLAB", "CNC Milling", "Aerodynamics"],
    results: "Achieved a total mass of 156g (well under the 200g limit) with an elasticity modulus of 60.65 GPa. Flight tested successfully over 16m, directly aligning with numerical predictions to secure first place in competition.",
    lessons: "Successful aerospace manufacturing requires seamless integration of theoretical aerodynamics (NACA profiles) with precise material science (CFRP/GFRP properties) and iterative fabrication techniques.",
    gallery: ["/projects/W1.png"],
  },
];

export const FallbackImage = ({ path }: { path: string }) => {
  const [error, setError] = useState(false);

  if (error || !path) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-highlight-subtle to-secondary flex flex-col items-center justify-center border border-dashed border-accent/20 p-4 text-center select-none">
        <ImageIcon className="w-8 h-8 text-accent/20 mb-2" />
        <p className="text-[10px] text-muted-foreground mono">No image</p>
      </div>
    );
  }

  return (
    <img
      src={path}
      alt="Project"
      className="w-full h-full object-cover"
      onError={() => setError(true)}
    />
  );
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding section-alt">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionHeader title="Engineering Projects" subtitle="Selected technical work and research" />
        </motion.div>

        <div className="space-y-3">
          {projectsData.map((p, idx) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.05 * (idx % 5) }}
              className="academic-entry card-gradient group hover:glow-accent-hover"
            >
              <Link to={`/project/${p.slug}`} className="block">
                <div className="grid md:grid-cols-[220px_1fr] gap-6 items-start">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-40 md:h-32 overflow-hidden border-2 border-accent/20 bg-gradient-to-br from-highlight-subtle to-white flex-shrink-0 rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                  >
                    <FallbackImage path={p.gallery?.[0] ?? ""} />
                  </motion.div>

                  <div className="min-w-0">
                    <p className="label-caps mb-2 text-accent">{p.subtitle}</p>
                    <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-snug mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2 md:line-clamp-none">
                      {p.brief}
                    </p>
                    <motion.span
                      className="inline-flex items-center gap-1.5 text-sm text-accent font-semibold group-hover:gap-2.5 transition-all"
                      whileHover={{ x: 4 }}
                    >
                      Read documentation <ArrowRight size={14} />
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
