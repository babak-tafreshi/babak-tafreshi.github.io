import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projectsData, FallbackImage } from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-background pt-14 lg:pt-0">
          <p className="text-muted-foreground mono text-sm">Project not found.</p>
        </div>
      </>
    );
  }

  const sections = [
    { label: "Problem Definition", content: project.problem },
    { label: "Engineering Approach", content: project.approach },
    { label: "System Architecture", content: project.architecture },
    { label: "Results & Validation", content: project.results },
    { label: "Lessons Learned", content: project.lessons },
  ];

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <main className="section-padding pt-20 lg:pt-10 pb-12">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to projects
            </Link>

            <header className="mb-8 pb-6 border-b border-border max-w-3xl">
              <p className="label-caps mb-2">{project.subtitle}</p>
              <h1 className="serif text-2xl md:text-3xl font-semibold text-foreground mb-3 leading-tight">
                {project.title}
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.brief}
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-4xl">
              <div className="lg:col-span-7 space-y-3">
                <div className="border border-border overflow-hidden aspect-[4/3] md:aspect-video relative bg-secondary">
                  <FallbackImage path={project.gallery[selectedImage]} />
                </div>

                {project.gallery.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto py-1">
                    {project.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`relative w-16 h-12 overflow-hidden border flex-shrink-0 transition-all ${
                          selectedImage === idx
                            ? "border-accent opacity-100"
                            : "border-border opacity-50 hover:opacity-80"
                        }`}
                      >
                        <FallbackImage path={img} />
                      </button>
                    ))}
                  </div>
                )}

                <div className="border border-border p-4 mt-4">
                  <p className="label-caps mb-3">Toolchain & Methodology</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                {sections.map((s) => (
                  <section key={s.label} className="relative pl-4 border-l border-border">
                    <h2 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">
                      {s.label}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
                  </section>
                ))}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
