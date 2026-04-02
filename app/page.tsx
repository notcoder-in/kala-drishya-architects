import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import BeforeAfter from "@/components/BeforeAfter";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main>
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Hero — TextRotate animated headline */}
      <Hero />

      {/* 3. Stats — AnimatedCounter (useLoop hook) */}
      <Stats />

      {/* 4. Services — HoverSlider animated slideshow */}
      <Services />

      {/* 5. Portfolio — Gallery4 carousel */}
      <Portfolio />

      {/* 6. Before/After — ImageComparison slider */}
      <BeforeAfter />

      {/* 7. About — Firm story, leadership, philosophy */}
      <About />

      {/* 8. Contact — WhatsApp, Call, Map */}
      <Contact />

      {/* 9. Footer */}
      <SiteFooter />
    </main>
  );
}
