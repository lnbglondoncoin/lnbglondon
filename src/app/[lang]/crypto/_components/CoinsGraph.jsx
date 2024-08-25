"use client";

import { useState } from "react";
import CoinSelector from "./CoinSelector";
import Graphs from "./Graphs";

const CoinsGraph = () => {
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const symbol =
    selectedCoin === "bitcoin"
      ? "BTC"
      : selectedCoin === "ethereum"
        ? "ETH"
        : selectedCoin === "dogecoin"
          ? "DOGE"
          : selectedCoin === "litecoin"
            ? "LTC"
            : "XRP";
  const symbolGraph =
    selectedCoin === "bitcoin"
      ? "BINANCE:BTCUSDT"
      : selectedCoin === "ethereum"
        ? "BINANCE:ETHUSDT"
        : selectedCoin === "dogecoin"
          ? "BINANCE:DOGEUSDT"
          : selectedCoin === "litecoin"
            ? "BINANCE:LTCUSDT"
            : "BINANCE:XRPUSDT";

  const desc =
    selectedCoin === "bitcoin"
      ? "Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009 Bitcoin is a peer-to-peer online currency, meaning that all transactions happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them."
      : selectedCoin === "ethereum"
        ? "Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts. Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014."
        : selectedCoin === "dogecoin"
          ? "Dogecoin (DOGE) is based on the popular 'doge' Internet meme and features a Shiba Inu on its logo. The open-source digital currency was created by Billy Markus from Portland, Oregon and Jackson Palmer from Sydney, Australia, and was forked from Litecoin in December 2013. Dogecoin's creators envisaged it as a fun, light-hearted cryptocurrency that would have greater appeal beyond the core Bitcoin audience, since it was based on a dog meme."
          : selectedCoin === "litecoin"
            ? "Litecoin (LTC) is a cryptocurrency that was designed to provide fast, secure and low-cost payments by leveraging the unique properties of blockchain technology. To learn more about this project, check out our deep dive of Litecoin. The cryptocurrency was created based on the Bitcoin (BTC) protocol, but it differs in terms of the hashing algorithm used, hard cap, block transaction times and a few other factors. Litecoin has a block time of just 2.5 minutes and extremely low transaction fees, making it suitable for micro-transactions and point-of-sale payments."
            : "Baby Ripple was created with one true purpose, to generate passive income for the masses. The Baby Ripple token (BabyXRP) is on the Binance Smart Chain(BEP20). Holders of BabyXRP token receive Automatically deposits to their wallet, in Ripple (XRP). To receive the rewards you need to add XRP to your wallet.";

  return (
    <div className="flex flex-col min-h-fit">
      <CoinSelector
        selectedCoin={selectedCoin}
        setSelectedCoin={setSelectedCoin}
      />
      <Graphs
        coin={selectedCoin}
        symbolGraph={symbolGraph}
        symbol={symbol}
        desc={desc}
      />
    </div>
  );
};

export default CoinsGraph;
