import DappSection from "@/components/sections/DappSection";
import EarnFreeSection from "@/components/sections/EarnFreeSection";
import EmpoweringSection from "@/components/sections/EmpoweringSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import FiveCoinsSection from "@/components/sections/FiveCoinsSection";
import GatewaySection from "@/components/sections/GatewaySection";
import JoinUsSection from "@/components/sections/JoinUsSection";
import LaptopSection from "@/components/sections/LaptopSection";
import MainBanner from "@/components/sections/MainBanner";
import PartnersSection from "@/components/sections/PartnersSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import TokenomicsSection from "@/components/sections/TokenomicsSection";
import WhyInvestSection from "@/components/sections/WhyInvestSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <MainBanner />
      <FeaturedSection />
      {/* <FiveCoinsSection /> */}
      <GatewaySection />
      {/* <EmpoweringSection /> */}
      <WhyInvestSection />
      <DappSection />
      <LaptopSection />
      {/* <PartnersSection /> */}
      {/* <JoinUsSection /> */}
      <RoadmapSection />
      <TokenomicsSection />
      <EarnFreeSection />
    </main>
  );
}
