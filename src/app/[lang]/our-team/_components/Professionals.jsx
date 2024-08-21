import Image from "next/image";
import React from "react";

const Professionals = () => {
  return (
    <div
      className="flex items-center justify-center overflow-hidden py-20"
      id="professionals"
    >
      <div className="flex w-full max-w-7xl flex-wrap items-center justify-center gap-20 border-t border-darkgray px-5 pt-32">
        <div className="flex flex-col items-center gap-10">
          <div className="group relative">
            <Image
              src="/authors/author1.png"
              width={300}
              height={300}
              alt="author"
              className="rounded-full"
              quality={100}
            />
            <div className="absolute -bottom-3 -left-2 -z-10 h-[300px] w-[300px] rounded-full bg-black transition-all duration-200 ease-in-out group-hover:bg-primary"></div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-2xl tracking-tighter">Abdullah Rehman</span>
            <span className="text-lg tracking-tighter text-gray2">
              UX Designer & Specialist
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="group relative">
            <Image
              src="/authors/author2.png"
              width={300}
              height={300}
              alt="author"
              className="rounded-full"
              quality={100}
            />
            <div className="absolute -right-2 -top-3 -z-10 h-[300px] w-[300px] rounded-full bg-black transition-all duration-200 ease-in-out group-hover:bg-primary"></div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-2xl tracking-tighter">Rached Arfaoui</span>
            <span className="text-lg tracking-tighter text-gray2">
              Managing Director
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="group relative">
            <Image
              src="/authors/author3.png"
              width={300}
              height={300}
              alt="author"
              className="rounded-full"
              quality={100}
            />
            <div className="absolute -left-2 -top-3 -z-10 h-[300px] w-[300px] rounded-full bg-black transition-all duration-200 ease-in-out group-hover:bg-primary"></div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-2xl tracking-tighter">Habib Rehman</span>
            <span className="text-lg tracking-tighter text-gray2">
              Business Development Manager
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="group relative">
            <Image
              src="/authors/author4.png"
              width={300}
              height={300}
              alt="author"
              className="rounded-full"
              quality={100}
            />
            <div className="absolute -bottom-3 -right-2 -z-10 h-[300px] w-[300px] rounded-full bg-black transition-all duration-200 ease-in-out group-hover:bg-primary"></div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-2xl tracking-tighter">
              Neil Benjamin Gibson
            </span>
            <span className="text-lg tracking-tighter text-gray2">
              Founder & CEO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professionals;
