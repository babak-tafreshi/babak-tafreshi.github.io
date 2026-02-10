import { ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Immersive Control Centre for Space Mission Management and Collaboration",
    venue: "SpaceOps 2025",
    abstract:
      "This paper presents the design and implementation of an immersive control centre architecture for space mission management, enabling multi-user collaboration through mixed-reality environments integrated with real-time telemetry and digital twin systems.",
    contribution:
      "Developed the mission control interface architecture, integrated NASA Open MCT telemetry pipelines, and designed the multi-user collaboration framework for immersive environments.",
    tech: ["Unreal Engine", "NASA Open MCT", "Telemetry Pipelines", "Digital Twins", "Mixed Reality"],
  },
  {
    title: "Advanced Immersive Mission Control Center for Space Applications",
    venue: "TechRxiv 2025",
    abstract:
      "An advanced mission control center framework leveraging immersive technologies for enhanced situational awareness and decision-making in space operations, featuring human-in-the-loop simulation and real-time data visualization.",
    contribution:
      "Designed the system architecture for immersive mission control, implemented real-time data visualization pipelines, and contributed to the human-in-the-loop simulation framework.",
    tech: ["System Architecture", "Real-time Visualization", "Human-in-the-Loop", "Simulation"],
  },
];

export default function Research() {
  return (
    <section id="research" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground mb-1">Research & Publications</h2>
        <div className="w-12 h-0.5 bg-accent mb-8" />

        <div className="space-y-8">
          {publications.map((pub, i) => (
            <article key={i} className="highlight-border pl-5 py-1">
              <h3 className="text-lg font-semibold text-foreground mb-1">{pub.title}</h3>
              <p className="mono text-xs text-accent mb-3">{pub.venue}</p>

              <div className="mb-3">
                <p className="text-xs font-medium text-foreground mb-1 uppercase tracking-wider">Abstract</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{pub.abstract}</p>
              </div>

              <div className="mb-3">
                <p className="text-xs font-medium text-foreground mb-1 uppercase tracking-wider">Contribution</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{pub.contribution}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {pub.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs mono bg-muted text-muted-foreground rounded-sm">
                    {t}
                  </span>
                ))}
              </div>

              <button className="inline-flex items-center gap-1 text-xs text-accent hover:underline">
                View Publication <ExternalLink size={12} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
