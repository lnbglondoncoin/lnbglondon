"use client";

import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { Copy } from "lucide-react";
import Button from "../buttons/Button";
import { Store } from "@/context/Store/Store";
import apis from "@/context/Services";
import { formatCurrency } from "@/utils/formatters";

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const router = useRouter();
  const { address, isConnected } = useWeb3ModalAccount();

  const {
    copyToClipboardAddress,
    userDatabaseData,
    setUserDatabaseData,
    contractData,
  } = useContext(Store);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTopUp = () => {
    router.push("/#presale");
    setIsOpen(false);
  };

  useEffect(() => {
    const main = async () => {
      try {
        if (isConnected) {
          console.log("Testttttttttttttttttttttt2222");
          let data = await apis.getOneUser(address);
          console.log(data, "useSDataaaaa");
          setUserDatabaseData(data?.data?.user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    main();
  }, [address]);

  console.log(userDatabaseData, "userDatabaseDatauserDatabaseData");

  return (
    <div className="relative flex items-center" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 rounded-full bg-[url(/static/avatar.png)] bg-contain bg-center bg-no-repeat"
      ></button>
      {isOpen && (
        <div className="absolute -right-12 top-12 flex w-[98vw] max-w-[354px] flex-col gap-1 overflow-hidden rounded-2xl bg-ash">
          <div className="flex flex-col gap-3 p-5 font-sans">
            <span className="text-xs">Your LNBG Profile</span>
            <div className="rounded-xd white flex items-center gap-2 px-2 py-3">
              <div className="min-h-[24px] min-w-[24px] rounded-full bg-[url(/static/avatar.png)] bg-contain bg-center bg-no-repeat"></div>
              <span className="w-full font-bold uppercase">
                {address?.slice(0, 6)}........
                {address?.slice(-4)}
              </span>
              {/* {copySuccess ? (
              <span className="text-nowrap text-[8px]">Copied to clipboard</span>
            ) : ( */}
              <button onClick={() => copyToClipboardAddress()}>
                <Copy size={18} />
              </button>
              {/* )} */}
            </div>
            <div className="h-[1px] w-full bg-white/20" />
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">LNBG Balance</span>
                <div className="flex items-center gap-1">
                  <Image
                    src="/static/logo.png"
                    width={16}
                    height={16}
                    alt="coin"
                  />
                  <span className="text-lg">
                    {" "}
                    {formatCurrency(
                      Number(contractData?.lnbgBalance)?.toFixed(2),
                    )}{" "}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">LNBG Points</span>
                <div className="flex items-center gap-1">
                  <span className="text-lg">{`${formatCurrency(Number(userDatabaseData?.tokens_earned)?.toFixed(1))}`}</span>
                  <span className="text-lg">Points</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold">Referral Rewards</span>
                <div className="flex items-center gap-1">
                  <Image
                    src="/static/logo.png"
                    width={16}
                    height={16}
                    alt="coin"
                  />
                  <span className="text-lg">{`${formatCurrency(Number(userDatabaseData?.referral_reward)?.toFixed(2))}`}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center gap-2 bg-coal p-6">
            <div className="absolute -top-2 rounded-full border border-ash bg-coal px-3 font-sans text-[10px] text-gray2">
              Exclusive Offer
            </div>
            <span className="text-center text-lg font-semibold">
              Boost your Yield Now
            </span>
            <span className="text-center font-sans text-sm font-medium text-gray2">
              Deposit in total $1000 or more and unlock a higher yield!
            </span>
            <Button
              onClick={() => handleTopUp()}
              title="TOP UP LNBG NOW!"
              className="text-sm font-bold"
            />
          </div>
        </div>
      )}
    </div>
  );
}
