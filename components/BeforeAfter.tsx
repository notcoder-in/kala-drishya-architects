"use client";

import {
  ImageComparison,
  ImageComparisonImage,
  ImageComparisonSlider,
} from "@/components/ui/image-comparison";
import { useRef, useState, useEffect } from "react";

export default function BeforeAfter() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#C2A36B] text-xs uppercase tracking-[0.4em] font-inter font-medium">
            / Transformation
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl font-medium text-[#F5F5F5] mt-3 mb-4 max-w-2xl">
            Before & After — The Kala Drishya Difference
          </h2>
          <p className="font-inter text-[#9CA3AF] max-w-xl text-base leading-relaxed">
            Drag the slider to witness how we transform ordinary spaces into
            extraordinary environments. Every detail considered, every surface
            refined.
          </p>
        </div>

        {/* Comparison slider */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <ImageComparison
            className="w-full aspect-[16/9] rounded-sm overflow-hidden border border-[#C2A36B]/20"
            enableHover={false}
            springOptions={{ bounce: 0, duration: 0.3 }}
          >
            {/* Before */}
            <ImageComparisonImage
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80"
              alt="Before — plain space"
              position="right"
              className=""
            />
            {/* After */}
            <ImageComparisonImage
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80"
              alt="After — Kala Drishya transformation"
              position="left"
              className=""
            />
            {/* Slider handle */}
            <ImageComparisonSlider className="w-0.5 bg-[#C2A36B]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#C2A36B] border-2 border-white flex items-center justify-center shadow-lg">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5 4L1 8L5 12" stroke="#0A1628" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 4L15 8L11 12" stroke="#0A1628" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </ImageComparisonSlider>
          </ImageComparison>

          {/* Labels */}
          <div className="flex justify-between mt-4 px-2">
            <span className="font-inter text-xs text-[#9CA3AF] uppercase tracking-widest">
              ← After
            </span>
            <span className="font-inter text-xs text-[#9CA3AF] uppercase tracking-widest">
              Before →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
