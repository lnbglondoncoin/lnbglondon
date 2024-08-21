"use client";

import { Vortex } from "@/components/ui/vortex";
import { useRef, useState } from "react";
import SelectTokenModal from "./_components/SelectATokenModal";
import Button from "@/components/buttons/Button";

export default function SellPage() {
  const amountRef = useRef();
  const [amount, setAmount] = useState("");
  const [selectedToken, setSelectedToken] = useState("Binance");

  const handleAmountChange = (e) => {
    const amountValue = amountRef.current.value;
    setAmount(amountValue);
  };
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
        <div className="flex w-full max-w-[400px] flex-col gap-2 rounded-lg border border-white/10 bg-coal/80 p-4">
          <span className="mb-3 text-xl">Sell</span>
          <div className="flex w-full flex-col rounded-md bg-ash p-3">
            <span className="font-sans text-sm text-gray2/60">
              Your are selling
            </span>
            <div className="flex flex-col">
              <input
                className="w-full bg-transparent text-center text-7xl outline-none"
                placeholder="0"
                name="amount"
                id="amount"
                ref={amountRef}
                autoComplete="off"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
          </div>
          <SelectTokenModal
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
          />
          <div className="flex gap-1 rounded-md bg-ash p-3">
            <div className="flex w-full bg-red-100 flex-col">
              <span className="font-sans text-sm text-gray2">To Recieve</span>
              <input
                type="text"
                name="walletaddress"
                id="walletaddress"
                className="bg-transparent font-sans placeholder:text-gray2/50"
                placeholder="0"
              />
            </div>
            
          </div>
          <div className="flex items-center justify-center font-sans text-sm">
            1 BTC = 59999.26 USD
          </div>
          <Button title="Send" className="mt-10" />
        </div>
      </Vortex>
    </section>
  );
}
