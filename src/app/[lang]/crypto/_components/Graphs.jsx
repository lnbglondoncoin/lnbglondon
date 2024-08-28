"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
const AdvancedRealTimeChartNoSSR = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  },
);

const SymbolOverviewNoSSR = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.SymbolOverview),
  {
    ssr: false,
  },
);

const Graphs = ({ coin, symbolGraph, symbol, desc }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="mx-5 h-full w-full max-w-7xl rounded-lg bg-coal p-5 py-10 sm:p-20 sm:py-20">
        <div className="mb-5 flex gap-x-5">
          <h1 className="text-2xl font-bold">
            {coin + " "}
            <span className="text-primary">{symbol}</span>
          </h1>
        </div>
        <div className="pb-5 text-darkgray">{desc}</div>
        <div className="relative h-[600px]">
          <AdvancedRealTimeChartNoSSR
            symbol={symbolGraph}
            theme="dark"
            autosize
            interval="1"
            timezone="exchange"
            locale="en"
            toolbar_bg="#f1f3f6"
            save_image={true}
            details={false}
            hide_side_toolbar={true}
          />
          <div className="absolute bottom-[4.6rem] left-0 grid h-12 w-16 place-items-center rounded-r-full">
            <div className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-ash p-1">
              <Image
                src="/static/logo.png"
                alt="coin"
                className="mt-1"
                width={20}
                height={20}
                quality={100}
              />
            </div>
          </div>
          <div className="absolute -bottom-20 h-20 w-full bg-coal"></div>
        </div>
      </div>
    </div>
  );
};

export default Graphs;
