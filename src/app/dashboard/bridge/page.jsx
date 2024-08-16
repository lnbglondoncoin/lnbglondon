"use client";

import Button from "@/components/buttons/Button";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BridgePage() {
  // --------------For hydration error-------------------
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // ----------------------------------------------------

  const { isConnected } = useWeb3ModalAccount();
  return (
    <div className="flex w-full justify-center p-10">
      <div className="flex w-full flex-col gap-5">
        <h1 className="mb-5 text-5xl font-semibold text-white">Bridge</h1>
        {isClient &&
          (isConnected ? (
            <div className="relative flex h-[320px] w-full flex-col items-center justify-end gap-5 rounded-xl bg-ash px-10 py-16">
              <Image
                className="pointer-events-none absolute bottom-0 opacity-20 blur-[1px] filter"
                src="/globe.svg"
                width={650}
                height={280}
                alt="globe"
              />
              <span className="w-full text-4xl font-semibold">
                Connect wallet to access your dashboard
              </span>
              <Button
                title="Connect Wallet"
                className="text-lg font-semibold text-black"
              />
            </div>
          ) : (
            <div className="relative flex h-[320px] w-full flex-col items-center justify-end gap-5 rounded-xl bg-ash px-10 py-16">
              <Image
                className="pointer-events-none absolute bottom-0 opacity-20 blur-[1px] filter"
                src="/globe.svg"
                width={650}
                height={280}
                alt="globe"
              />
              <span className="w-full text-4xl font-semibold">
                Connect wallet to access your dashboard
              </span>
              <Button
                title="Connect Wallet"
                className="text-lg font-semibold text-black"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
