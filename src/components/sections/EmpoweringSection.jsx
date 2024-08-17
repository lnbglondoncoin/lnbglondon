import React from "react";

const EmpoweringSection = () => {
  return (
    <section className="flex items-center justify-center bg-[url('/bgs/dotted-map.png')] bg-center bg-no-repeat py-20 text-center">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-y-10 px-5 py-10">
        <div className="flex gap-x-1">
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-primary"></div>
        </div>
        <h1 className="text-center text-4xl font-bold tracking-tighter sm:text-5xl">
          Empowering Companies & Empowering You
          <span className="text-primary">.</span>
        </h1>
        <span className="text-xl tracking-tight text-lightgray sm:text-2xl">
          Through tokenization of equity and assets
        </span>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="group flex max-w-72 cursor-pointer flex-col items-center gap-y-5 text-center">
            <span className="text-6xl font-bold text-primary">6386</span>
            <span className="text-2xl font-bold">More leads</span>
            <span className="tracking-wide  font-sans text-gray2">
              Our platform generates additional web traffic of highly motivated
              crypto users to each of our partners.
            </span>
            <div className="h-1 w-20 rounded-full bg-darkgray transition-all duration-200 ease-in-out group-hover:w-56 group-hover:bg-primary"></div>
          </div>
          <div className="group flex max-w-72 cursor-pointer flex-col items-center gap-y-5 text-center">
            <span className="text-6xl font-bold text-primary">16000</span>
            <span className="text-2xl font-bold">Higher Sales</span>
            <span className="tracking-wide  font-sans text-gray2">
              Our platform generates a steady flow of motivated crypto users to
              our partners.thanks to our dynamic networks.
            </span>
            <div className="h-1 w-20 rounded-full bg-darkgray transition-all duration-200 ease-in-out group-hover:w-56 group-hover:bg-primary"></div>
          </div>
          <div className="group flex max-w-72 cursor-pointer flex-col items-center gap-y-5 text-center">
            <span className="text-6xl font-bold text-primary">8327</span>
            <span className="text-2xl font-bold">Clients worldwide</span>
            <span className="tracking-wide  font-sans text-gray2">
              Our streamlined automated processes make all the work for you. It
              is simple and easy solution for anyone.
            </span>
            <div className="h-1 w-20 rounded-full bg-darkgray transition-all duration-200 ease-in-out group-hover:w-56 group-hover:bg-primary"></div>
          </div>
          <div className="group flex max-w-72 cursor-pointer flex-col items-center gap-y-5 text-center">
            <span className="text-6xl font-bold text-primary">
              2000<span className="text-darkgray">+</span>
            </span>
            <span className="text-2xl font-bold">More leads</span>
            <span className="tracking-wide  font-sans text-gray2">
              We validate crypto service providers before listing them to
              protect our users from widespread crypto frauds and scams.
            </span>
            <div className="h-1 w-20 rounded-full bg-darkgray transition-all duration-200 ease-in-out group-hover:w-56 group-hover:bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringSection;
