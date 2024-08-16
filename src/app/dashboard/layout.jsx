import Sidebar from "./_components/Sidebar";
import { cn } from "@/lib/utils";
import { Rajdhani } from "next/font/google";

const font = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function layout({ children }) {
  return (
    <div className={cn("flex flex-col bg-coal lg:flex-row", font.className)}>
      <Sidebar />
      {children}
    </div>
  );
}
