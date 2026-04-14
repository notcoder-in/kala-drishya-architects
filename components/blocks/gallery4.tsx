"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProjectModal from "@/components/ProjectModal";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  tag?: string;
  images?: string[]; // all project photos for modal
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const Gallery4 = ({
  title = "Our Projects",
  description =
    "A curated selection of our most distinguished residential and commercial projects across Surat and beyond.",
  items,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeProject, setActiveProject] = useState<Gallery4Item | null>(null);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => { carouselApi.off("select", updateSelection); };
  }, [carouselApi]);

  return (
    <>
    <section className="py-32 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <span className="text-[#C2A36B] text-xs uppercase tracking-[0.3em] font-medium">
              / Portfolio
            </span>
            <h2 className="font-playfair text-3xl font-medium text-[#F5F5F5] md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="max-w-lg text-[#9CA3AF] font-inter">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="text-[#C2A36B] hover:text-[#F5F5F5] hover:bg-[#C2A36B]/10 border border-[#C2A36B]/30 disabled:opacity-30 disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="text-[#C2A36B] hover:text-[#F5F5F5] hover:bg-[#C2A36B]/10 border border-[#C2A36B]/30 disabled:opacity-30 disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: { "(max-width: 768px)": { dragFree: true } },
          }}
        >
          <CarouselContent className="ml-6 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[380px]"
              >
                <div
                  className="group rounded-xl block cursor-pointer"
                  onClick={() => item.images?.length ? setActiveProject(item) : undefined}
                >
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 md:p-8">
                      {item.tag && (
                        <span className="mb-3 text-[0.65rem] uppercase tracking-[0.2em] text-[#C2A36B] border border-[#C2A36B]/50 px-2 py-1 rounded">
                          {item.tag}
                        </span>
                      )}
                      <div className="mb-2 pt-2 text-xl font-semibold text-[#F5F5F5] font-playfair md:mb-3">
                        {item.title}
                      </div>
                      <div className="mb-6 line-clamp-2 text-[#9CA3AF] text-sm font-inter">
                        {item.description}
                      </div>
                      <div className="flex items-center text-sm text-[#C2A36B] group-hover:gap-2 transition-all">
                        View Project{" "}
                        {item.images?.length && (
                          <span className="ml-1 text-[#C2A36B]/50 text-xs tabular-nums">
                            ({item.images.length})
                          </span>
                        )}
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-px transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 bg-[#C2A36B]"
                  : "w-4 bg-[#C2A36B]/30"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>

    {activeProject && (
      <ProjectModal
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
        title={activeProject.title}
        description={activeProject.description}
        tag={activeProject.tag}
        images={activeProject.images ?? []}
      />
    )}
  </>
  );
};

export { Gallery4 };
