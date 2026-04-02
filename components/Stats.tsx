"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedCounter } from "@/components/ui/loop-animation-hook";

const stats = [
  {
    value: "78+",
    label: "Projects Completed",
    rotating: ["Residential", "Commercial", "Institutional"],
  },
  {
    value: "2019",
    label: "Year Established",
    rotating: ["Surat, Gujarat", "India", "Global Clients"],
  },
  {
    value: "5",
    label: "Core Services",
    rotating: ["Architecture", "Interiors", "BIM"],
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    rotating: ["Design First", "Detail Driven", "On Time"],
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`border border-[#C2A36B]/20 p-8 group hover:border-[#C2A36B]/60 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms`, transition: "opacity 0.7s ease, transform 0.7s ease, border-color 0.5s ease" }}
    >
      <div className="font-playfair text-5xl md:text-6xl font-medium text-[#C2A36B] mb-2">
        {stat.value}
      </div>
      <div className="font-inter text-[#F5F5F5] text-sm uppercase tracking-[0.15em] mb-3">
        {stat.label}
      </div>
      <AnimatedCounter
        items={stat.rotating}
        delay={2000 + index * 300}
        className="font-inter text-[#9CA3AF] text-xs uppercase tracking-[0.2em]"
      />
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-[#0D1B2A] border-y border-[#C2A36B]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#C2A36B]/10">
          {stats.map((stat, i) => (
            <div key={stat.value} className="bg-[#0D1B2A]">
              <StatCard stat={stat} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
