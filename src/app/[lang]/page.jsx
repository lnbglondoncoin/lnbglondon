import DappSection from "@/components/sections/DappSection";
import EarnFreeSection from "@/components/sections/EarnFreeSection";
import FaqSection from "@/components/sections/FaqSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import GatewaySection from "@/components/sections/GatewaySection";
import LaptopSection from "@/components/sections/LaptopSection";
import MainBanner from "@/components/sections/MainBanner";
import RoadmapSection from "@/components/sections/RoadmapSection";
import TokenomicsSection from "@/components/sections/TokenomicsSection";
import WhyInvestSection from "@/components/sections/WhyInvestSection";

export default async function Home({ params }) {
  const lang = params.lang;
  return (
    <main className="flex flex-col">
      <MainBanner lang={lang} />
      <FeaturedSection lang={lang} />
      <GatewaySection lang={lang} />
      <DappSection lang={lang} />
      <WhyInvestSection lang={lang} />
      <RoadmapSection lang={lang} />
      <TokenomicsSection lang={lang} />
      <LaptopSection lang={lang} />
      <EarnFreeSection lang={lang} />
      <FaqSection lang={lang} />
    </main>
  );
}
