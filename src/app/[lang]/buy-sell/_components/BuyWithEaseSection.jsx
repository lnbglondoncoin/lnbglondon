import {
  BoxSelect,
  Coins,
  Globe,
  Hand,
  HandCoins,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

export default function BuyWithEaseSection() {
  return (
    <div className="static z-10 flex w-full max-w-[1500px] items-center justify-center rounded-t-[30px] bg-white text-black">
      <div className="grid w-full max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2">
        <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-start">
          <span className="text-xs uppercase text-black/50">
            Buying crypto made easy
          </span>
          <h1 className="text-4xl font-semibold">
            Buy crypto without an exchange with LNBG
          </h1>
        </div>
        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2">
          <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-start">
            <div className="w-fit rounded-xl p-4 shadow-lg">
              <Coins size={50} />
            </div>
            <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-start">
              <span className="text-xl">Competitive Fees</span>
              <span className="font-sans text-sm text-black/50">
                Purchase cryptocurrency at affordable fees with LNBG
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-start">
            <div className="w-fit rounded-xl p-4 shadow-lg">
              <Globe size={50} />
            </div>
            <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-start">
              <span className="text-xl">Competitive Fees</span>
              <span className="font-sans text-sm text-black/50">
                Purchase cryptocurrency at affordable fees with LNBG
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-start">
            <div className="w-fit rounded-xl p-4 shadow-lg">
              <HandCoins size={50} />
            </div>
            <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-start">
              <span className="text-xl">Competitive Fees</span>
              <span className="font-sans text-sm text-black/50">
                Purchase cryptocurrency at affordable fees with LNBG
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-start">
            <div className="w-fit rounded-xl p-4 shadow-lg">
              <Hand size={50} />
            </div>
            <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-start">
              <span className="text-xl">Competitive Fees</span>
              <span className="font-sans text-sm text-black/50">
                Purchase cryptocurrency at affordable fees with LNBG
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-start">
            <div className="w-fit rounded-xl p-4 shadow-lg">
              <ShieldCheck size={50} />
            </div>
            <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-start">
              <span className="text-xl">Competitive Fees</span>
              <span className="font-sans text-sm text-black/50">
                Purchase cryptocurrency at affordable fees with LNBG
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-start">
            <div className="w-fit rounded-xl p-4 shadow-lg">
              <UserRoundCheck size={50} />
            </div>
            <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-start">
              <span className="text-xl">Competitive Fees</span>
              <span className="font-sans text-sm text-black/50">
                Purchase cryptocurrency at affordable fees with LNBG
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
