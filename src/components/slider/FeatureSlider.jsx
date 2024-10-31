"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { rightToLeftVariants } from "../variants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function FeatureSlider() {
  //   const [currentSlide, setCurrentSlide] = useState(0);
  //   const totalSlides = 5; // Adjust based on the number of slides

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  //     }, 3000); // Change slides every 3 seconds

  //     return () => clearInterval(interval); // Cleanup interval on component unmount
  //   }, [totalSlides]);
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      exit="show"
      variants={rightToLeftVariants}
      className="flex w-full items-center justify-center py-10"
    >
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem
            className="flex items-center min-w-[250px] justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
          >
            <Image
              quality={100}
              src={`/static/clients/zealy.svg`}
              width={180}
              height={60}
              alt="zealy"
            />
          </CarouselItem>
          <CarouselItem
            className="flex items-center justify-center min-w-[250px] sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
          >
            <Image
              quality={100}
              src={`/static/clients/xt.svg`}
              width={100}
              height={60}
              alt="xt"
            />
          </CarouselItem>
          <CarouselItem
            className="flex items-center justify-center min-w-[250px] sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
          >
            <Image
              quality={100}
              src={`/static/clients/cmc.svg`}
              width={300}
              height={100}
              alt="cmc"
            />
          </CarouselItem>
          <CarouselItem
            className="flex items-center gap-3 justify-center min-w-[250px] sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
          >
            <Image
              quality={100}
              src={`/static/clients/uniswap.svg`}
              width={80}
              height={80}
              alt="uniswap"
            />
            <span className="text-3xl">Uniswap</span>
          </CarouselItem>
          <CarouselItem
            className="flex items-center justify-center gap-2 min-w-[250px] sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
          >
            <Image
              quality={100}
              src={`/static/clients/bnb.svg`}
              width={60}
              height={60}
              alt="bnb"
            />
            <span className="text-2xl">BNB</span>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
}
