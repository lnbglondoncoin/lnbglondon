import Link from "next/link";
import React from "react";
import ContactForm from "./ContactForm";

export default function ContactBanner() {
  return (
    <section className="relative flex w-full items-center justify-center bg-[url('/bgs/bg-2.png')] bg-contain bg-center bg-no-repeat py-[120px]">
      <div className="z-10 flex w-full max-w-7xl flex-col items-center gap-10 px-5 text-center">
        <span className="text-xl tracking-[0.2em] text-primary sm:text-2xl">
          LNBG LONDON TEAM
        </span>
        <div className="bg-gradient-to-r from-primary via-white to-white bg-clip-text text-4xl text-transparent sm:text-6xl">
          Contact Us<span className="text-primary">.</span>
        </div>
        <span className="max-w-4xl text-xl text-lightgray">
          Reach out to us if you have any queries, questions or feedback. We are
          here to help you.
        </span>
        <ContactForm />
      </div>
    </section>
  );
}
