"use client";

import Button from "@/components/buttons/Button";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ConnectWalletButton from "./_components/ConnectWalletButton";
import { Activity, Dot } from "lucide-react";
import LeaderboardsCard from "./_components/LeaderboardsCard";
import ParticipateCard from "./_components/ParticipateCard";
import TotalReferralCard from "./_components/TotalReferralCard";
import StakeRewardCard from "./_components/StakeRewardCard";
import FarmingCard from "./_components/FarmingCard";

export default function DashboardPage() {
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
        <h1 className="mb-5 text-5xl font-semibold text-white">Dashboard</h1>
        {isClient &&
          (isConnected ? (
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 flex flex-col gap-6 lg:col-span-2">
                <ParticipateCard />
                <div className="grid grid-cols-3 gap-6">
                  <LeaderboardsCard />
                  <TotalReferralCard />
                </div>
              </div>
              <div className="col-span-3 lg:col-span-1 flex flex-col gap-6">
                <StakeRewardCard />
                <FarmingCard />
              </div>
            </div>
          ) : (
            <div className="flex h-[320px] w-full flex-col items-center justify-end gap-5 rounded-xl bg-ash bg-[url(/bgs/bg-2.png)] bg-cover bg-center bg-no-repeat px-10 py-16">
              <span className="w-full text-4xl font-semibold">
                Connect wallet to access your dashboard
              </span>
              <ConnectWalletButton />
            </div>
          ))}
      </div>
    </div>
  );
}
