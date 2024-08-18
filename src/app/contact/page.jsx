import { Vortex } from "@/components/ui/vortex";
import ContactBanner from "./_components/ContactBanner";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        containerClassName="h-full w-full max-w-screen"
        rangeY={800}
        particleCount={1200}
        baseHue={50}
        className="flex h-full w-full items-center justify-center pb-10 pt-[120px]"
      >
        <ContactBanner />
      </Vortex>
    </div>
  );
}
