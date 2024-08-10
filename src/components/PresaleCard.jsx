"use client";

import ProgressBar from "./ProgressBar";
import CountdownTimer from "./CountdownTimer";
import SelectTokenModal from "./modals/SelectTokenModal";
import { useState } from "react";
import { ethSvg, usdcSvg, usdtSvg } from "./icons";
import Image from "next/image";

const PresaleCard = () => {
  const [selectedToken, setSelectedToken] = useState("Ethereum");
  const [tokenValue, setTokenValue] = useState(0);
  const [lnbgValue, setLnbgValue] = useState(0);

  const handleTokenChange = (e) => {
    setTokenValue(e.target.value);
    setLnbgValue(e.target.value * 0.0001);
  };
  return (
    <div className="flex flex-col items-center gap-y-5 rounded-lg bg-black/50 px-5 py-6 md:px-8 md:py-9">
      <h1 className="text-xl font-extrabold uppercase">Buy LNBG Coin</h1>
      <div className="flex w-full flex-col gap-3 rounded-xl bg-coal px-4 py-5">
        <span className="text-sm font-bold text-gray2">USD raised</span>
        <div className="flex flex-wrap items-end gap-1 font-bold">
          <span className="text-4xl text-primary">$1,116,230</span>
          <span className="pb-1 text-xl font-normal text-gray2">
            /$7,000,000
          </span>
        </div>
        <div className="text-sm text-gray2/60">
          74,214,591 of 215,000,000 tokens
        </div>
        <ProgressBar />
      </div>
      <CountdownTimer />
      <SelectTokenModal
        selectedToken={selectedToken}
        setSelectedToken={setSelectedToken}
      />
      <div className="flex w-full items-center justify-between gap-4 px-1 text-sm text-gray2">
        <span>You pay:</span>
        <span>You receive:</span>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full items-center gap-2 rounded-l-xl border border-gray2 px-3 py-3 text-lg">
          {selectedToken == "Ethereum"
            ? ethSvg
            : selectedToken == "USDC"
              ? usdcSvg
              : usdtSvg}
          <input
            type="text"
            inputMode="numeric"
            value={tokenValue}
            onChange={handleTokenChange}
            className="w-full bg-transparent text-gray2"
          />
        </div>
        <div className="flex w-full items-center gap-2 rounded-r-xl border border-gray2 px-3 py-3 text-lg">
          <Image
            src="/coins/lnbgcoin.png"
            width={30}
            height={30}
            alt="lnbgcoin"
          />
          <input
            type="text"
            inputMode="numeric"
            value={tokenValue}
            onChange={handleTokenChange}
            className="w-full bg-transparent text-gray2"
          />
        </div>
      </div>
      <div className="grid w-full sm:grid-cols-2">
        <span className="text-sm font-semibold">1 lnbg = 0.03$</span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">Next price = 0.035$</span>
          <div className="rounded-md bg-red-500 px-1 py-0.5 text-xs">+17%</div>
        </div>
      </div>
      <button className="mt-10 w-full rounded-full bg-primary py-3 font-bold text-black">
        Connect Wallet
      </button>
      <span className="text-sm text-gray2/60">How to buy?</span>
    </div>
  );
};

export default PresaleCard;
