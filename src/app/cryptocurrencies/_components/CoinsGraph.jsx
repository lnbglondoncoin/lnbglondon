"use client";

import { useState } from "react";
import CoinSelector from "./CoinSelector";
import Graphs from "./Graphs";

const CoinsGraph = () => {
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const symbol =
    selectedCoin === "bitcoin"
      ? "BINANCE:BTCUSDT"
      : selectedCoin === "ethereum"
        ? "BINANCE:ETHUSDT"
        : selectedCoin === "dogecoin"
          ? "BINANCE:DOGEUSDT"
          : selectedCoin === "litecoin"
            ? "BINANCE:LTCUSDT"
            : "BINANCE:XRPUSDT";

  return (
    <div className="flex flex-col">
      <CoinSelector
        selectedCoin={selectedCoin}
        setSelectedCoin={setSelectedCoin}
      />
      <Graphs coin={selectedCoin} symbol={symbol} />
    </div>
  );
};

export default CoinsGraph;
