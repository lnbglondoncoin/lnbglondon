"use client";

import { Store } from "@/context/Store/Store";
import { Cookie } from "lucide-react";
import { useContext, useState } from "react";
import Button from "./buttons/Button";
import Image from "next/image";

export default function CookiesBanner() {
  const { cookiesAccepted, setCookiesAccepted } = useContext(Store);
  const [isOpen, setIsOpen] = useState(true);

  const handleAccept = () => {
    setCookiesAccepted(true);
    setIsOpen(false);
  };
  return isOpen ? (
    <div className="fixed bottom-0 z-50 flex w-screen items-center justify-center bg-ash px-5 py-5 md:py-10">
      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
        <div className="flex items-center w-full justify-start gap-3 md:gap-4">
          <div className="text-primary">
            <Cookie className="h-10 w-10" size={50} />
          </div>
          <div className="flex font-sans text-xs">
            We use cookies to enhance your experience. By continuing to browse,
            you agree to our use of cookies
          </div>
        </div>
        <div className="flex w-full items-center justify-between md:justify-end">
          <div className="flex items-center gap-2">
            <Button
              className="py-2 text-xs font-sans font-bold"
              title="Accept All"
              onClick={() => handleAccept()}
            />
            <Button
              className="border font-sans font-bold border-white/10 bg-transparent py-2 text-xs text-white hover:border-primary hover:bg-transparent"
              title="Reject"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <Image
            className="sm:hidden"
            src="/static/logo.png"
            width={20}
            height={20}
            alt="LNBG London Coin Logo"
          />
        </div>
      </div>
    </div>
  ) : null;
}
