import Image from "next/image";
import Button from "../buttons/Button";
import PresaleCard from "../PresaleCard";
import { Vortex } from "../ui/vortex";

const MainBanner = () => {
  return (
    <section className="relative bg-black flex max-w-screen overflow-hidden w-full top-0 items-center justify-center">
      <Vortex
        backgroundColor="transparent"
        containerClassName="h-full w-full max-w-screen"
        // rangeY={800}
        particleCount={700}
        baseHue={50}
        className="flex h-full w-full items-center justify-center pb-10 pt-[120px]"
      >
        <div className="z-10 flex w-full max-w-7xl flex-col items-center gap-10 px-5 xl:flex-row">
          <div className="flex w-7/12 flex-col items-center gap-y-5 text-center lg:items-start lg:text-left">
            <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
              Digital Finance C<span className="tracking-normal">ry</span>
              ptocurrency<span className="text-primary">.</span>
            </h1>
            <span className="min-w-[250px] text-2xl text-primary md:text-4xl">
              Shaping the Future
            </span>
            <div className="mt-10 flex items-center gap-x-5">
              <Button title="Details" />
              <Button title="Whitepaper" />
            </div>
          </div>
          <PresaleCard />
        </div>
      </Vortex>
    </section>
  );
};

export default MainBanner;
