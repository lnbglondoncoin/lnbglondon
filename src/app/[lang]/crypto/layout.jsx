import React from "react";
import CryptoMainBanner from "./_components/CryptoMainBanner";
import Converter from "./_components/Converter";
import InvestmentDetails from "./_components/InvestmentDetails";
import axios from "axios";

const getData = async () => {
  const apiKey = process.env.NEXT_PUBLIC_COIN_MARKET_CAP_API_KEY;
  const baseUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC&convert=USD`;
  const headers = {
    "X-CMC_PRO_API_KEY": apiKey,
  };
  try {
    const response = await axios.get(baseUrl, { headers });
    const data = response.data.data;
    return data;
  } catch (err) {
    return "ERR";
  }
};
const CryptocurrenciesLayout = async ({ children }) => {
  const data = await getData();
  const bitcoinPrice = data?.BTC.quote.USD.price;
  console.log("DATA::::", bitcoinPrice);
  return (
    <div className="flex flex-col gap-10">
      <CryptoMainBanner />
      {children}
      <Converter bitcoinPrice={bitcoinPrice} />
      <InvestmentDetails />
    </div>
  );
};

export default CryptocurrenciesLayout;
