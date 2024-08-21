"use client";

import SelectTokenModal from "./SelectATokenModal";
import { useRef, useState } from "react";
import Button from "@/components/buttons/Button";
import SimpleButton from "@/components/buttons/SimpleButton";
import { cn } from "@/lib/utils";

export default function BuySellCard() {
  const amountRef = useRef();
  const [amount, setAmount] = useState("");
  const [tab, setTab] = useState("buy");
  const [selectedToken, setSelectedToken] = useState("Binance");

  const handleAmountChange = (e) => {
    const amountValue = amountRef.current.value;
    setAmount(amountValue);
  };
  return (
    <div className="flex w-full max-w-[400px] flex-col gap-2 rounded-lg border border-white/10 bg-coal/80 p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="mb-3 text-xl">LNBG</span>
        <div className="flex items-center gap-1">
          <SimpleButton
            title="Buy"
            className={cn(
              "py-2 font-sans text-sm",
              tab == "buy"
                ? "bg-primary hover:bg-primary2"
                : "border border-ash bg-ash text-white hover:border-primary",
            )}
            onClick={() => setTab("buy")}
          />
          <SimpleButton
            title="Sell"
            className={cn(
              "py-2 font-sans text-sm",
              tab == "sell"
                ? "bg-primary hover:bg-primary2"
                : "border border-ash bg-ash text-white hover:border-primary",
            )}
            onClick={() => setTab("sell")}
          />
        </div>
      </div>
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
        <div className="flex w-full flex-col bg-red-100">
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
  );
}
