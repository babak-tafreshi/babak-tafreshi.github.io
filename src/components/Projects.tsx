import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

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
      <div className="w-full h-full bg-accent/5 flex flex-col items-center justify-center border-2 border-dashed border-primary/20 p-6 text-center select-none group-hover:bg-primary/5 transition-colors">
        <ImageIcon className="w-10 h-10 text-primary/40 mb-3 group-hover:scale-110 transition-transform" />
        <p className="text-[11px] font-bold text-foreground mb-1 uppercase tracking-wider">Image Placeholder</p>
        <p className="text-[10px] text-muted-foreground font-mono truncate max-w-full px-2 opacity-70">
          Upload at: public{path}
        </p>
      </div>
    );
  }
  
  return (
    <img 
      src={path} 
      alt="Project Gallery" 
      className="w-full h-full object-cover" 
      onError={() => setError(true)} 
    />
  );
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">Engineering Projects</h2>
          <div className="w-24 h-1.5 bg-accent rounded-full mx-auto md:mx-0" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((p, idx) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * (idx % 3) }}
              className="h-full"
            >
              <Link
                to={`/project/${p.slug}`}
                className="block h-full group"
              >
                <div className="h-full flex flex-col glass rounded-[2rem] border border-primary/10 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_hsl(var(--primary)/0.15)] hover:border-primary/20 transition-all duration-500">
                  {/* Thumbnail Image Header */}
                  <div className="w-full h-56 relative overflow-hidden bg-background border-b border-primary/10">
                    <div className="absolute inset-0 group-hover:scale-[1.03] transition-transform duration-700">
                      <FallbackImage path={p.gallery[0]} />
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="mono text-xs text-accent mb-3 font-bold tracking-widest uppercase">{p.subtitle}</p>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-4">
                      {p.title}
                    </h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed flex-1">
                      {p.brief}
                    </p>
                    
                    <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-5">
                      <span className="text-sm font-bold text-foreground flex items-center gap-2 group-hover:text-primary transition-colors">
                        View Documentation
                      </span>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <ArrowRight size={14} className="text-primary group-hover:text-primary-foreground group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
