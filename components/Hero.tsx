"use client";

import { LayoutGroup, motion } from "motion/react";
import { TextRotate } from "@/components/ui/text-rotate";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

const SERVICES = [
  "Architecture",
  "Interiors",
  "BIM Services",
  "3D Planning",
  "Landscape",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A1628]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Kala Drishya Architecture"
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/60 via-[#0A1628]/40 to-[#0A1628]" />
      </div>

      {/* Grid lines decoration */}
      <div className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(#C2A36B 1px, transparent 1px), linear-gradient(90deg, #C2A36B 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-[#C2A36B] text-xs uppercase tracking-[0.4em] font-inter font-medium">
            Surat, Gujarat · Est. 2019
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-playfair text-[#F5F5F5] text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-4 max-w-4xl"
        >
          Designing Spaces That{" "}
          <span className="block text-[#C2A36B] italic">Reflect Vision.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-inter text-[#9CA3AF] text-lg md:text-xl">
            Specialising in
          </span>
          <LayoutGroup>
            <motion.div layout className="overflow-hidden">
              <TextRotate
                texts={SERVICES}
                mainClassName="text-[#C2A36B] font-playfair text-lg md:text-xl italic"
                staggerFrom="first"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.03}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
                splitBy="characters"
              />
            </motion.div>
          </LayoutGroup>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-inter text-[#9CA3AF] text-base md:text-lg max-w-xl leading-relaxed mb-12"
        >
          A Surat-based architecture and design firm combining creative vision
          with technical precision — delivering 78+ projects across residential
          and commercial sectors since 2019.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="#portfolio"
            className="bg-[#C2A36B] text-[#0A1628] px-8 py-4 text-sm font-semibold tracking-wider hover:bg-[#d4b87d] transition-all duration-300 font-inter"
          >
            View Portfolio
          </Link>
          <a
            href="https://wa.me/917567751811"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#C2A36B]/50 text-[#C2A36B] px-8 py-4 text-sm font-semibold tracking-wider hover:border-[#C2A36B] hover:bg-[#C2A36B]/10 transition-all duration-300 font-inter"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[#C2A36B] text-[0.6rem] uppercase tracking-[0.3em] font-inter">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-[#C2A36B]" />
        </motion.div>
      </motion.div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C2A36B]/40 to-transparent" />
    </section>
  );
}
