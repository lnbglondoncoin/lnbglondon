"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function InquiryDropdown({
  selectedOption = "",
  setSelectedOption = () => {},
  options = [],
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

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

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <div
        className={cn(
          "flex h-[60px] w-full items-center justify-between rounded-md bg-ash px-4 outline-none md:w-[625px]",
          selectedOption == null ? "text-gray2" : "text-white",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || "Select Inquiry"}
        <ChevronDown size={20} />
      </div>
      {isOpen && (
        <div className="absolute right-0 top-16 flex w-full cursor-pointer flex-col gap-1 overflow-hidden rounded-md border border-white/10 bg-ash py-2 font-sans">
          {options.map((option) => (
            <div
              onClick={() => handleOptionSelect(option)}
              className="flex items-center px-4 py-2 font-sans text-white hover:bg-gray2/10"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
