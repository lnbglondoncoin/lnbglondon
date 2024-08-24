"use client";

import Button from "../buttons/Button";
import PresaleCard from "../PresaleCard";
import { Vortex } from "../ui/vortex";
import { FlipWords } from "../ui/flip-words";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import apis from "@/context/Services";
import { useEffect } from "react";

const MainBanner = ({ lang = "en" }) => {
  const texts =
    lang === "en"
      ? ["Finance", "Trading", "Future"]
      : lang === "ru"
        ? ["Финансы", "Торговля", "Будущее"]
        : lang === "fr"
          ? ["Finance", "Trading", "Futur"]
          : ["Finanzas", "Comercio", "Futuro"];

  const router = useRouter();
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  console.log(ref,"referralreferralreferralreferral");

  useEffect(() => {
    const mainReferral = async () => {
      try {
        if (isConnected && ref) {
          console.log(ref, address);
          let apiData = {
            "wallet_address" : address,
            "referral_code" : ref,
          };
          let data = await apis.referringto(apiData);
          console.log(data, "useSDataaaaa");
        }
      } catch (error) {
        console.log(error);
      }
    };
    mainReferral();
  }, [address,ref]);

  return (
    <section className="relative top-0 flex w-full max-w-[100vw] items-center justify-center overflow-hidden bg-coal">
      <Vortex
        backgroundColor="transparent"
        containerClassName="h-full w-full max-w-screen"
        rangeY={800}
        particleCount={700}
        baseHue={50}
        className="flex h-full w-full items-center justify-center pb-10 pt-[120px]"
      >
        <div className="z-10 flex w-full max-w-7xl flex-col items-center gap-10 px-5 xl:flex-row">
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
            className="flex w-full flex-col items-center gap-y-5 text-center lg:w-7/12 lg:items-start lg:text-left"
          >
            <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
              {lang === "en"
                ? "Digital"
                : lang === "ru"
                  ? "Цифровой"
                  : lang === "fr"
                    ? "Numérique"
                    : "Digital"}
              <FlipWords className="text-primary" words={texts} />{" "}
              {lang === "en"
                ? " Cryptocurrency"
                : lang === "ru"
                  ? " Криптовалюта"
                  : lang === "fr"
                    ? " Cryptomonnaie"
                    : " Criptomoneda"}
              <span className="text-primary">.</span>
            </h1>
            <span className="min-w-[250px] text-2xl text-primary md:text-4xl">
              {lang === "en"
                ? "Shaping the Future"
                : lang === "ru"
                  ? "Формирование будущего"
                  : lang === "fr"
                    ? "Façonner l'avenir"
                    : "Moldando el futuro"}
            </span>
            <div className="flex min-h-[70px] w-full items-center justify-center gap-2 md:w-fit">
              <Link
                href="https://solidityscan.com/published-report/project/bd15e426b5e94bcb"
                className="transition-all duration-200 ease-in-out hover:pb-1"
              >
                <Image
                  src="/static/solidity-scan-lnbg.png"
                  width={146}
                  height={61}
                  alt="Solidity Scan"
                />
              </Link>
              <Link
                href="https://solidityscan.com/published-report/project/bd15e426b5e94bcb"
                className="transition-all duration-200 ease-in-out hover:pb-1"
              >
                <Image
                  src="/static/cred-sheild-lnbg.png"
                  width={146}
                  height={61}
                  alt="Cred Sheild"
                />
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-x-5">
              <Button
                title={
                  lang === "en"
                    ? "Details"
                    : lang === "ru"
                      ? "Детали"
                      : lang === "fr"
                        ? "Détails"
                        : "Detalles"
                }
                onClick={() =>
                  router.push(
                    "https://lnbg-london.gitbook.io/lnbg-london/getting-started/quickstart",
                  )
                }
              />
              <Button
                title={
                  lang === "en"
                    ? "Whitepaper"
                    : lang === "ru"
                      ? "Белая бумага"
                      : lang === "fr"
                        ? "Livre blanc"
                        : "Libro blanco"
                }
                onClick={() => router.push("/whitepaper.pdf")}
              />
            </div>
          </motion.div>
          <PresaleCard lang={lang} />
        </div>
      </Vortex>
    </section>
  );
};

export default MainBanner;
