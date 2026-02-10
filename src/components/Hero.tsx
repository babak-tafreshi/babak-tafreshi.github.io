import { ArrowDown, FileText, Mail, BookOpen, FolderOpen, User } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center section-padding pt-28">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-16">
          {/* Text */}
          <div className="flex-1">
            <p className="mono text-sm text-muted-foreground mb-3 tracking-wide">
              AEROSPACE ENGINEERING RESEARCHER
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Babak Nassir Tafreshi
            </h1>
            <p className="mono text-xs sm:text-sm text-accent tracking-wide mb-8">
              Aerospace Engineering · Autonomous Systems · Robotics · Mission Control & Simulation
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10">
              Aerospace engineering undergraduate and research assistant working on autonomous systems,
              robotics integration, mission control environments, and cybersecurity of safety-critical
              aerospace systems. Research interests include autonomy, perception-driven control,
              aerospace network security, and simulation-based system design.
            </p>

            <div className="flex flex-wrap gap-3 mb-16">
              <button
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
              >
                <FolderOpen size={16} /> View Projects
              </button>
              <button
                onClick={() => scrollTo("#research")}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-muted transition-colors"
              >
                <BookOpen size={16} /> Publications
              </button>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-muted transition-colors"
              >
                <FileText size={16} /> Resume
              </a>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-muted transition-colors"
              >
                <Mail size={16} /> Contact
              </button>
            </div>
          </div>

          {/* Headshot */}
          <div className="mb-8 md:mb-0 flex-shrink-0">
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full border-2 border-border bg-muted flex items-center justify-center overflow-hidden">
              {/* Replace with: <img src={headshot} alt="Babak Nassir Tafreshi" className="w-full h-full object-cover" /> */}
              <User size={48} className="text-muted-foreground" />
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollTo("#about")}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
