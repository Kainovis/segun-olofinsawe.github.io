"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, FolderOpen, Mail, ChevronRight } from "lucide-react";

const CODE_SNIPPETS = [
  `public class MerchantService : IMerchantService {`,
  `  private readonly IMediator _mediator;`,
  `  public async Task<Result> OnboardAsync(`,
  `    OnboardMerchantCommand cmd) {`,
  `    return await _mediator.Send(cmd);`,
  `  }`,
  `}`,
  `[ApiController, Route("api/[controller]")]`,
  `public class PaymentController : ControllerBase {`,
  `var builder = WebApplication.CreateBuilder(args);`,
  `builder.Services.AddMediatR(cfg => cfg`,
  `  .RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));`,
  `services.AddDbContext<AppDbContext>(opts =>`,
  `  opts.UseSqlServer(connectionString));`,
  `public record CreateMerchantCommand(`,
  `  string Name, string BusinessType`,
  `) : IRequest<Result<MerchantDto>>;`,
];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    function draw() {
      ctx!.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0,120,212,${p.alpha})`;
        ctx!.fill();
      }
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(0,87,217,${0.08 * (1 - dist / 100)})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    }
    draw();

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}

const ROLES = [
  "Senior Software Engineer",
  "Software Architect",
  ".NET | Azure | Cloud Native",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#060d1a]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-80" />

      {/* Radial glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0057D9]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[300px] bg-[#0078D4]/10 rounded-full blur-3xl" />
      </div>

      {/* Network particles */}
      <ParticleCanvas />

      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-blue-500/10 rounded-full"
          style={{
            width: `${80 + i * 40}px`,
            height: `${80 + i * 40}px`,
            top: `${10 + i * 12}%`,
            left: `${5 + i * 15}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}

      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {CODE_SNIPPETS.slice(0, 6).map((snippet, i) => (
          <motion.div
            key={i}
            className="absolute code-snippet text-blue-300 whitespace-nowrap font-mono text-xs"
            style={{
              top: `${8 + i * 14}%`,
              right: `${2 + (i % 3) * 5}%`,
              opacity: 0.08,
            }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-4"
          >
            Segun
            <br />
            <span className="gradient-text">Olofinsawe</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-1 mb-8"
          >
            {ROLES.map((role, i) => (
              <div key={i} className="flex items-center gap-3">
                {i < ROLES.length - 1 ? (
                  <ChevronRight className="w-4 h-4 text-[#0078D4] flex-shrink-0" />
                ) : (
                  <span className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0078D4]" />
                  </span>
                )}
                <span
                  className={
                    i === 0
                      ? "text-xl sm:text-2xl font-semibold text-white"
                      : i === 1
                      ? "text-lg sm:text-xl font-medium text-slate-300"
                      : "text-base sm:text-lg font-mono text-[#0078D4]"
                  }
                >
                  {role}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10"
          >
            I design and build{" "}
            <span className="text-white font-medium">
              secure, scalable, cloud-native enterprise software
            </span>{" "}
            that powers digital banking and financial platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0057D9] hover:bg-[#0046b5] text-white font-semibold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <button
              onClick={() => {
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/10 transition-all hover:scale-105"
            >
              <FolderOpen className="w-4 h-4" />
              View Projects
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-white/5 text-slate-300 font-semibold rounded-xl border border-slate-700 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </motion.div>

          {/* Tech pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-2 mt-10"
          >
            {[".NET 8", "C#", "Azure", "SQL Server", "CQRS", "DDD", "Microservices", "Docker"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
