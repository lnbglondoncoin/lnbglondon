import Image from "next/image";

export default function CoinsPaymentsSection() {
  return (
    <div className="grid max-w-[1500px] place-items-center gap-5 p-5 lg:grid-cols-2 lg:gap-10 lg:p-10">
      <div className="flex h-full w-full flex-col items-center gap-5 rounded-3xl bg-[#F0F2F4] px-5 py-20 text-center text-black lg:px-10">
        <h1 className="text-3xl font-semibold">
          Choose the best way to buy crypto
        </h1>
        <span className="font-sans text-sm text-black/70">
          Choose your preferred option from all major global payment methods.
          Buy crypto with debit cards, credit cards, bank transfers, Apple Pay,
          Google Pay, and many others.
        </span>
        <div className="flex max-w-[400px] flex-wrap items-center justify-center gap-3 px-5">
          <Payment imgUrl="/static/payment/mastercard.png" />
          <Payment imgUrl="/static/payment/visa.png" />
          <Payment imgUrl="/static/payment/ach.svg" />
          <Payment imgUrl="/static/payment/rev.svg" />
          <Payment imgUrl="/static/payment/apple-pay.svg" />
          <Payment imgUrl="/static/payment/google-pay.svg" />
          <Payment imgUrl="/static/payment/sepa.svg" />
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center gap-5 rounded-3xl bg-[#F0F2F4] px-5 py-20 text-center text-black lg:px-10">
        <h1 className="text-3xl font-semibold">Popular tokens available</h1>
        <span className="font-sans text-sm text-black/70">
          Purchase any of 110+ of the most popular cryptocurrencies on top
          blockchain networks.
        </span>
        <div className="flex w-full flex-wrap items-center justify-center gap-3 px-5">
          <Coin imgUrl="/static/coinsvgs/bitcoin.svg" name="Bitcoin" />
          <Coin imgUrl="/static/coinsvgs/ether.svg" name="Ether" />
          <Coin imgUrl="/static/coinsvgs/dogecoin.svg" name="Dogecoin" />
          <Coin imgUrl="/static/coinsvgs/solana.svg" name="Solana" />
          <Coin imgUrl="/static/coinsvgs/dai.svg" name="DAI" />
          <Coin imgUrl="/static/coinsvgs/usdt.svg" name="USDT" />
          <Coin imgUrl="/static/coinsvgs/ton.png" name="TON" />
          <Coin imgUrl="/static/coinsvgs/xrp.svg" name="XRP" />
          <Coin imgUrl="/static/coinsvgs/usdc.svg" name="USDC" />
          <Coin imgUrl="/static/coinsvgs/binance.svg" name="BNB" />
          <Coin imgUrl="/static/coinsvgs/litecoin.svg" name="Litecoin" />
          <Coin imgUrl="/static/coinsvgs/cardano.svg" name="Cardano" />
          <Coin
            imgUrl="/static/coinsvgs/bitcoin-cash.svg"
            name="Bitcoin Cash"
          />
          <Coin imgUrl="/static/coinsvgs/polkadot.svg" name="Polkadot" />
          <Coin imgUrl="/static/coinsvgs/world-coin.png" name="Worldcoin" />
          <Coin imgUrl="/static/coinsvgs/chainlink.svg" name="Chainlink" />
          <Coin imgUrl="/static/coinsvgs/matic.svg" name="Matic" />
        </div>
      </div>
    </div>
  );
}

function Payment({ imgUrl }) {
  return (
    <div className="flex h-14 w-20 items-center justify-center rounded-lg bg-white shadow-lg">
      <Image src={imgUrl} width={50} height={20} />
    </div>
  );
}

function Coin({ imgUrl, name }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-full bg-white p-2 pr-3 shadow-lg">
      <Image src={imgUrl} width={24} height={24} alt="bitcoin" />
      <span className="font-sans">{name}</span>
    </div>
  );
}
