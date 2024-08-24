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
import lnbgAddress from "../contractsData/LnbgLondonCoin-address.json";
import Loader from "./Loader";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";
import TransactionSuccessModal from "./TransactionSuccessModal";

export default function PresaleCard({ lang = "en" }) {
  const {
    contractData,
    BuyWithUSDTandUSDC,
    getProviderPresaleContract,
    GetValues,
    loader,
    purchaseLoader,
    transactionSuccess,
    copyToClipboard,
    addTokenToMetamask,
    networkChange,
    BuyWithETH,
    presaleStart,
    presaleStop,
    userDatabaseData,
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
  const [buttonText, setButtonText] = useState("Buy");
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


  useEffect(() => {
    const main = async () => {
      if (selectedToken == "Binance" && tokenAmount !== "") {
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
        }, 1000);
      } else if (selectedToken !== "Binance" && tokenAmount !== "") {
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
        console.log("Doneeeeeeeeeeeeeeeeeee");
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
  }, [address]);

  const roundOff = (num) => {
    // convert string to int
    let number = parseFloat(num);
    // round off to 2 decimal
    return number.toFixed(4);
  };

  //----------------------------- Inssufficient address to clipboard-------------------------

  useEffect(() => {
    const checked = () => {
      let tokenBalance =
        selectedToken == "Binance"
          ? contractData?.ethBalance
          : selectedToken == "USDC"
            ? contractData?.usdcBalance
            : contractData?.usdtBalance;
      console.log(tokenBalance, "tokenBalancetokenBalancetokenBalance");
      if (parseFloat(tokenAmount) > parseFloat(tokenBalance)) {
        console.log("checkkkkkkkkkkkkkkkk1");
        setButtonText("Insufficient Balance");
        return;
      } else {
        setButtonText("Buy");
        return;
      }
    };
    checked();
  }, [tokenAmount, selectedToken]);
  console.log(buttonText, "buttonTextbuttonTextbuttonText");
  // -------------------------------------------------------------------------------

  let remainTokens = 10000000 - +contractData?.tokensInContract;

  console.log(loader, "loaderloaderloaderloader1");

  console.log(userDatabaseData, "userDatabaseDatauserDatabaseDatauserDatabaseData");
 
//   // Calculate the percentage of sold tokens
//  const soldPercentage = (+remainTokens * 100 ) / 10000000;

// Calculate the percentage of sold tokens
const soldPercentage = (contractData?.raisedAmount * 100) / +contractData?.totalSupply;


  return (
    <>
      {transactionSuccess && <TransactionSuccessModal />}
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
        id="presale"
        className="relative flex w-full flex-col items-center gap-y-5 overflow-hidden rounded-lg bg-ash/70 px-5 py-6 md:px-8 md:py-9"
      >
        {purchaseLoader && <Loader isPresale />}
        <>
          <h1 className="text-xl font-extrabold uppercase">
            {lang === "en"
              ? "Buy"
              : lang === "ru"
                ? "Купить"
                : lang === "fr"
                  ? "Acheter"
                  : "Comprar"}{" "}
            LNBG Coin
          </h1>
          <div className="flex w-full flex-col gap-3 rounded-xl bg-coal px-4 py-5">
            <span className="text-sm font-bold text-gray2">
              USD{" "}
              {lang === "en"
                ? "raised"
                : lang === "ru"
                  ? "поднято"
                  : lang === "fr"
                    ? "levé"
                    : "recaudado"}
            </span>
            <div className="flex flex-wrap items-end gap-1 font-bold">
              {loader ? (
                <Skeleton className="h-6 w-[250px] max-w-full" />
              ) : (
                <>
                  <span className="text-3xl text-primary">
                    ${roundOff(contractData?.raisedAmount)}
                  </span>
                  <span className="pb-1 text-lg font-normal text-gray2">
                    /$300,000
                  </span>
                </>
              )}
            </div>
            {loader ? (
              <Skeleton className="h-2 w-[150px]" />
            ) : (
              <div className="text-xs text-gray2/60">
                {+contractData?.tokensInContract > 0
                  ? Number(remainTokens)?.toFixed(4)
                  : 0}{" "}
                {lang === "en"
                  ? "of"
                  : lang === "ru"
                    ? "из"
                    : lang === "fr"
                      ? "de"
                      : "de"}{" "}
                10,000,000{" "}
                {lang === "en"
                  ? "tokens"
                  : lang === "ru"
                    ? "токенов"
                    : lang === "fr"
                      ? "jetons"
                      : "tokens"}
              </div>
            )}
            {loader ? (
              <Skeleton className="h-16 w-full" />
            ) : (
              <ProgressBar lang={lang} soldPercentage={soldPercentage} />
            )}
            {loader ? (
              <Skeleton className="h-10 w-full" />
            ) : (
              <div className="rounded-xd flex items-center gap-5 bg-ash px-2 py-3 text-gray2">
                <span className="w-full text-xs">
                  {lnbgAddress?.address?.slice(0, 6)}........
                  {lnbgAddress?.address?.slice(-4)}
                </span>
                {/* {copySuccess ? (
              <span className="text-nowrap text-[8px]">Copied to clipboard</span>
            ) : ( */}
                <button onClick={() => copyToClipboard()}>
                  <Copy size={18} />
                </button>
                {/* )} */}
              </div>
            )}
          </div>
          {loader ? (
            <Skeleton className="h-14 w-[250px]" />
          ) : (
            isClient &&
            (isConnected ? (
              <div className="grid w-full grid-cols-2">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray2">Your LNBG tokens:</span>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/static/logo.png"
                      width={18}
                      height={18}
                      alt="lnbg"
                    />
                    <span className="text-2xl">{Number(contractData?.lnbgBalance)?.toFixed(4)}</span>
                  </div>
                  <span className="text-sm text-gray2">= $ {Number(contractData?.lnbgBalance * ethers.utils.formatUnits(contractData?.tokenPrice, 18))?.toFixed(4)}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray2">Your Points:</span>
                  <span className="text-xl text-white/40">{Number(userDatabaseData?.points)}</span>
                  <span className="text-sm text-gray2">= $ {Number(userDatabaseData?.points)}</span>
                </div>
              </div>
            ) : (
              <CountdownTimer lang={lang} />
            ))
          )}
          {loader ? (
            <Skeleton className="h-16 w-full" />
          ) : (
            <SelectTokenModal
              setLnbgValue={setLnbgValue}
              setTokensAmount={setTokensAmount}
              selectedToken={selectedToken}
              setSelectedToken={setSelectedToken}
            />
          )}
          {loader ? (
            <Skeleton className="h-32 w-full" />
          ) : (
            <>
              <div className="flex w-full items-center justify-between gap-4 px-1 text-sm text-gray2">
                <div className="flex items-center gap-2">
                  <span>
                    {lang === "en"
                      ? "You pay:"
                      : lang === "ru"
                        ? "Вы платите:"
                        : lang === "fr"
                          ? "Tu paies:"
                          : "Usted paga:"}
                  </span>
                  {isClient && isConnected && (
                    <div className="rounded-full border border-gray2 px-3 font-sans text-xs italic">
                      {Number(selectedToken == "Binance" ? contractData?.ethBalance : selectedToken == "USDT" ? contractData?.usdtBalance : contractData?.usdcBalance)?.toFixed(6)} available
                    </div>
                  )}
                </div>
                <span>
                  {lang === "en"
                    ? "You receive:"
                    : lang === "ru"
                      ? "Вы получаете:"
                      : lang === "fr"
                        ? "Tu reçois:"
                        : "Usted recibe:"}
                </span>
              </div>
              <div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:gap-0">
                <div className="flex w-full items-center gap-2 rounded-xl border border-gray2/40 px-3 py-3 text-lg sm:rounded-l-xl sm:rounded-r-none">
                  {selectedToken == "Binance" ? (
                    <Image
                      src="/static/bnb-logo.png"
                      width={21}
                      height={21}
                      alt="bnb"
                    />
                  ) : selectedToken == "USDC" ? (
                    usdcSvg
                  ) : selectedToken == "USDT" ? (
                    usdtSvg
                  ) : (
                    <Image
                      src="/static/bnb-logo.png"
                      width={21}
                      height={21}
                      alt="bnb"
                    />
                  )}
                  <input
                    type="text"
                    placeholder="0.0"
                    // inputMode="numeric"
                    value={tokenAmount}
                    onChange={handleTokenChange}
                    className="w-full bg-transparent text-gray2"
                  />
                </div>
                <div className="flex w-full items-center gap-2 rounded-xl border border-gray2/40 px-3 py-3 text-lg sm:rounded-l-none sm:rounded-r-xl">
                  <Image
                    src="/static/coins/lnbgcoin.png"
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
                    // onChange={handleTokenChange}
                    className="w-full bg-transparent text-gray2"
                  />
                </div>
              </div>
              <div className="grid w-full sm:grid-cols-2">
                <span className="text-sm font-semibold">
                  1 lnbg ={" "}
                  {ethers.utils.formatUnits(contractData?.tokenPrice, 18)}$
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">
                    {lang === "en"
                      ? "Next price = 0.039$"
                      : lang === "ru"
                        ? "Следующая цена = 0.039$"
                        : lang === "fr"
                          ? "Prochain prix = 0.039$"
                          : "Próximo precio = 0.039$"}
                  </span>
                  <div className="rounded-md bg-red-500 px-1 py-0.5 text-xs">
                    +30%
                  </div>
                </div>
              </div>
            </>
          )}
          {isClient &&
            (isConnected == true ? (
              selectedToken == "Binance" ? (
                <div className="flex w-full flex-col gap-5">
                  <button
                    className="mt-10 w-full rounded-xl bg-primary py-3 font-bold text-black"
                    disabled={loader || buttonText === "Insufficient Balance"}
                    onClick={() => {
                      buttonText === "Insufficient Balance"
                        ? ""
                        : BuyWithETH(lnbgValue?.toString(), tokenAmount);
                    }}
                  >
                    {buttonText}
                  </button>
                  <button
                    onClick={addTokenToMetamask}
                    className="w-full rounded-xl border border-black bg-black py-3 font-bold hover:border-primary"
                    disabled={loader}
                  >
                    {lang === "en"
                      ? "Add token in metamask"
                      : lang === "ru"
                        ? "Добавить токен в metamask"
                        : lang === "fr"
                          ? "Ajouter un jeton dans metamask"
                          : "Agregar token en metamask"}
                  </button>
                </div>
              ) : selectedToken == "USDC" ? (
                <div className="flex w-full flex-col gap-5">
                  <button
                    className="mt-10 w-full rounded-xl bg-primary py-3 font-bold text-black"
                    disabled={loader || buttonText === "Insufficient Balance"}
                    onClick={() =>
                      BuyWithUSDTandUSDC(
                        tokenAmount,
                        lnbgValue?.toString(),
                        false,
                      )
                    }
                  >
                    {buttonText}
                  </button>
                  <button
                    onClick={addTokenToMetamask}
                    className="w-full rounded-xl border border-black bg-black py-3 font-bold hover:border-primary"
                    disabled={loader}
                  >
                    {lang === "en"
                      ? "Add token in metamask"
                      : lang === "ru"
                        ? "Добавить токен в metamask"
                        : lang === "fr"
                          ? "Ajouter un jeton dans metamask"
                          : "Agregar token en metamask"}
                  </button>
                </div>
              ) : (
                <div className="flex w-full flex-col gap-5">
                  <button
                    className="mt-10 w-full rounded-xl bg-primary py-3 font-bold text-black"
                    disabled={loader || buttonText === "Insufficient Balance"}
                    onClick={() =>
                      BuyWithUSDTandUSDC(
                        tokenAmount,
                        lnbgValue?.toString(),
                        true,
                      )
                    }
                  >
                    {buttonText}
                  </button>
                  <button
                    onClick={addTokenToMetamask}
                    className="w-full rounded-xl border border-black bg-black py-3 font-bold hover:border-primary"
                    disabled={loader}
                  >
                    {lang === "en"
                      ? "Add token in metamask"
                      : lang === "ru"
                        ? "Добавить токен в metamask"
                        : lang === "fr"
                          ? "Ajouter un jeton dans metamask"
                          : "Agregar token en metamask"}
                  </button>
                </div>
              )
            ) : (
              <button
                className="mt-10 w-full rounded-xl bg-primary py-3 font-bold text-black"
                onClick={() => open()}
              >
                {lang === "en"
                  ? "Connect wallet"
                  : lang === "ru"
                    ? "Подключить кошелек"
                    : lang === "fr"
                      ? "Connecter le portefeuille"
                      : "Conectar billetera"}
              </button>
            ))}
          <Link
            href="https://lnbg-london.gitbook.io/lnbg-london/information/how-to-buy"
            className="text-sm text-gray2/60"
          >
            {lang === "en"
              ? "How to buy?"
              : lang === "ru"
                ? "Как купить?"
                : lang === "fr"
                  ? "Comment acheter?"
                  : "¿Cómo comprar?"}
          </Link>
        </>
      </motion.div>
    </>
  );
}
