import EmpoweringSection from "@/components/EmpoweringSection";
import FiveCoinsSection from "@/components/FiveCoinsSection";
import GatewaySection from "@/components/GatewaySection";
import MainBanner from "@/components/MainBanner";

export default function Home() {
  return (
    <main className="flex flex-col">
      <MainBanner />
      <FiveCoinsSection />
      <GatewaySection />
      <EmpoweringSection />
    </main>
  );
}
