import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { projectsData, FallbackImage } from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);

  // Reset scroll on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-background">
          <p className="text-muted-foreground font-mono">Status 404: Project not found.</p>
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
      <main className="section-padding pt-32 pb-24 bg-background min-h-screen relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border/50 rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-sm mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Portfolio
          </Link>

          <div className="mb-14 text-center lg:text-left max-w-4xl">
            <p className="mono font-extrabold text-accent mb-4 tracking-[0.2em] uppercase">{project.subtitle}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {project.brief}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Interactive Media Gallery Left Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Main Image Stage */}
              <div className="glass rounded-[2rem] border border-primary/10 overflow-hidden shadow-[0_20px_50px_hsl(var(--primary)/0.05)] aspect-[4/3] md:aspect-video relative select-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <FallbackImage path={project.gallery[selectedImage]} />
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Thumbnail Strip */}
              {project.gallery.length > 1 && (
                <div className="flex gap-4 overflow-x-auto py-2 p-1 hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                  {project.gallery.map((img, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setSelectedImage(idx)}
                      className={`relative w-28 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all duration-300
                        ${selectedImage === idx 
                          ? 'border-primary ring-4 ring-primary/20 scale-[1.02]' 
                          : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                        }`}
                    >
                      <FallbackImage path={img} />
                    </button>
                  ))}
                </div>
              )}

              {/* Technologies Card */}
              <div className="glass p-8 rounded-3xl border border-primary/5 mt-8 md:mt-12 shadow-lg">
                <h2 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" /> Toolchain & Methodology
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {project.tools.map((t) => (
                    <span key={t} className="px-3 py-1.5 text-sm font-mono font-bold bg-background text-foreground border border-border/60 rounded-lg shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Engineering Documentation Right Column */}
            <div className="lg:col-span-5 space-y-12">
              {sections.map((s, idx) => (
                <motion.div 
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-6 md:pl-8 border-l-2 border-primary/20 group hover:border-primary transition-colors duration-300"
                >
                  <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary/40 group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300" />
                  <h2 className="text-base md:text-lg font-extrabold text-foreground tracking-wide mb-3 group-hover:text-primary transition-colors">
                    {s.label}
                  </h2>
                  <p className="text-[15px] md:text-base text-muted-foreground leading-relaxed">
                    {s.content}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
