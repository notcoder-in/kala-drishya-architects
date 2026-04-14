"use client";

import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  tag?: string;
  images: string[];
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  tag,
  images,
}: ProjectModalProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevImage = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + images.length) % images.length : null
    );
  }, [images.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % images.length : null
    );
  }, [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) closeLightbox();
        else onClose();
      }
      if (lightboxIndex !== null) {
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, onClose, closeLightbox, prevImage, nextImage]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Modal ── */}
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-[#060d1a] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-white/8 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-4 h-px bg-[#C2A36B]" />
                <div>
                  {tag && (
                    <span className="text-[#C2A36B] text-[10px] uppercase tracking-[0.4em] font-inter">
                      {tag}
                    </span>
                  )}
                  <h2 className="font-playfair text-[#F0EDE8] text-lg md:text-xl font-medium leading-tight">
                    {title}
                  </h2>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <p className="hidden lg:block text-[#374151] text-xs font-inter max-w-xs leading-relaxed">
                  {description}
                </p>
                <span className="text-[#374151] text-xs font-inter tabular-nums">
                  {images.length} photos
                </span>
                <button
                  onClick={onClose}
                  className="text-[#6B7280] hover:text-[#F0EDE8] transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Grid — 2-4 columns, fixed aspect ratio cards */}
            <div className="flex-1 overflow-y-auto px-6 md:px-10 py-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {images.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setLightboxIndex(i)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-[#0d1829] focus:outline-none focus:ring-1 focus:ring-[#C2A36B]"
                  >
                    <Image
                      src={src}
                      alt={`${title} — ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={i < 8 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Lightbox ── */}
          <AnimatePresence>
            {lightboxIndex !== null && (
              <motion.div
                key="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="fixed inset-0 z-60 flex items-center justify-center bg-black/95"
                onClick={closeLightbox}
              >
                {/* Close */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10 p-1"
                >
                  <X size={20} />
                </button>

                {/* Counter */}
                <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/30 text-xs font-inter tabular-nums tracking-widest">
                  {lightboxIndex + 1} / {images.length}
                </span>

                {/* Prev */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-3 md:left-6 text-white/40 hover:text-white transition-colors z-10 p-2"
                >
                  <ChevronLeft size={28} />
                </button>

                {/* Full image */}
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.18 }}
                  className="relative max-h-[85vh] max-w-[85vw] w-full h-full"
                  style={{ aspectRatio: "16/10" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={images[lightboxIndex]}
                    alt={`${title} — ${lightboxIndex + 1}`}
                    fill
                    sizes="85vw"
                    className="object-contain"
                    priority
                  />
                </motion.div>

                {/* Next */}
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-3 md:right-6 text-white/40 hover:text-white transition-colors z-10 p-2"
                >
                  <ChevronRight size={28} />
                </button>

                {/* Thumbnail strip */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 overflow-x-auto max-w-[80vw] px-2 scrollbar-none">
                  {images.map((src, i) => (
                    <button
                      key={src}
                      onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                      className={`relative shrink-0 w-10 h-10 rounded-sm overflow-hidden transition-all duration-200 ${
                        i === lightboxIndex
                          ? "ring-2 ring-[#C2A36B] opacity-100"
                          : "opacity-30 hover:opacity-60"
                      }`}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="40px"
                        className="object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
