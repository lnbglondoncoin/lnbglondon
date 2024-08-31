"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function CurrencyModal({
  selectedCurrency,
  setSelectedCurrency,
}) {
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
          className="h-12 w-full rounded-md bg-ash text-lightgray"
        >
          {selectedCurrency == "usd"
            ? "$ USD"
            : selectedCurrency == "cny"
              ? "¥ CNY"
              : selectedCurrency == "cad"
                ? "$ CAD"
                : selectedCurrency == "eur"
                  ? "€ EURO"
                  : selectedCurrency == "gbp"
                    ? "£ GBP"
                    : "$ USD"}
        </button>
      </DialogTrigger>
      <DialogContent className="border-none bg-coal">
        <DialogHeader>
          <DialogTitle>Select a token</DialogTitle>
          <div className="flex flex-col gap-2 py-5">
            <button
              className={cn(
                "flex w-full items-center gap-2 rounded-full px-3 py-2 text-start font-medium hover:bg-gray2/5",
                selectedCurrency == "usd"
                  ? "border border-primary"
                  : "bg-gray2/10",
              )}
              onClick={() => {
                setSelectedCurrency("usd");
                setIsOpen(false);
              }}
            >
              $ USD
            </button>
            <button
              className={cn(
                "flex w-full items-center gap-2 rounded-full px-3 py-2 text-start font-medium hover:bg-gray2/5",
                selectedCurrency == "cny"
                  ? "border border-primary"
                  : "bg-gray2/10",
              )}
              onClick={() => {
                setSelectedCurrency("cny");
                setIsOpen(false);
              }}
            >
              ¥ CNY
            </button>
            <button
              className={cn(
                "flex w-full items-center gap-2 rounded-full px-3 py-2 text-start font-medium hover:bg-gray2/5",
                selectedCurrency == "cad"
                  ? "border border-primary"
                  : "bg-gray2/10",
              )}
              onClick={() => {
                setSelectedCurrency("cad");
                setIsOpen(false);
              }}
            >
              $ CAD
            </button>
            <button
              className={cn(
                "flex w-full items-center gap-2 rounded-full px-3 py-2 text-start font-medium hover:bg-gray2/5",
                selectedCurrency == "eur"
                  ? "border border-primary"
                  : "bg-gray2/10",
              )}
              onClick={() => {
                setSelectedCurrency("eur");
                setIsOpen(false);
              }}
            >
              € EURO
            </button>
            <button
              className={cn(
                "flex w-full items-center gap-2 rounded-full px-3 py-2 text-start font-medium hover:bg-gray2/5",
                selectedCurrency == "gbp"
                  ? "border border-primary"
                  : "bg-gray2/10",
              )}
              onClick={() => {
                setSelectedCurrency("gbp");
                setIsOpen(false);
              }}
            >
              £ GBP
            </button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
