"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";

const SimpleButton = ({ title = "Click me", onClick = () => {}, className = "" }) => {
  const { address, isConnected } = useWeb3ModalAccount();
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true when the component is mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <button
      className={cn(
        "w-full rounded-md px-5 py-3 font-medium text-black sm:px-8",
        className,
      )}
      onClick={onClick}
    >
      {isClient && isConnected ? `${address.slice(0, 6)}...${address.slice(-4)}` : title}
    </button>
  );
};

export default SimpleButton;
