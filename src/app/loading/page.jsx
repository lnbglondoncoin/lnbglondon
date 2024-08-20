"use client";

import { CirclesWithBar, MutatingDots } from "react-loader-spinner";

export default function LoadingPage() {
  return (
    <div className="absolute scale-150 inset-0 z-[99999999999] flex flex-col items-center justify-center bg-coal">
      {/* <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#ffba00"
        secondaryColor="#FFFc54"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      /> */}
      <CirclesWithBar
        height="100"
        width="100"
        color="#ffba00"
        outerCircleColor="#FFFc54"
        innerCircleColor="#ffba00"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      {/* <h1 className="text-4xl font-bold">LNBG</h1> */}
    </div>
  );
}
