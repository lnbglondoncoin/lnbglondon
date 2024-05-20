import Link from "next/link";

const Converter = () => {
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
        <div className="flex flex-col rounded-3xl bg-primary bg-[url('/bgs/bg-convert.png')] bg-center bg-no-repeat px-16 py-24">
          <span className="tracking-tight text-black">1 Bitcoin equals</span>
          <span className="text-2xl tracking-tight text-white">
            31.92400000 LNBG COIN
          </span>
          <div className="mt-5 flex justify-between text-black">
            <input
              type="number"
              name="value1"
              id="value1"
              className="h-12 w-[45%] rounded-md border border-lightgray px-5 bg-white"
            />
            <input
              type="number"
              name="value2"
              id="value2"
              className="h-12 w-[45%] rounded-md border border-lightgray px-5 bg-white"
            />
          </div>
          <div className="mt-5 flex justify-between">
            <button
              type="number"
              name="value1"
              id="value1"
              className="h-12 w-[45%] rounded-md bg-ash text-lightgray"
            >
                Select Coin
            </button>
            <button
              type="number"
              name="value1"
              id="value1"
              className="h-12 w-[45%] rounded-md bg-ash text-lightgray"
            >
                Select Coin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
