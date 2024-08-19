"use client";

import { cn } from "@/lib/utils";

const SimpleButton = ({ title = "Click me", onClick = () => {}, className = "" }) => {
  return (
    <button
      className={cn(
        "w-full rounded-md px-5 py-3 font-medium text-black sm:px-8",
        className,
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default SimpleButton;
