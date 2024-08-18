import { Vortex } from "@/components/ui/vortex";
import Link from "next/link";

const OurTeamBanner = () => {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-[url('/bgs/bg-2.png')] bg-contain 2xl:bg-cover bg-center bg-no-repeat py-[120px]">
      <Vortex
        backgroundColor="transparent"
        containerClassName="h-full w-full max-w-screen"
        rangeY={800}
        particleCount={700}
        baseHue={50}
        className="flex h-full w-full items-center justify-center pb-10 pt-[120px]"
      >
        <div className="z-10 flex w-full max-w-7xl flex-col items-center gap-10 px-5 text-center">
          <span className="text-xl tracking-[0.2em] text-primary sm:text-2xl">
            LNBG LONDON TEAM
          </span>
          <div className="bg-gradient-to-r from-primary via-white to-white bg-clip-text text-4xl text-transparent sm:text-6xl">
            Our professionals<span className="text-primary">.</span>
          </div>
          <span className="max-w-4xl text-2xl text-lightgray">
            Meet who is shaping the way People invest their money and Companies
            raise capital. We are democratizing investing opportunities that,
            previously, only Venture Capital and Private Equity funds were able
            to get.
          </span>
          <Link
            href="#professionals"
            className="rounded-full border-4 border-primary bg-transparent px-10 py-4 font-bold uppercase tracking-tighter text-primary transition-all duration-200 ease-in-out hover:bg-primary hover:text-white"
          >
            Meet our professionals
          </Link>
        </div>
      </Vortex>
    </section>
  );
};

export default OurTeamBanner;
