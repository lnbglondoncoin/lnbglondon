"use client";

import Button from "@/components/buttons/Button";
import { cn } from "@/lib/utils";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { Activity } from "lucide-react";
import { useEffect, useState } from "react";
import ConnectWalletButton from "../../_components/ConnectWalletButton";

export default function BridgeCard() {
  // --------------For hydration error-------------------
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // ----------------------------------------------------

  const { isConnected } = useWeb3ModalAccount();
  const [tab, setTab] = useState("Stake");
  const [selectedOffer, setSelectedOffer] = useState("12 months");
  const [stake, setStake] = useState(null);
  return (
    <div className="col-span-2 flex w-full flex-col items-center gap-5 rounded-3xl bg-ash p-5">
      <span className="text-3xl font-semibold">Bridge ETH To BSC Mainnet</span>
      <div className="flex w-full flex-col gap-1">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full items-center gap-2">
            <div className="text-xl text-gray2/70">From:</div>
            <div className="flex items-center gap-1 rounded-full bg-black px-5 py-1 text-xl text-gray2">
              Switch Network {bridgeIcon}
            </div>
          </div>
          <div className="text-xl text-gray2/70 text-nowrap">Balance: 0.0015</div>
        </div>
        <div className="flex w-full items-center gap-2 border-b border-gray2/50 pb-2">
          {lockIcon}
          <input
            type="text"
            inputMode="numeric"
            name="stake"
            id="stake"
            value={stake}
            placeholder="0.0"
            onChange={(e) => setStake(e.target.value)}
            className="w-full border-none bg-transparent text-3xl outline-none"
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-between text-xl">
        <div className="flex items-center gap-1">
          Your Reward:{" "}
          {stake && (
            <span className="text-primary2 font-semibold">
              {stake ? stake * 0.24 : 0} Locked LNBG
            </span>
          )}
        </div>
        {stake && (
          <div className="text-primary2 flex items-center gap-1 font-semibold">
            <Activity size={20} />
            <span>{stake ? stake * 0.48 : 0}</span>
          </div>
        )}
      </div>
      {isClient &&
        (isConnected ? (
          <Button
            title="Stake"
            className="hover:bg-primary2 bg-primary text-xl font-semibold uppercase text-black"
          />
        ) : (
          <ConnectWalletButton />
        ))}
    </div>
  );
}

const bridgeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18px"
    height="18px"
    fill="none"
    viewBox="0 0 18 19"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M15 7.5H3l3.13-4M3 11.5h12l-3.13 4"
    ></path>
  </svg>
);

const lockIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 42 42"
    fill="none"
  >
    <circle cx="21" cy="21" r="21" fill="url(#paint0_linear_183_181)" />
    <g clip-path="url(#clip0_183_181)">
      <path
        d="M26.5656 21.3596L27.4149 18.1902C28.1966 15.2728 26.4653 12.274 23.5479 11.4923C20.6305 10.7106 17.6318 12.4419 16.8501 15.3593L16.0008 18.5288M14.0152 29.32L22.8896 31.6979C24.6647 32.1736 25.5522 32.4114 26.3227 32.2476C27.0005 32.1035 27.6153 31.7486 28.079 31.2336C28.6061 30.6482 28.8439 29.7607 29.3195 27.9856L29.4328 27.563C29.9084 25.788 30.1462 24.9005 29.9824 24.1299C29.8383 23.4521 29.4834 22.8373 28.9684 22.3737C28.383 21.8466 27.4955 21.6088 25.7204 21.1331L16.846 18.7552C15.0709 18.2796 14.1834 18.0418 13.4129 18.2056C12.7351 18.3496 12.1203 18.7046 11.6566 19.2195C11.1295 19.805 10.8917 20.6925 10.4161 22.4675L10.3029 22.8901C9.82723 24.6652 9.58941 25.5527 9.7532 26.3233C9.89727 27.0011 10.2522 27.6158 10.7672 28.0795C11.3526 28.6066 12.2401 28.8444 14.0152 29.32Z"
        stroke="black"
        strokeWidth="3.9375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_183_181"
        x1="28"
        y1="1.4"
        x2="21"
        y2="42"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFFF34" />
        <stop offset="1" stop-color="#A1A100" />
      </linearGradient>
      <clipPath id="clip0_183_181">
        <rect
          width="26.25"
          height="26.25"
          fill="white"
          transform="translate(11.7197 4.92578) rotate(15)"
        />
      </clipPath>
    </defs>
  </svg>
);
