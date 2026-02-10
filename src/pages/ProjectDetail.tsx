import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projectsData } from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Project not found.</p>
        </div>
      </>
    );
  }

  const sections = [
    { label: "Problem Definition", content: project.problem },
    { label: "Engineering Approach", content: project.approach },
    { label: "Architecture", content: project.architecture },
    { label: "Results & Outcomes", content: project.results },
    { label: "Lessons Learned", content: project.lessons },
  ];

  return (
    <>
      <Navbar />
      <main className="section-padding pt-28">
        <div className="container mx-auto max-w-3xl">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Projects
          </Link>

          <p className="mono text-xs text-accent mb-2 tracking-wide uppercase">{project.subtitle}</p>
          <h1 className="text-3xl font-bold text-foreground mb-6">{project.title}</h1>
          <p className="text-muted-foreground leading-relaxed mb-10">{project.brief}</p>

          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.label} className="highlight-border pl-5">
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                  {s.label}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
              Tools & Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span key={t} className="px-3 py-1 text-sm mono bg-muted text-muted-foreground rounded-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
