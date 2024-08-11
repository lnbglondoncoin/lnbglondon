const LaptopSection = () => {
  return (
    <div className="flex items-center justify-center bg-[url('/bgs/bg-2.png')] bg-contain bg-center bg-no-repeat px-5 py-10">
      <div className="flex h-full w-full max-w-7xl justify-end sm:bg-[url('/pc.png')] bg-contain bg-no-repeat">
        <div className="flex h-full w-full justify-center max-w-3xl flex-col gap-y-7 rounded-lg bg-black/60 p-10">
          <div className="span text-5xl sm:text-6xl font-bold leading-[4.5rem]">
            Ready to Embrace the Future of Finance?
          </div>
          <span className="text-lightgray">
            Lnbg Coin is leading the charge in facilitating decentralized
            funding for asset owners worldwide, harnessing the power of
            blockchain technology.Our mission is to empower individuals and
            businesses to generate passive revenue and unlock new opportunities
            through tokenization.
          </span>
          <span className="text-lightgray">
            Invest with Lnbg London Coin today and be part of a movement that is
            reshaping the future of finance. Together, we can unlock new
            horizons, generate passive revenue, and embrace the boundless
            potential of tokenization. Get ready to redefine the way you invest
            and open doors to a world of opportunities.
          </span>
        </div>
      </div>
    </div>
  );
};

export default LaptopSection;
