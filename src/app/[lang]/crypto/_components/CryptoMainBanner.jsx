import Link from "next/link";
import TokensTable from "./TokensTable";

const CryptoMainBanner = () => {
  return (
    <section className="relative flex w-full items-center justify-center bg-[url(/static/bgs/bg-2.png)] bg-contain bg-no-repeat pt-[120px]">
      <div className="z-10 flex w-full max-w-7xl flex-col items-center gap-10 px-5 text-center">
        <span className="text-xl uppercase tracking-[0.2em] text-primary sm:text-2xl">
          Top 10 Cryptocurrencies
        </span>
        <div className="bg-gradient-to-r from-primary via-white to-white bg-clip-text text-4xl text-transparent sm:text-6xl">
          Crypto<span className="text-primary">.</span>
        </div>
        <span className="max-w-4xl text-2xl text-lightgray">
          Explore crypto like Bitcoin, Ethereum, and Dogecoin. Simply and
          securely buy, sell, and manage hundreds of cryptocurrencies. See more
          assets.
        </span>
        <Link
          href="#professionals"
          className="rounded-full border-4 border-primary bg-transparent px-10 py-4 font-bold uppercase tracking-tighter text-primary transition-all duration-200 ease-in-out hover:bg-primary hover:text-white"
        >
          Get Started Now!
        </Link>
        <TokensTable />
      </div>
    </section>
  );
};

export default CryptoMainBanner;
