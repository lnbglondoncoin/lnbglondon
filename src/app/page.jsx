import MainBanner from "@/components/MainBanner";
import Bubbles from "@/components/Particles";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <MainBanner />
      <Bubbles />
    </main>
  );
}
