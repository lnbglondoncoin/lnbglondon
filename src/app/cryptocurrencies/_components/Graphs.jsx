"use client";

import dynamic from "next/dynamic";
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
  // make first letter capital
  coin = coin.charAt(0).toUpperCase() + coin.slice(1);
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
        <div className="h-[600px]">
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
        </div>
      </div>
    </div>
  );
};

export default Graphs;
