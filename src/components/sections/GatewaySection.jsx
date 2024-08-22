"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { leftToRightVariants, rightToLeftVariants } from "../variants";

const GatewaySection = ({ lang = "en" }) => {
  return (
    <section
      className="flex max-w-[100vw] items-center justify-center overflow-hidden px-5 py-20"
      id="aboutus"
    >
      <motion.div
        initial="hide"
        whileInView="show"
        exit="show"
        variants={leftToRightVariants}
        className="grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2"
      >
        <div className="flex flex-col justify-center gap-y-5 px-5">
          <span className="text-2xl tracking-widest text-primary">
            {lang === "en"
              ? "Invest in the Future of Finance"
              : lang === "ru"
                ? "Инвестируйте в будущее финансов"
                : lang === "fr"
                  ? "Investissez dans l'avenir de la finance"
                  : "Invierta en el futuro de las finanzas"}
          </span>
          <span className="text-4xl font-bold text-white sm:text-5xl">
            {lang === "en"
              ? "Gateway to Defi Blockchain Solutions"
              : lang === "ru"
                ? "Шлюз к решениям Defi Blockchain"
                : lang === "fr"
                  ? "Passerelle vers les solutions Defi Blockchain"
                  : "Puerta de enlace a las soluciones de la cadena de bloques Defi"}{" "}
            <span className="text-primary">.</span>
          </span>
          <span className="font-sans text-lg text-gray2">
            {lang === "en"
              ? "LNBG Coin DeFi is a revolutionary decentralized application (dApp) browser designed to provide seamless access to the world of decentralized finance (DeFi) applications. Our platform serves as a gateway for users to explore and engage with a wide range of DeFi protocols and decentralized applications, empowering them to take control of their financial journey."
              : lang === "ru"
                ? "LNBG Coin DeFi - это революционный браузер децентрализованных приложений (dApp), разработанный для обеспечения безупречного доступа к миру децентрализованных финансовых (DeFi) приложений. Наша платформа служит шлюзом для пользователей, позволяя им исследовать и взаимодействовать с широким спектром протоколов DeFi и децентрализованных приложений, давая им возможность контролировать свой финансовый путь."
                : lang === "fr"
                  ? "LNBG Coin DeFi est un navigateur d'application décentralisée (dApp) révolutionnaire conçu pour offrir un accès transparent au monde des applications de finance décentralisée (DeFi). Notre plateforme sert de passerelle aux utilisateurs pour explorer et interagir avec un large éventail de protocoles DeFi et d'applications décentralisées, leur permettant de prendre le contrôle de leur parcours financier."
                  : "LNBG Coin DeFi es un revolucionario navegador de aplicaciones descentralizadas (dApp) diseñado para proporcionar un acceso sin problemas al mundo de las aplicaciones de finanzas descentralizadas (DeFi). Nuestra plataforma sirve como puerta de enlace para que los usuarios exploren y se relacionen con una amplia gama de protocolos DeFi y aplicaciones descentralizadas, capacitándolos para tomar el control de su viaje financiero."}
          </span>
          <span className="font-sans text-lg text-gray2">
            {lang === "en"
              ? "With LNBG coin DeFi, you gain access to a diverse ecosystem of DeFi applications that offer exciting opportunities for lending, borrowing, yield farming, decentralized exchanges, and much more. Seamlessly navigate through a variety of DeFi platforms, all within a single, user-friendly interface. Our aim is to simplify the complex world of DeFi and make it accessible to users of all levels of expertise."
              : lang === "ru"
                ? "С LNBG coin DeFi вы получаете доступ к разнообразной экосистеме DeFi-приложений, предлагающих захватывающие возможности для кредитования, заимствования, фермерства доходов, децентрализованных бирж и многого другого. Без проблем перемещайтесь по различным платформам DeFi, все в рамках одного удобного интерфейса. Наша цель - упростить сложный мир DeFi и сделать его доступным для пользователей всех уровней экспертизы."
                : lang === "fr"
                  ? "Avec LNBG coin DeFi, vous avez accès à une écosystème diversifié d'applications DeFi qui offrent des opportunités passionnantes pour le prêt, l'emprunt, le farming de rendement, les échanges décentralisés et bien plus encore. Naviguez sans effort à travers une variété de plateformes DeFi, le tout dans une interface unique et conviviale. Notre objectif est de simplifier le monde complexe de la DeFi et de le rendre accessible aux utilisateurs de tous niveaux d'expertise."
                  : "Con LNBG coin DeFi, obtiene acceso a un ecosistema diverso de aplicaciones DeFi que ofrecen emocionantes oportunidades para préstamos, endeudamiento, agricultura de rendimiento, intercambios descentralizados y mucho más. Navegue sin problemas a través de una variedad de plataformas DeFi, todo dentro de una única interfaz fácil de usar. Nuestro objetivo es simplificar el complejo mundo de DeFi y hacerlo accesible a usuarios de todos los niveles de experiencia."}
          </span>
        </div>
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
      </motion.div>
    </section>
  );
};

export default GatewaySection;
