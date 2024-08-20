"use client";

import { Vortex } from "@/components/ui/vortex";

export default function BuyPage() {
  return (
    <section className="relative top-0 flex w-full max-w-[100vw] items-center justify-center overflow-hidden bg-coal">
      <Vortex
        backgroundColor="transparent"
        containerClassName="h-full w-full max-w-screen"
        rangeY={800}
        particleCount={700}
        baseHue={50}
        className="flex h-full w-full items-center justify-center pb-10 pt-[120px]"
      >
        
      </Vortex>
    </section>
  );
}
