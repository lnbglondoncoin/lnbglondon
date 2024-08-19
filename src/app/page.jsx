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

export default function Home() {
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
