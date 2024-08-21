"use client";

import { motion } from "framer-motion";
import { leftToRightVariants, rightToLeftVariants } from "../variants";

const RoadmapSection = () => {
  return (
    <section
      className="mt-10 flex w-full max-w-[100vw] flex-col items-center justify-center overflow-hidden bg-ash"
      id="roadmap"
    >
      <div className="flex w-full max-w-7xl flex-col items-center justify-center rounded-xl px-10 pt-20">
        <motion.h1
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className="text-4xl font-bold uppercase sm:text-6xl"
        >
          RoadMap
        </motion.h1>
        <div className="grid w-full gap-5 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            step="Q1"
            year="2024"
            points={[
              "Presale Launch",
              "Community Building",
              "MVP Lauch: Vaults & Exchange",
            ]}
          />
          <Card
            step="Q2"
            year="2024"
            points={[
              "Token Generation Event",
              "One-click Investment feature",
              "Airdrop",
            ]}
            active
          />
          <Card
            step="Q3"
            year="2024"
            points={["Staking", "Lending Aggregator", "Zap-in and zap-out"]}
          />
          <Card
            step="Q4"
            year="2025"
            points={[
              "AI-Broker feature",
              "Insurance program",
              "Leverage farming",
            ]}
          />
        </div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className="w-full bg-[url(/static/tesla.webp)] bg-contain bg-no-repeat sm:h-[200px] md:h-[300px] lg:h-[350px]"
        ></motion.div>
      </div>
    </section>
  );
};

const Card = ({ step, year, points, active = false }) => {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      exit="show"
      variants={rightToLeftVariants}
      className={`relative w-full overflow-hidden rounded-xl bg-coal p-2.5 ${active && "scale-105 border-4 border-dashed border-primary"}`}
    >
      {active && (
        <div className="absolute inset-0 flex rotate-45 items-center">
          <div className="moving-div h-[600px] w-[20px] bg-secondary"></div>
          <div className="moving-div h-[600px] w-[20px] bg-secondary"></div>
          <div className="moving-div h-[600px] w-[20px] bg-secondary"></div>
          <div className="moving-div h-[600px] w-[20px] bg-secondary"></div>
          <div className="moving-div h-[600px] w-[20px] bg-secondary"></div>
          <div className="moving-div h-[600px] w-[20px] bg-secondary"></div>
          <div className="moving-div h-[600px] w-[20px] bg-secondary"></div>
          <div className="moving-div h-[600px] w-[20px] bg-secondary"></div>
          <div className="moving-div h-[600px] w-[20px] bg-secondary"></div>
          <div className="moving-div h-[600px] w-[20px] bg-secondary"></div>
          <div className="moving-div h-[600px] w-[20px] bg-secondary"></div>
        </div>
      )}
      <div className="relative z-10 flex gap-2 px-3 py-2 text-xl">
        <span className="rounded bg-white px-1.5 pt-0.5 text-black">
          {step}
        </span>
        <span className="pt-0.5 text-gray2">{year}</span>
      </div>
      <div className="relative z-10 mt-1 flex w-full flex-col gap-2 rounded-lg bg-ash p-4">
        {points.map((point, index) => (
          <div className="flex items-center gap-2 font-bold" key={index}>
            <div className="h-1.5 w-1.5 bg-primary"></div>
            <span className="text-sm">{point}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default RoadmapSection;
