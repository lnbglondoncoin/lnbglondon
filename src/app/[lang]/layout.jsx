import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MovingBar from "@/components/moving-bar/MovingBar";
import React from "react";
import { ToastContainer } from "react-toastify";
import CookiesBanner from "@/components/CookiesBanner";

export const metadata = {
  title: "LNBG London Coin - Secure & Innovative Cryptocurrency",
  description:
    "LNBG London Coin is a secure and innovative cryptocurrency inspired by London's financial heritage. Explore decentralized digital finance with our trusted and efficient platform.",
  image: "/static/logo.png",
  openGraph: {
    image: ["/static/logo.png"],
  },
  author: "LNBG London Coin Team",
  keywords: [
    "LNBG",
    "London Coin",
    "Cryptocurrency",
    "Blockchain",
    "Digital Currency",
    "London Crypto",
    "Decentralized Finance",
    "Secure Coin",
  ],
};

export default function layout({ children, params }) {
  const lang = params.lang;
  return (
    <>
      <ToastContainer />
      <MovingBar />
      <Header lang={lang} />
      {children}
      <CookiesBanner />
      <Footer lang={lang} />
    </>
  );
}
