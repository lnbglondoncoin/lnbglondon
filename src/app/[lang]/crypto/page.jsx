"use client";

import { useSearchParams } from "next/navigation";
import Graphs from "./_components/Graphs";

const CryptocurrenciesPage = () => {
  const searchParams = useSearchParams();
  const coin = searchParams.get("coin");
  const symbol = searchParams.get("symbol");
  const symbolGraph = `BINANCE:${symbol}USDT`;
  const desc =
    coin === "Bitcoin"
      ? "Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009 Bitcoin is a peer-to-peer online currency, meaning that all transactions happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them."
      : coin === "Ethereum"
        ? "Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts. Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014."
        : coin === "Tether USDT"
          ? "Tether (USDT) is a cryptocurrency with a value meant to mirror the value of the U.S. dollar. The idea was to create a stable cryptocurrency that can be used like digital dollars. Coins that serve this purpose of being a stable dollar substitute are called stable coins. According to their site, Tether converts cash into digital currency, to anchor or tether the value of the coin to the price of national currencies like the US dollar, the Euro, and the Yen."
          : coin === "BNB"
            ? "Binance Coin (BNB) is a cryptocurrency used to pay fees on the Binance cryptocurrency exchange. Fees paid in Binance Coin on the exchange receive a discount. Binance Coin was issued by the Binance exchange, and trades with the BNB symbol. Binance coin runs on the Ethereum blockchain with ERC 20 standard, and has a strict limit of maximum 200 million BNB tokens"
            : coin === "Solana"
              ? "Solana is a high-performance blockchain supporting builders around the world. It's fast, secure, and censorship-resistant. Solana is a high-performance blockchain supporting builders around the world. It's fast, secure, and censorship-resistant. Solana is a high-performance blockchain supporting builders around the world. It's fast, secure, and censorship-resistant."
              : coin === "USDC"
                ? "USD Coin (USDC) is a type of cryptocurrency that is referred to as a stablecoin. You can always redeem 1 USD Coin for US$1.00, giving it a stable price. On Coinbase, eligible customers can earn rewards for every USD Coin they hold."
                : coin === "XRP"
                  ? "XRP is the digital asset native to the Ripple system. It is touted as being easy to use with almost free, instant transactions. Ripple is built upon distributed open source protocol, a consensus ledger and the aforementioned digital asset known as XRP. Built for enterprise use, XRP aims to be a fast, cost-efficient cryptocurrency for cross-border payments."
                  : coin === "Dogecoin"
                    ? "Dogecoin is a cryptocurrency that was created as a joke — its name is a reference to a popular Internet meme. It shares many features with Litecoin. However, unlike Litecoin, there is no hard cap on the number of Dogecoins that can be produced."
                    : coin === "Toncoin"
                      ? "TON is a fast, secure and scalable blockchain and network project, capable of handling millions of transactions per second if necessary, and both user-friendly and service provider-friendly. TON can be described as a decentralized supercomputer and value transfer system."
                      : coin === "TRON"
                        ? "TRON is a blockchain-based decentralized platform that aims to build a free, global digital content entertainment system with distributed storage technology, and allows easy and cost-effective sharing of digital content."
                        : "";

  return (
    <div className="flex flex-col gap-10">
      <Graphs
        coin={coin}
        symbolGraph={symbolGraph}
        symbol={symbol}
        desc={desc}
      />
    </div>
  );
};

export default CryptocurrenciesPage;
