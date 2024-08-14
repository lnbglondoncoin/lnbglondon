import { Comfortaa, Unbounded } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import MovingBar from "@/components/moving-bar/MovingBar";

const comfortaa = Comfortaa({ subsets: ["latin"] });
const unbounded = Unbounded({ subsets: ["latin"] });

export const metadata = {
  title: "LNBG London Coin - Initial Coin Offering",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[url('/bgs/body-bg.png')] ${unbounded.className}`}>
        <MovingBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
