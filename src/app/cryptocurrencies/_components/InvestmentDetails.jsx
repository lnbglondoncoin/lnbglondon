import React from "react";
import Accordion from "./Accordion";
import Image from "next/image";

const InvestmentDetails = () => {
  return (
    <div className="flex items-center justify-center px-5 pb-20">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-10 px-5 lg:grid-cols-2">
        <div className="relative mx-10 hidden items-center justify-between md:flex">
          <div className="absolute flex h-56 w-48 -rotate-12 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-black/50 transition-all duration-300 ease-in-out hover:bg-primary/70">
            <Image
              src="/coins/bitcoin.png"
              width={80}
              height={80}
              alt="bitcoin"
            />
            <span>Bitcoin</span>
          </div>
          <div className="absolute left-24 flex h-56 w-48 -rotate-12 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-black/50 transition-all duration-300 ease-in-out hover:bg-primary/70">
            <Image
              src="/payment/paypal.png"
              width={80}
              height={80}
              alt="bitcoin"
            />
            <span>Paypal</span>
          </div>
          <div className="absolute left-48 flex h-56 w-48 -rotate-12 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-black/50 transition-all duration-300 ease-in-out hover:bg-primary/70">
            <Image
              src="/payment/visa.png"
              width={80}
              height={80}
              alt="bitcoin"
            />
            <span>Visa</span>
          </div>
          <div className="absolute left-72 flex h-56 w-48 -rotate-12 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-black/50 transition-all duration-300 ease-in-out hover:bg-primary/70">
            <Image
              src="/payment/mastercard.png"
              width={80}
              height={80}
              alt="bitcoin"
            />
            <span>Mastercard</span>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-10">
          <div className="bg-gradient-to-r from-primary via-white to-white bg-clip-text text-4xl tracking-tighter text-transparent sm:text-6xl">
            Investment details
            <span className="text-primary">.</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <Accordion
              title="Passive Income"
              desc="Lifetime transaction tax sharing between the ICO participants only."
            />
            <Accordion
              title="Trading & Investments"
              desc="At Firm Crypto Tradings, we always put our valued customers first and dedicate ourselves time and expertise in making our customers ever grateful for investing with us."
            />
            <Accordion
              title="Compliance"
              desc="Ensures legally compliant tokenized assets. Our two overriding principles are both Legal and Technological excellence."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDetails;
