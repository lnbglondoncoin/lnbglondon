"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  // on scroll make header fixed
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
    <>
      <header
        className={`left-0 z-50 flex w-full items-center justify-center py-5 ${
          isSticky
            ? "fixed top-0 bg-coal shadow-md"
            : "absolute top-[46px] bg-transparent"
        }`}
      >
        <div className="flex w-full max-w-7xl items-center justify-between px-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-x-3">
            <Image
              className=""
              src="/logo.png"
              width={50}
              height={50}
              alt="lnbgcoin"
            />
            <span className="text-2xl font-semibold md:text-3xl">
              LNBG COIN
            </span>
          </Link>
          {/* Nav */}
          <nav className="hidden items-center gap-x-7 text-lightgray lg:flex">
            <Link
              href="/"
              className="hover:border-b hover:border-primary hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/#aboutus"
              className="hover:border-b hover:border-primary hover:text-primary"
            >
              About Us
            </Link>
            <Link
              href="/our-team"
              className="hover:border-b hover:border-primary hover:text-primary"
            >
              Our Team
            </Link>
            <Link
              href="/cryptocurrencies"
              className="hover:border-b hover:border-primary hover:text-primary"
            >
              Crypto Currencies
            </Link>
            <Link
              href="https://lnbg-dapp.vercel.app"
              target="_blank"
              className="hover:border-b hover:border-primary hover:text-primary"
            >
              Dapp
            </Link>
            <Link
              href="/contact"
              className="hover:border-b hover:border-primary hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          {/* for small screens */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
            <Image src="/icons/menu.svg" width={30} height={30} alt="menu" />
          </button>
          {/* Drop down */}
          {isMenuOpen && (
            <nav className="absolute left-0 top-0 z-50 flex w-full flex-col items-center justify-center gap-y-5 bg-secondary">
              <button
                className="absolute right-7 top-7"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image
                  src="/icons/close.svg"
                  width={20}
                  height={20}
                  alt="close"
                />
              </button>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="hover:border-b hover:border-primary hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/#aboutus"
                onClick={() => setIsMenuOpen(false)}
                className="hover:border-b hover:border-primary hover:text-primary"
              >
                About Us
              </Link>
              <Link
                href="/our-team"
                onClick={() => setIsMenuOpen(false)}
                className="hover:border-b hover:border-primary hover:text-primary"
              >
                Our Team
              </Link>
              <Link
                href="/cryptocurrencies"
                onClick={() => setIsMenuOpen(false)}
                className="hover:border-b hover:border-primary hover:text-primary"
              >
                Crypto Currencies
              </Link>
              <Link
                href="/cryptocurrencies"
                onClick={() => setIsMenuOpen(false)}
                className="hover:border-b hover:border-primary hover:text-primary"
              >
                Coin Market
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="hover:border-b hover:border-primary hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
