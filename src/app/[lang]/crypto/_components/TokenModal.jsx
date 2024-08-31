"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function TokenModal({ selectedToken, setSelectedToken }) {
  const [isOpen, setIsOpen] = useState(false);

  const antiSlug = (str) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="w-full">
        <button
          type="number"
          name="value1"
          id="value1"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-ash text-lightgray"
        >
          <Image
            src={
              selectedToken === "bitcoin"
                ? "/static/coinsvgs/bitcoin.svg"
                : selectedToken === "ethereum"
                  ? "/static/coinsvgs/ether.svg"
                  : selectedToken === "polkadot"
                    ? "/static/coinsvgs/polkadot.svg"
                    : selectedToken === "terra-luna"
                      ? "/static/coinsvgs/terra-luna.svg"
                      : selectedToken === "solana"
                        ? "/static/coinsvgs/solana.svg"
                        : selectedToken === "cardano"
                          ? "/static/coinsvgs/cardano.svg"
                          : "/static/coinsvgs/bitcoin.svg"
            }
            width={24}
            height={24}
            alt="Bitcoin"
          />
          {antiSlug(selectedToken)}
        </button>
      </DialogTrigger>
      <DialogContent className="border-none bg-coal">
        <DialogHeader>
          <DialogTitle>Select a token</DialogTitle>
          <div className="flex flex-col gap-2 py-5">
            <button
              className={cn(
                "flex w-full items-center gap-2 rounded-full px-3 py-2 text-start font-medium hover:bg-gray2/5",
                selectedToken == "bitcoin"
                  ? "border border-primary"
                  : "bg-gray2/10",
              )}
              onClick={() => {
                setSelectedToken("bitcoin");
                setIsOpen(false);
              }}
            >
              <Image
                src="/static/coinsvgs/bitcoin.svg"
                width={24}
                height={24}
                alt="Bitcoin"
              />
              Bitcoin
            </button>
            <button
              className={cn(
                "flex w-full items-center gap-2 rounded-full px-3 py-2 text-start font-medium hover:bg-gray2/5",
                selectedToken == "ethereum"
                  ? "border border-primary"
                  : "bg-gray2/10",
              )}
              onClick={() => {
                setSelectedToken("ethereum");
                setIsOpen(false);
              }}
            >
              <Image
                src="/static/coinsvgs/ether.svg"
                width={24}
                height={24}
                alt="Ethereum"
              />
              Ethereum
            </button>
            <button
              className={cn(
                "flex w-full items-center gap-2 rounded-full px-3 py-2 text-start font-medium hover:bg-gray2/5",
                selectedToken == "polkadot"
                  ? "border border-primary"
                  : "bg-gray2/10",
              )}
              onClick={() => {
                setSelectedToken("polkadot");
                setIsOpen(false);
              }}
            >
              <Image
                src="/static/coinsvgs/polkadot.svg"
                width={24}
                height={24}
                alt="Polkadot"
              />
              Polkadot
            </button>
            <button
              className={cn(
                "flex w-full items-center gap-2 rounded-full px-3 py-2 text-start font-medium hover:bg-gray2/5",
                selectedToken == "solana"
                  ? "border border-primary"
                  : "bg-gray2/10",
              )}
              onClick={() => {
                setSelectedToken("solana");
                setIsOpen(false);
              }}
            >
              <Image
                src="/static/coinsvgs/solana.svg"
                width={24}
                height={24}
                alt="Solana"
              />
              Solana
            </button>
            <button
              className={cn(
                "flex w-full items-center gap-2 rounded-full px-3 py-2 text-start font-medium hover:bg-gray2/5",
                selectedToken == "cardano"
                  ? "border border-primary"
                  : "bg-gray2/10",
              )}
              onClick={() => {
                setSelectedToken("cardano");
                setIsOpen(false);
              }}
            >
              <Image
                src="/static/coinsvgs/cardano.svg"
                width={24}
                height={24}
                alt="Cardano"
              />
              Cardano
            </button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
