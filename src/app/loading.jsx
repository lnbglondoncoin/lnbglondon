"use client";

import Loader from "@/components/Loader";

export default function LoadingPage() {
  return (
    <div className="absolute inset-0 z-[99999999999] flex flex-col items-center justify-center bg-coal">
      <Loader />
    </div>
  );
}
