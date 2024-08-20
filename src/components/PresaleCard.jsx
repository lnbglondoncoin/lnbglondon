"use client";

import ProgressBar from "./ProgressBar";
import CountdownTimer from "./CountdownTimer";
import SelectTokenModal from "./modals/SelectTokenModal";
import { useContext, useEffect, useState } from "react";
import { ethSvg, usdcSvg, usdtSvg } from "./icons";
import Image from "next/image";
import { Store } from "@/context/Store/Store";
import { motion } from "framer-motion";
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalError,
} from "@web3modal/ethers5/react";
import { ethers } from "ethers";
import React from "react";
import { Copy } from "lucide-react";
import Link from "next/link";

export default function PresaleCard() {
  const {
    contractData,
    BuyWithUSDTandUSDC,
    getProviderPresaleContract,
    GetValues,
    loader,
    networkChange,
    BuyWithETH,
    presaleStart,
    presaleStop,
  } = useContext(Store);

  // --------------For hydration error-------------------
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // ----------------------------------------------------

  const { open, connectWallet } = useWeb3Modal();
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { error } = useWeb3ModalError();

  const [selectedToken, setSelectedToken] = useState("Binance");
  const [tokenAmount, setTokensAmount] = useState("");
  const [lnbgValue, setLnbgValue] = useState(0);

  function calculateTokens(price, pricePerToken) {
    // Convert prices to BigNumber objects to handle large numbers
    const priceBN = ethers.BigNumber.from(price?.toString());

    console.log(priceBN?.toString(), "priceBNpriceBNpriceBN");

    const pricePerTokenBN = ethers.BigNumber.from(pricePerToken?.toString());

    let final = +priceBN?.toString() / +pricePerTokenBN?.toString();

    return final;
  }

  const handleTokenChange = (e) => {
    setTokensAmount(e.target.value);
    // setLnbgValue(e.target.value * 0.0001);
  };

  // Calculate the percentage of sold tokens
  const soldPercentage =
    (contractData?.raisedAmount /
      ((contractData?.tokenPrice / 10 ** 18) * contractData?.totalSupply)) *
    100;

  useEffect(() => {
    const main = async () => {
      if (selectedToken == "Ethereum" && tokenAmount !== 0) {
        setTimeout(async () => {
          let parse = ethers.utils.parseEther(
            tokenAmount?.toString() > 0 ? tokenAmount?.toString() : "0",
          );

          console.log(parse?.toString(), "parseparseparse");

          if (parse > 0) {
            let oneDoller =
              await getProviderPresaleContract().getLatestUSDTPrice();

            console.log(oneDoller?.toString(), "oneDoller");

            let howMuch = +parse?.toString() / +oneDoller?.toString();

            console.log(howMuch?.toString(), "howMuch");

            let tokenTokens =
              howMuch?.toString() / (+contractData?.tokenPrice / 10 ** 18);

            console.log(tokenTokens?.toString(), "tokenTokens");
            let parse2 = ethers.utils.parseEther(
              tokenTokens?.toString() > 0 ? tokenTokens?.toString() : 0,
            );
            console.log(parse2?.toString(), "Tokenssss");
            setLnbgValue(parse2?.toString()); // Tokens in ether
          }
        }, 2000);
      } else if (selectedToken !== "Ethereum" && tokenAmount !== "") {
        console.log(typeof tokenAmount, "dadadasd");
        let parse2 = ethers.utils.parseEther(tokenAmount?.toString());
        console.log(parse2?.toString(), "parseparseparse");
        if (parse2 > 0) {
          const tokens = calculateTokens(parse2, contractData?.tokenPrice);
          setLnbgValue(
            ethers.utils.parseEther(
              tokens?.toString() > 0 ? tokens?.toString() : 0,
            ),
          ); // Tokens in ether
        }
      } else {
        setLnbgValue(0);
        setTokensAmount("");
      }
    };
    main();
  }, [tokenAmount, selectedToken]);

  console.log(
    contractData,
    "contractDatacontractDatacontractDatacontractDatacontractDatacontractDatacontractData",
  );

  useEffect(() => {
    GetValues();
  }, [isConnected]);

  const roundOff = (num) => {
    // convert string to int
    let number = parseFloat(num);
    // round off to 2 decimal
    return number.toFixed(4);
  };

  //----------------------------- Copy address to clipboard-------------------------
  const [copySuccess, setCopySuccess] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopySuccess(true);
  };
  useEffect(() => {
    if (copySuccess) {
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    }
  }, [copySuccess]);
  // -------------------------------------------------------------------------------
  let remainTokens = +contractData?.tokensInContract - 3000000;
  return (
    <motion.div
      initial={{
        x: 100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
        delay: 0.5,
      }}
      className="flex flex-col items-center gap-y-5 rounded-lg bg-ash/70 px-5 py-6 md:px-8 md:py-9"
    >
      <h1 className="text-xl font-extrabold uppercase">Buy LNBG Coin</h1>
      <div className="flex w-full flex-col gap-3 rounded-xl bg-coal px-4 py-5">
        <span className="text-sm font-bold text-gray2">USD raised</span>
        <div className="flex flex-wrap items-end gap-1 font-bold">
          <span className="text-3xl text-primary">
            ${roundOff(contractData?.raisedAmount)}
          </span>
          <span className="pb-1 text-lg font-normal text-gray2">/$300,000</span>
        </div>
        <div className="text-xs text-gray2/60">
          {+contractData?.tokensInContract > 0 ? remainTokens : 0} of 10,000,000
          tokens
        </div>
        <ProgressBar soldPercentage={soldPercentage} />
        <div className="rounded-xd flex items-center gap-5 bg-ash px-2 py-3 text-gray2">
          {isClient && (
            <span className="w-full text-xs">
              {address?.slice(0, 6)}........{address?.slice(-4)}
            </span>
          )}
          {copySuccess ? (
            <span className="text-nowrap text-[8px]">Copied to clipboard</span>
          ) : (
            <button onClick={() => handleCopy()}>
              <Copy size={18} />
            </button>
          )}
        </div>
      </div>
      <CountdownTimer />
      <SelectTokenModal
        selectedToken={selectedToken}
        setSelectedToken={setSelectedToken}
      />
      <div className="flex w-full items-center justify-between gap-4 px-1 text-sm text-gray2">
        <span>You pay:</span>
        <span>You receive:</span>
      </div>
      <div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:gap-0">
        <div className="flex w-full items-center gap-2 rounded-xl border border-gray2/40 px-3 py-3 text-lg sm:rounded-l-xl sm:rounded-r-none">
          {selectedToken == "Ethereum" ? (
            ethSvg
          ) : selectedToken == "USDC" ? (
            usdcSvg
          ) : selectedToken == "USDT" ? (
            usdtSvg
          ) : (
            <Image src="/bnb-logo.png" width={21} height={21} alt="bnb" />
          )}
          <input
            type="text"
            // inputMode="numeric"
            value={tokenAmount}
            onChange={handleTokenChange}
            className="w-full bg-transparent text-gray2"
          />
        </div>
        <div className="flex w-full items-center gap-2 rounded-xl border border-gray2/40 px-3 py-3 text-lg sm:rounded-l-none sm:rounded-r-xl">
          <Image
            src="/coins/lnbgcoin.png"
            width={21}
            height={21}
            alt="lnbgcoin"
          />
          <input
            type="text"
            // inputMode="numeric"
            value={Number(
              ethers.utils.formatEther(lnbgValue?.toString()),
            )?.toFixed(4)}
            onChange={handleTokenChange}
            className="w-full bg-transparent text-gray2"
          />
        </div>
      </div>
      <div className="grid w-full sm:grid-cols-2">
        <span className="text-sm font-semibold">
          1 lnbg = {ethers.utils.formatUnits(contractData?.tokenPrice, 18)}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">Next price = 0.039$</span>
          <div className="rounded-md bg-red-500 px-1 py-0.5 text-xs">+30%</div>
        </div>
      </div>
      {isClient &&
        (isConnected == true ? (
          selectedToken == "Ethereum" ? (
            <div className="flex w-full flex-col gap-5">
              <button
                className="mt-10 w-full rounded-xl bg-primary py-3 font-bold text-black"
                disabled={loader}
                onClick={() =>
                  BuyWithETH(tokenAmount, lnbgValue?.toString(), false)
                }
              >
                Buy
              </button>
              <button
                className="w-full rounded-xl border border-black bg-black py-3 font-bold hover:border-primary"
                disabled={loader}
              >
                Add token in metamask
              </button>
            </div>
          ) : selectedToken == "USDC" ? (
            <div className="flex w-full flex-col gap-5">
              <button
                className="mt-10 w-full rounded-xl bg-primary py-3 font-bold text-black"
                disabled={loader}
                onClick={() =>
                  BuyWithUSDTandUSDC(tokenAmount, lnbgValue?.toString(), false)
                }
              >
                Buy
              </button>
              <button
                className="w-full rounded-xl border border-black bg-black py-3 font-bold hover:border-primary"
                disabled={loader}
              >
                Add token in metamask
              </button>
            </div>
          ) : (
            <div className="flex w-full flex-col gap-5">
              <button
                className="mt-10 w-full rounded-xl bg-primary py-3 font-bold text-black"
                disabled={loader}
                onClick={() =>
                  BuyWithUSDTandUSDC(tokenAmount, lnbgValue?.toString(), true)
                }
              >
                Buy
              </button>
              <button
                className="w-full rounded-xl border border-black bg-black py-3 font-bold hover:border-primary"
                disabled={loader}
              >
                Add token in metamask
              </button>
            </div>
          )
        ) : (
          <button
            className="mt-10 w-full rounded-xl bg-primary py-3 font-bold text-black"
            onClick={() => open()}
          >
            Connect Wallet
          </button>
        ))}
      <Link
        href="https://lnbg-london.gitbook.io/lnbg-london/information/how-to-buy"
        className="text-sm text-gray2/60"
      >
        How to buy?
      </Link>
    </motion.div>
  );
}
