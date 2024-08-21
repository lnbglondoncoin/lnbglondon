"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers5/react";
import SimpleButton from "./buttons/SimpleButton";
import { Transak } from "@transak/transak-sdk";

const Header = () => {
  // --------------For hydration error-------------------
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // ----------------------------------------------------

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
              src="/logo.png"
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
                    title="Connect Wallet"
                    onClick={() => open()}
                    className="w-fit border border-secondary bg-secondary text-xs uppercase text-gray2 transition-all duration-200 ease-in-out hover:border-primary hover:text-white"
                  />
                ))}
            </div>
            <Sheet>
              <SheetTrigger>
                <Menu size={24} />
              </SheetTrigger>
              <SheetContent className="z-[999999999] border-none bg-ash py-10 pl-10 text-white">
                <SheetHeader>
                  <SheetTitle className="text-3xl font-bold text-white">
                    <Link href="/" className="flex items-center gap-x-3">
                      <Image
                        className=""
                        src="/logo.png"
                        width={40}
                        height={40}
                        alt="lnbgcoin"
                      />
                      <span className="text-xl font-semibold md:text-3xl">
                        LNBG COIN
                      </span>
                    </Link>
                  </SheetTitle>
                  <div className="flex h-[85vh] flex-col justify-between gap-10">
                    <div className="flex flex-col items-start gap-5 py-10">
                      <SheetClose asChild>
                        <Link
                          href="/"
                          className="font-sans text-lg text-gray2 hover:text-primary"
                        >
                          Home
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/#aboutus"
                          className="font-sans text-lg text-gray2 hover:text-primary"
                        >
                          About us
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <button
                          onClick={() => launchTransak()}
                          className="font-sans text-lg text-gray2 hover:text-primary"
                        >
                          Buy Tokens
                        </button>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/sell"
                          className="font-sans text-lg text-gray2 hover:text-primary"
                        >
                          Sell Tokens
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/our-team"
                          className="font-sans text-lg text-gray2 hover:text-primary"
                        >
                          Our Team
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/cryptocurrencies"
                          className="font-sans text-lg text-gray2 hover:text-primary"
                        >
                          Cryptocurrencies
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="/contact"
                          className="font-sans text-lg text-gray2 hover:text-primary"
                        >
                          Contact
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="https://app.lnbglondon.com"
                          className="w-fit rounded-lg bg-primary px-5 py-3 text-xs font-semibold uppercase text-black hover:bg-primary2"
                        >
                          Launch Dapp
                        </Link>
                      </SheetClose>
                      <div className="flex items-center gap-1 sm:hidden">
                        {chainId === 1 ? (
                          <button
                            onClick={() => open({ view: "Networks" })}
                            className="rounded-full border border-white/10 p-2"
                          >
                            <Image
                              src="/header/ethereum.svg"
                              width={20}
                              height={20}
                              alt="ethereum"
                            />
                          </button>
                        ) : chainId === 56 ? (
                          <button
                            onClick={() => open({ view: "Networks" })}
                            className="rounded-full border border-white/10 p-2"
                          >
                            <Image
                              src="/header/binance.png"
                              width={20}
                              height={20}
                              alt="binance"
                            />
                          </button>
                        ) : (
                          <p></p>
                        )}
                        {isClient &&
                          (isConnected ? (
                            <w3m-account-button balance="show" size="md" />
                          ) : (
                            <SimpleButton
                              title="Connect Wallet"
                              onClick={() => open()}
                              className="w-fit border border-secondary bg-secondary text-xs uppercase text-gray2 transition-all duration-200 ease-in-out hover:border-primary hover:text-white"
                            />
                          ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                      <div className="flex gap-5">
                        <Link
                          className="hover:text-primary"
                          href="https://twitter.com/lnbglondon"
                        >
                          {twitterIcon}
                        </Link>
                        <Link
                          className="hover:text-primary"
                          href="https://lnbglondon.com"
                        >
                          {telegramIcon}
                        </Link>
                        <Link
                          className="hover:text-primary"
                          href="https://www.linkedin.com/company/lnbg-international-investments/"
                        >
                          {linkedInIcon}
                        </Link>
                        <Link className="hover:text-primary" href="/">
                          {discordIcon}
                        </Link>
                      </div>
                      <div className="static z-10 flex w-full flex-col items-center justify-center gap-2 border-t border-white/10 py-5 font-sans text-sm text-white/40">
                        Copyright © All right reserved 2024.
                      </div>
                    </div>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

const twitterIcon = (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.3438 3.75C14.9688 3.28125 15.5312 2.71875 15.9688 2.0625C15.4062 2.3125 14.75 2.5 14.0938 2.5625C14.7812 2.15625 15.2812 1.53125 15.5312 0.75C14.9062 1.125 14.1875 1.40625 13.4688 1.5625C12.8438 0.90625 12 0.53125 11.0625 0.53125C9.25 0.53125 7.78125 2 7.78125 3.8125C7.78125 4.0625 7.8125 4.3125 7.875 4.5625C5.15625 4.40625 2.71875 3.09375 1.09375 1.125C0.8125 1.59375 0.65625 2.15625 0.65625 2.78125C0.65625 3.90625 1.21875 4.90625 2.125 5.5C1.59375 5.46875 1.0625 5.34375 0.625 5.09375V5.125C0.625 6.71875 1.75 8.03125 3.25 8.34375C3 8.40625 2.6875 8.46875 2.40625 8.46875C2.1875 8.46875 2 8.4375 1.78125 8.40625C2.1875 9.71875 3.40625 10.6562 4.84375 10.6875C3.71875 11.5625 2.3125 12.0938 0.78125 12.0938C0.5 12.0938 0.25 12.0625 0 12.0312C1.4375 12.9688 3.15625 13.5 5.03125 13.5C11.0625 13.5 14.3438 8.53125 14.3438 4.1875C14.3438 4.03125 14.3438 3.90625 14.3438 3.75Z"
      fill="currentColor"
    />
  </svg>
);

const discordIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 127.14 96.36"
    fill="currentColor"
  >
    <g id="图层_2" data-name="图层 2">
      <g id="Discord_Logos" data-name="Discord Logos">
        <g
          id="Discord_Logo_-_Large_-_White"
          data-name="Discord Logo - Large - White"
        >
          <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
        </g>
      </g>
    </g>
  </svg>
);

const linkedInIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 800 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M186.219 257.368H25.6181C18.4903 257.368 12.7148 263.146 12.7148 270.271V786.214C12.7148 793.342 18.4903 799.117 25.6181 799.117H186.219C193.347 799.117 199.123 793.342 199.123 786.214V270.271C199.123 263.146 193.347 257.368 186.219 257.368Z"
      fill="currentColor"
    />
    <path
      d="M105.977 0.879883C47.5407 0.879883 0 48.3689 0 106.741C0 165.138 47.5407 212.645 105.977 212.645C164.366 212.645 211.868 165.135 211.868 106.741C211.871 48.3689 164.366 0.879883 105.977 0.879883Z"
      fill="currentColor"
    />
    <path
      d="M594.72 244.544C530.217 244.544 482.534 272.273 453.613 303.781V270.271C453.613 263.146 447.837 257.368 440.71 257.368H286.906C279.778 257.368 274.003 263.146 274.003 270.271V786.214C274.003 793.342 279.778 799.117 286.906 799.117H447.156C454.284 799.117 460.059 793.342 460.059 786.214V530.942C460.059 444.921 483.425 411.409 543.388 411.409C608.694 411.409 613.884 465.133 613.884 535.368V786.217C613.884 793.344 619.659 799.12 626.787 799.12H787.097C794.225 799.12 800 793.344 800 786.217V503.213C800 375.303 775.61 244.544 594.72 244.544Z"
      fill="currentColor"
    />
  </svg>
);

const telegramIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.95 2.73954L22.85 23.7595C22.61 24.7495 21.5 25.2595 20.59 24.7895L14.14 21.4595L11.09 26.4495C10.26 27.8095 8.16003 27.2195 8.16003 25.6295V20.0695C8.16003 19.6395 8.34003 19.2295 8.65003 18.9295L21.22 6.92955C21.21 6.77955 21.05 6.64955 20.89 6.75955L5.89003 17.1995L0.850028 14.5995C-0.329972 13.9895 -0.279972 12.2795 0.940028 11.7495L25.79 0.919545C26.98 0.399545 28.26 1.46954 27.95 2.73954Z"
      fill="currentColor"
    />
  </svg>
);

export default Header;
