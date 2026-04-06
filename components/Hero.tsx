"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { LayoutGroup } from "motion/react";
import { TextRotate } from "@/components/ui/text-rotate";
import Link from "next/link";

const SERVICES = ["Architecture", "Interiors", "BIM Services", "3D Planning", "Landscape"];

const STATS = [
  { value: "78+", label: "Projects" },
  { value: "07", label: "Years" },
  { value: "100%", label: "Client Sat." },
];

/* ─── Staggered headline line ─── */
function HeadlineLine({
  text,
  delay,
  italic,
  indent = 0,
}: {
  text: string;
  delay: number;
  italic?: boolean;
  indent?: number;
}) {
  return (
    <div className="overflow-hidden" style={{ paddingLeft: indent }}>
      <motion.div
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`font-playfair leading-[0.88] tracking-tight text-[clamp(3.2rem,8.5vw,8.5rem)] ${
          italic
            ? "text-[#C2A36B] italic font-light"
            : "text-[#F0EDE8] font-medium"
        }`}
      >
        {text}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springCfg = { stiffness: 40, damping: 18 };
  const sx = useSpring(rawX, springCfg);
  const sy = useSpring(rawY, springCfg);

  /* Two parallax layers at different speeds */
  const orb1x = useTransform(sx, [-0.5, 0.5], [-30, 30]);
  const orb1y = useTransform(sy, [-0.5, 0.5], [-30, 30]);
  const orb2x = useTransform(sx, [-0.5, 0.5], [18, -18]);
  const orb2y = useTransform(sy, [-0.5, 0.5], [18, -18]);
  const orb3x = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const orb3y = useTransform(sy, [-0.5, 0.5], [-10, 10]);

  function onMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={onMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080f1e]"
    >
      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* Subtle noise grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px",
          }}
        />

        {/* Sparse dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, #C2A36B 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Large architectural circle — parallax layer 1 */}
        <motion.div
          style={{ x: orb1x, y: orb1y }}
          className="absolute right-[-8vw] top-[-5vh] w-[min(700px,70vw)] h-[min(700px,70vw)]"
        >
          <svg viewBox="0 0 700 700" fill="none" className="w-full h-full">
            <circle cx="350" cy="350" r="320" stroke="#C2A36B" strokeWidth="0.6" opacity="0.18" />
            <circle cx="350" cy="350" r="240" stroke="#C2A36B" strokeWidth="0.6" opacity="0.12" />
            <circle cx="350" cy="350" r="160" stroke="#C2A36B" strokeWidth="0.5" opacity="0.1" />
            {/* Compass cross */}
            <line x1="30" y1="350" x2="670" y2="350" stroke="#C2A36B" strokeWidth="0.4" opacity="0.14" />
            <line x1="350" y1="30" x2="350" y2="670" stroke="#C2A36B" strokeWidth="0.4" opacity="0.14" />
            {/* Diagonals */}
            <line x1="124" y1="124" x2="576" y2="576" stroke="#C2A36B" strokeWidth="0.4" opacity="0.1" />
            <line x1="576" y1="124" x2="124" y2="576" stroke="#C2A36B" strokeWidth="0.4" opacity="0.1" />
            {/* Tick marks on circle */}
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 15 * Math.PI) / 180;
              const r1 = 316, r2 = i % 6 === 0 ? 300 : 308;
              return (
                <line
                  key={i}
                  x1={350 + r1 * Math.cos(angle)}
                  y1={350 + r1 * Math.sin(angle)}
                  x2={350 + r2 * Math.cos(angle)}
                  y2={350 + r2 * Math.sin(angle)}
                  stroke="#C2A36B"
                  strokeWidth="0.6"
                  opacity="0.2"
                />
              );
            })}
          </svg>
        </motion.div>

        {/* Small rotated square — parallax layer 2 */}
        <motion.div
          style={{ x: orb2x, y: orb2y }}
          className="absolute left-[5vw] bottom-[18vh] w-28 h-28 opacity-30"
        >
          <svg viewBox="0 0 112 112" fill="none">
            <rect x="4" y="4" width="104" height="104" stroke="#C2A36B" strokeWidth="0.8" />
            <rect x="4" y="4" width="104" height="104" stroke="#C2A36B" strokeWidth="0.8" transform="rotate(45 56 56)" />
            <circle cx="56" cy="56" r="6" stroke="#C2A36B" strokeWidth="0.8" />
          </svg>
        </motion.div>

        {/* Diagonal slash line */}
        <motion.div
          style={{ x: orb3x, y: orb3y }}
          className="absolute left-0 top-0 w-full h-full"
        >
          <svg viewBox="0 0 1440 900" preserveAspectRatio="none" className="w-full h-full">
            <line x1="1080" y1="0" x2="360" y2="900" stroke="#C2A36B" strokeWidth="0.5" opacity="0.08" />
            <line x1="1140" y1="0" x2="420" y2="900" stroke="#C2A36B" strokeWidth="0.3" opacity="0.05" />
          </svg>
        </motion.div>

        {/* Top-right dot cluster */}
        <motion.div style={{ x: orb1x, y: orb1y }} className="absolute top-24 right-10 hidden lg:block">
          {Array.from({ length: 6 }).map((_, row) => (
            <div key={row} className="flex gap-[10px] mb-[10px]">
              {Array.from({ length: 6 }).map((_, col) => (
                <div
                  key={col}
                  className="w-[3px] h-[3px] rounded-full bg-[#C2A36B]"
                  style={{ opacity: 0.15 + (row + col) * 0.02 }}
                />
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 w-full pt-28 pb-24">

        {/* Label row */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center gap-3 mb-14"
        >
          <div className="w-6 h-px bg-[#C2A36B]" />
          <span className="text-[#C2A36B] text-[10px] uppercase tracking-[0.55em] font-inter">
            Surat · Gujarat · Est. 2019
          </span>
        </motion.div>

        {/* Headline — three staggered lines */}
        <div className="mb-14 select-none">
          <HeadlineLine text="Designing" delay={0.25} />
          <HeadlineLine text="Spaces" delay={0.38} italic indent="clamp(2rem, 7vw, 7rem)" />
          <HeadlineLine text="That Endure." delay={0.51} />
        </div>

        {/* Thin gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
          className="w-full h-px bg-gradient-to-r from-[#C2A36B]/50 via-[#C2A36B]/20 to-transparent mb-10"
        />

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">

          {/* Left: speciality + description */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#6B7280] text-xs font-inter uppercase tracking-widest">
                Specialising in
              </span>
              <LayoutGroup>
                <motion.div layout className="overflow-hidden">
                  <TextRotate
                    texts={SERVICES}
                    mainClassName="text-[#C2A36B] font-playfair text-sm italic"
                    staggerFrom="first"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2800}
                    splitBy="characters"
                  />
                </motion.div>
              </LayoutGroup>
            </div>
            <p className="text-[#4B5563] text-xs font-inter max-w-xs leading-relaxed">
              A design practice where architecture meets intention —<br />
              78+ delivered projects, residential to commercial.
            </p>
          </motion.div>

          {/* Center: stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex items-center gap-8 lg:gap-12"
          >
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-playfair text-[#C2A36B] text-2xl font-medium">{s.value}</div>
                <div className="text-[#4B5563] text-[10px] uppercase tracking-widest font-inter mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Right: CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="#portfolio"
              className="group relative overflow-hidden bg-[#C2A36B] text-[#080f1e] px-7 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase font-inter transition-all duration-300 hover:bg-[#d4b87d]"
            >
              <span className="relative z-10">View Portfolio</span>
            </Link>
            <a
              href="https://wa.me/917567751811"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#C2A36B]/30 text-[#C2A36B] px-7 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase font-inter transition-all duration-300 hover:border-[#C2A36B]/70 hover:bg-[#C2A36B]/5"
            >
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[#C2A36B]/50 text-[9px] uppercase tracking-[0.5em] font-inter">Scroll</span>
        <div className="w-px h-10 overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-full h-1/2 bg-gradient-to-b from-transparent to-[#C2A36B]"
          />
        </div>
      </motion.div>
    </section>
  );
}
