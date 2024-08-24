"use client";

import { Store } from "@/context/Store/Store";
import { Cookie } from "lucide-react";
import { useContext, useState } from "react";
import Button from "./buttons/Button";

export default function CookiesBanner() {
  const { cookiesAccepted, setCookiesAccepted } = useContext(Store);
  const [isOpen, setIsOpen] = useState(true);

  const handleAccept = () => {
    setCookiesAccepted(true);
    setIsOpen(false);
  };
  return isOpen ? (
    <div className="fixed bottom-0 z-50 flex w-screen items-center justify-center bg-ash px-5 py-10">
      <div className="flex flex-col md:flex-row gap-5 w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-primary">
            <Cookie size={50} />
          </div>
          <div className="flex font-sans">
            We use cookies to enhance your experience. By continuing to browse,
            you agree <br /> to our use of cookies
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button title="Accept All" onClick={() => handleAccept()} />
          <Button
            className="border border-white/10 bg-transparent text-white hover:border-primary hover:bg-transparent"
            title="Reject"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </div>
  ) : null;
}
