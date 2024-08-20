"use client";

import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

const PreloaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return !loading ? (
    <main className="absolute inset-0 z-[9999999999999999999999] h-full min-h-screen w-full bg-coal">
      {children}
    </main>
  ) : (
    <Loader />
  );
};

export default PreloaderProvider;
