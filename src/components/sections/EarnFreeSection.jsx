"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { leftToRightVariants, rightToLeftVariants } from "../variants";
import { cn } from "@/lib/utils";

const EarnFreeSection = ({ lang = "en" }) => {
  return (
    <section className="flex max-w-[100vw] items-center justify-center overflow-hidden px-5 py-10">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className="flex flex-col justify-center gap-y-5 px-5"
        >
          <span className="text-2xl tracking-widest text-primary">
            {lang === "en"
              ? "Our Refferal Program"
              : lang === "ru"
                ? "Наша программа рефералов"
                : lang === "fr"
                  ? "Notre programme de parrainage"
                  : "Nuestro programa de referencia"}
          </span>
          <span className={cn("font-bold leading-[3.5rem] text-white", lang === "ru" ? "text-2xl":"text-5xl")}>
            {lang === "en"
              ? "Earn free lnbg coins with Every Referral"
              : lang === "ru"
                ? "Зарабатывайте бесплатные монеты lnbg с каждым рефералом"
                : lang === "fr"
                  ? "Gagnez des pièces lnbg gratuites avec chaque recommandation"
                  : "Gane monedas lnbg gratis con cada referencia"}{" "}
            <span className="text-primary">.</span>
          </span>
          <span className="font-sans text-lg text-gray2">
            {lang === "en"
              ? "Ready to start earning free LNBG Coins? Log in to your LNBG Coin account today and grab your unique referral link. Share it with your network and watch your coin balance grow with each successful referral."
              : lang === "ru"
                ? "Готовы начать зарабатывать бесплатные монеты LNBG? Войдите в свою учетную запись LNBG Coin сегодня и получите свою уникальную реферальную ссылку. Поделитесь ею со своей сетью и наблюдайте, как ваш баланс монет растет с каждым успешным рефералом."
                : lang === "fr"
                  ? "Prêt à commencer à gagner des pièces LNBG gratuites? Connectez-vous à votre compte LNBG Coin dès aujourd'hui et récupérez votre lien de parrainage unique. Partagez-le avec votre réseau et regardez votre solde de pièces augmenter avec chaque recommandation réussie."
                  : "¿Listo para comenzar a ganar monedas LNBG gratis? Inicie sesión en su cuenta de LNBG Coin hoy y obtenga su enlace de referencia único. Compártelo con su red y vea cómo su saldo de monedas crece con cada referencia exitosa."}
          </span>
          <span className="font-sans text-lg text-gray2">
            {lang === "en"
              ? " Join us in building a strong and vibrant community of LNBG Coin supporters. Together, we can shape the future of decentralized finance and create new opportunities for financial growth and empowerment."
              : lang === "ru"
                ? " Присоединяйтесь к нам в создании сильного и живого сообщества сторонников LNBG Coin. Вместе мы можем формировать будущее децентрализованного финансирования и создавать новые возможности для финансового роста и укрепления."
                : lang === "fr"
                  ? " Rejoignez-nous pour construire une communauté forte et dynamique de partisans de LNBG Coin. Ensemble, nous pouvons façonner l'avenir de la finance décentralisée et créer de nouvelles opportunités de croissance et d'autonomisation financières."
                  : " Únete a nosotros en la construcción de una comunidad fuerte y vibrante de partidarios de LNBG Coin. Juntos, podemos dar forma al futuro de las finanzas descentralizadas y crear nuevas oportunidades de crecimiento financiero y empoderamiento."}
          </span>
          <span className="font-sans text-lg text-gray2">
            {lang === "en"
              ? "Don't miss out on this exciting opportunity to earn free coins while introducing others to the world of LNBG Coin. Start referring today and let's make a difference together!"
              : lang === "ru"
                ? "Не упустите этот захватывающий шанс заработать бесплатные монеты, представляя других в мир LNBG Coin. Начните реферировать сегодня и давайте вместе сделаем разницу!"
                : lang === "fr"
                  ? "Ne manquez pas cette opportunité excitante de gagner des pièces gratuites tout en introduisant d'autres personnes dans le monde de LNBG Coin. Commencez à recommander dès aujourd'hui et faisons la différence ensemble!"
                  : "¡No te pierdas esta emocionante oportunidad de ganar monedas gratis mientras introduces a otros en el mundo de LNBG Coin. ¡Comience a referir hoy y hagamos la diferencia juntos!"}
          </span>
          <div className="flex flex-wrap gap-5">
            <div className="flex cursor-pointer gap-x-2 rounded-full border-4 border-lightgray bg-transparent py-4 pl-8 pr-10 font-bold tracking-tighter text-lightgray transition-all duration-200 ease-in-out hover:bg-lightgray hover:text-black">
              <Image
                src="/static/apple.svg"
                width={30}
                height={30}
                alt="apple icon"
              />
              <div className="flex flex-col text-start">
                <span className="text-xs text-darkgray">download on</span>
                <span className="">Apple Store</span>
              </div>
            </div>
            <div className="group flex cursor-pointer gap-x-2 rounded-full border-4 border-primary bg-primary py-4 pl-8 pr-10 font-bold tracking-tighter text-lightgray transition-all duration-200 ease-in-out hover:border-lightgray hover:bg-transparent hover:text-white">
              <Image
                src="/static/playstore.svg"
                width={30}
                height={30}
                alt="apple icon"
              />
              <div className="flex flex-col text-start">
                <span className="text-xs text-white group-hover:text-darkgray">
                  download on
                </span>
                <span className="text-white group-hover:text-lightgray">
                  Google Play
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
          className="flex w-full items-center justify-center"
        >
          <Image
            src="/static/phone.png"
            width={500}
            height={540}
            alt="phone"
            quality={100}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default EarnFreeSection;
