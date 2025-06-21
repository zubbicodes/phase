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
    { name: "Best Seller", logo: "/clients/bestseller.png" },
    { name: "Boss", logo: "/clients/boss.png" },
    { name: "ck", logo: "/clients/ck.png" },
    { name: "JCPenney", logo: "/clients/jcpenney.png" },
    { name: "Primark", logo: "/clients/primark.png" },
    { name: "Target", logo: "/clients/target.png" },
    { name: "Walmart", logo: "/clients/wallmart_logo.png" },
    { name: "Zara", logo: "/clients/zara.png" },
    { name: "ikea", logo: "/clients/ikea.png" },
    { name: "fila", logo: "/clients/fila.png" },
    { name: "kids2", logo: "/clients/kids2.png" },
    { name: "Lidl", logo: "/clients/Lidl.png" },
    { name: "Warngler", logo: "/clients/wrangler.png" },
    { name: "tommy", logo: "/clients/tommy.png" },
    { name: "North Face", logo: "/clients/northface.png" },
    { name: "sportspoer", logo: "/clients/sportspower.png" },
    { name: "Vero Moda", logo: "/clients/Vero-Moda-logo.png" },
    { name: "decathlon", logo: "/clients/decathlon.png" },
    { name: "Polo", logo: "/clients/polo.png" },
    
  ];

  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left text-white">
            Trusted by hundreds of businesses worldwide
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
                <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex rounded-md aspect-square bg-white/10 items-center justify-center p-4 md:p-6">
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