"use client";

import Button from "@/components/buttons/Button";
import { useWeb3Modal } from "@web3modal/ethers5/react";

export default function ConnectWalletButton() {
  const { open } = useWeb3Modal();
  return (
    <Button
      title="Connect Wallet"
      onClick={() => open()}
      className="text-lg font-semibold text-black"
    />
  );
}
