import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MovingBar from "@/components/moving-bar/MovingBar";
import React from "react";
import { ToastContainer } from "react-toastify";

export default function layout({ children, params }) {
  const lang = params.lang;
  return (
    <>
      <ToastContainer />
      <MovingBar />
      <Header lang={lang} />
      {children}
      <Footer lang={lang} />
    </>
  );
}
