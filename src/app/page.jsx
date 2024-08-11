import EarnFreeSection from "@/components/sections/EarnFreeSection";
import EmpoweringSection from "@/components/sections/EmpoweringSection";
import FiveCoinsSection from "@/components/sections/FiveCoinsSection";
import GatewaySection from "@/components/sections/GatewaySection";
import JoinUsSection from "@/components/sections/JoinUsSection";
import LaptopSection from "@/components/sections/LaptopSection";
import MainBanner from "@/components/sections/MainBanner";
import PartnersSection from "@/components/sections/PartnersSection";
import RoadmapSection from "@/components/sections/RoadmapSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <MainBanner />
      <FiveCoinsSection />
      <GatewaySection />
      <EmpoweringSection />
      <LaptopSection />
      <PartnersSection />
      <JoinUsSection />
      <RoadmapSection />
      <EarnFreeSection />
    </main>
  );
}
