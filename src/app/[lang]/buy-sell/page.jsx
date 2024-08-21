"use client";

import { Vortex } from "@/components/ui/vortex";
import BuySellCard from "./_components/BuySellCard";

export default function SellPage() {

  return (
    <section className="relative top-0 flex w-full max-w-[100vw] items-center justify-center overflow-hidden bg-coal">
      <Vortex
        backgroundColor="transparent"
        containerClassName="h-full w-full max-w-screen"
        rangeY={800}
        particleCount={700}
        baseHue={50}
        className="flex h-full min-h-screen w-full items-start justify-center pb-10 pt-[120px]"
      >
        <BuySellCard />
      </Vortex>
    </section>
  );
}
