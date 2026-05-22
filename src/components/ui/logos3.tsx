"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const defaultLogos: Logo[] = [
  {
    id: "logo-1",
    description: "Smartphone premium",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    className: "h-16 w-28 rounded-md object-cover",
  },
  {
    id: "logo-2",
    description: "Laptop premium",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80",
    className: "h-16 w-28 rounded-md object-cover",
  },
  {
    id: "logo-3",
    description: "Audifonos inalambricos",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
    className: "h-16 w-28 rounded-md object-cover",
  },
  {
    id: "logo-4",
    description: "Set de gaming",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80",
    className: "h-16 w-28 rounded-md object-cover",
  },
  {
    id: "logo-5",
    description: "Camara y accesorios",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80",
    className: "h-16 w-28 rounded-md object-cover",
  },
  {
    id: "logo-6",
    description: "Teclado de trabajo",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80",
    className: "h-16 w-28 rounded-md object-cover",
  },
  {
    id: "logo-7",
    description: "Monitor profesional",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80",
    className: "h-16 w-28 rounded-md object-cover",
  },
  {
    id: "logo-8",
    description: "Dispositivo portatil",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=400&q=80",
    className: "h-16 w-28 rounded-md object-cover",
  },
];

const Logos3 = ({
  heading = "Categorias y tecnologia destacada",
  logos = defaultLogos,
  className,
}: Logos3Props) => {
  return (
    <section className={className ?? "py-16"}>
      <div className="container mx-auto flex flex-col items-center px-4 text-center">
        <h2 className="my-6 font-heading text-[clamp(30px,4vw,52px)] font-bold tracking-wide text-pretty text-[var(--text)]">
          {heading}
        </h2>
      </div>
      <div className="pt-6 md:pt-10 lg:pt-12">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="mx-4 flex shrink-0 items-center justify-center">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
