"use client";

import { useRef, useState, useEffect } from "react";

function useScrollReveal(threshold = 0.2) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const philosophy = [
  {
    num: "01",
    title: "Listen First",
    desc: "Every project begins with deeply understanding the client's vision, lifestyle, and aspirations.",
  },
  {
    num: "02",
    title: "Design with Context",
    desc: "We study site, climate, and culture to create architecture that belongs where it stands.",
  },
  {
    num: "03",
    title: "Build with Precision",
    desc: "Meticulous documentation, BIM coordination, and on-site supervision ensure flawless execution.",
  },
];

export default function About() {
  const { ref: headRef, visible: headVisible } = useScrollReveal(0.2);
  const { ref: contentRef, visible: contentVisible } = useScrollReveal(0.15);

  return (
    <section id="about" className="py-32 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headRef}
          className={`mb-20 transition-all duration-700 ${
            headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[#C2A36B] text-xs uppercase tracking-[0.4em] font-inter font-medium">
            / About Us
          </span>
          <h2 className="font-playfair text-4xl md:text-6xl font-medium text-[#0A1628] mt-3 max-w-3xl leading-tight">
            Architecture Rooted in Vision &amp; Function
          </h2>
        </div>

        {/* Main content grid */}
        <div
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start transition-all duration-700 delay-200 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left — text */}
          <div>
            <p className="font-inter text-[#0A1628]/70 text-lg leading-relaxed mb-8">
              Kala Drishya Architects is a Surat-based architecture and design
              firm established in 2019, delivering high-quality, end-to-end
              solutions across residential and commercial sectors. We combine
              creative vision with technical expertise to produce spaces that
              are beautiful, functional, and built to last.
            </p>
            <p className="font-inter text-[#0A1628]/60 text-base leading-relaxed mb-10">
              With 78+ completed projects, our portfolio spans architectural
              design, interior design, BIM coordination, project management
              consultancy, and detailed 2D/3D planning. Each engagement is
              treated with the same rigour — whether a private residence or a
              large commercial development.
            </p>

            {/* Leadership */}
            <div className="border-t border-[#0A1628]/10 pt-8">
              <h3 className="font-playfair text-xl text-[#0A1628] mb-6 font-medium">
                Leadership
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-1 bg-[#C2A36B] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-inter font-semibold text-[#0A1628] text-sm tracking-wide uppercase">
                      Ar. Keval Gohil
                    </div>
                    <div className="font-inter text-[#C2A36B] text-xs uppercase tracking-widest mt-0.5 mb-2">
                      Principal Architect
                    </div>
                    <p className="font-inter text-[#0A1628]/60 text-sm leading-relaxed">
                      Leads the design vision and architectural direction,
                      translating client aspirations into distinctive built form.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-[#C2A36B] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-inter font-semibold text-[#0A1628] text-sm tracking-wide uppercase">
                      Umang Shah
                    </div>
                    <div className="font-inter text-[#C2A36B] text-xs uppercase tracking-widest mt-0.5 mb-2">
                      Managing Partner
                    </div>
                    <p className="font-inter text-[#0A1628]/60 text-sm leading-relaxed">
                      Oversees business operations, project execution, and
                      client coordination to ensure seamless delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — philosophy + image */}
          <div>
            {/* Image */}
            <div className="relative mb-10 aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
                alt="Kala Drishya Architects studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-[#0A1628]/90 border border-[#C2A36B]/30 px-4 py-3">
                <div className="font-playfair text-[#C2A36B] text-2xl font-medium">78+</div>
                <div className="font-inter text-[#F5F5F5] text-xs uppercase tracking-widest">Projects</div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="space-y-6">
              {philosophy.map((item) => (
                <div key={item.num} className="flex gap-6 group">
                  <div className="font-inter text-[#C2A36B] text-xs font-medium w-6 flex-shrink-0 mt-1">
                    {item.num}
                  </div>
                  <div>
                    <h4 className="font-playfair text-[#0A1628] text-lg font-medium mb-1">
                      {item.title}
                    </h4>
                    <p className="font-inter text-[#0A1628]/60 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
