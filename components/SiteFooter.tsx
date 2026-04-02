import Link from "next/link";
import { Instagram, Linkedin, Youtube, Phone, MessageCircle } from "lucide-react";

const footerLinks = [
  { title: "Services", href: "#services" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "About", href: "#about" },
  { title: "BIM", href: "#services" },
  { title: "Contact", href: "#contact" },
];

const services = [
  "Architectural Design",
  "Interior Design",
  "BIM Services",
  "Project Management",
  "2D / 3D Planning",
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#060E1A] border-t border-[#C2A36B]/10">
      {/* CTA Band */}
      <div className="border-b border-[#C2A36B]/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-playfair text-2xl md:text-3xl text-[#F5F5F5] font-medium">
              Ready to start your project?
            </h3>
            <p className="font-inter text-[#9CA3AF] text-sm mt-1">
              Get in touch and let&apos;s create something remarkable together.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="https://wa.me/917567751811"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#C2A36B] text-[#0A1628] px-6 py-3 text-sm font-semibold font-inter hover:bg-[#d4b87d] transition-colors"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
            <a
              href="tel:+917567751811"
              className="flex items-center gap-2 border border-[#C2A36B] text-[#C2A36B] px-6 py-3 text-sm font-semibold font-inter hover:bg-[#C2A36B]/10 transition-colors"
            >
              <Phone size={14} />
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.svg"
                alt="Kala Drishya Architects logo"
                className="h-[50px] w-auto"
              />
              <div>
                <div className="font-playfair text-[#F5F5F5] text-base tracking-[0.12em] uppercase">
                  Kala Drishya
                </div>
                <div className="text-[#C2A36B] text-[0.6rem] tracking-[0.25em] uppercase font-inter">
                  Architects
                </div>
              </div>
            </div>
            <p className="font-inter text-[#9CA3AF] text-sm leading-relaxed max-w-sm mb-6">
              A modern, detail-driven architecture and design firm delivering
              thoughtful, functional, and visually refined spaces across
              residential and commercial projects since 2019.
            </p>
            <div className="font-inter text-[#9CA3AF] text-xs leading-relaxed">
              3rd Floor, The Viona, Gaurav Path Road<br />
              Surat, Gujarat, India
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-inter text-[#F5F5F5] text-xs uppercase tracking-[0.25em] mb-5 font-semibold">
              Navigation
            </h4>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block font-inter text-[#9CA3AF] hover:text-[#C2A36B] text-sm transition-colors duration-200"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-inter text-[#F5F5F5] text-xs uppercase tracking-[0.25em] mb-5 font-semibold">
              Services
            </h4>
            <div className="space-y-3">
              {services.map((s) => (
                <div
                  key={s}
                  className="font-inter text-[#9CA3AF] text-sm"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#C2A36B]/10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-inter text-[#9CA3AF] text-xs">
            © {new Date().getFullYear()} Kala Drishya Architects. All rights reserved.
          </span>
          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#9CA3AF] hover:text-[#C2A36B] transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#9CA3AF] hover:text-[#C2A36B] transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-[#9CA3AF] hover:text-[#C2A36B] transition-colors"
            >
              <Youtube size={16} />
            </a>
            <a
              href="https://wa.me/917567751811"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-[#9CA3AF] hover:text-[#25D366] transition-colors"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
