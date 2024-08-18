"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { leftToRightVariants, rightToLeftVariants } from "../variants";

const EarnFreeSection = () => {
  return (
    <section className="flex items-center justify-center px-5 py-10 overflow-hidden max-w-[100vw]">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className="flex flex-col justify-center gap-y-5 px-5"
        >
          <span className="text-2xl tracking-widest text-primary">
            Our Refferal Program
          </span>
          <span className="text-5xl font-bold leading-[3.5rem] text-white">
            Earn free lnbg coins with Every Referral{" "}
            <span className="text-primary">.</span>
          </span>
          <span className="font-sans text-lg text-gray2">
            Ready to start earning free Lnbg Coins? Log in to your Lnbg Coin
            account today and grab your unique referral link. Share it with your
            network and watch your coin balance grow with each successful
            referral.
          </span>
          <span className="font-sans text-lg text-gray2">
            Join us in building a strong and vibrant community of Lnbg Coin
            supporters. Together, we can shape the future of decentralized
            finance and create new opportunities for financial growth and
            empowerment.
          </span>
          <span className="font-sans text-lg text-gray2">
            Don't miss out on this exciting opportunity to earn free coins while
            introducing others to the world of Lnbg Coin. Start referring today
            and let's make a difference together!
          </span>
          <div className="flex flex-wrap gap-5">
            <div className="flex cursor-pointer gap-x-2 rounded-full border-4 border-lightgray bg-transparent py-4 pl-8 pr-10 font-bold tracking-tighter text-lightgray transition-all duration-200 ease-in-out hover:bg-lightgray hover:text-black">
              <Image src="/apple.svg" width={30} height={30} alt="apple icon" />
              <div className="flex flex-col text-start">
                <span className="text-xs text-darkgray">download on</span>
                <span className="">Apple Store</span>
              </div>
            </div>
            <div className="group flex cursor-pointer gap-x-2 rounded-full border-4 border-primary bg-primary py-4 pl-8 pr-10 font-bold tracking-tighter text-lightgray transition-all duration-200 ease-in-out hover:border-lightgray hover:bg-transparent hover:text-white">
              <Image
                src="/playstore.svg"
                width={30}
                height={30}
                alt="apple icon"
              />
              <div className="flex flex-col text-start">
                <span className="text-xs text-white group-hover:text-darkgray">
                  download on
                </span>
                <span className="text-white group-hover:text-lightgray">
                  Google Play
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
          className="flex w-full items-center justify-center"
        >
          <Image
            src="/phone.png"
            width={500}
            height={540}
            alt="phone"
            quality={100}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default EarnFreeSection;
