import Image from "next/image";

const GatewaySection = () => {
  return (
    <section className="flex items-center justify-center px-5 py-10">
      <div className="grid min-h-screen w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-y-5 px-5">
          <span className="text-2xl tracking-widest text-primary">
            Invest in the Future of Finance
          </span>
          <span className="text-5xl font-bold leading-[3.5rem] text-white">
            Gateway to Defi Blockchain Solutions{" "}
            <span className="text-primary">.</span>
          </span>
          <span className="text-gray2">
            Lnbg Coin DeFi is a revolutionary decentralized application (dApp)
            browser designed to provide seamless access to the world of
            decentralized finance (DeFi) applications. Our platform serves as a
            gateway for users to explore and engage with a wide range of DeFi
            protocols and decentralized applications, empowering them to take
            control of their financial journey.
          </span>
          <span className="text-gray2">
            With Lnbg coin DeFi, you gain access to a diverse ecosystem of DeFi
            applications that offer exciting opportunities for lending,
            borrowing, yield farming, decentralized exchanges, and much more.
            Seamlessly navigate through a variety of DeFi platforms, all within
            a single, user-friendly interface. Our aim is to simplify the
            complex world of DeFi and make it accessible to users of all levels
            of expertise.
          </span>
        </div>
        <div className="flex w-full items-center justify-center">
          <Image
            src="/phone.png"
            width={500}
            height={540}
            alt="phone"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default GatewaySection;
