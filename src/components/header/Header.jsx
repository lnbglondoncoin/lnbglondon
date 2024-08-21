"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers5/react";
import SimpleButton from "../buttons/SimpleButton";
import { Transak } from "@transak/transak-sdk";
import Sidebar from "./Sidebar";

const Header = ({ lang = "en" }) => {
  // --------------For hydration error-------------------
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // ----------------------------------------------------
  const [selectedLang, setSelectedLang] = useState(lang || "en");
  const { open } = useWeb3Modal();
  const { isConnected, chainId } = useWeb3ModalAccount();
  // on scroll make header fixed
  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ----------------BUY--------------------------------
  const transakConfig = {
    apiKey: process.env.NEXT_PUBLIC_TRANSAK_API_KEY,
    environment: Transak.ENVIRONMENTS.PRODUCTION,
    defaultCryptoCurrency: "ETH",
    themeColor: "11121a", // App theme color
    widgetHeight: "600px",
    widgetWidth: "500px",
  };
  const transak = new Transak(transakConfig);
  const launchTransak = () => {
    transak.init();
  };
  // ----------------------------------------------------

  return (
    <>
      <header
        className={`left-0 z-50 flex w-full items-center justify-center py-5 ${
          isSticky
            ? "fixed top-0 bg-ash shadow-md"
            : "absolute top-[46px] bg-transparent"
        }`}
      >
        <div className="flex w-full max-w-7xl items-center justify-between px-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-x-3">
            <Image
              className=""
              src="/static/logo.png"
              width={40}
              height={40}
              alt="lnbgcoin"
            />
            <span className="text-2xl font-semibold md:text-3xl">
              LNBG COIN
            </span>
          </Link>
          {/* Nav */}
          <div className="flex items-center gap-5">
            <div className="hidden items-center gap-1 sm:flex">
              {isClient &&
                (isConnected ? (
                  <w3m-account-button balance="show" size="md" />
                ) : (
                  <SimpleButton
                    title={
                      lang === "en"
                        ? "Connect wallet"
                        : lang === "ru"
                          ? "Подключить кошелек"
                          : lang === "fr"
                            ? "Connecter le portefeuille"
                            : "Conectar billetera"
                    }
                    onClick={() => open()}
                    className="w-fit border border-secondary bg-secondary text-xs uppercase text-gray2 transition-all duration-200 ease-in-out hover:border-primary hover:text-white"
                  />
                ))}
            </div>
            <Sidebar
              lang={lang}
              selectedLang={selectedLang}
              setSelectedLang={setSelectedLang}
              chainId={chainId}
              isClient={isClient}
              isConnected={isConnected}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
