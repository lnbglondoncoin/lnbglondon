"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

import { Rajdhani } from "next/font/google";

const font = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <>
      <div className="flex w-full justify-between bg-ash px-10 py-5 lg:hidden">
        <div className="flex w-full items-center gap-3">
          <Image src="/coins/lnbgcoin.png" alt="logo" width={40} height={40} />
          <h1 className="text-center text-2xl font-semibold text-white">
            LNBG Dapp
          </h1>
        </div>
        <Sheet>
          <SheetTrigger>
            <MenuIcon size={24} />
          </SheetTrigger>
          <SheetContent className="border-none bg-ash p-0 text-white">
            <SheetHeader>
              <SheetTitle>
                <div className="flex w-full items-center gap-3 px-10 py-7">
                  <Image
                    src="/coins/lnbgcoin.png"
                    alt="logo"
                    width={40}
                    height={40}
                  />
                  <h1
                    className={cn(
                      "text-center text-2xl font-semibold text-white",
                      font.className,
                    )}
                  >
                    LNBG Dapp
                  </h1>
                </div>
              </SheetTitle>
              <div className="flex h-full min-h-[85vh] flex-col justify-between">
                <div className="flex flex-col">
                  <Link
                    className={cn(
                      "group flex items-center gap-4 px-10 py-5 text-lg font-medium",
                      pathname == "/dashboard" && "bg-white/5",
                      font.className,
                    )}
                    href="/dashboard"
                  >
                    <span
                      className={
                        pathname == "/dashboard"
                          ? "text-yellow-300"
                          : "text-gray2 transition-all duration-200 ease-in-out group-hover:text-yellow-300"
                      }
                    >
                      {dashboardIcon}
                    </span>
                    <span
                      className={
                        pathname == "/dashboard"
                          ? "text-white"
                          : "text-gray2 transition-all duration-200 ease-in-out group-hover:text-white"
                      }
                    >
                      Dashboard
                    </span>
                  </Link>
                  <Link
                    className={cn(
                      "group flex items-center gap-4 px-10 py-5 text-lg font-medium",
                      pathname == "/dashboard/staking" && "bg-white/5",
                      font.className,
                    )}
                    href="/dashboard/staking"
                  >
                    <span
                      className={
                        pathname == "/dashboard/staking"
                          ? "text-yellow-300"
                          : "text-gray2 transition-all duration-200 ease-in-out group-hover:text-yellow-300"
                      }
                    >
                      {stakingIcon}
                    </span>
                    <span
                      className={
                        pathname == "/dashboard/staking"
                          ? "text-white"
                          : "text-gray2 transition-all duration-200 ease-in-out group-hover:text-white"
                      }
                    >
                      Staking
                    </span>
                  </Link>
                  <Link
                    className={cn(
                      "group flex items-center gap-4 px-10 py-5 text-lg font-medium",
                      pathname == "/dashboard/bridge" && "bg-white/5",
                      font.className,
                    )}
                    href="/dashboard/bridge"
                  >
                    <span
                      className={
                        pathname == "/dashboard/bridge"
                          ? "text-yellow-300"
                          : "text-gray2 transition-all duration-200 ease-in-out group-hover:text-yellow-300"
                      }
                    >
                      {bridgeIcon}
                    </span>
                    <span
                      className={
                        pathname == "/dashboard/bridge"
                          ? "text-white"
                          : "text-gray2 transition-all duration-200 ease-in-out group-hover:text-white"
                      }
                    >
                      Bridge
                    </span>
                  </Link>
                  <Link
                    className={cn(
                      "group flex items-center gap-4 px-10 py-5 text-lg font-medium",
                      pathname == "/dashboard/claim" && "bg-white/5",
                      font.className,
                    )}
                    href="/dashboard/claim"
                  >
                    <span
                      className={
                        pathname == "/dashboard/claim"
                          ? "text-yellow-300"
                          : "text-gray2 transition-all duration-200 ease-in-out group-hover:text-yellow-300"
                      }
                    >
                      {claimAirDropIcon}
                    </span>
                    <span
                      className={
                        pathname == "/dashboard/claim"
                          ? "text-white"
                          : "text-gray2 transition-all duration-200 ease-in-out group-hover:text-white"
                      }
                    >
                      Claim
                    </span>
                  </Link>
                </div>
                <div className="flex flex-col gap-3 py-8">
                  <span
                    className={cn(
                      "px-10 font-medium text-gray2",
                      font.className,
                    )}
                  >
                    Support
                  </span>
                  <span
                    className={cn(
                      "px-10 font-medium text-gray2",
                      font.className,
                    )}
                  >
                    Docs
                  </span>
                  <div className="flex gap-5 px-10 py-1 text-gray2">
                    <button className="hover:text-yellow-300">
                      {twitterIcon}
                    </button>
                    <button className="hover:text-yellow-300">
                      {linkedInIcon}
                    </button>
                    <button className="hover:text-yellow-300">
                      {discordIcon}
                    </button>
                  </div>
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="relative hidden min-h-[calc(100vh-1.5rem)] min-w-[280px] flex-col justify-between rounded-3xl bg-ash lg:flex">
        <div
          className="pointer-events-none absolute right-0 top-32 h-12 w-8 bg-coal"
          style={{
            clipPath: "polygon(100% 0, 61% 85%, 100% 100%)",
          }}
        ></div>
        <div className="flex flex-col">
          <div className="flex w-full items-center gap-3 px-10 py-8">
            <Image
              src="/coins/lnbgcoin.png"
              alt="logo"
              width={40}
              height={40}
            />
            <h1 className="text-center text-3xl font-semibold text-white">
              LNBG Dapp
            </h1>
          </div>
          <Link
            className={cn(
              "group flex items-center gap-4 px-10 py-5 text-lg font-medium",
              pathname == "/dashboard" && "bg-white/5",
            )}
            href="/dashboard"
          >
            <span
              className={
                pathname == "/dashboard"
                  ? "text-yellow-300"
                  : "text-gray2 transition-all duration-200 ease-in-out group-hover:text-yellow-300"
              }
            >
              {dashboardIcon}
            </span>
            <span
              className={
                pathname == "/dashboard"
                  ? "text-white"
                  : "text-gray2 transition-all duration-200 ease-in-out group-hover:text-white"
              }
            >
              Dashboard
            </span>
          </Link>
          <Link
            className={cn(
              "group flex items-center gap-4 px-10 py-5 text-lg font-medium",
              pathname == "/dashboard/staking" && "bg-white/5",
            )}
            href="/dashboard/staking"
          >
            <span
              className={
                pathname == "/dashboard/staking"
                  ? "text-yellow-300"
                  : "text-gray2 transition-all duration-200 ease-in-out group-hover:text-yellow-300"
              }
            >
              {stakingIcon}
            </span>
            <span
              className={
                pathname == "/dashboard/staking"
                  ? "text-white"
                  : "text-gray2 transition-all duration-200 ease-in-out group-hover:text-white"
              }
            >
              Staking
            </span>
          </Link>
          <Link
            className={cn(
              "group flex items-center gap-4 px-10 py-5 text-lg font-medium",
              pathname == "/dashboard/bridge" && "bg-white/5",
            )}
            href="/dashboard/bridge"
          >
            <span
              className={
                pathname == "/dashboard/bridge"
                  ? "text-yellow-300"
                  : "text-gray2 transition-all duration-200 ease-in-out group-hover:text-yellow-300"
              }
            >
              {bridgeIcon}
            </span>
            <span
              className={
                pathname == "/dashboard/bridge"
                  ? "text-white"
                  : "text-gray2 transition-all duration-200 ease-in-out group-hover:text-white"
              }
            >
              Bridge
            </span>
          </Link>
          <Link
            className={cn(
              "group flex items-center gap-4 px-10 py-5 text-lg font-medium",
              pathname == "/dashboard/claim" && "bg-white/5",
            )}
            href="/dashboard/claim"
          >
            <span
              className={
                pathname == "/dashboard/claim"
                  ? "text-yellow-300"
                  : "text-gray2 transition-all duration-200 ease-in-out group-hover:text-yellow-300"
              }
            >
              {claimAirDropIcon}
            </span>
            <span
              className={
                pathname == "/dashboard/claim"
                  ? "text-white"
                  : "text-gray2 transition-all duration-200 ease-in-out group-hover:text-white"
              }
            >
              Claim
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-3 py-8">
          <span className="px-10 font-medium text-gray2">Support</span>
          <span className="px-10 font-medium text-gray2">Docs</span>
          <div className="flex gap-5 px-10 py-1 text-gray2">
            <button className="hover:text-yellow-300">{twitterIcon}</button>
            <button className="hover:text-yellow-300">{linkedInIcon}</button>
            <button className="hover:text-yellow-300">{discordIcon}</button>
          </div>
        </div>
      </div>
    </>
  );
}

const dashboardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18px"
    height="18px"
    fill="none"
    viewBox="0 0 18 19"
  >
    <path
      stroke="currentColor"
      d="M6.75 2.75H3a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h2.69a.75.75 0 0 0 .53-.22l1.06-1.06a.75.75 0 0 0 .22-.53V3.5a.75.75 0 0 0-.75-.75ZM11.25 16.25H15a.75.75 0 0 0 .75-.75v-5.25A.75.75 0 0 0 15 9.5h-2.69a.75.75 0 0 0-.53.22l-1.06 1.06a.75.75 0 0 0-.22.53v4.19c0 .414.336.75.75.75ZM11.25 2.75H15a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-2.69a.75.75 0 0 1-.53-.22l-1.06-1.06a.75.75 0 0 1-.22-.53V3.5a.75.75 0 0 1 .75-.75ZM6.75 16.25H3a.75.75 0 0 1-.75-.75v-2.25A.75.75 0 0 1 3 12.5h2.69a.75.75 0 0 1 .53.22l1.06 1.06c.141.141.22.332.22.53v1.19a.75.75 0 0 1-.75.75Z"
    ></path>
  </svg>
);

const stakingIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18px"
    height="18px"
    fill="none"
    viewBox="0 0 18 19"
  >
    <path
      stroke="currentColor"
      d="m9.757 2.69 4.425 1.965c1.275.562 1.275 1.492 0 2.055L9.757 8.675c-.502.225-1.327.225-1.83 0L3.502 6.71c-1.275-.563-1.275-1.493 0-2.055L7.927 2.69c.503-.225 1.328-.225 1.83 0Z"
    ></path>
    <path
      stroke="currentColor"
      d="M2.25 8.75c0 .63.473 1.358 1.05 1.613l5.093 2.265c.39.172.832.172 1.214 0l5.093-2.265c.578-.255 1.05-.983 1.05-1.613"
    ></path>
    <path
      stroke="currentColor"
      d="M2.25 12.5c0 .697.413 1.328 1.05 1.613l5.093 2.265c.39.172.832.172 1.214 0l5.093-2.265a1.77 1.77 0 0 0 1.05-1.613"
    ></path>
  </svg>
);

const bridgeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18px"
    height="18px"
    fill="none"
    viewBox="0 0 18 19"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M15 7.5H3l3.13-4M3 11.5h12l-3.13 4"
    ></path>
  </svg>
);

const claimAirDropIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18px"
    height="18px"
    fill="none"
    viewBox="0 0 18 18"
  >
    <circle
      cx="9"
      cy="9"
      r="8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    ></circle>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M5.16 6.654a4.5 4.5 0 0 1 2.784-2.028M12.84 11.347a4.5 4.5 0 0 1-2.784 2.027"
    ></path>
  </svg>
);

const twitterIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M14.047 3h2.345l-5.124 5.857 6.028 7.97h-4.72L8.88 11.993l-4.23 4.833H2.302l5.481-6.264L2 3h4.84l3.342 4.418zm-.823 12.423h1.3L6.133 4.33H4.739z"></path>
  </svg>
);

const linkedInIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="currentColor"
    viewBox="0 0 512 512"
  >
    <path d="m484.689 98.231-69.417 327.37c-5.237 23.105-18.895 28.854-38.304 17.972L271.2 365.631l-51.034 49.086c-5.647 5.647-10.372 10.372-21.256 10.372l7.598-107.722L402.539 140.23c8.523-7.598-1.848-11.809-13.247-4.21L146.95 288.614 42.619 255.96c-22.694-7.086-23.104-22.695 4.723-33.579L455.423 65.166c18.893-7.085 35.427 4.209 29.266 33.065"></path>
  </svg>
);

const discordIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    viewBox="0 0 21 20"
  >
    <path
      fill="currentColor"
      d="M17.09 4.572a16.4 16.4 0 0 0-3.963-1.196.06.06 0 0 0-.063.03c-.171.295-.361.682-.494.985a15.2 15.2 0 0 0-4.45 0c-.133-.31-.33-.69-.502-.986a.06.06 0 0 0-.063-.029c-1.39.233-2.721.641-3.963 1.196a.06.06 0 0 0-.026.021C1.042 8.261.35 11.84.69 15.373a.06.06 0 0 0 .025.044 16.3 16.3 0 0 0 4.861 2.39.06.06 0 0 0 .069-.021q.563-.746.994-1.574a.06.06 0 0 0-.034-.083 11 11 0 0 1-1.518-.705.06.06 0 0 1-.006-.1q.154-.113.301-.23a.06.06 0 0 1 .063-.008c3.186 1.415 6.636 1.415 9.784 0a.06.06 0 0 1 .064.007q.147.118.302.23a.06.06 0 0 1-.005.101 10 10 0 0 1-1.52.704.06.06 0 0 0-.033.084c.293.55.627 1.076.994 1.573.015.021.043.03.068.023a16.3 16.3 0 0 0 4.87-2.391.06.06 0 0 0 .025-.044c.406-4.085-.68-7.633-2.879-10.779a.05.05 0 0 0-.025-.022m-9.975 8.65c-.96 0-1.75-.857-1.75-1.91s.775-1.908 1.75-1.908c.982 0 1.765.864 1.75 1.908 0 1.053-.775 1.91-1.75 1.91m6.469 0c-.96 0-1.75-.857-1.75-1.91s.775-1.908 1.75-1.908c.982 0 1.765.864 1.75 1.908 0 1.053-.768 1.91-1.75 1.91"
    ></path>
  </svg>
);
