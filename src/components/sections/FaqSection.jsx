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
import { motion } from "framer-motion";
import { leftToRightVariants, rightToLeftVariants } from "../variants";
import { Meteors } from "../ui/meteors";

export default function FaqSection({ lang = "en" }) {
  const router = useRouter();
  return (
    <section className="flex w-full items-center justify-center overflow-hidden px-2 py-20">
      <div className="flex w-full max-w-7xl flex-col gap-10">
        <motion.h1
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
          className="text-center text-6xl font-bold"
        >
          {lang === "en"
            ? "FAQ"
            : lang === "ru"
              ? "ЧАВО"
              : lang === "fr"
                ? "FAQ"
                : "Preguntas frecuentes"}
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:gap-10">
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftToRightVariants}
            className="order-2 flex flex-col gap-5 md:order-1"
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-1"
              >
                <AccordionTrigger>
                  {lang === "en"
                    ? "What is LNBG?"
                    : lang === "ru"
                      ? "Что такое LNBG?"
                      : lang === "fr"
                        ? "Qu'est-ce que LNBG?"
                        : "¿Qué es LNBG?"}
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  {lang === "en"
                    ? "LNBG is a secure AI-based yield aggregator platform on the LNBG blockchain for non-professional crypto investors. LNBG offers multiple investment vaults and strategies tailored to the user's needs."
                    : lang === "ru"
                      ? "LNBG - это безопасная платформа для агрегации доходности на базе ИИ на блокчейне LNBG для не профессиональных криптоинвесторов. LNBG предлагает несколько инвестиционных хранилищ и стратегий, адаптированных к потребностям пользователя."
                      : lang === "fr"
                        ? "LNBG est une plateforme d'agrégation de rendement basée sur l'IA sur la blockchain LNBG pour les investisseurs en crypto non professionnels. LNBG propose plusieurs coffres d'investissement et stratégies adaptés aux besoins de l'utilisateur."
                        : "LNBG es una plataforma segura de agregador de rendimiento basada en IA en la cadena de bloques LNBG para inversores de criptomonedas no profesionales. LNBG ofrece múltiples bóvedas de inversión y estrategias adaptadas a las necesidades del usuario."}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-2"
              >
                <AccordionTrigger>
                  {lang === "en"
                    ? "How do I buy a $LNBG token?"
                    : lang === "ru"
                      ? "Как купить токен $LNBG?"
                      : lang === "fr"
                        ? "Comment acheter un jeton $LNBG?"
                        : "¿Cómo compro un token $LNBG?"}
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  {lang === "en"
                    ? " You can buy $LNBG with cryptocurrency or by using a credit card. To purchase $LNBG, you need to connect a wallet that supports the LNBG blockchain, and then select your preferred payment method."
                    : lang === "ru"
                      ? "Вы можете купить $LNBG за криптовалюту или, используя кредитную карту. Для покупки $LNBG вам нужно подключить кошелек, поддерживающий блокчейн LNBG, а затем выбрать предпочтительный способ оплаты."
                      : lang === "fr"
                        ? "Vous pouvez acheter $LNBG avec de la cryptomonnaie ou en utilisant une carte de crédit. Pour acheter $LNBG, vous devez connecter un portefeuille qui prend en charge la blockchain LNBG, puis sélectionner votre mode de paiement préféré."
                        : "Puede comprar $LNBG con criptomoneda o utilizando una tarjeta de crédito. Para comprar $LNBG, debe conectar una billetera que admita la cadena de bloques LNBG y luego seleccionar su método de pago preferido."}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-3"
              >
                <AccordionTrigger>
                  {lang === "en"
                    ? "Is investing in LNBG secure?"
                    : lang === "ru"
                      ? "Безопасно ли инвестировать в LNBG?"
                      : lang === "fr"
                        ? "Investir dans LNBG est-il sûr?"
                        : "¿Es seguro invertir en LNBG?"}
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  {lang === "en"
                    ? "Yes, LNBG's team and code have been verified by external auditors. The LNBG team has successfully completed two KYC audits conducted by CertiK and Assure DeFi. Additionally, CertiK has audited LNBG's smart contracts. To ensure security and reliability, LNBG offers a bug bounty program with rewards of up to $25,000 for identifying vulnerabilities in their smart contracts and dApp."
                    : lang === "ru"
                      ? "Да, команда LNBG и код были проверены внешними аудиторами. Команда LNBG успешно прошла два KYC аудита, пров еденных CertiK и Assure DeFi. Кроме того, CertiK проверил смарт-контракты LNBG. Для обеспечения безопасности и надежности LNBG предлагает программу поощрения за нахождение уязвимостей в их смарт-контрактах и dApp с вознаграждением до $25 000."
                      : lang === "fr"
                        ? "Oui, l'équipe et le code de LNBG ont été vérifiés par des auditeurs externes. L'équipe LNBG a réussi deux audits KYC menés par CertiK et Assure DeFi. De plus, CertiK a audité les contrats intelligents de LNBG. Pour garantir la sécurité et la fiabilité, LNBG propose un programme de primes pour la découverte de vulnérabilités dans ses contrats intelligents et son dApp, avec des récompenses pouvant atteindre 25 000 $."
                        : "Sí, el equipo y el código de LNBG han sido verificados por auditores externos. El equipo de LNBG ha completado con éxito dos auditorías KYC realizadas por CertiK y Assure DeFi. Además, CertiK ha auditado los contratos inteligentes de LNBG. Para garantizar la seguridad y la fiabilidad, LNBG ofrece un programa de recompensas por errores con recompensas de hasta $25,000 por identificar vulnerabilidades en sus contratos inteligentes y dApp."}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-5"
              >
                <AccordionTrigger>
                  {lang === "en"
                    ? "What is LNBG listing price?"
                    : lang === "ru"
                      ? "Какая цена листинга LNBG?"
                      : lang === "fr"
                        ? "Quel est le prix de référence de LNBG?"
                        : "¿Cuál es el precio de listado de LNBG?"}
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  {lang === "en"
                    ? "The listing price is $0.06 per LNBG"
                    : lang === "ru"
                      ? "Цена листинга составляет $0.06 за LNBG"
                      : lang === "fr"
                        ? "Le prix de référence est de 0,06 $ par LNBG"
                        : "El precio de listado es de $0.06 por LNBG"}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-6"
              >
                <AccordionTrigger>
                  {lang === "en"
                    ? "Where can I find my tokens?"
                    : lang === "ru"
                      ? "Где я могу найти свои токены?"
                      : lang === "fr"
                        ? "Où puis-je trouver mes jetons?"
                        : "¿Dónde puedo encontrar mis tokens?"}
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  {lang === "en"
                    ? "After purchasing tokens, you will be able to check your balance by connecting your wallet on the website: https://lnbglondon.com/. The tokens will appear in your wallet immediately after purchase."
                    : lang === "ru"
                      ? "После покупки токенов вы сможете проверить свой баланс, подключив свой кошелек на сайте: https://lnbglondon.com/. Токены появятся в вашем кошельке сразу после покупки."
                      : lang === "fr"
                        ? "Après l'achat de jetons, vous pourrez vérifier votre solde en connectant votre portefeuille sur le site Web : https://lnbglondon.com/. Les jetons apparaîtront dans votre portefeuille immédiatement après l'achat."
                        : "Después de comprar tokens, podrá verificar su saldo conectando su billetera en el sitio web: https://lnbglondon.com/. Los tokens aparecerán en su billetera inmediatamente después de la compra."}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-7"
              >
                <AccordionTrigger>
                  {lang === "en"
                    ? "When will the token be listed on exchanges?"
                    : lang === "ru"
                      ? "Когда токен будет добавлен на биржи?"
                      : lang === "fr"
                        ? "Quand le jeton sera-t-il listé sur les échanges?"
                        : "¿Cuándo se listará el token en los intercambios?"}
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  {lang === "en"
                    ? "The token will be listed on both centralized exchanges (CEXes) and decentralized exchanges (DEXes) following the Token Generation Event (TGE). The exact list of exchanges will be announced as the TGE date approaches."
                    : lang === "ru"
                      ? "Токен будет добавлен как на централизованные биржи (CEXes), так и на децентрализованные биржи (DEXes) после Token Generation Event (TGE). Точный список бирж будет объявлен по мере приближения даты TGE."
                      : lang === "fr"
                        ? "Le jeton sera listé sur les bourses centralisées (CEXes) et décentralisées (DEXes) après l'événement de génération de jetons (TGE). La liste exacte des bourses sera annoncée à l'approche de la date du TGE."
                        : "El token se listará tanto en intercambios centralizados (CEXes) como en intercambios descentralizados (DEXes) tras el Token Generation Event (TGE). La lista exacta de intercambios se anunciará a medida que se acerque la fecha del TGE."}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-8"
              >
                <AccordionTrigger>
                  {lang === "en"
                    ? "When will LNBG launch?"
                    : lang === "ru"
                      ? "Когда запустится LNBG?"
                      : lang === "fr"
                        ? "Quand LNBG sera-t-il lancé?"
                        : "¿Cuándo se lanzará LNBG?"}
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  {lang === "en"
                    ? "The development of the LNBG earning marketplace is currently underway, with the initial release scheduled for Q2 of 2024. Stay updated by following our Twitter, Discord or Telegram to stay tuned, and sign up for the waitlist on this page to be among the first to use LNBG."
                    : lang === "ru"
                      ? "В настоящее время ведется разработка рынка заработка LNBG, с начальным релизом, запланированным на 2 квартал 2024 года. Следите за обновлениями, подписавшись на наш Twitter, Discord или Telegram, и зарегистрируйтесь в списке ожидания на этой странице, чтобы быть одним из первых пользователей LNBG."
                      : lang === "fr"
                        ? "Le développement du marché de gain LNBG est actuellement en cours, avec une première version prévue pour le deuxième trimestre 2024. Restez informé en suivant notre Twitter, Discord ou Telegram pour rester informé, et inscrivez-vous sur la liste d'attente sur cette page pour être parmi les premiers à utiliser LNBG."
                        : "El desarrollo del mercado de ganancias de LNBG está en marcha, con el lanzamiento inicial programado para el segundo trimestre de 2024. Manténgase actualizado siguiendo nuestro Twitter, Discord o Telegram para estar informado, y regístrese en la lista de espera en esta página para ser uno de los primeros en usar LNBG."}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button
              title={
                lang === "en"
                  ? "More FAQs"
                  : lang === "ru"
                    ? "Больше ЧАВО"
                    : lang === "fr"
                      ? "Plus de FAQ"
                      : "Más preguntas frecuentes"
              }
              onClick={() =>
                router.push(
                  "https://lnbg-london.gitbook.io/lnbg-london/information/faqs",
                )
              }
              className="w-fit font-sans"
            />
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={rightToLeftVariants}
            className="relative order-1 flex w-full flex-col overflow-hidden md:order-2 md:pb-[70px]"
          >
            <Image
              src="/static/robot-2.png"
              className="static z-10 w-[250px] scale-x-[-1] self-end justify-self-center md:w-[400px] md:justify-self-end"
              width={400}
              height={500}
              alt="robot"
            />
            <Meteors className="bg-red-200" number={20} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
