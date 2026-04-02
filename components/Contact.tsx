"use client";

import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
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

export default function Contact() {
  const { ref, visible } = useScrollReveal(0.15);

  return (
    <section id="contact" className="py-32 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header */}
          <div className="mb-16">
            <span className="text-[#C2A36B] text-xs uppercase tracking-[0.4em] font-inter font-medium">
              / Get In Touch
            </span>
            <h2 className="font-playfair text-4xl md:text-6xl font-medium text-[#F5F5F5] mt-3 mb-4 max-w-2xl">
              Let&apos;s Build Something Extraordinary
            </h2>
            <p className="font-inter text-[#9CA3AF] max-w-xl text-base leading-relaxed">
              Whether you have a project in mind or just want to explore
              possibilities — we&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — CTA Buttons */}
            <div className="space-y-4">
              <a
                href="https://wa.me/917567751811"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366]/60 hover:bg-[#25D366]/20 px-6 py-5 group transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#25D366]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-[#25D366]" />
                </div>
                <div>
                  <div className="font-inter text-[#F5F5F5] font-medium text-sm tracking-wide">
                    WhatsApp Us
                  </div>
                  <div className="font-inter text-[#9CA3AF] text-xs mt-0.5">
                    +91 75677 51811
                  </div>
                </div>
                <div className="ml-auto text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </a>

              <a
                href="tel:+917567751811"
                className="flex items-center gap-4 bg-[#C2A36B]/10 border border-[#C2A36B]/30 hover:border-[#C2A36B]/60 hover:bg-[#C2A36B]/20 px-6 py-5 group transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#C2A36B]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-[#C2A36B]" />
                </div>
                <div>
                  <div className="font-inter text-[#F5F5F5] font-medium text-sm tracking-wide">
                    Call Us
                  </div>
                  <div className="font-inter text-[#9CA3AF] text-xs mt-0.5">
                    +91 75677 51811
                  </div>
                </div>
                <div className="ml-auto text-[#C2A36B] opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 border border-[#F5F5F5]/10 px-6 py-5">
                <div className="w-10 h-10 bg-[#F5F5F5]/5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={20} className="text-[#9CA3AF]" />
                </div>
                <div>
                  <div className="font-inter text-[#F5F5F5] font-medium text-sm tracking-wide mb-1">
                    Office Address
                  </div>
                  <div className="font-inter text-[#9CA3AF] text-sm leading-relaxed">
                    3rd Floor, The Viona<br />
                    Gaurav Path Road<br />
                    Surat, Gujarat
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Map embed placeholder */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[380px] bg-[#0A1628] border border-[#C2A36B]/20 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.888785025698!2d72.8777!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjciTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1617000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kala Drishya Architects Location"
                className="absolute inset-0 w-full h-full"
              />
              {/* Map overlay label */}
              <div className="absolute bottom-4 left-4 bg-[#0A1628]/90 border border-[#C2A36B]/30 px-4 py-2 pointer-events-none">
                <div className="font-inter text-[#C2A36B] text-xs font-medium uppercase tracking-widest">
                  Kala Drishya Architects
                </div>
                <div className="font-inter text-[#9CA3AF] text-xs mt-0.5">
                  Surat, Gujarat
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
