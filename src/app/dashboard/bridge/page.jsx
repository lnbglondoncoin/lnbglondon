"use client";

import Button from "@/components/buttons/Button";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import BridgeCard from "./_components/BridgeCard";

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
        <div className="grid grid-cols-3 gap-6">
          <BridgeCard />
        </div>
      </div>
    </div>
  );
}
