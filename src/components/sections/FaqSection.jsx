"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "../buttons/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FaqSection() {
  const router = useRouter();
  return (
    <section className="flex w-full items-center justify-center px-2 py-20">
      <div className="flex w-full max-w-7xl flex-col gap-10">
        <h1 className="text-center text-6xl font-bold">FAQ</h1>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-1"
              >
                <AccordionTrigger>What is LNBG?</AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  LNBG is a secure AI-based yield aggregator platform on the
                  LNBG blockchain for non-professional crypto investors. LNBG
                  offers multiple investment vaults and strategies tailored to
                  the user's needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-2"
              >
                <AccordionTrigger>How do I buy a $LNBG token?</AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  You can buy $LNBG with cryptocurrency or by using a credit
                  card. To purchase $LNBG, you need to connect a wallet that
                  supports the LNBG blockchain, and then select your preferred
                  payment method.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-3"
              >
                <AccordionTrigger>
                  Is investing in LNBG secure?
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  Yes, LNBG's team and code have been verified by external
                  auditors. The LNBG team has successfully completed two KYC
                  audits conducted by CertiK and Assure DeFi. Additionally,
                  CertiK has audited LNBG's smart contracts. To ensure security
                  and reliability, LNBG offers a bug bounty program with rewards
                  of up to $25,000 for identifying vulnerabilities in their
                  smart contracts and dApp.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-4"
              >
                <AccordionTrigger>When is the TGE?</AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  The Token Generation Event (TGE) is scheduled for Q3 2024,
                  though the date may be adjusted based on market conditions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-5"
              >
                <AccordionTrigger>What is LNBG listing price?</AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  The listing price is $0.06 per LNBG
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-6"
              >
                <AccordionTrigger>Where can I find my tokens?</AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  After purchasing tokens, you will be able to check your
                  balance by connecting your wallet on the website:
                  https://lnbglondon.com/ . The tokens will appear in your wallet after
                  the Token Generation Event (TGE) which is scheduled for Q3
                  2024.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-7"
              >
                <AccordionTrigger>
                  When will the token be listed on exchanges?
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  The token will be listed on both centralized exchanges (CEXes)
                  and decentralized exchanges (DEXes) following the Token
                  Generation Event (TGE). The exact list of exchanges will be
                  announced as the TGE date approaches.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-8"
              >
                <AccordionTrigger>When will LNBG launch?</AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  The development of the LNBG earning marketplace is currently
                  underway, with the initial release scheduled for Q2 of 2024.
                  Stay updated by following our Twitter, Discord or Telegram to
                  stay tuned, and sign up for the waitlist on this page to be
                  among the first to use LNBG.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button
              title="More FAQs"
              onClick={() =>
                router.push(
                  "https://lnbg-london.gitbook.io/lnbg-london/information/faqs",
                )
              }
              className="w-fit font-sans"
            />
          </div>
          <Image
            src="/robot-2.png"
            width={400}
            height={500}
            alt="robot"
            className="scale-x-[-1] justify-self-end"
          />
        </div>
      </div>
    </section>
  );
}
