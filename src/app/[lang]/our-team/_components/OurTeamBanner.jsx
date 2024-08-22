import { Vortex } from "@/components/ui/vortex";
import Link from "next/link";

const OurTeamBanner = ({ lang = "en" }) => {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-[url(/static/bgs/bg-2.png)] bg-contain bg-center bg-no-repeat py-[120px] 2xl:bg-cover">
      <Vortex
        backgroundColor="transparent"
        containerClassName="h-full w-full max-w-screen"
        rangeY={800}
        particleCount={700}
        baseHue={50}
        className="flex h-full w-full items-center justify-center pb-10 pt-[120px]"
      >
        <div className="z-10 flex w-full max-w-7xl flex-col items-center gap-10 px-5 text-center">
          <span className="text-xl tracking-[0.2em] text-primary sm:text-2xl">
            {lang === "en"
              ? "LNBG LONDON TEAM"
              : lang === "ru"
                ? "КОМАНДА LNBG LONDON"
                : lang === "fr"
                  ? "ÉQUIPE LNBG LONDON"
                  : "EQUIPO LNBG LONDON"}
          </span>
          <div className="bg-gradient-to-r from-primary via-white to-white bg-clip-text text-4xl text-transparent sm:text-6xl">
            {lang === "en"
              ? "Our professionals"
              : lang === "ru"
                ? "Наши профессионалы"
                : lang === "fr"
                  ? "Nos professionnels"
                  : "Nuestros profesionales"}
            <span className="text-primary">.</span>
          </div>
          <span className="max-w-4xl text-2xl text-lightgray">
            {lang === "en"
              ? "Meet who is shaping the way People invest their money and Companies raise capital. We are democratizing investing opportunities that, previously, only Venture Capital and Private Equity funds were able to get."
              : lang === "ru"
                ? "Познакомьтесь с теми, кто формирует способ, которым люди инвестируют свои деньги, и компании привлекают капитал. Мы демократизируем возможности для инвестирования, которые ранее могли получить только венчурные капитал и частные фонды."
                : lang === "fr"
                  ? "Rencontrez ceux qui façonnent la façon dont les gens investissent leur argent et les entreprises lèvent des capitaux. Nous démocratisons les opportunités d'investissement que, auparavant, seuls les fonds de capital-risque et de capital-investissement privés pouvaient obtenir."
                  : "Conozca a quienes están dando forma a la forma en que las personas invierten su dinero y las empresas recaudan capital. Estamos democratizando oportunidades de inversión que, anteriormente, solo los fondos de capital de riesgo y de capital privado podían obtener."}
          </span>
          <Link
            href="#professionals"
            className="rounded-full border-4 border-primary bg-transparent px-10 py-4 font-bold uppercase tracking-tighter text-primary transition-all duration-200 ease-in-out hover:bg-primary hover:text-white"
          >
            {lang === "en"
              ? "Meet our professionals"
              : lang === "ru"
                ? "Познакомьтесь с нашими профессионалами"
                : lang === "fr"
                  ? "Rencontrez nos professionnels"
                  : "Conozca a nuestros profesionales"}
          </Link>
        </div>
      </Vortex>
    </section>
  );
};

export default OurTeamBanner;
