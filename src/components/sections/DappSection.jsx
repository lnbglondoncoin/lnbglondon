"use client";

import Button from "../buttons/Button";
import { motion } from "framer-motion";
import { leftToRightVariants, rightToLeftVariants } from "../variants";

export default function DappSection() {
  return (
    <div className="flex w-full items-center justify-center overflow-hidden max-w-[100vw]">
      <div className="flex w-full max-w-7xl items-center justify-center overflow-hidden rounded-xl bg-[url(/robot.png)] bg-cover bg-center">
        <div className="grid w-full max-w-7xl bg-black/70 px-5 py-20 md:grid-cols-2 md:px-10">
          <div className="flex flex-col gap-10">
            <motion.div
              initial="hide"
              whileInView="show"
              exit="show"
              variants={leftToRightVariants}
              className="flex w-fit flex-col gap-2 text-4xl font-bold sm:text-6xl"
            >
              <h1 className="rounded bg-gradient-to-r from-primary/30 to-white/10 p-1">
                LNBG DAPP
              </h1>
              <h1 className="rounded bg-gradient-to-r from-primary/30 to-white/10 p-1">
                <span className="text-primary">IS LIVE</span>NOW
              </h1>
            </motion.div>
            <motion.span
              initial="hide"
              whileInView="show"
              exit="show"
              variants={leftToRightVariants}
              className="max-w-md font-sans text-lg"
            >
              Explore our vaults for stable growth options with competitive APYs
              and Cybro Points. Select the ideal vault for your strategy and
              boost your portfolio today.
            </motion.span>
            <motion.div
              initial="hide"
              whileInView="show"
              exit="show"
              variants={rightToLeftVariants}
              className="flex flex-col items-center gap-5 md:flex-row md:gap-10"
            >
              <Button
                title="Launch App"
                className="h-full px-20 text-sm font-bold uppercase shadow-xl shadow-primary/30"
              />
              <span className="font-sans text-lg leading-6 text-gray2/80">
                Join now for exclusive early access to the CYBRO platform among
                the first explorers
              </span>
            </motion.div>
            <div className="grid grid-cols-2 gap-10 text-xl">
              <motion.span
                initial="hide"
                whileInView="show"
                exit="show"
                variants={leftToRightVariants}
                className=""
              >
                Reliable risk <br /> scoring
              </motion.span>
              <motion.span
                initial="hide"
                whileInView="show"
                exit="show"
                variants={rightToLeftVariants}
                className=""
              >
                DeFi Vaults and <br /> CeFi Strategies
              </motion.span>
              <motion.span
                initial="hide"
                whileInView="show"
                exit="show"
                variants={leftToRightVariants}
                className=""
              >
                Transparent fees
              </motion.span>
              <motion.span
                initial="hide"
                whileInView="show"
                exit="show"
                variants={rightToLeftVariants}
                className=""
              >
                AI-copilot for <br /> strategy selection <br /> and creation
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
