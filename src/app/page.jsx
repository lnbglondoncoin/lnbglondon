import EarnFreeSection from "@/components/EarnFreeSection";
import EmpoweringSection from "@/components/EmpoweringSection";
import FiveCoinsSection from "@/components/FiveCoinsSection";
import GatewaySection from "@/components/GatewaySection";
import JoinUsSection from "@/components/JoinUsSection";
import LaptopSection from "@/components/LaptopSection";
import MainBanner from "@/components/MainBanner";

export default function Home() {
  return (
    <main className="flex flex-col">
      <MainBanner />
      <FiveCoinsSection />
      <GatewaySection />
      <EmpoweringSection />
      <LaptopSection />
      <JoinUsSection />
      <EarnFreeSection />
    </main>
  );
}
