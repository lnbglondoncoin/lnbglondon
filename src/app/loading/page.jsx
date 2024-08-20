"use client";

import Loader from "@/components/Loader";
import { CirclesWithBar, MutatingDots } from "react-loader-spinner";

export default function LoadingPage() {
  return (
    <div className="absolute scale-150 inset-0 z-[99999999999] flex flex-col items-center justify-center bg-coal">
      <Loader />
    </div>
  );
}
