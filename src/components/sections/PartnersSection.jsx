"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { arrowLeft } from "../icons";

const PartnersSection = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="flex items-center justify-center px-5 overflow-hidden max-w-[100vw]">
      <div className="flex w-full max-w-7xl items-center justify-center gap-x-10 px-5">
        <Carousel
          className="flex items-center gap-10"
          setApi={setApi}
          opts={{ loop: true }}
        >
          <button
            onClick={() => api.scrollTo(current - 2)}
            className="text-darkgray hover:text-primary"
          >
            {arrowLeft}
          </button>
          <CarouselContent>
            <CarouselItem className="flex items-center justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
              <Image
                quality={100}
                src="/static/clients/client1.png"
                width={160}
                height={50}
                alt="client1"
              />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
              <Image
                quality={100}
                src="/static/clients/client2.png"
                width={160}
                height={50}
                alt="client1"
              />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
              <Image
                quality={100}
                src="/static/clients/client3.png"
                width={160}
                height={50}
                alt="client1"
              />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
              <Image
                quality={100}
                src="/static/clients/client4.png"
                width={160}
                height={50}
                alt="client1"
              />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
              <Image
                quality={100}
                src="/static/clients/client5.png"
                width={160}
                height={50}
                alt="client1"
              />
            </CarouselItem>
          </CarouselContent>
          <button
            onClick={() => api.scrollTo(current)}
            className="rotate-180 text-darkgray hover:text-primary"
          >
            {arrowLeft}
          </button>
        </Carousel>
      </div>
    </div>
  );
};

export default PartnersSection;
