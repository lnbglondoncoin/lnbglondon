export default function HowToBuySection() {
  return (
    <div className="flex w-full max-w-[1500px] items-center justify-center rounded-b-[30px] bg-primary text-center text-black">
      <div className="flex w-full max-w-7xl flex-col gap-5 px-5 py-20">
        <span className="text-xs uppercase text-black/50">
          Buying cryptocurrency
        </span>
        <h1 className="text-3xl font-medium md:text-4xl">
          How to buy crypto online with LNBG
        </h1>
        <div className="grid grid-cols-2 place-items-center mt-10 sm:grid-cols-4 gap-5">
          <div className="flex flex-col items-center justify-center max-w-[200px] gap-3">
            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-primary2 bg-black/5">
              01
            </div>
            <span className="font-sans text-xs">
              Enter the amount in crypto or fiat currency that you wish to
              purchase.
            </span>
          </div>
          <div className="flex flex-col items-center justify-center max-w-[200px] gap-3">
            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-primary2 bg-black/5">
              02
            </div>
            <span className="font-sans text-xs">
              Enter the amount in crypto or fiat currency that you wish to
              purchase.
            </span>
          </div>
          <div className="flex flex-col items-center justify-center max-w-[200px] gap-3">
            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-primary2 bg-black/5">
              03
            </div>
            <span className="font-sans text-xs">
              Enter the amount in crypto or fiat currency that you wish to
              purchase.
            </span>
          </div>
          <div className="flex flex-col items-center justify-center max-w-[200px] gap-3">
            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-primary2 bg-black/5">
              04
            </div>
            <span className="font-sans text-xs">
              Enter the amount in crypto or fiat currency that you wish to
              purchase.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
