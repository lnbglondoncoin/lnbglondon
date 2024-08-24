"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  leftToRightVariants,
  rightToLeftVariants,
} from "@/components/variants";
import { Meteors } from "@/components/ui/meteors";

export default function BuySellFaqSection({ lang = "en" }) {
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
                    ? "How much does LNBG charge in fees?"
                    : lang === "ru"
                      ? "Сколько берет LNBG за комиссии?"
                      : lang === "fr"
                        ? "Combien facture LNBG en frais?"
                        : "¿Cuánto cobra LNBG en comisiones?"}
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  {lang === "en"
                    ? "The fees we charge depend primarily on the payment or payout method you choose, and on the blockchain validation/mining costs at the time of the transaction."
                    : lang === "ru"
                      ? "Размер комиссий, которые мы взимаем, в первую очередь зависит от выбранного вами способа оплаты или выплаты, а также от затрат на валидацию/майнинг блокчейна на момент совершения транзакции."
                      : lang === "fr"
                        ? "Les frais que nous facturons dépendent principalement de la méthode de paiement ou de paiement que vous choisissez, et des coûts de validation/minage de la blockchain au moment de la transaction."
                        : "Las comisiones que cobramos dependen principalmente del método de pago o pago que elija, y de los costos de validación/minería de la cadena de bloques en el momento de la transacción."}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-2"
              >
                <AccordionTrigger>
                  {lang === "en"
                    ? "Which countries and states does LNBG support?"
                    : lang === "ru"
                      ? "Какие страны и штаты поддерживает LNBG?"
                      : lang === "fr"
                        ? "Quels pays et états LNBG prend-il en charge?"
                        : "¿Qué países y estados admite LNBG?"}
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  {lang === "en"
                    ? "LNBG is available in 150+ countries and territories and in 35 US states (plus the District of Columbia)."
                    : lang === "ru"
                      ? "LNBG доступен в 150+ странах и территориях и в 35 штатах США (плюс округ Колумбия)."
                      : lang === "fr"
                        ? "LNBG est disponible dans 150+ pays et territoires et dans 35 états américains (plus le district de Columbia)."
                        : "LNBG está disponible en 150+ países y territorios y en 35 estados de EE. UU. (más el Distrito de Columbia)."}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-3"
              >
                <AccordionTrigger>
                  {lang === "en"
                    ? "How long does verification take?"
                    : lang === "ru"
                      ? "Сколько времени занимает верификация?"
                      : lang === "fr"
                        ? "Combien de temps prend la vérification?"
                        : "¿Cuánto tiempo tarda la verificación?"}
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  {lang === "en"
                    ? "The KYC verification process usually takes less than 10 minutes although in some cases it can take up to the following business day. The time frame to complete KYC verification may vary depending on the validity and completeness of your documentation and the number of requests being submitted."
                    : lang === "ru"
                      ? "Процесс верификации KYC обычно занимает менее 10 минут, хотя в некоторых случаях может занять до следующего рабочего дня. Сроки завершения верификации KYC могут варьироваться в зависимости от достоверности и полноты ваших документов и количества подаваемых запросов."
                      : lang === "fr"
                        ? "Le processus de vérification KYC prend généralement moins de 10 minutes, bien que dans certains cas, il puisse prendre jusqu'au jour ouvrable suivant. Le délai de complétion de la vérification KYC peut varier en fonction de la validité et de l'exhaustivité de votre documentation et du nombre de demandes soumises."
                        : "El proceso de verificación KYC suele tardar menos de 10 minutos, aunque en algunos casos puede tardar hasta el siguiente día hábil. El plazo para completar la verificación KYC puede variar según la validez y la completitud de su documentación y la cantidad de solicitudes que se presenten."}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-4"
              >
                <AccordionTrigger>
                  {lang === "en"
                    ? "How long does it take to buy crypto?"
                    : lang === "ru"
                      ? "Когда TGE?"
                      : lang === "fr"
                        ? "Quand est le TGE?"
                        : "¿Cuándo es el TGE?"}
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  {lang === "en"
                    ? "The time it takes to receive crypto in your wallet once you initiate a purchase depends on the following factors: how long you take to make your payment, the payment method you choose, and the blockchain transaction processing time of your cryptoasset."
                    : lang === "ru"
                      ? "Время, необходимое для получения криптовалюты на ваш кошелек после инициирования покупки, зависит от следующих факторов: как долго вы делаете платеж, выбранный вами способ оплаты и время обработки транзакции блокчейна вашего криптоактива."
                      : lang === "fr"
                        ? "Le temps nécessaire pour recevoir des crypto-monnaies dans votre portefeuille une fois que vous avez initié un achat dépend des facteurs suivants: le temps que vous mettez à effectuer votre paiement, la méthode de paiement que vous choisissez et le temps de traitement de la transaction de la blockchain de votre cryptoactif."
                        : "El tiempo que tarda en recibir criptomonedas en su billetera una vez que inicia una compra depende de los siguientes factores: cuánto tiempo tarda en realizar su pago, el método de pago que elija y el tiempo de procesamiento de la transacción de la cadena de bloques de su criptoactivo."}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="border border-white/20 px-8 py-4 hover:border-primary"
                value="item-5"
              >
                <AccordionTrigger>
                  {lang === "en"
                    ? "How long does it take to sell crypto?"
                    : lang === "ru"
                      ? "Сколько стоит листинг?"
                      : lang === "fr"
                        ? "Combien coûte le référencement?"
                        : "¿Cuánto cuesta la lista?"}
                </AccordionTrigger>
                <AccordionContent className="font-light text-gray2">
                  {lang === "en"
                    ? "The total time it takes to sell crypto once you initiate a sale depends on the following factors: how long you take to transfer your crypto, how long until your transfer is processed and confirmed by the blockchain."
                    : lang === "ru"
                      ? "Цена листинга составляет $0.06 за LNBG"
                      : lang === "fr"
                        ? "Le coût du référencement est de 0,06 $ par LNBG"
                        : "El costo de la lista es de $0.06 por LNBG"}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
