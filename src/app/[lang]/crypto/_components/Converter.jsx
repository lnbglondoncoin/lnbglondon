"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import TokenModal from "./TokenModal";
import CurrencyModal from "./CurrencyModal";

const Converter = ({ bitcoinPrice = 59000 }) => {
  const [coinData, setCoinData] = useState([{ bitcoin: { usd: 0 } }]);
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [coinAmount, setCoinAmount] = useState(null);
  const [currencyAmount, setCurrencyAmount] = useState(null);
  const blinkVariants = {
    hide: {
      opacity: 0,
      x: 0,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: {
          duration: 2,
          type: "tween",
        },
      },
    },
  };

  const fetchExchangeRate = async () => {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano,terra-luna,polkadot&vs_currencies=usd,cny,cad,eur,gbp`;
    const res = await fetch(url);
    console.log("DATA", res);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    setCoinData(data);
  };

  // If currencyAmount changes
  const calculateCoinAmount = (amount) => {
    const exchangeRate = coinData[selectedCoin][selectedCurrency];
    setCoinAmount((amount / exchangeRate).toFixed(4));
  };

  // If coinAmount changes
  const calculateCurrencyAmount = (amount) => {
    const exchangeRate = coinData[selectedCoin][selectedCurrency];
    setCurrencyAmount((amount * exchangeRate).toFixed(4));
  };

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  const handleCoinSelect = (coin) => {
    setSelectedCoin(coin);
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
  };

  const handleCoinAmountChange = (e) => {
    calculateCurrencyAmount(e.target.value);
    setCoinAmount(e.target.value);
  };

  const handleCurrencyAmountChange = (e) => {
    calculateCoinAmount(e.target.value);
    setCurrencyAmount(e.target.value);
  };

  useEffect(() => {
    if (coinAmount === null) return;
    calculateCurrencyAmount(coinAmount);
  }, [selectedCurrency]);

  useEffect(() => {
    if (currencyAmount === null) return;
    calculateCurrencyAmount(coinAmount);
  }, [selectedCoin]);

  console.log("DATA", coinData);
  return (
    <div className="flex items-center justify-center px-5 py-20">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-10 px-5 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-8">
          <div className="bg-gradient-to-r from-primary via-white to-white bg-clip-text text-4xl tracking-tighter text-transparent sm:text-6xl">
            Use Our Crypto Coins Converter
            <span className="text-primary">.</span>
          </div>
          <span className="text-2xl leading-9 tracking-tighter text-lightgray">
            Take advantage of price movements by instantly converting your money
            between your local currency and crypto. More than 40
            cryptocurrencies are available.
          </span>
          <Link
            className="w-fit border-b border-transparent text-lg font-bold transition-all duration-75 ease-in-out hover:border-primary hover:text-primary"
            href="/coin-market"
          >
            Go to Coin Market {">"}
          </Link>
        </div>
        <div className="flex flex-col rounded-3xl bg-primary bg-[url(/static/bgs/bg-convert.png)] bg-center bg-no-repeat px-16 py-24">
          <span className="tracking-tight text-black">1 Bitcoin equals</span>
          <span className="text-2xl tracking-tight text-white">
            {(bitcoinPrice / 0.03).toFixed(2)} LNBG
          </span>
          <div className="mt-5 grid grid-cols-2 gap-5 text-black">
            <input
              type="number"
              name="value1"
              id="value1"
              value={coinAmount}
              onChange={handleCoinAmountChange}
              className="h-12 rounded-md border border-lightgray bg-white px-5"
            />
            <input
              type="number"
              name="value2"
              id="value2"
              value={currencyAmount}
              onChange={handleCurrencyAmountChange}
              className="h-12 rounded-md border border-lightgray bg-white px-5"
            />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-5">
            <TokenModal
              selectedToken={selectedCoin}
              setSelectedToken={setSelectedCoin}
            />
            <CurrencyModal
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
