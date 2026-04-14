"use client";

import { useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/blocks/animated-slideshow";
import { HoverSliderContext } from "@/components/blocks/animated-slideshow";

const SERVICES = [
  {
    id: "architecture",
    title: "Architectural Design",
    imageUrl:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
    description:
      "From concept to construction — complete architectural solutions for residential and commercial projects.",
  },
  {
    id: "interior",
    title: "Interior Design",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    description:
      "Thoughtfully crafted interiors that balance aesthetics, functionality and lifestyle.",
  },
  {
    id: "bim",
    title: "BIM Services",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    description:
      "Advanced Building Information Modeling for accurate coordination and clash-free construction.",
  },
  {
    id: "pmc",
    title: "Project Management",
    imageUrl:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    description:
      "End-to-end PMC services ensuring timely delivery, quality control and budget adherence.",
  },
  {
    id: "planning",
    title: "2D / 3D Planning",
    imageUrl:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    description:
      "Precision-crafted 2D drawings and photorealistic 3D visualizations for clear design communication.",
  },
];

/* Reads context to show only the active description — no overlap */
function ActiveDescription() {
  const ctx = useContext(HoverSliderContext);
  const active = ctx?.activeSlide ?? 0;
  return (
    <div className="mt-0 bg-[#0A1628] px-5 py-4 rounded-b-sm min-h-[72px] flex items-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="font-inter text-[#9CA3AF] text-sm leading-relaxed"
        >
          {SERVICES[active].description}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-[#F5F5F5]">
      <HoverSlider className="min-h-screen place-content-center py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#C2A36B] text-xs uppercase tracking-[0.4em] font-inter font-medium">
              / Our Services
            </span>
            <p className="mt-3 font-inter text-[#0A1628]/50 text-sm max-w-md">
              Hover over a service to explore our expertise
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16">
            {/* Service list */}
            <div className="flex flex-col space-y-2 lg:space-y-3 flex-1">
              {SERVICES.map((service, index) => (
                <div key={service.id} className="group">
                  <TextStaggerHover
                    index={index}
                    className="cursor-pointer font-playfair text-3xl md:text-4xl lg:text-5xl font-medium text-[#0A1628] uppercase tracking-tight block py-1"
                    text={service.title}
                  />
                  <div className="h-px bg-[#0A1628]/10 mt-2" />
                </div>
              ))}
            </div>

            {/* Image panel */}
            <div className="w-full lg:w-[420px] xl:w-[500px] flex-shrink-0">
              <HoverSliderImageWrap className="rounded-t-sm overflow-hidden aspect-[4/3]">
                {SERVICES.map((service, index) => (
                  <HoverSliderImage
                    key={service.id}
                    index={index}
                    imageUrl={service.imageUrl}
                    src={service.imageUrl}
                    alt={service.title}
                    className="size-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                ))}
              </HoverSliderImageWrap>

              {/* Description lives here — single, animated, no overlap */}
              <ActiveDescription />

              <div className="mt-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-[#0A1628]/20" />
                <span className="font-inter text-[#0A1628]/40 text-xs tracking-widest uppercase">
                  5 Services
                </span>
              </div>
            </div>
          </div>
        </div>
      </HoverSlider>
    </section>
  );
}
