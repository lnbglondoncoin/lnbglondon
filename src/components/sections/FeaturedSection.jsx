"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { arrowLeft } from "../icons";
import { motion } from "framer-motion";
import { leftToRightVariants, rightToLeftVariants } from "../variants";

export default function FeaturedSection() {
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
    <section className="flex w-full items-center justify-center overflow-hidden max-w-[100vw]">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center rounded-xl bg-coal px-5 py-20">
        <motion.h1
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className="text-3xl font-semibold"
        >
          Featured in
        </motion.h1>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
          className="flex w-full items-center justify-center"
        >
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
                  src="/clients/client1.png"
                  width={180}
                  height={60}
                  className="grayscale"
                  alt="client1"
                />
              </CarouselItem>
              <CarouselItem className="flex items-center justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                <Image
                  quality={100}
                  src="/clients/client2.png"
                  width={180}
                  height={60}
                  className="grayscale"
                  alt="client1"
                />
              </CarouselItem>
              <CarouselItem className="flex items-center justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                <Image
                  quality={100}
                  src="/clients/client3.png"
                  width={180}
                  height={60}
                  className="grayscale"
                  alt="client1"
                />
              </CarouselItem>
              <CarouselItem className="flex items-center justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                <Image
                  quality={100}
                  src="/clients/client4.png"
                  width={180}
                  height={60}
                  className="grayscale"
                  alt="client1"
                />
              </CarouselItem>
              <CarouselItem className="flex items-center justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                <Image
                  quality={100}
                  src="/clients/client5.png"
                  width={180}
                  height={60}
                  className="grayscale"
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
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className="grid w-full rounded-3xl bg-black p-1.5 md:grid-cols-2 md:rounded-[32px]"
        >
          <Image
            src="/feature.png"
            width={600}
            height={400}
            className="w-full"
          />
          <div className="flex flex-col items-center justify-center gap-5 p-10 text-center">
            <h1 className="text-4xl font-bold">
              6285 <span className="uppercase text-gray2/70">Holders</span>
            </h1>
            <span className="font-sans text-xl text-gray2">
              With our supporters, we're building something bigger and more
              impactful with each new connection. Join now our network of
              innovators!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
