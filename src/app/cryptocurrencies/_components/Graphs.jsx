"use client";

import dynamic from "next/dynamic";
const AdvancedRealTimeChartNoSSR = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  },
);
const Graphs = ({ coin, symbol }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col">
        <div className="flex gap-5">
          <h1 className="text-3xl font-bold">{coin}</h1>
        </div>
        <AdvancedRealTimeChartNoSSR
          symbol={symbol}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default Graphs;
