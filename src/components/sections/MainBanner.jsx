import Image from "next/image";
import Button from "../buttons/Button";
import PresaleCard from "../PresaleCard";

const MainBanner = () => {
  return (
    <section className="relative flex w-full items-center justify-center bg-[url('/bgs/bg-2.png')] pb-10 bg-contain 2xl:bg-cover bg-center bg-no-repeat pt-[120px]">
      <div className="z-10 flex w-full max-w-7xl flex-col items-center gap-10 px-5 xl:flex-row">
        <div className="flex w-7/12 flex-col items-center gap-y-5 text-center lg:items-start lg:text-left">
          <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
            Digital Finance C<span className="tracking-normal">ry</span>
            ptocurrency<span className="text-primary">.</span>
          </h1>
          <span className="min-w-[250px] text-2xl text-primary md:text-4xl">
            Shaping the Future
          </span>
          <div className="flex items-center gap-x-5 mt-10">
            <Button title="Details" />
            <Button title="Whitepaper" />
          </div>
        </div>
        <PresaleCard />
      </div>
    </section>
  );
};

export default MainBanner;
