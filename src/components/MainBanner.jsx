import Image from "next/image";

const MainBanner = () => {
  return (
    <section className="flex w-full items-center justify-center bg-[url('/bgs/bg-2.png')] bg-contain bg-center bg-no-repeat py-[120px] xl:h-screen">
      <div className="flex w-full max-w-7xl flex-col items-center gap-10 px-5 xl:flex-row">
        <Image
          className="w-5/12"
          src="/bitcoin.png"
          width={450}
          height={450}
          alt="bitcoin"
        />
        <div className="flex w-7/12 flex-col items-center gap-y-10 text-center xl:text-start">
          <h1 className="text-4xl font-bold tracking-tighter md:text-[5.5rem] md:leading-[6rem]">
            Digital Finance C<span className="tracking-normal">ry</span>
            ptocurrency<span className="text-primary">.</span>
          </h1>
          <span className="min-w-[250px] text-2xl tracking-tighter text-primary md:text-6xl">
            Shaping the Future
          </span>
          <div className="flex items-center gap-x-5">
            <button className="hover:border-primary rounded-full border-4 border-white px-5 py-2 text-lg font-medium transition-all duration-150 ease-in hover:text-primary sm:px-8 sm:py-3">
              Details
            </button>
            <button className="hover:border-primary rounded-full border-4 border-white px-5 py-2 text-lg font-medium transition-all duration-150 ease-in hover:text-primary sm:px-8 sm:py-3">
              Whitepaper
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
