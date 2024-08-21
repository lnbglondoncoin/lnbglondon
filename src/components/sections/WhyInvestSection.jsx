"use client";

import { motion } from "framer-motion";
import { leftToRightVariants, rightToLeftVariants } from "../variants";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const WhyInvestSection = ({ lang = "en" }) => {
  const router = useRouter();
  return (
    <section className="flex w-full max-w-[100vw] items-center justify-center overflow-hidden px-5">
      <div className="flex flex-col gap-10 py-10">
        <div className="grid w-full max-w-7xl gap-0.5 bg-[#353550] p-0.5 lg:grid-cols-2">
          <div className="flex flex-col gap-0.5">
            <motion.div
              initial="hide"
              whileInView="show"
              exit="show"
              variants={leftToRightVariants}
              className="bg-coal p-10"
            >
              <h1
                className={cn(
                  "font-bold uppercase",
                  lang === "ru"
                    ? "text-2xl"
                    : "text-4xl sm:text-6xl sm:leading-[4.5rem]",
                )}
              >
                {lang === "en"
                  ? "Why invest"
                  : lang === "ru"
                    ? "Почему инвестировать"
                    : lang === "fr"
                      ? "Pourquoi investir"
                      : "¿Por qué invertir"}
                <br />
                {lang === "en"
                  ? "in LNBG?"
                  : lang === "ru"
                    ? "в LNBG?"
                    : lang === "fr"
                      ? "dans LNBG?"
                      : "en LNBG?"}
              </h1>
            </motion.div>
            <motion.div
              initial="hide"
              whileInView="show"
              exit="show"
              variants={leftToRightVariants}
              className="why-invest-box relative flex h-full w-full flex-col overflow-hidden bg-cover p-5"
            >
              <div className="static z-10 flex h-full min-h-[320px] flex-col gap-4 px-8 py-4">
                <p className="w-fit rounded-sm bg-primary px-1 font-sans text-xl text-black">
                  <span className="font-bold">+100%</span>{" "}
                  {lang === "en"
                    ? "in 2 months"
                    : lang === "ru"
                      ? "за 2 месяца"
                      : lang === "fr"
                        ? "en 2 mois"
                        : "en 2 meses"}
                </p>
                <div className="flex items-center gap-5">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray2 sm:text-sm">
                      {lang === "en"
                        ? "Price now"
                        : lang === "ru"
                          ? "Цена сейчас"
                          : lang === "fr"
                            ? "Prix maintenant"
                            : "Precio ahora"}
                    </span>
                    <span className="font-sans text-3xl font-extrabold">
                      $0.03
                    </span>
                  </div>
                  <div className="flex">{chevRight}</div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray2 sm:text-sm">
                      {lang === "en"
                        ? "Price at listing"
                        : lang === "ru"
                          ? "Цена при листинге"
                          : lang === "fr"
                            ? "Prix à la cotation"
                            : "Precio en la cotización"}
                    </span>
                    <span className="font-sans text-3xl font-extrabold">
                      $0.06
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col justify-center gap-0.5">
            <motion.div
              initial="hide"
              whileInView="show"
              exit="show"
              variants={rightToLeftVariants}
              className="flex h-full flex-col justify-between gap-5 bg-black p-10"
            >
              <div className="flex flex-col gap-5">
                <p className="flex flex-col gap-2 text-xl sm:flex-row">
                  <span className="font-bold uppercase">
                    {lang === "en"
                      ? "First Release"
                      : lang === "ru"
                        ? "Первый релиз"
                        : lang === "fr"
                          ? "Première sortie"
                          : "Primera liberación"}
                  </span>
                  <span className="text-white/70">JUL 24</span>
                </p>
                <span className="font-sans text-lg text-white/50">
                  {lang === "en"
                    ? "We're launching a crypto investment platform with secure Vaults offering high APY. New features will be added based on your feedback."
                    : lang === "ru"
                      ? "Мы запускаем платформу для инвестиций в криптовалюту с безопасными хранилищами, предлагающими высокий APY. Новые функции будут добавлены на основе ваших отзывов."
                      : lang === "fr"
                        ? "Nous lançons une plateforme d'investissement en crypto-monnaie avec des coffres-forts sécurisés offrant un APY élevé. De nouvelles fonctionnalités seront ajoutées en fonction de vos commentaires."
                        : "Lanzamos una plataforma de inversión en criptomonedas con bóvedas seguras que ofrecen un APY alto. Se agregarán nuevas funciones en función de sus comentarios."}
                </span>
              </div>
              <span className="text-xl font-semibold">
                {lang === "en"
                  ? "Invest safely, earn reliably."
                  : lang === "ru"
                    ? "Инвестируйте безопасно, зарабатывайте надежно."
                    : lang === "fr"
                      ? "Investissez en toute sécurité, gagnez de manière fiable."
                      : "Invierta de forma segura, gane de forma fiable."}{" "}
                <br />{" "}
                {lang === "en"
                  ? "Your input shapes what's next"
                  : lang === "ru"
                    ? "Ваш вклад формирует то, что будет дальше"
                    : lang === "fr"
                      ? "Votre contribution façonne la suite"
                      : "Tu aporte da forma a lo que sigue"}
              </span>
            </motion.div>
            <motion.div
              initial="hide"
              whileInView="show"
              exit="show"
              variants={rightToLeftVariants}
              className="flex flex-col justify-center gap-1 bg-secondary px-10 py-16"
            >
              <span className="text-2xl uppercase text-gray2">
                {lang === "en"
                  ? "Supportive community of:"
                  : lang === "ru"
                    ? "Поддерживающее сообщество из:"
                    : lang === "fr"
                      ? "Communauté de soutien de:"
                      : "Comunidad solidaria de:"}
              </span>
              <p className="flex gap-2 font-sans text-4xl">
                <span className="font-bold">7456</span>
                <span className="font-light uppercase text-gray2">
                  {lang === "en"
                    ? "Holders"
                    : lang === "ru"
                      ? "Держателей"
                      : lang === "fr"
                        ? "Titulaires"
                        : "Titulares"}
                </span>
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className="flex items-center justify-center"
        >
          <Link
            href="/#presale"
            className="w-fit rounded-lg bg-primary px-10 py-4 font-black uppercase text-black hover:bg-primary2"
          >
            Buy LNBG Coin
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const chevRight = (
  <svg
    width="25"
    height="25"
    viewBox="0 0 66 78"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.4206 76.4105C32.7939 78.0372 30.1539 78.0366 28.5278 76.4105C26.9018 74.7845 26.9011 72.1445 28.5278 70.5178L55.5089 43.5367C56.5019 42.5437 57.056 41.2031 57.0612 39.7972C57.0599 38.3979 56.5027 37.0566 55.5123 36.0662L44.7557 25.3097C43.129 23.683 43.129 21.0437 44.7557 19.417C46.3825 17.7903 49.0218 17.7903 50.6485 19.417L61.405 30.1735C63.9581 32.7266 65.394 36.1878 65.3894 39.8025C65.392 43.4113 63.956 46.8751 61.4017 49.4295L34.4206 76.4105ZM7.71772 76.4145C6.09101 78.0412 3.45103 78.0406 1.82498 76.4145C0.198922 74.7885 0.198268 72.1485 1.82498 70.5218L28.8127 43.5341C29.8057 42.5411 30.3597 41.2005 30.3584 39.8011C30.3578 38.4024 29.8063 37.054 28.8159 36.0636L1.83024 9.07796C0.204185 7.45191 0.20419 4.81259 1.8309 3.18588C3.45107 1.56571 6.09693 1.55917 7.72298 3.18522L34.7087 30.1709C37.2617 32.724 38.6912 36.1917 38.6932 39.7998C38.6958 43.4086 37.2598 46.8724 34.7054 49.4268L7.71772 76.4145Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M42.8677 11.6367C44.4938 13.2627 44.4944 15.9027 42.8677 17.5294C41.241 19.1561 38.601 19.1555 36.975 17.5294L28.5266 9.08097C26.9005 7.45492 26.8999 4.81494 28.5266 3.18823C30.1533 1.56152 32.7933 1.56217 34.4193 3.18823L42.8677 11.6367Z"
      fill="currentColor"
    />
  </svg>
);

export default WhyInvestSection;
