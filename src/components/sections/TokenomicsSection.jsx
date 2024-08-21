"use client";

import { motion } from "framer-motion";
import { leftToRightVariants, rightToLeftVariants } from "../variants";

const TokenomicsSection = () => {
  return (
    <section className="flex w-full justify-center px-1 overflow-hidden max-w-[100vw]">
      <div className="flex w-full max-w-7xl flex-col items-center gap-10 py-20">
        <motion.h1
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
          className="text-center text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          TOKENOMICS
        </motion.h1>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className="flex h-[350px] w-[350px] flex-col bg-[url(/static/tokenomics.png)] bg-[length:190px_190px] bg-center bg-no-repeat sm:h-[460px] sm:w-[640px] sm:bg-[length:270px_270px]"
        >
          <div className="flex h-full w-full flex-col gap-3">
            <div className="flex w-full flex-col items-center">
              <span className="text-sm text-gray2">Total tokens:</span>
              <span className="text-2xl font-bold">7,000,000,000</span>
            </div>
            <div className="grid h-full w-full grid-cols-2 font-sans">
              <div className="relative flex h-full w-full flex-col gap-5">
                <div className="absolute left-[33%] flex  flex-col-reverse text-center font-sans text-xs font-semibold sm:top-[10px] sm:flex-row sm:text-sm">
                  <span className="flex max-w-[69px] items-center justify-center sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Ecosystem
                  </span>
                  <span className="flex max-w-[69px] items-center justify-center text-[#E7EDFF] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    5.0%
                  </span>
                </div>
                <div className="absolute left-[10px] top-[40px] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:top-[80px] sm:flex-row sm:text-sm">
                  <span className="flex max-w-[69px] items-center justify-center sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Private <br /> Round Sale
                  </span>
                  <span className="flex max-w-[69px] items-center justify-center text-[#FF5AA9] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    10.0%
                  </span>
                </div>
                <div className="absolute left-[10%] top-[100px] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:left-[15%] sm:top-[160px] sm:flex-row sm:text-sm">
                  <span className="flex max-w-[69px] items-center justify-center sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Reserve
                  </span>
                  <span className="flex max-w-[69px] items-center justify-center text-[#28F174] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    5.0%
                  </span>
                </div>
                <div className="absolute left-[10%] top-[140px] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:top-[220px] sm:flex-row sm:text-sm">
                  <span className="flex max-w-[69px] items-center justify-center sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Marketing
                  </span>
                  <span className="flex max-w-[69px] items-center justify-center text-[#BA60FF] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    7.0%
                  </span>
                </div>
                <div className="absolute left-[33%] top-[190px] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:left-[20%] sm:top-[300px] sm:flex-row sm:text-sm">
                  <span className="flex max-w-[69px] items-center justify-center sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Team & Advisors
                  </span>
                  <span className="flex max-w-[69px] items-center justify-center text-[#FF3868] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    15.0%
                  </span>
                </div>
              </div>
              <div className="relative flex h-full w-full flex-col items-end gap-5">
                <div className="absolute right-[33%] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:right-[22%] sm:top-[30px] sm:flex-row sm:text-sm">
                  <span className="flex max-w-[69px] items-center justify-center sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Pre-Sale
                  </span>
                  <span className="flex max-w-[69px] items-center justify-center text-[#E7EDFF] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    20.5%
                  </span>
                </div>
                <div className="absolute top-[70px] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:right-[3%] sm:top-[120px] sm:flex-row sm:text-sm">
                  <span className="flex max-w-[69px] items-center justify-center sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Public Sale
                  </span>
                  <span className="flex max-w-[69px] items-center justify-center text-[#6371F9] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    5.0%
                  </span>
                </div>
                <div className="absolute right-[10%] top-[110px] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:top-[170px] sm:flex-row sm:text-sm">
                  <span className="flex max-w-[69px] items-center justify-center sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Liquidity
                  </span>
                  <span className="flex max-w-[69px] items-center justify-center text-[#FF842A] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    10.0%
                  </span>
                </div>
                <div className="absolute right-[15%] top-[160px] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:right-[-5%] sm:top-[235px] sm:flex-row sm:text-sm">
                  <span className="flex max-w-[69px] items-center justify-center sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Airdrop & Rewards
                  </span>
                  <span className="flex max-w-[69px] items-center justify-center text-[#A0E138] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    14.5%
                  </span>
                </div>
                <div className="absolute right-[47%] top-[210px] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:right-[15%] sm:top-[290px] sm:flex-row sm:text-sm">
                  <span className="flex max-w-[69px] items-center justify-center sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Staking & Rewards
                  </span>
                  <span className="flex max-w-[69px] items-center justify-center text-[#4EDEFF] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    15.0%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
