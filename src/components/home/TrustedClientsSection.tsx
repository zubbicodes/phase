"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";

const TrustedClientsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [api]);

  const clients = [
    { name: "Adidas", logo: "/clients/adidass_logo.png" },
    { name: "Artistic Milliners", logo: "/clients/artistic-milliners-logo.jpg" },
    { name: "Bismillah Textile", logo: "/clients/bismillah.png" },
    { name: "Interloop Limited", logo: "/clients/interloop_limited_logo.jpeg" },
    { name: "JCPenney", logo: "/clients/jcpenney.png" },
    { name: "Primark", logo: "/clients/primark.png" },
    { name: "Target", logo: "/clients/target.png" },
    { name: "Walmart", logo: "/clients/wallmart_logo.png" },
  ];

  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left text-white">
            Trusted by thousands of businesses worldwide
          </h2>
          <Carousel 
            setApi={setApi} 
            className="w-full"
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent>
              {clients.map((client, index) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex rounded-md aspect-square bg-white/10 items-center justify-center p-6">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain"
                    />
        </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className="relative -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-zinc-900/20 dark:border-white/20 bg-white dark:bg-zinc-900" />
      </div>
  </section>
);
};

export default TrustedClientsSection; 