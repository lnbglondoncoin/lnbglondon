"use client";

import { useState } from "react";
import Button from "@/components/buttons/Button";
import SimpleButton from "@/components/buttons/SimpleButton";
import { cn } from "@/lib/utils";
// import { RampInstantSDK } from "@ramp-network/ramp-instant-sdk";

export default function BuySellCard() {
  const [currency, setCurrency] = useState("");
  const [currencyAmount, setCurrencyAmount] = useState("");
  const [token, setToken] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const [tab, setTab] = useState("buy");
  const [selectedToken, setSelectedToken] = useState("Binance");

  // new RampInstantSDK({
  //   hostAppName: 'Your App',
  //   hostLogoUrl: 'https://assets.ramp.network/misc/test-logo.png',
  //   hostApiKey: 'your_host_api_key',
  //   variant: 'embedded-desktop',
  //   containerNode: document.getElementById('ramp-container'),
  // }).show();

  return (
    // <div className="" id="ramp-container"></div>
    <div className="flex w-full max-w-[400px] flex-col gap-2 rounded-lg border border-white/10 bg-coal/80 p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="mb-3 text-xl">{tab == "buy" ? "Buy" : "Sell"}</span>
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
      {tab == "buy" ? (
        <>
          <div className="flex w-full flex-col rounded-md bg-ash p-3">
            <span className="font-sans text-sm text-gray2/60">You Pay</span>
            <div className="flex items-center justify-between">
              <input
                className="w-full bg-transparent font-sans text-5xl font-light outline-none"
                placeholder="0"
                name="currencyAmount"
                id="currencyAmount"
                autoComplete="off"
                value={currencyAmount}
                onChange={(e) => setCurrencyAmount(e.target.value)}
              />
              <div className="bg-coal p-3">USD</div>
            </div>
          </div>
          <div className="flex w-full flex-col rounded-md bg-ash p-3">
            <span className="font-sans text-sm text-gray2/60">You Get</span>
            <div className="flex items-center justify-between">
              <input
                className="w-full bg-transparent font-sans text-5xl font-light outline-none"
                placeholder="0"
                name="tokenAmount"
                id="tokenAmount"
                autoComplete="off"
                value={tokenAmount}
                onChange={(e) => setTokenAmount(e.target.value)}
              />
              <div className="bg-coal p-3">BTC</div>
            </div>
          </div>
          <div className="flex items-center justify-center font-sans text-sm">
            1 BTC = 59999.26 USD
          </div>
          <div className="flex gap-1 rounded-md bg-ash p-3">
            <div className="flex w-full items-center justify-between gap-4">
              <span className="font-sans text-xs text-gray2">
                {currencyAmount} USD is all you pay, fees included
              </span>
              <span className="font-sans text-xs text-gray2 hover:text-white">
                Details
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full flex-col rounded-md bg-ash p-3">
            <span className="font-sans text-sm text-gray2/60">You Sell</span>
            <div className="flex items-center justify-between">
              <input
                className="w-full bg-transparent font-sans text-5xl font-light outline-none"
                placeholder="0"
                name="tokenAmount"
                id="tokenAmount"
                autoComplete="off"
                value={tokenAmount}
                onChange={(e) => setTokenAmount(e.target.value)}
              />
              <div className="bg-coal p-3">BTC</div>
            </div>
          </div>
          <div className="flex w-full flex-col rounded-md bg-ash p-3">
            <span className="font-sans text-sm text-gray2/60">
              You Receive (Estimate)
            </span>
            <div className="flex items-center justify-between">
              <input
                className="w-full bg-transparent font-sans text-5xl font-light outline-none"
                placeholder="0"
                name="currencyAmount"
                id="currencyAmount"
                autoComplete="off"
                value={currencyAmount}
                onChange={(e) => setCurrencyAmount(e.target.value)}
              />
              <div className="bg-coal p-3">USD</div>
            </div>
          </div>
          <div className="flex items-center justify-center font-sans text-sm">
            1 BTC = 59999.26 USD
          </div>
          <div className="flex gap-1 rounded-md bg-ash p-3">
            <div className="flex w-full items-center justify-between gap-4">
              <span className="font-sans text-xs text-gray2">
                {currencyAmount} USD is what you receive, after fees
              </span>
              <span className="font-sans text-xs text-gray2 hover:text-white">
                Details
              </span>
            </div>
          </div>
        </>
      )}
      <Button title="Proceed" className="my-5 font-sans" />
      <div className="flex justify-center border-t border-white/10 px-2 pt-2 font-sans text-xs text-gray2">
        Powered by LNBG, a registered cryptoasset business
      </div>
    </div>
  );
}
