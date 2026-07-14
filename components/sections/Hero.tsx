"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FolderOpen, Mail, ArrowDown } from "lucide-react";

/* ── Particle network canvas ───────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);

    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2 + 0.5,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x = (p.x + p.vx + W) % W;
        p.y = (p.y + p.vy + H) % H;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(26,86,255,0.5)";
        ctx.fill();
      }
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x,
            dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(26,86,255,${0.12 * (1 - d / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

/* ── Tech icons data ───────────────────────────────────────── */
const TECH_ICONS = [
  { label: "C#", bg: "#6B21A8", letter: "C#" },
  { label: ".NET", bg: "#512BD4", letter: ".N" },
  { label: "Azure", bg: "#0078D4", letter: "Az" },
  { label: "Docker", bg: "#2496ED", letter: "Do" },
  { label: "K8s", bg: "#326CE5", letter: "K8" },
  { label: "SQL", bg: "#CC2927", letter: "SQL" },
];

/* ── Main Hero Section ─────────────────────────────────────── */
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#060e1f]">
      {/* Dotted grid */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Dark navy overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060e1f] via-[#0a1628]/90 to-[#0d1f3c]/70" />

      {/* Particle network */}
      <ParticleCanvas />

      {/* Diagonal chevron shapes — right side (desktop only) */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] overflow-hidden pointer-events-none hidden lg:block">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, transparent 30%, #0f2552 30%, #1a3a6b 60%, rgba(26,86,255,0.13) 100%)",
          }}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-full"
          style={{
            background:
              "linear-gradient(140deg, transparent 38%, rgba(26,86,255,0.08) 38%, rgba(26,86,255,0.12) 55%, transparent 55%)",
          }}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-full"
          style={{
            background:
              "linear-gradient(140deg, transparent 50%, rgba(26,86,255,0.05) 50%, rgba(26,86,255,0.09) 65%, transparent 65%)",
          }}
        />

        {/* City skyline SVG */}
        <svg
          className="absolute bottom-0 right-0 w-full opacity-20"
          viewBox="0 0 700 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMax meet"
        >
          <rect x="0" y="180" width="40" height="100" fill="#38bdf8" />
          <rect x="15" y="140" width="20" height="40" fill="#38bdf8" />
          <rect x="45" y="160" width="55" height="120" fill="#38bdf8" />
          <rect x="70" y="120" width="12" height="40" fill="#38bdf8" />
          <rect x="105" y="100" width="60" height="180" fill="#38bdf8" />
          <rect x="128" y="80" width="15" height="20" fill="#38bdf8" />
          <rect x="170" y="150" width="45" height="130" fill="#38bdf8" />
          <rect x="220" y="90" width="70" height="190" fill="#38bdf8" />
          <rect x="245" y="60" width="18" height="30" fill="#38bdf8" />
          <rect x="295" y="130" width="50" height="150" fill="#38bdf8" />
          <rect x="350" y="80" width="80" height="200" fill="#38bdf8" />
          <rect x="385" y="50" width="10" height="30" fill="#38bdf8" />
          <rect x="435" y="120" width="55" height="160" fill="#38bdf8" />
          <rect x="495" y="100" width="65" height="180" fill="#38bdf8" />
          <rect x="520" y="70" width="14" height="30" fill="#38bdf8" />
          <rect x="565" y="140" width="50" height="140" fill="#38bdf8" />
          <rect x="620" y="110" width="80" height="170" fill="#38bdf8" />
        </svg>

        {/* Dotted grid top-right */}
        <div className="absolute top-8 right-12 grid grid-cols-6 gap-2.5 opacity-50">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
          ))}
        </div>

        {/* Dotted grid bottom-right */}
        <div className="absolute bottom-12 right-8 grid grid-cols-5 gap-2.5 opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1a56ff]" />
          ))}
        </div>
      </div>

      {/* Floating rings */}
      {[200, 320, 450].map((size, i) => (
        <motion.div
          key={i}
          className="absolute left-[18%] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1a56ff]/10 pointer-events-none hidden md:block"
          style={{ width: size, height: size }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 30 + i * 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-10">

          {/* ── Left: text column ── */}
          <div className="flex-1 min-w-0">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a56ff]/10 border border-[#1a56ff]/25 text-blue-300 text-xs font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <div className="flex gap-6">
            {/* Left accent line */}
            <div
              className="hidden sm:block w-1 rounded-full bg-gradient-to-b from-[#1a56ff] to-transparent flex-shrink-0 mt-2"
              style={{ height: "220px" }}
            />

            <div>
              {/* Name & title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Segun Olofinsawe
                </p>
                <p className="text-[#1a56ff] font-semibold mt-1 text-base">
                  Senior Software Engineer &amp; Architect
                </p>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-md">
                  Designing and building secure, cloud-native enterprise
                  software that powers digital banking and financial platforms
                  across Africa.
                </p>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                <button
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.08] hover:bg-white/[0.12] text-white text-sm font-semibold rounded-lg border border-white/[0.12] transition-all"
                >
                  <FolderOpen className="w-4 h-4" /> View Projects
                </button>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-white/5 text-slate-300 text-sm font-semibold rounded-lg border border-slate-700 transition-all"
                >
                  <Mail className="w-4 h-4" /> Contact Me
                </button>
              </motion.div>
            </div>
          </div>{/* end flex gap-6 */}

          {/* Tech icons row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex flex-wrap gap-4 mb-5">
              {TECH_ICONS.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.65 + i * 0.07 }}
                  whileHover={{ y: -4, scale: 1.08 }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg"
                    style={{
                      backgroundColor: t.bg,
                      boxShadow: `0 4px 20px ${t.bg}66`,
                    }}
                  >
                    {t.letter}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {t.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: "⬡", label: "Software Architecture" },
                { icon: "</>", label: "Clean Code · Better Systems" },
                { icon: "☁", label: "Cloud Native Solutions" },
              ].map((pill) => (
                <div
                  key={pill.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1a56ff]/20 bg-[#1a56ff]/5 text-slate-300 text-xs font-medium"
                >
                  <span className="text-[#38bdf8]">{pill.icon}</span>
                  {pill.label}
                </div>
              ))}
            </div>
          </motion.div>
          </div>{/* end left column */}

          {/* ── Right: profile photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-3xl bg-[#1a56ff]/30 blur-3xl scale-105 pointer-events-none" />
              {/* Blue accent shape behind image */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-gradient-to-br from-[#1a56ff]/40 to-[#38bdf8]/20 pointer-events-none" />
              {/* Image with fade-to-dark bottom */}
              <div className="relative overflow-hidden rounded-3xl" style={{ width: "320px", height: "420px" }}>
                <img
                  src="/segun.jpg"
                  alt="Segun Olofinsawe"
                  className="w-full h-full object-cover object-top"
                />
                {/* Bottom fade blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e1f] via-transparent to-transparent" />
                {/* Subtle left fade blend */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#060e1f]/30 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-5 px-4 py-2.5 rounded-xl bg-[#0a1628]/90 backdrop-blur-sm border border-[#1a56ff]/30 shadow-xl">
                <p className="text-[11px] text-slate-400 font-medium">Senior Engineer</p>
                <p className="text-sm text-white font-bold">6+ yrs experience</p>
              </div>
              {/* Top-right dots accent */}
              <div className="absolute -top-3 -right-3 grid grid-cols-3 gap-1.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1a56ff]/50" />
                ))}
              </div>
            </div>
          </motion.div>

        </div>{/* end flex row */}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
