import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { ethSvg, usdcSvg, usdtSvg } from "../icons";

const SelectTokenModal = ({ selectedToken, setSelectedToken }) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div className="flex w-full items-center justify-between gap-2 rounded-full border border-gray2 p-2 text-xl hover:border-primary">
          <div className="flex items-center gap-2">
            {selectedToken == "Ethereum"
              ? ethSvg
              : selectedToken == "USDC"
                ? usdcSvg
                : usdtSvg}
            {selectedToken}
          </div>
          <ChevronRight size={20} />
        </div>
      </DialogTrigger>
      <DialogContent className="border-none bg-coal">
        <DialogHeader>
          <DialogTitle>Select a token</DialogTitle>
          <div className="flex flex-col gap-2 py-5">
            <button
              className={cn(
                "flex w-full items-center gap-2 rounded-full px-3 py-2 text-start font-medium hover:bg-gray2/5",
                selectedToken == "Ethereum"
                  ? "border border-primary"
                  : "bg-gray2/10",
              )}
              onClick={() => setSelectedToken("Ethereum")}
            >
              {ethSvg} Ethereum
            </button>
            <button
              className={cn(
                "flex w-full items-center gap-2 rounded-full px-3 py-2 text-start font-medium hover:bg-gray2/5",
                selectedToken == "USDC"
                  ? "border border-primary"
                  : "bg-gray2/10",
              )}
              onClick={() => setSelectedToken("USDC")}
            >
              {usdcSvg} USDC
            </button>
            <button
              className={cn(
                "flex w-full items-center gap-2 rounded-full px-3 py-2 text-start font-medium hover:bg-gray2/5",
                selectedToken == "USDT"
                  ? "border border-primary"
                  : "bg-gray2/10",
              )}
              onClick={() => setSelectedToken("USDT")}
            >
              {usdtSvg} USDT
            </button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SelectTokenModal;
