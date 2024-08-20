"use client";

import Button from "@/components/buttons/Button";
import { Vortex } from "@/components/ui/vortex";
import { Transak } from "@transak/transak-sdk";

export default function BuyPage() {
  
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
        <div className="flex h-[500px] w-full max-w-[400px] flex-col gap-5 rounded-lg bg-ash p-4">
          <span className="text-xl">Buy Crypto with Transak</span>
          <Button title="Buy With Transak" onClick={() => launchTransak()} />
        </div>
      </Vortex>
    </section>
  );
}
