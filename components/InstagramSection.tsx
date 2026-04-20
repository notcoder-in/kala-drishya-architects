"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { Instagram, ExternalLink } from "lucide-react";

const HANDLE = "kala_drishya_architects";
const PROFILE_URL = "https://www.instagram.com/kala_drishya_architects/";

// Paste your Behold widget ID here after signing up at behold.so
// e.g. "behold-widget-AbCdEfGh"
const BEHOLD_WIDGET_ID = "BeholdWidget-wPrdH";

export default function InstagramSection() {
  useEffect(() => {
    if (!BEHOLD_WIDGET_ID) return;
    const script = document.createElement("script");
    script.src = "https://w.behold.so/widget.js";
    script.type = "module";
    document.head.appendChild(script);
  }, []);

  return (
    <section className="bg-[#0A1628] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#C2A36B] text-xs uppercase tracking-[0.4em] font-inter flex items-center gap-2"
            >
              <Instagram size={12} />
              Follow Our Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-playfair text-[#F0EDE8] text-3xl md:text-4xl lg:text-5xl font-medium mt-3"
            >
              @{HANDLE}
            </motion.h2>
          </div>

          <motion.a
            href={PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="group flex items-center gap-2 border border-[#C2A36B]/40 text-[#C2A36B] px-5 py-2.5 text-xs font-inter uppercase tracking-widest hover:bg-[#C2A36B]/10 hover:border-[#C2A36B] transition-all duration-300 shrink-0"
          >
            <Instagram size={13} />
            Follow on Instagram
            <ExternalLink size={11} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </div>

        {/* Instagram feed widget OR fallback CTA */}
        {BEHOLD_WIDGET_ID ? (
          <div id={BEHOLD_WIDGET_ID} />
        ) : (
          /* Fallback: shown until BEHOLD_WIDGET_ID is filled in */
          <div className="border border-white/10 rounded p-10 flex flex-col items-center gap-5 text-center">
            <Instagram size={40} className="text-[#C2A36B]" />
            <p className="text-[#F0EDE8] font-playfair text-2xl">@{HANDLE}</p>
            <p className="text-[#4B5563] text-sm font-inter max-w-xs">
              Behind-the-scenes, project reveals and design inspiration.
            </p>
            <a
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-[#C2A36B] to-[#d4b87d] text-[#0A1628] px-6 py-3 text-xs font-semibold font-inter uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              <Instagram size={14} />
              View on Instagram
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
