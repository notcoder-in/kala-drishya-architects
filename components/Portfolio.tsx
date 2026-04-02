import { Gallery4, type Gallery4Item } from "@/components/blocks/gallery4";

const PROJECTS: Gallery4Item[] = [
  {
    id: "aston-aroma",
    title: "Aston Aroma",
    description:
      "A premium residential interior project crafted with bespoke furnishings, warm textures, and meticulous spatial planning for a luxury living experience.",
    href: "#portfolio",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    tag: "Interior Design",
  },
  {
    id: "shiven-florenza",
    title: "Shiven Florenza",
    description:
      "A high-end residential project blending contemporary aesthetics with functional elegance — every corner designed with intent and precision.",
    href: "#portfolio",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    tag: "Interior Design",
  },
  {
    id: "modern-villa-surat",
    title: "Modern Villa, Surat",
    description:
      "A contemporary residential villa with clean geometric forms, expansive glazing, and seamless indoor-outdoor integration.",
    href: "#portfolio",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    tag: "Architecture",
  },
  {
    id: "commercial-complex",
    title: "Commercial Complex",
    description:
      "A multi-use commercial development combining retail, office, and hospitality spaces with a strong architectural identity.",
    href: "#portfolio",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    tag: "Architecture",
  },
  {
    id: "bim-coordination",
    title: "BIM Coordination Project",
    description:
      "Full BIM coordination for a large-scale institutional building, delivering clash-free documentation and streamlined construction workflow.",
    href: "#portfolio",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tag: "BIM Services",
  },
  {
    id: "landscape-residence",
    title: "Landscape Residence",
    description:
      "Integrated architecture and landscape design creating a harmonious relationship between built form and natural environment.",
    href: "#portfolio",
    image:
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=800&q=80",
    tag: "Landscape",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <Gallery4
        title="Selected Works"
        description="78+ completed projects across residential, commercial, and institutional sectors — each one a testament to our design philosophy."
        items={PROJECTS}
      />
    </section>
  );
}
