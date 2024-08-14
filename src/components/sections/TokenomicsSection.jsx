const TokenomicsSection = () => {
  return (
    <section className="flex w-full justify-center px-5">
      <div className="flex max-w-7xl flex-col gap-10 py-20">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          TOKENOMICS
        </h1>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray2">Total tokens:</span>
          <span className="text-2xl font-bold">1,000,000,000</span>
        </div>
        <div className="flex h-[275px] w-full flex-col bg-[url(/tokenomics.png)] bg-contain bg-center bg-no-repeat">
          <div className="flex flex-col"></div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
