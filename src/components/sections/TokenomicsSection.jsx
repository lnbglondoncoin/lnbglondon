const TokenomicsSection = () => {
  return (
    <section className="flex w-full justify-center px-1">
      <div className="flex w-full max-w-7xl flex-col items-center gap-10 py-20">
        <h1 className="text-center text-3xl font-bold sm:text-4xl md:text-5xl">
          TOKENOMICS
        </h1>
        <div className="flex h-[350px] w-[350px] flex-col bg-[url(/tokenomics.png)] bg-[length:190px_190px] bg-center bg-no-repeat sm:h-[460px] sm:w-[640px] sm:bg-[length:270px_270px]">
          <div className="flex h-full w-full flex-col gap-3">
            <div className="flex w-full flex-col items-center">
              <span className="text-sm text-gray2">Total tokens:</span>
              <span className="text-2xl font-bold">1,000,000,000</span>
            </div>
            <div className="grid h-full w-full grid-cols-2">
              <div className="relative flex h-full w-full flex-col gap-5">
                <div className="absolute left-[33%] sm:top-[10px]  flex flex-col-reverse text-center font-sans text-xs font-semibold sm:flex-row sm:text-sm">
                  <span className="flex justify-center items-center max-w-[69px] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Reserve
                  </span>
                  <span className="flex justify-center items-center max-w-[69px] text-[#E7EDFF] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    14.5%
                  </span>
                </div>
                <div className="absolute left-[10px] top-[40px] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:top-[80px] sm:flex-row sm:text-sm">
                  <span className="flex justify-center items-center max-w-[69px] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Private <br /> Round Sale
                  </span>
                  <span className="flex justify-center items-center max-w-[69px] text-[#FF5AA9] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    14.5%
                  </span>
                </div>
                <div className="absolute left-[10%] top-[100px] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:left-[15%] sm:top-[160px] sm:flex-row sm:text-sm">
                  <span className="flex justify-center items-center max-w-[69px] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    KOL
                  </span>
                  <span className="flex justify-center items-center max-w-[69px] text-[#28F174] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    14.5%
                  </span>
                </div>
                <div className="absolute left-[10%] top-[140px] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:top-[220px] sm:flex-row sm:text-sm">
                  <span className="flex justify-center items-center max-w-[69px] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Marketing
                  </span>
                  <span className="flex justify-center items-center max-w-[69px] text-[#BA60FF] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    14.5%
                  </span>
                </div>
                <div className="absolute left-[33%] top-[190px] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:left-[20%] sm:top-[300px] sm:flex-row sm:text-sm">
                  <span className="flex justify-center items-center max-w-[69px] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Team & Advisors
                  </span>
                  <span className="flex justify-center items-center max-w-[69px] text-[#FF3868] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    14.5%
                  </span>
                </div>
              </div>
              <div className="relative flex h-full w-full flex-col items-end gap-5">
                <div className="absolute sm:top-[30px] sm:right-[22%] right-[33%] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:flex-row sm:text-sm">
                  <span className="flex justify-center items-center max-w-[69px] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Pre-Sale
                  </span>
                  <span className="flex justify-center items-center max-w-[69px] text-[#E7EDFF] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    14.5%
                  </span>
                </div>
                <div className="absolute top-[70px] sm:top-[120px] sm:right-[3%] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:flex-row sm:text-sm">
                  <span className="flex justify-center items-center max-w-[69px] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Public Sale
                  </span>
                  <span className="flex justify-center items-center max-w-[69px] text-[#6371F9] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    14.5%
                  </span>
                </div>
                <div className="absolute right-[10%] sm:top-[170px] top-[110px] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:flex-row sm:text-sm">
                  <span className="flex justify-center items-center max-w-[69px] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Liquidity
                  </span>
                  <span className="flex justify-center items-center max-w-[69px] text-[#FF842A] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    14.5%
                  </span>
                </div>
                <div className="absolute right-[15%] sm:right-[-5%] sm:top-[235px] top-[160px] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:flex-row sm:text-sm">
                  <span className="flex justify-center items-center max-w-[69px] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Airdrop & Rewards
                  </span>
                  <span className="flex justify-center items-center max-w-[69px] text-[#A0E138] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    14.5%
                  </span>
                </div>
                <div className="absolute right-[47%] sm:right-[15%] sm:top-[290px] top-[210px] flex flex-col-reverse text-center font-sans text-xs font-semibold sm:flex-row sm:text-sm">
                  <span className="flex justify-center items-center max-w-[69px] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    Staking Program
                  </span>
                  <span className="flex justify-center items-center max-w-[69px] text-[#4EDEFF] sm:max-w-full sm:border sm:border-white/20 sm:px-2 sm:py-1">
                    14.5%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
