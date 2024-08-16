"use client";

import Button from "@/components/buttons/Button";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ConnectWalletButton from "../_components/ConnectWalletButton";
import Timer from "./_components/Timer";

export default function ClaimPage() {
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
        <h1 className="mb-5 text-5xl font-semibold text-white">Claim</h1>
        {isClient &&
          (isConnected ? (
            <div className="flex w-full rounded-3xl bg-ash p-3">
              <div className="flex w-full flex-col items-center justify-center gap-5 rounded-xl bg-[url(/claim.png)] bg-cover bg-center py-20 text-center">
                <span className="text-5xl lg:text-6xl font-semibold uppercase">
                  Get Ready for the Token <br /> Generation Event!
                </span>
                <Timer />
                <span className="px-5 text-xl font-semibold uppercase">
                  This is a major step forward for our project, and we can't
                  wait <br />
                  to share it with you! Stay tuned and keep an eye on the <br />
                  countdown - the future of BlastUP is just around the corner!
                </span>
                <span className="px-5 text-lg text-gray2/80 font-medium">
                  The TGE marks the moment when our tokens will be minted and
                  distributed to our community, <br /> allowing you to finally
                  claim and trade your $BLASTUP tokens.
                </span>
              </div>
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
                Connect wallet to access Claim
              </span>
              <ConnectWalletButton />
            </div>
          ))}
      </div>
    </div>
  );
}
