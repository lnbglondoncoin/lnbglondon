"use client";

import { useState } from "react";
import CoinSelector from "./CoinSelector";

const CoinsGraph = () => {
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");

  return (
    <CoinSelector
      selectedCoin={selectedCoin}
      setSelectedCoin={setSelectedCoin}
    />
  );
};

export default CoinsGraph;
