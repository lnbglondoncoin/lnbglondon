"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RussianRuble } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { franceFlag, russiaFlag } from "../icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LanguageDropdown({
  selectedLang,
  setSelectedLang = () => {},
  showFlag = true,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const router = useRouter();

  const handleSelect = (lang) => {
    setIsOpen(false);
    setSelectedLang(lang);
    router.push(`/${lang.toLowerCase()}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center gap-2 rounded-md text-sm font-light p-2 font-sans uppercase"
        onClick={() => setIsOpen(!isOpen)}
      >
        {showFlag && (
          <Image
            src={
              selectedLang === "RU"
                ? "/static/flags/russia.svg"
                : selectedLang === "FR"
                  ? "/static/flags/france.svg"
                  : selectedLang === "EN"
                    ? "/static/flags/us.svg"
                    : "/static/flags/spain.svg"
            }
            width={20}
            height={20}
            alt={selectedLang}
          />
        )}
        {selectedLang}
      </button>
      {isOpen && (
        <div className="absolute right-0 py-2 top-8 flex w-[100px] flex-col gap-1 overflow-hidden rounded-md bg-coal font-sans">
          <button
            onClick={() => handleSelect("RU")}
            className="flex items-center gap-2 px-2 py-1 hover:bg-gray2/50 text-sm font-light"
          >
            <Image
              src="/static/flags/russia.svg"
              width={20}
              height={20}
              alt="russia"
            />
            RU
          </button>
          <button
            onClick={() => handleSelect("FR")}
            className="flex items-center gap-2 px-2 py-1 hover:bg-gray2/50 text-sm font-light"
          >
            <Image
              src="/static/flags/france.svg"
              width={20}
              height={20}
              alt="france"
            />
            FR
          </button>
          <button
            onClick={() => handleSelect("EN")}
            className="flex items-center gap-2 px-2 py-1 hover:bg-gray2/50 text-sm font-light"
          >
            <Image src="/static/flags/us.svg" width={20} height={20} alt="us" />
            EN
          </button>
          <button
            onClick={() => handleSelect("ES")}
            className="flex items-center gap-2 px-2 py-1 hover:bg-gray2/50 text-sm font-light"
          >
            <Image
              src="/static/flags/spain.svg"
              width={20}
              height={20}
              alt="spain"
            />
            ES
          </button>
        </div>
      )}
    </div>
  );
}
