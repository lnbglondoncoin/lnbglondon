import { formatCurrency } from "@/utils/formatters";
import axios from "axios";
import Image from "next/image";

const getData = async () => {
  const apiKey = process.env.COIN_MARKET_CAP_API_KEY;
  const baseUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5`;
  const headers = {
    "X-CMC_PRO_API_KEY": apiKey,
  };
  try {
    const response = await axios.get(baseUrl, { headers });
    const data = response.data.data;
    const detailedTokenData = await axios.get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info",
      {
        params: {
          id: data.map((token) => token.id).join(","), // Comma-separated list of token IDs
        },
        headers,
      },
    );

    const detailedDataMap = detailedTokenData.data.data;

    // Append logo URLs to existing data
    const updatedData = data.map((token) => ({
      ...token,
      logoUrl: detailedDataMap[token.id]?.logo,
    }));
    return updatedData;
  } catch (err) {
    return [];
  }
};

const MovingBar = async () => {
  const data = await getData();

  const displayTicker = (number) => (
    <div
      className={`ticker-text${number === 2 ? "2" : ""} text-neutralLight z-[60] flex h-[46px] w-fit select-none items-center gap-x-16 bg-black px-5`}
    >
      {data?.map((coin, index) => (
        <div className="flex gap-x-4 font-extralight" key={index}>
          <Image src={coin.logoUrl} width={20} height={20} alt="bitcoin" />
          <span className="text-sm">{coin.name}</span>
          <span className="text-sm">
            {formatCurrency(coin.quote.USD.price)}
          </span>
          <div className="flex items-center gap-x-1">
            <span className="text-sm text-white">
              {coin.quote.USD.percent_change_24h > 0 ? upArrow : downArrow}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="h-[46px] w-screen bg-black">
      <div className="ticker-container relative flex overflow-x-hidden">
        {displayTicker(1)}
        {displayTicker(2)}
      </div>
    </div>
  );
};

const downArrow = (
  <svg
    width="6"
    height="12"
    viewBox="0 0 6 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12L5.88675 7H0.113249L3 12ZM2.5 0L2.5 7.5H3.5L3.5 0L2.5 0Z"
      fill="#FF4500"
    />
  </svg>
);

const upArrow = (
  <svg
    width="6"
    height="12"
    viewBox="0 0 6 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 0L0.113249 5H5.88675L3 0ZM2.5 12L2.5 4.5H3.5L3.5 12L2.5 12Z"
      fill="#00FF00"
    />
  </svg>
);

export default MovingBar;
