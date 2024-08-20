import { Unbounded } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/Store/Store";
import { Web3Modal } from "@/context/Web3Modal";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MovingBar from "@/components/moving-bar/MovingBar";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import PreloaderProvider from "./PreloaderProvider";

const unbounded = Unbounded({ subsets: ["latin"] });

export const metadata = {
  title: "LNBG London Coin - Secure & Innovative Cryptocurrency",
  description:
    "LNBG London Coin is a secure and innovative cryptocurrency inspired by London's financial heritage. Explore decentralized digital finance with our trusted and efficient platform.",
  image: "/logo.png",
  author: "LNBG London Coin Team",
  keywords: [
    "LNBG",
    "London Coin",
    "Cryptocurrency",
    "Blockchain",
    "Digital Currency",
    "London Crypto",
    "Decentralized Finance",
    "Secure Coin",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-coal ${unbounded.className}`}>
        <Web3Modal>
          <PreloaderProvider>
            <StoreProvider>
              <ToastContainer />
              <MovingBar />
              <Header />
              {children}
              <Footer />
            </StoreProvider>
          </PreloaderProvider>
        </Web3Modal>
      </body>
    </html>
  );
}
