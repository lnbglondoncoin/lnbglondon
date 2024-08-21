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
import { getLocation } from "@/utils/location";
import Image from "next/image";

export default async function Home({ params }) {
  const language = params.lang;
  console.log("Language", language);
  return (
    <main className="flex flex-col">
      <MainBanner />
      <FeaturedSection />
      <GatewaySection />
      <DappSection />
      <WhyInvestSection />
      <RoadmapSection />
      <TokenomicsSection />
      <LaptopSection />
      <EarnFreeSection />
      <FaqSection />
    </main>
  );
}
