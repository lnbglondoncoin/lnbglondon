import axios from "axios";
import { bitcoin, dogecoin, ethereum, litecoin, ripple } from "../icons";
import { formatCurrency, formatNumber } from "@/utils/formatters";
import { cn } from "@/lib/utils";

const getData = async () => {
  const apiKey = process.env.NEXT_PUBLIC_COIN_MARKET_CAP_API_KEY;
  const baseUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest`;
  const parameters = {
    id: "1,2,74,52,1027",
    convert: "USD",
  };
  const headers = {
    "X-CMC_PRO_API_KEY": apiKey,
  };
  try {
    const response = await axios.get(baseUrl, { headers, params: parameters });
    const data = response.data.data;
    const dataObj = Object.values(data);
    return dataObj;
  } catch (err) {
    return [];
  }
};

const FiveCoinsSection = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className="flex items-center justify-center px-5 py-20">
      <div className="flex h-fit w-full max-w-7xl flex-wrap justify-center gap-x-14 gap-y-10 rounded-2xl bg-[#131519] bg-[url('/bgs/graph.png')] bg-bottom bg-no-repeat p-20">
        {data.map((coin) => (
          <Coin
            title={coin.name}
            icon={
              coin.name == "Bitcoin"
                ? bitcoin
                : coin.name == "Ethereum"
                  ? ethereum
                  : coin.name == "Dogecoin"
                    ? dogecoin
                    : coin.name == "Litecoin"
                      ? litecoin
                      : ripple
            }
            price={formatCurrency(coin.quote.USD.price)}
            cap={formatCurrency(coin.quote.USD.market_cap)}
            percent={formatNumber(coin.quote.USD.percent_change_24h)}
            iconClassName={
              coin.name == "Bitcoin"
                ? "top-5 h-20 w-20"
                : coin.name == "Ethereum"
                  ? "top-5 h-16 w-16"
                  : coin.name == "Dogecoin"
                    ? "top-10 h-24 w-24"
                    : coin.name == "Litecoin"
                      ? "top-5 h-20 w-20"
                      : "left-6 top-7 h-20 w-20"
            }
          />
        ))}
        {/* <Coin
          title="Bitcoin"
          icon={bitcoin}
          price="$67,000"
          cap="$137B"
          percent="25.94%"
        />
        <Coin
          title="Ethereum"
          icon={ethereum}
          price="$67,000"
          cap="$137B"
          percent="25.94%"
        />
        <Coin
          title="Doge"
          icon={dogecoin}
          price="$67,000"
          cap="$137B"
          percent="25.94%"
        />
        <Coin
          title="Litecoin"
          icon={litecoin}
          price="$67,000"
          cap="$137B"
          percent="25.94%"
        />
        <Coin
          title="Ripple"
          icon={ripple}
          price="$67,000"
          cap="$137B"
          percent="25.94%"
        /> */}
      </div>
    </div>
  );
};

const Coin = ({
  title,
  icon,
  price,
  cap,
  percent,
  iconClassName = "top-5 h-20 w-20",
}) => {
  return (
    <div className="group relative flex cursor-pointer flex-col items-center">
      <div className="rounded-full border-4 border-darkgray p-1 opacity-80 transition-all duration-200 ease-in-out group-hover:scale-105 group-hover:border-primary">
        <div className="relative flex h-[150px] w-[150px] justify-center rounded-full border-4 border-darkgray transition-all duration-200 ease-in-out group-hover:border-primary">
          <div
            className={cn(
              "absolute text-darkgray transition-all duration-200 ease-in-out group-hover:text-primary",
              iconClassName,
            )}
          >
            {icon}
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-y-2 text-sm">
        <span className="text-2xl font-semibold text-lightgray transition-all duration-200 ease-in-out group-hover:text-primary">
          {title}
        </span>
        <p className="text-darkgray">
          Price: <span className="text-lightgray">{price}</span>
        </p>
        <p className="text-darkgray">
          Cap: <span className="text-lightgray">{cap}</span>
        </p>
        <span className="text-warning">{percent}%</span>
      </div>
    </div>
  );
};

export default FiveCoinsSection;
