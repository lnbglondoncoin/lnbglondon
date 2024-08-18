"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "@/components/buttons/Button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactForm() {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  useEffect(() => {
    let timer;
    if (formSubmitted) {
      timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [formSubmitted]);
  const handleSubmit = async (e) => {
    // e.preventDefault();

    // // Check if all required fields are filled
    // if (name && email && isChecked) {
    //   await fetch("/api/email", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       name,
    //       email,
    //       message,
    //       selectedOption,
    //       phoneNumber,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if (data) {
    //         setFormSubmitted(true);
    //         setName("");
    //         setMessage("");
    //         setPhoneNumber("");
    //         setIsChecked(false);
    //         setEmail("");
    //         setSelectedOption("Your inquiry about");
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   return true;
    //   // Set formSubmitted to true to display confirmation message
    // } else {
    //   alert("Please fill in all required fields.");
    // }
  };

  const options = [
    "Technical Support",
    "Partnership Opportunities",
    "Investment Inquiries",
    "Regulatory and Community Engagement",
    "General Inquiry",
  ];
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="mb-20 flex items-center justify-center font-sans">
      <div className="w-[50%]justify-center mt-4 flex items-center rounded-3xl bg-coal px-6 py-10 backdrop-blur-[20px]">
        <form
          className="mx-auto flex w-full max-w-[800px] flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex w-full flex-col md:flex-row md:gap-x-4">
            <input
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="mb-4 h-[60px] w-full rounded-md bg-ash pl-4 text-white outline-none md:mb-0 md:w-[300px]"
              placeholder="Name*"
              type="text"
            />
            <input
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 h-[60px] w-full rounded-md bg-ash pl-4 text-white outline-none md:w-[300px]"
              placeholder="Email*"
              required
              type="email"
              value={email}
            />
          </div>
          <div className="w-full pb-4">
            <input
              name="phoneNumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              required
              className="h-[60px] w-full rounded-md bg-ash pl-4 text-white outline-none [appearance:textfield] md:w-[625px] [&::-webkit-inner-spin-button]:appearance-none  [&::-webkit-outer-spin-button]:appearance-none"
              placeholder="Tel*"
              type="number"
            />
          </div>
          <div className="w-full">
            <DropdownMenu className="w-full bg-red-200">
              <DropdownMenuTrigger className="flex h-[60px] w-full items-center justify-between gap-5 rounded-md bg-ash px-4 text-start text-gray2">
                {!selectedOption && "Your inquiry about"}
                <span className="text-white">{selectedOption}</span>
                <ChevronDown size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-full border-none    bg-ash"
              >
                <DropdownMenuItem
                  onClick={() => handleOptionSelect("Technical Support")}
                  className="font-sans text-white hover:bg-gray2/10"
                >
                  Technical Support
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    handleOptionSelect("Partnership Opportunities")
                  }
                  className="font-sans text-white hover:bg-gray2/10"
                >
                  Partnership Opportunities
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleOptionSelect("Investment Inquiries")}
                  className="font-sans text-white hover:bg-gray2/10"
                >
                  Investment Inquiries
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    handleOptionSelect("Regulatory and Community Engagement")
                  }
                  className="font-sans text-white hover:bg-gray2/10"
                >
                  Regulatory and Community Engagement
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleOptionSelect("General Inquiry")}
                  className="font-sans text-white hover:bg-gray2/10"
                >
                  General Inquiry
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <textarea
            name="message"
            className="my-4 h-[175px] w-full rounded-md bg-ash pl-4 pt-4 text-white outline-none md:w-[625px]"
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="w-full pb-4 md:w-[625px]">
            <div className="flex items-center justify-start gap-3">
              <Checkbox
                className="border-gray2"
                checked={isChecked}
                onCheckedChange={() => setIsChecked(!isChecked)}
              />
              <label
                for="link-checkbox"
                className="select-none text-[16px] font-[400] text-white"
              >
                I accept terms & conditions
              </label>{" "}
            </div>
          </div>
          <div className="mr-auto pb-4">
            <ReCAPTCHA
              sitekey="6LcAaogpAAAAAAYMj1NNiwkPKhUknmUKVC9F5n-S"
              theme="Dark"
            />
          </div>
          <Button type="submit" title="Send Message" className="" />
          {formSubmitted && (
            <div className="mr-auto flex gap-1 pl-[0.45rem]">
              {" "}
              <Image
                src="/contactpage/tick.svg"
                width={16}
                height={3}
                alt="tick"
              />
              <p className="text-neutralLight select-none	 text-wrap">
                The form was sent successfully.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}