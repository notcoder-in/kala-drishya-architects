"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A1628]/95 backdrop-blur-md border-b border-[#C2A36B]/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo.svg"
            alt="Kala Drishya Architects logo"
            className="h-[42px] w-auto"
          />
          <div className="hidden sm:block">
            <div className="font-playfair text-[#F5F5F5] text-sm tracking-[0.15em] uppercase leading-tight">
              Kala Drishya
            </div>
            <div className="text-[#C2A36B] text-[0.6rem] tracking-[0.25em] uppercase font-inter">
              Architects
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#9CA3AF] hover:text-[#C2A36B] text-sm tracking-wider font-inter transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:+917567751811"
          className="hidden md:flex items-center gap-2 border border-[#C2A36B] text-[#C2A36B] hover:bg-[#C2A36B] hover:text-[#0A1628] px-4 py-2 text-sm font-medium transition-all duration-300 tracking-wider"
        >
          <Phone size={14} />
          +91 75677 51811
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#F5F5F5] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A1628] border-t border-[#C2A36B]/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#F5F5F5] hover:text-[#C2A36B] text-base tracking-wide font-inter transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+917567751811"
            className="flex items-center gap-2 border border-[#C2A36B] text-[#C2A36B] px-4 py-3 text-sm font-medium w-fit tracking-wider"
          >
            <Phone size={14} />
            +91 75677 51811
          </a>
        </div>
      )}
    </header>
  );
}
