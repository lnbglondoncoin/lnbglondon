"use client";

import Button from "../buttons/Button";
import { motion } from "framer-motion";
import { leftToRightVariants, rightToLeftVariants } from "../variants";
import { cn } from "@/lib/utils";

export default function DappSection({ lang = "en" }) {
  return (
    <div className="flex w-full max-w-[100vw] items-center justify-center overflow-hidden">
      <div className="flex w-full max-w-7xl items-center justify-center overflow-hidden rounded-xl bg-[url(/static/robot.png)] bg-cover bg-center">
        <div className="grid w-full max-w-7xl bg-black/70 px-5 py-20 md:grid-cols-2 md:px-10">
          <div className="flex flex-col gap-10">
            <motion.div
              initial="hide"
              whileInView="show"
              exit="show"
              variants={leftToRightVariants}
              className="flex w-fit flex-col gap-2 text-4xl font-bold sm:text-6xl"
            >
              <h1 className="rounded bg-gradient-to-r from-primary/30 to-white/10 p-1">
                LNBG DAPP
              </h1>
              <h1 className="rounded bg-gradient-to-r from-primary/30 to-white/10 p-1">
                <span className="text-primary">
                  {lang === "en"
                    ? "IS LIVE"
                    : lang === "ru"
                      ? "ЖИВ"
                      : lang === "fr"
                        ? "EST EN DIRECT"
                        : "ESTÁ EN VIVO"}
                </span>
                {lang === "en"
                  ? " NOW"
                  : lang === "ru"
                    ? " СЕЙЧАС"
                    : lang === "fr"
                      ? " MAINTENANT"
                      : " AHORA"}
              </h1>
            </motion.div>
            <motion.span
              initial="hide"
              whileInView="show"
              exit="show"
              variants={leftToRightVariants}
              className={cn(
                "font-sans",
                lang === "ru" ? "max-w-[300px] text-wrap" : "text-lg",
              )}
            >
              {lang === "en"
                ? "Explore our vaults for stable growth options with competitive APYs and LNBG Points. Select the ideal vault for your strategy and boost your portfolio today."
                : lang === "ru"
                  ? "Исследуйте наши хранилища для стабильных вариантов роста c конкурентоспособными APY и баллами LNBG. Выберите идеальное хранилище для вашей стратегии и увеличьте свой портфель уже сегодня."
                  : lang === "fr"
                    ? "Explorez nos coffres pour des options de croissance stables avec des APY compétitifs et des points LNBG. Sélectionnez le coffre idéal pour votre stratégie et boostez votre portefeuille dès aujourd'hui."
                    : "Explore nuestros vaults para opciones de crecimiento estable con APY competitivos y puntos LNBG. Seleccione el vault ideal para su estrategia y aumente su cartera hoy."}
            </motion.span>
            <motion.div
              initial="hide"
              whileInView="show"
              exit="show"
              variants={rightToLeftVariants}
              className="flex flex-col items-center gap-5 md:flex-row md:gap-10"
            >
              <Button
                title={
                  lang === "en"
                    ? "Launch App"
                    : lang === "ru"
                      ? "Запустить приложение"
                      : lang === "fr"
                        ? "Lancer l'application"
                        : "Lanzar aplicación"
                }
                onClick={() => window.open("https://app.lnbglondon.com")}
                className="h-full px-10 font-sans text-sm font-bold uppercase shadow-xl shadow-primary/30"
              />
              <span className="font-sans text-lg leading-6 text-gray2/80">
                {lang === "en"
                  ? "Join now for exclusive early access to the LNBG platform among the first explorers."
                  : lang === "ru"
                    ? "Присоединяйтесь сейчас для эксклюзивного раннего доступа к платформе LNBG среди первых исследователей."
                    : lang === "fr"
                      ? "Rejoignez maintenant pour un accès anticipé exclusif à la plateforme LNBG parmi les premiers explorateurs."
                      : "Únase ahora para acceder exclusivamente a la plataforma LNBG entre los primeros exploradores."}
              </span>
            </motion.div>
            <div className="grid grid-cols-2 gap-10 text-xl">
              <motion.span
                initial="hide"
                whileInView="show"
                exit="show"
                variants={leftToRightVariants}
                className=""
              >
                {lang === "en"
                  ? "Reliable risk"
                  : lang === "ru"
                    ? "Надежный риск"
                    : lang === "fr"
                      ? "Risque fiable"
                      : "Riesgo confiable"}{" "}
                <br />{" "}
                {lang === "en"
                  ? "scoring"
                  : lang === "ru"
                    ? "оценка"
                    : lang === "fr"
                      ? "notation"
                      : "puntuación"}
              </motion.span>
              <motion.span
                initial="hide"
                whileInView="show"
                exit="show"
                variants={rightToLeftVariants}
                className=""
              >
                {lang === "en"
                  ? "DeFi Vaults and"
                  : lang === "ru"
                    ? "Хранилища DeFi и"
                    : lang === "fr"
                      ? "Coffres DeFi et"
                      : "Vaults DeFi y"}
                <br />
                {lang === "en"
                  ? "CeFi Strategies"
                  : lang === "ru"
                    ? "Стратегии CeFi"
                    : lang === "fr"
                      ? "Stratégies CeFi"
                      : "Estrategias CeFi"}
              </motion.span>
              <motion.span
                initial="hide"
                whileInView="show"
                exit="show"
                variants={leftToRightVariants}
                className=""
              >
                {lang == "en"
                  ? "Transparent fees"
                  : lang == "ru"
                    ? "Прозрачные комиссии"
                    : lang == "fr"
                      ? "Frais transparents"
                      : "Tarifas transparentes"}
              </motion.span>
              <motion.span
                initial="hide"
                whileInView="show"
                exit="show"
                variants={rightToLeftVariants}
                className=""
              >
                {lang === "en"
                  ? "AI-copilot for"
                  : lang === "ru"
                    ? "ИИ-помощник для"
                    : lang === "fr"
                      ? "IA-copilote pour"
                      : "IA-copiloto para"}
                <br />
                {lang === "en"
                  ? "strategy selection"
                  : lang === "ru"
                    ? "выбора стратегии"
                    : lang === "fr"
                      ? "sélection de stratégie"
                      : "selección de estrategia"}
                <br />{" "}
                {lang === "en"
                  ? "and creation"
                  : lang === "ru"
                    ? "и создания"
                    : lang === "fr"
                      ? "et création"
                      : "y creación"}
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
