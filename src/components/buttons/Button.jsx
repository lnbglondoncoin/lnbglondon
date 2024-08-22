"use client";

import { cn } from "@/lib/utils";

const Button = ({ title = "Click me", onClick = () => {}, className = "" }) => {
  return (
    <button
      className={cn(
        "w-full rounded-md bg-primary text-nowrap px-5 py-3 font-medium text-black transition-all duration-200 ease-in-out hover:bg-primary2 sm:px-8",
        className,
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
