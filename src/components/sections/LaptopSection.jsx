"use client";

import { motion } from "framer-motion";
import { leftToRightVariants, rightToLeftVariants } from "../variants";

const LaptopSection = ({ lang = "en" }) => {
  return (
    <div className="flex w-full max-w-[100vw] items-center justify-center overflow-hidden bg-[url(/static/bgs/bg-2.png)] bg-contain bg-center bg-no-repeat px-5 py-20 2xl:min-h-[1200px] 2xl:bg-cover">
      <motion.div
        initial="hide"
        whileInView="show"
        exit="show"
        variants={leftToRightVariants}
        className="flex h-full w-full max-w-7xl justify-end bg-contain bg-no-repeat sm:bg-[url(/static/pc.png)]"
      >
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
          className="flex h-full w-full max-w-3xl flex-col justify-center gap-y-7 rounded-lg bg-black/60 p-10"
        >
          <div className="span text-4xl font-bold sm:text-6xl sm:leading-[4.5rem]">
            {lang === "en"
              ? "Ready to Embrace the Future of Finance?"
              : lang === "ru"
                ? "Готовы принять будущее финансов?"
                : lang === "fr"
                  ? "Prêt à embrasser l'avenir de la finance?"
                  : "¿Listo para abrazar el futuro de las finanzas?"}
          </div>
          <span className="font-sans text-lg text-lightgray">
            {lang === "en"
              ? "LNBG Coin is leading the charge in facilitating decentralized funding for asset owners worldwide, harnessing the power of blockchain technology.Our mission is to empower individuals and businesses to generate passive revenue and unlock new opportunities through tokenization."
              : lang === "ru"
                ? "LNBG Coin является лидером в области обеспечения децентрализованного финансирования для владельцев активов по всему миру, используя силу технологии блокчейн. Наша миссия - дать людям и бизнесу возможность генерировать пассивный доход и открывать новые возможности через токенизацию."
                : lang === "fr"
                  ? "LNBG Coin est à l'avant-garde de la facilitation du financement décentralisé pour les propriétaires d'actifs du monde entier, exploitant la puissance de la technologie blockchain. Notre mission est de permettre aux particuliers et aux entreprises de générer des revenus passifs et de débloquer de nouvelles opportunités grâce à la tokenisation."
                  : "LNBG Coin lidera la carga en la facilitación de financiamiento descentralizado para propietarios de activos en todo el mundo, aprovechando el poder de la tecnología blockchain. Nuestra misión es capacitar a individuos y empresas para generar ingresos pasivos y desbloquear nuevas oportunidades a través de la tokenización."}
          </span>
          <span className="font-sans text-lg text-lightgray">
            {lang === "en"
              ? "Invest with LNBG London Coin today and be part of a movement that is reshaping the future of finance. Together, we can unlock new horizons, generate passive revenue, and embrace the boundless potential of tokenization. Get ready to redefine the way you invest and open doors to a world of opportunities."
              : lang === "ru"
                ? "Инвестируйте в LNBG London Coin уже сегодня и станьте частью движения, которое переформатирует будущее финансов. Вместе мы можем открывать новые горизонты, генерировать пассивный доход и обнимать безграничный потенциал токенизации. Приготовьтесь переопределить способ инвестирования и открывать двери в мир возможностей."
                : lang === "fr"
                  ? "Investissez avec LNBG London Coin dès aujourd'hui et faites partie d'un mouvement qui redéfinit l'avenir de la finance. Ensemble, nous pouvons ouvrir de nouveaux horizons, générer des revenus passifs et embrasser le potentiel illimité de la tokenisation. Préparez-vous à redéfinir votre façon d'investir et à ouvrir les portes à un monde d'opportunités."
                  : "Invierta con LNBG London Coin hoy y forme parte de un movimiento que está remodelando el futuro de las finanzas. Juntos, podemos desbloquear nuevos horizontes, generar ingresos pasivos y abrazar el potencial ilimitado de la tokenización. Prepárese para redefinir la forma en que invierte y abrir las puertas a un mundo de oportunidades."}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LaptopSection;
