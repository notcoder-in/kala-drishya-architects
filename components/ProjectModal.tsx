"use client";

import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

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
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col bg-[#060d1a]/98 backdrop-blur-sm overflow-hidden"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.35 }}
            className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-[#C2A36B]/15 shrink-0"
          >
            <div className="flex items-center gap-4">
              <div className="w-5 h-px bg-[#C2A36B]" />
              <div>
                {tag && (
                  <span className="text-[#C2A36B] text-[10px] uppercase tracking-[0.4em] font-inter block mb-0.5">
                    {tag}
                  </span>
                )}
                <h2 className="font-playfair text-[#F0EDE8] text-xl md:text-2xl font-medium">
                  {title}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <p className="hidden md:block text-[#4B5563] text-xs font-inter max-w-xs leading-relaxed">
                {description}
              </p>
              <span className="text-[#4B5563] text-xs font-inter tabular-nums">
                {images.length} photos
              </span>
              <button
                onClick={onClose}
                className="text-[#9CA3AF] hover:text-[#F0EDE8] transition-colors p-1"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>

          {/* Photo Grid */}
          <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
            >
              {images.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.015, duration: 0.35 }}
                  className="break-inside-avoid group relative overflow-hidden cursor-pointer rounded-sm"
                  onClick={() => setLightboxIndex(i)}
                >
                  <img
                    src={src}
                    alt={`${title} — photo ${i + 1}`}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0A1628]/0 group-hover:bg-[#0A1628]/40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn
                      size={22}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Lightbox */}
      {isOpen && lightboxIndex !== null && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/95"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10"
          >
            <X size={22} />
          </button>

          {/* Counter */}
          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/40 text-xs font-inter tabular-nums tracking-widest">
            {lightboxIndex + 1} / {images.length}
          </span>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10 p-2"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Image */}
          <motion.img
            key={lightboxIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            src={images[lightboxIndex]}
            alt={`${title} — photo ${lightboxIndex + 1}`}
            className="max-h-[88vh] max-w-[88vw] object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10 p-2"
          >
            <ChevronRight size={32} />
          </button>

          {/* Strip thumbnails */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 overflow-x-auto max-w-[80vw] px-2">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                className={`shrink-0 w-10 h-10 rounded-sm overflow-hidden transition-all duration-200 ${
                  i === lightboxIndex
                    ? "ring-2 ring-[#C2A36B] opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
