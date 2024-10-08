import { CheckCheck, ChevronRight, X } from "lucide-react";
import Button from "./buttons/Button";
import { useContext } from "react";
import { Store } from "@/context/Store/Store";

export default function TransactionSuccessModal() {
  const { setTransactionSuccess, transactionHash } = useContext(Store);

  const handleLinkOpen = () => {
    window.open(transactionHash, "_blank");
  }

  return (
    <div className="fixed inset-0 z-[102] flex items-center justify-center bg-black/80 py-40">
      <div className="flex w-[350px] flex-col items-center gap-1 rounded-2xl bg-ash p-8">
        <div className="flex w-full text-gray2 justify-end">
          <button onClick={() => setTransactionSuccess(false)}>
            <X size={12} />
          </button>
        </div>
        <div className="mb-3 rounded-xl bg-coal p-3 text-primary">
          <CheckCheck size={52} />
        </div>
        <span className="text-center text-xl" onClick={handleLinkOpen}>Transaction Success</span>
        <button className="mb-3 flex items-center gap-2 font-sans text-sm text-gray2" onClick={handleLinkOpen}>
          Transaction details <ChevronRight size={16} />
        </button>
        <Button title="BUY MORE TOKENS" onClick={()=>setTransactionSuccess(false)} />
      </div>
    </div>
  );
}
