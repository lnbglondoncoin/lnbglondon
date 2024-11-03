"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { leftToRightVariants } from "../variants";
import { cn } from "@/lib/utils";
import FeatureSlider from "../slider/FeatureSlider";

export default function FeaturedSection({ lang = "en" }) {
  return (
    <section className="flex w-full max-w-[100vw] items-center justify-center overflow-hidden">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center rounded-xl bg-coal px-5 py-20">
        <motion.h1
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className="text-3xl font-semibold"
        >
          {lang === "en"
            ? "Featured in"
            : lang === "ru"
              ? "Представлено в"
              : lang === "fr"
                ? "En vedette dans"
                : "Destacado en"}
        </motion.h1>
        <FeatureSlider />
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className="grid w-full rounded-3xl bg-black p-1.5 md:grid-cols-2 md:rounded-[32px]"
        >
          <Image
            src="/static/feature.png"
            width={600}
            height={400}
            className="w-full"
          />
          <div className="flex flex-col items-center justify-center gap-5 p-10 text-center">
            <h1 className="text-4xl font-bold">
              6285{" "}
              <span
                className={cn(
                  "uppercase text-gray2/70",
                  lang === "ru" && "text-sm",
                )}
              >
                {lang === "en"
                  ? "Holders"
                  : lang === "ru"
                    ? "Держатели"
                    : lang === "fr"
                      ? "Titulaires"
                      : "Titulares"}
              </span>
            </h1>
            <span className="font-sans text-xl text-gray2">
              {lang === "en"
                ? "With our supporters, we're building something bigger and more impactful with each new connection. Join now our network of innovators!"
                : lang === "ru"
                  ? "С нашими сторонниками мы создаем нечто большее и более значимое с каждым новым соединением. Присоединяйтесь к нашей сети инноваторов!"
                  : lang === "fr"
                    ? "Avec nos supporters, nous construisons quelque chose de plus grand et plus impactant à chaque nouvelle connexion. Rejoignez maintenant notre réseau d'innovateurs!"
                    : "Con nuestros seguidores, estamos construyendo algo más grande y más impactante con cada nueva conexión. ¡Únete ahora a nuestra red de innovadores!"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
