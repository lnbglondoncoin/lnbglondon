"use client";

import { Vortex } from "@/components/ui/vortex";
import Button from "@/components/buttons/Button";

import BuyWithEaseSection from "./_components/BuyWithEaseSection";
import HowToBuySection from "./_components/HowToBuySection";
import { Transak } from "@transak/transak-sdk";
import { useEffect } from "react";

export default function SellPage() {
  const transakConfig = {
    apiKey: process.env.NEXT_PUBLIC_TRANSAK_API_KEY,
    environment: Transak.ENVIRONMENTS.PRODUCTION,
  };

  const transak = new Transak(transakConfig);

  useEffect(() => {
    // Cleanup code
    return () => {
      transak.close();
    };
  }, []);

  return (
    <section className="relative top-0 flex w-full max-w-[100vw] flex-col items-center justify-center overflow-hidden bg-coal pb-20">
      <Vortex
        backgroundColor="transparent"
        containerClassName="h-full w-full max-w-screen"
        rangeY={800}
        particleCount={700}
        baseHue={50}
        className="flex h-full w-full flex-col items-center px-5 pb-10 pt-20"
      >
        {/* <BuySellCard /> */}
        <div className="flex w-full max-w-4xl flex-col items-center gap-10 px-5 py-20 text-center">
          <h1 className="text-3xl sm:text-5xl sm:leading-[3.8rem]">
            Buy <span className="text-primary">crypto</span> directly to your
            cryptocurrency wallet
          </h1>
          <Button
            title="Start Now"
            className="w-fit bg-primary hover:bg-primary2"
            onClick={() => transak.init()}
          />
          <span className="font-sans">
            At LNBG you can buy crypto with credit cards, debit cards, bank
            transfers, and more. Just choose your asset, then buy and send
            crypto directly to your own crypto wallet.
          </span>
        </div>
      </Vortex>
      <BuyWithEaseSection />
      <HowToBuySection />
    </section>
  );
}
