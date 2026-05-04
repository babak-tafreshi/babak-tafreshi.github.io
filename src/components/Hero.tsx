import { ArrowDown, BookOpen, FolderOpen, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;
    let W = 0, H = 0;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const navy = "34, 58, 100";   // rgb for primary navy
    const steel = "50, 100, 170"; // rgb for accent steel blue

    const drawGrid = () => {
      const spacing = 48;
      ctx.strokeStyle = `rgba(${navy}, 0.045)`;
      ctx.lineWidth = 0.5;
      for (let x = 0; x < W; x += spacing) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += spacing) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
      // Dot intersections
      for (let x = 0; x < W; x += spacing) {
        for (let y = 0; y < H; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${navy}, 0.1)`;
          ctx.fill();
        }
      }
    };

    /* ── Rotating wireframe globe in top-right quadrant ── */
    const drawGlobe = (cx: number, cy: number, r: number) => {
      const lon = (t * 0.008) % (Math.PI * 2);

      /*  outer circle */
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${navy}, 0.12)`;
      ctx.lineWidth = 1;
      ctx.stroke();

      /* meridians (rotates slowly) */
      const meridians = 8;
      for (let i = 0; i < meridians; i++) {
        const angle = lon + (i / meridians) * Math.PI;
        // project as ellipse
        const rx = Math.abs(Math.cos(angle)) * r;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, r, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${navy}, 0.07)`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      /* parallels */
      const parallels = 6;
      for (let i = 1; i < parallels; i++) {
        const lat = (i / parallels) * Math.PI;
        const ry = Math.sin(lat) * r;
        const off = Math.cos(lat) * r;
        ctx.beginPath();
        ctx.ellipse(cx, cy + off, ry, ry * 0.18, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${navy}, 0.07)`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      /* glowing equatorial ring */
      ctx.beginPath();
      ctx.ellipse(cx, cy, r, r * 0.18, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${steel}, 0.22)`;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      /* small polar caps */
      ctx.beginPath();
      ctx.arc(cx, cy - r, 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${steel}, 0.3)`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx, cy + r, 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${steel}, 0.2)`;
      ctx.fill();
    };

    /* ── Attitude indicator (artificial horizon rings) in bottom-left ── */
    const drawAttitudeRings = (cx: number, cy: number, baseR: number) => {
      const rings = [1, 0.72, 0.48];
      const pitch = Math.sin(t * 0.005) * 0.12;
      rings.forEach((scale, i) => {
        const r = baseR * scale;
        ctx.beginPath();
        ctx.ellipse(cx, cy + r * pitch, r, r * 0.18, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${steel}, ${0.12 - i * 0.03})`;
        ctx.lineWidth = i === 0 ? 1 : 0.6;
        ctx.stroke();
      });
      // Outer ATI ring
      ctx.beginPath();
      ctx.arc(cx, cy, baseR, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${navy}, 0.1)`;
      ctx.lineWidth = 1;
      ctx.stroke();
      // Crosshair
      ctx.strokeStyle = `rgba(${steel}, 0.15)`;
      ctx.lineWidth = 0.6;
      ctx.beginPath(); ctx.moveTo(cx - baseR, cy); ctx.lineTo(cx + baseR, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, cy - baseR); ctx.lineTo(cx, cy + baseR); ctx.stroke();
    };

    /* ── Animated orbital flight path ── */
    const drawOrbit = (progress: number) => {
      const cx = W * 0.68, cy = H * 0.4;
      const rx = W * 0.30, ry = H * 0.20;
      const tilt = -0.22;

      // faint full ellipse
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(tilt);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${navy}, 0.06)`;
      ctx.lineWidth = 0.8;
      ctx.setLineDash([4, 8]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // animated satellite dot + trail
      const angle = progress * Math.PI * 2;
      const sx = cx + Math.cos(angle) * rx * Math.cos(tilt) - Math.sin(angle) * ry * Math.sin(tilt);
      const sy = cy + Math.cos(angle) * rx * Math.sin(tilt) + Math.sin(angle) * ry * Math.cos(tilt);

      // trail
      const trailLen = 50;
      for (let k = 1; k <= trailLen; k++) {
        const ta = (progress - k * 0.003) * Math.PI * 2;
        const tx2 = cx + Math.cos(ta) * rx * Math.cos(tilt) - Math.sin(ta) * ry * Math.sin(tilt);
        const ty2 = cy + Math.cos(ta) * rx * Math.sin(tilt) + Math.sin(ta) * ry * Math.cos(tilt);
        ctx.beginPath();
        ctx.arc(tx2, ty2, 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${steel}, ${(1 - k / trailLen) * 0.3})`;
        ctx.fill();
      }
      // satellite dot
      ctx.beginPath();
      ctx.arc(sx, sy, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${steel}, 0.7)`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(sx, sy, 6, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${steel}, 0.25)`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    /* ── Sweep / radar line ── */
    const drawRadar = (cx: number, cy: number, r: number) => {
      const sweep = (t * 0.006) % (Math.PI * 2);
      ctx.save();
      ctx.translate(cx, cy);

      // outer ring
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${navy}, 0.09)`;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // inner rings
      [0.66, 0.33].forEach(s => {
        ctx.beginPath();
        ctx.arc(0, 0, r * s, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${navy}, 0.06)`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // sweep cone
      const grad = ctx.createConicalGradient
        ? (ctx as any).createConicalGradient(0, 0, sweep)
        : null;

      // Fallback: draw an arc wedge
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, r, sweep - 0.55, sweep, false);
      ctx.closePath();
      ctx.fillStyle = `rgba(${steel}, 0.06)`;
      ctx.fill();

      // sweep arm
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(sweep) * r, Math.sin(sweep) * r);
      ctx.strokeStyle = `rgba(${steel}, 0.25)`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // crosshairs
      ctx.setLineDash([2, 4]);
      ctx.strokeStyle = `rgba(${navy}, 0.07)`;
      ctx.lineWidth = 0.5;
      ctx.beginPath(); ctx.moveTo(-r, 0); ctx.lineTo(r, 0); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, -r); ctx.lineTo(0, r); ctx.stroke();
      ctx.setLineDash([]);

      ctx.restore();
    };

    /* ── Flight path arcs across screen ── */
    const flightPaths = [
      { y0: 0.22, y1: 0.35, cp: 0.05, color: navy, dash: [6, 10] },
      { y0: 0.55, y1: 0.65, cp: 0.45, color: steel, dash: [3, 7] },
      { y0: 0.8, y1: 0.72, cp: 0.65, color: navy, dash: [4, 12] },
    ];
    const drawFlightPaths = (progress: number) => {
      flightPaths.forEach(({ y0, y1, cp, color, dash }, idx) => {
        const p = ((progress + idx * 0.33) % 1);
        const x0 = -80, x2 = W + 80;
        const x1 = W * 0.5;
        ctx.setLineDash(dash);
        ctx.beginPath();
        ctx.moveTo(x0, H * y0);
        ctx.quadraticCurveTo(x1, H * cp, x2, H * y1);
        ctx.strokeStyle = `rgba(${color}, 0.07)`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
        ctx.setLineDash([]);

        // animated aircraft dot along path
        const bx = Math.pow(1 - p, 2) * x0 + 2 * (1 - p) * p * x1 + p * p * x2;
        const by = Math.pow(1 - p, 2) * (H * y0) + 2 * (1 - p) * p * (H * cp) + p * p * (H * y1);
        ctx.beginPath();
        ctx.arc(bx, by, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, 0.35)`;
        ctx.fill();
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t++;

      drawGrid();
      drawFlightPaths((t * 0.0012) % 1);
      drawGlobe(W * 0.78, H * 0.38, Math.min(W, H) * 0.26);
      drawAttitudeRings(W * 0.12, H * 0.82, Math.min(W, H) * 0.09);
      drawRadar(W * 0.88, H * 0.78, Math.min(W, H) * 0.07);
      drawOrbit((t * 0.00055) % 1);

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center section-padding pt-24 relative overflow-hidden bg-[hsl(210,22%,97%)]">
      {/* Aerospace canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 1 }}
      />

      {/* Gradient fade at the bottom to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[hsl(210,22%,97%)] to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">

          {/* Text */}
          <div className="flex-1 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mono text-xs text-accent uppercase tracking-[0.22em] mb-5 font-medium"
            >
              Aerospace Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="serif text-5xl sm:text-6xl lg:text-[4.5rem] font-semibold text-foreground leading-[1.1] mb-6 tracking-tight"
            >
              Babak N. Tafreshi
            </motion.h1>

            {/* Animated underline rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.38, duration: 0.5 }}
              className="w-16 h-[2px] bg-accent mb-6 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.5 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl"
            >
              Aerospace engineering graduate focused on avionics systems, methods engineering, autonomous flight navigation,
              and safety-critical system design with experience in control engineering, manufacturing,
              and systems integration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                <FolderOpen size={16} /> View Projects
              </button>
              <button
                onClick={() => scrollTo("#research")}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent text-foreground text-sm font-medium border border-border hover:border-primary/40 hover:text-primary transition-colors duration-200"
              >
                <BookOpen size={16} /> Publications
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent text-foreground text-sm font-medium border border-border hover:border-primary/40 hover:text-primary transition-colors duration-200"
              >
                <Mail size={16} /> Contact
              </button>
            </motion.div>
          </div>

          {/* Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="mb-8 md:mb-0 flex-shrink-0 relative"
          >
            <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 xl:w-80 xl:h-80 overflow-hidden border border-border shadow-md bg-secondary">
              <img
                src="/headshot.png"
                alt="Babak Nassir Tafreshi"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Subtle offset accent border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-primary/15 pointer-events-none" />
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={() => scrollTo("#about")}
          className="text-muted-foreground hover:text-primary transition-colors absolute bottom-10 left-1/2 -translate-x-1/2"
          aria-label="Scroll down"
        >
          <ArrowDown size={22} className="animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
