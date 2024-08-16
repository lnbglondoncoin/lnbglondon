"use client";

import Button from "@/components/buttons/Button";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import StakingCard from "./_components/StakingCard";
import ScoresCard from "./_components/ScoresCard";
import StakingInfo from "./_components/StakingInfo";

export default function StakingPage() {
  return (
    <div className="flex w-full justify-center p-10">
      <div className="flex w-full flex-col gap-5">
        <h1 className="mb-5 text-5xl font-semibold text-white">Staking</h1>
        <div className="grid grid-cols-3 gap-6">
          <StakingCard />
          <ScoresCard />
          <StakingInfo />
        </div>
      </div>
    </div>
  );
}
