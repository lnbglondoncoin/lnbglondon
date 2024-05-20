"use client";

import { useState } from "react";

const Accordion = ({ title, desc }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-ash flex cursor-pointer items-center gap-x-5 rounded-lg p-5"
      onClick={() => setOpen(!open)}
    >
      <div className="h-full">
        <div className="bg-coal grid h-10 w-10 place-items-center rounded-full p-2 text-darkgray">
          {!open ? plusIcon : minusIcon}
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <span className="py-2 text-lightgray">{title}</span>
        {open && <span className="text-darkgray">{desc}</span>}
      </div>
    </div>
  );
};

const plusIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 76 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M75.5 38C75.5 41.4531 72.7031 44.25 69.25 44.25H44.25V69.25C44.25 72.7031 41.4531 75.5 38 75.5C34.5469 75.5 31.75 72.7031 31.75 69.25V44.25H6.75C3.2969 44.25 0.5 41.4531 0.5 38C0.5 34.5469 3.2969 31.75 6.75 31.75H31.75V6.75C31.75 3.2969 34.5469 0.5 38 0.5C41.4531 0.5 44.25 3.2969 44.25 6.75V31.75H69.25C72.7031 31.75 75.5 34.5469 75.5 38Z"
      fill="currentColor"
    />
  </svg>
);

const minusIcon = (
  <svg
    width="17"
    height="3"
    viewBox="0 0 17 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.34208 3H15.6576C16.1223 3 16.4998 2.328 16.4998 1.5C16.4998 0.672 16.1223 0 15.6576 0H1.34208C0.877419 0 0.499847 0.672 0.499847 1.5C0.499847 2.328 0.877419 3 1.34208 3Z"
      fill="currentColor"
    />
  </svg>
);

export default Accordion;
