import { Gallery4, type Gallery4Item } from "@/components/blocks/gallery4";

const ASTONE_IMAGES = [
  "/projects/astone-homes/BQS_2210-Edit.jpg",
  "/projects/astone-homes/BQS_2211-HDR-Edit.jpg",
  "/projects/astone-homes/BQS_2213-HDR-Edit.jpg",
  "/projects/astone-homes/BQS_2217-Edit.jpg",
  "/projects/astone-homes/BQS_2220-Edit.jpg",
  "/projects/astone-homes/BQS_2221-Edit-Edit.jpg",
  "/projects/astone-homes/BQS_2225-Edit.jpg",
  "/projects/astone-homes/BQS_2226-Edit.jpg",
  "/projects/astone-homes/BQS_2227-Edit.jpg",
  "/projects/astone-homes/BQS_2228-Edit.jpg",
  "/projects/astone-homes/BQS_2229-Edit.jpg",
  "/projects/astone-homes/BQS_2230-Edit.jpg",
  "/projects/astone-homes/BQS_2231-Edit.jpg",
  "/projects/astone-homes/BQS_2234-Edit.jpg",
  "/projects/astone-homes/BQS_2235-Edit-Edit.jpg",
  "/projects/astone-homes/BQS_2238-HDR-Edit.jpg",
  "/projects/astone-homes/BQS_2241-Edit.jpg",
  "/projects/astone-homes/BQS_2243-Edit.jpg",
  "/projects/astone-homes/BQS_2244-Edit.jpg",
  "/projects/astone-homes/BQS_2245-HDR-Edit.jpg",
  "/projects/astone-homes/BQS_2257-HDR-Edit.jpg",
  "/projects/astone-homes/BQS_2262-HDR-Edit.jpg",
  "/projects/astone-homes/BQS_2268-HDR-Edit.jpg",
  "/projects/astone-homes/BQS_2270-Edit.jpg",
  "/projects/astone-homes/BQS_2271-Edit.jpg",
  "/projects/astone-homes/BQS_2272-Edit.jpg",
  "/projects/astone-homes/BQS_2273-Edit.jpg",
  "/projects/astone-homes/BQS_2274-Edit.jpg",
  "/projects/astone-homes/BQS_2277-HDR-Edit.jpg",
  "/projects/astone-homes/BQS_2282-Edit.jpg",
  "/projects/astone-homes/BQS_2284-Edit.jpg",
  "/projects/astone-homes/BQS_2287-Edit.jpg",
  "/projects/astone-homes/BQS_2288-HDR-Edit.jpg",
  "/projects/astone-homes/BQS_2290-Edit.jpg",
  "/projects/astone-homes/BQS_2294-Edit.jpg",
  "/projects/astone-homes/BQS_2295-Edit.jpg",
  "/projects/astone-homes/BQS_2296-Edit.jpg",
  "/projects/astone-homes/BQS_2297-Edit.jpg",
];

const SHIVEN_IMAGES = [
  "/projects/shiven-florenza/IMG_2515.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2516.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2517.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2518.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2519.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2520.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2521.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2522.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2523.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2524.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2525.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2526.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2527.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2528.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2529.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2530.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2531.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2532.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2533.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2534.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2535.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2536.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2537.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2538.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2539.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2540.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2541.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2542.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2543.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2544.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2545.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2546.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2547.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2548.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2549.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2550.JPG.jpeg",
  "/projects/shiven-florenza/IMG_2551.JPG.jpeg",
];

const PROJECTS: Gallery4Item[] = [
  {
    id: "astone-homes",
    title: "Astone Homes",
    description:
      "A premium residential interior project crafted with bespoke furnishings, warm textures, and meticulous spatial planning for a luxury living experience.",
    href: "#portfolio",
    image: "/projects/astone-homes/BQS_2262-HDR-Edit.jpg",
    tag: "Interior Design",
    images: ASTONE_IMAGES,
  },
  {
    id: "shiven-florenza",
    title: "Shiven Florenza",
    description:
      "A high-end residential project blending contemporary aesthetics with functional elegance — every corner designed with intent and precision.",
    href: "#portfolio",
    image: "/projects/shiven-florenza/IMG_2526.JPG.jpeg",
    tag: "Interior Design",
    images: SHIVEN_IMAGES,
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
