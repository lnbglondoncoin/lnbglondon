"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
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

  return (
    <header
      className={`left-0 top-0 z-50 flex w-full items-center justify-center py-5 ${
        isSticky ? "bg-secondary fixed shadow-md" : "absolute bg-transparent"
      }`}
    >
      <div className="flex w-full max-w-7xl items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-x-3">
          <Image
            className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16"
            src="/coins/lnbgcoin.png"
            width={60}
            height={60}
            alt="lnbgcoin"
          />
          <span className="font-sans text-2xl font-black md:text-3xl">
            LNBG COIN
          </span>
        </Link>
        {/* Nav */}
        <nav className="text-lightgray hidden items-center gap-x-7 lg:flex">
          <Link
            href="/"
            className="hover:border-primary font-semibold hover:border-b hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/#aboutus"
            className="hover:border-primary font-semibold hover:border-b hover:text-primary"
          >
            About Us
          </Link>
          <Link
            href="/our-team"
            className="hover:border-primary font-semibold hover:border-b hover:text-primary"
          >
            Our Team
          </Link>
          <Link
            href="/cryptocurrencies"
            className="hover:border-primary font-semibold hover:border-b hover:text-primary"
          >
            Crypto Currencies
          </Link>
          <Link
            href="/cryptocurrencies"
            className="hover:border-primary font-semibold hover:border-b hover:text-primary"
          >
            Coin Market
          </Link>
          <Link
            href="/cryptocurrencies"
            className="hover:border-primary font-semibold hover:border-b hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        {/* for small screens */}
        <button className="lg:hidden">
          <Image src="/icons/menu.svg" width={30} height={30} alt="menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;
