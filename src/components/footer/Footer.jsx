import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center overflow-hidden bg-ash bg-cover bg-center pt-10">
      <div className="relative flex w-full max-w-7xl flex-col gap-10">
        <h1 className="absolute bottom-0 text-[24vw] font-bold leading-[220px] text-coal sm:-right-20">
          LNBG
        </h1>
        <div className="static z-10 grid grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-x-3">
              <Image
                src="/logo.png"
                width={40}
                height={40}
                alt="logo"
                quality={100}
              />
              <span className="font-sans text-2xl font-black md:text-3xl">
                LNBG COIN
              </span>
            </div>
            <span className="font-sans text-sm text-gray2">
              Discover the future of decentralized funding with Lnbg Coin.
              Harness the power of blockchain technology, unlock new investment
              opportunities, and generate passive revenue.
            </span>
            <div className="flex gap-5">
              <Link className="hover:text-primary" href="/">
                {twitterIcon}
              </Link>
              <Link className="hover:text-primary" href="/">
                {globeIcon}
              </Link>
              <Link className="hover:text-primary" href="/">
                {linkedInIcon}
              </Link>
              <Link className="hover:text-primary" href="/">
                {facebookIcon}
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 py-5 lg:items-center">
            <h1 className="mb-1">COMPANY</h1>
            <Link
              href="/"
              className="font-sans text-sm text-gray2 hover:text-primary"
            >
              About us
            </Link>
            <Link
              href="/"
              className="font-sans text-sm text-gray2 hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/"
              className="font-sans text-sm text-gray2 hover:text-primary"
            >
              Careers
            </Link>
            <Link
              href="/"
              className="font-sans text-sm text-gray2 hover:text-primary"
            >
              Teams
            </Link>
          </div>
          <div className="flex flex-col gap-3 py-5 lg:items-center">
            <h1 className="mb-1">RESOURCES</h1>
            <Link
              href="/whitepaper.pdf"
              className="font-sans text-sm text-gray2 hover:text-primary"
            >
              Whitepaper
            </Link>
            <Link
              href="/"
              className="font-sans text-sm text-gray2 hover:text-primary"
            >
              Lightpaper
            </Link>
            <Link
              href="/"
              className="font-sans text-sm text-gray2 hover:text-primary"
            >
              Github
            </Link>
            <Link
              href="/"
              className="font-sans text-sm text-gray2 hover:text-primary"
            >
              Roadmap
            </Link>
            <Link
              href="https://lnbg-london.gitbook.io/lnbg-london"
              className="font-sans text-sm text-gray2 hover:text-primary"
            >
              Documentation
            </Link>
          </div>
          <div className="flex flex-col gap-3 py-5 lg:items-center">
            <h1 className="mb-1">COMMUNITY</h1>
            <Link
              href="https://lnbg-london.gitbook.io/lnbg-london/usdlnbg-coin/markdown"
              className="font-sans text-sm text-gray2 hover:text-primary"
            >
              Roles
            </Link>
            <Link
              href="https://lnbg-london.gitbook.io/lnbg-london/getting-started/publish-your-docs"
              className="font-sans text-sm text-gray2 hover:text-primary"
            >
              Ecosystem
            </Link>
            <Link
              href="https://lnbg-london.gitbook.io/lnbg-london/information/faqs"
              className="font-sans text-sm text-gray2 hover:text-primary"
            >
              FAQs
            </Link>
          </div>
        </div>
        <div className="static z-10 flex w-full flex-col items-center justify-center gap-2 py-5 font-sans text-sm text-white/40">
          Copyright © All right reserved 2024.
        </div>
      </div>
    </footer>
  );
};

const twitterIcon = (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.3438 3.75C14.9688 3.28125 15.5312 2.71875 15.9688 2.0625C15.4062 2.3125 14.75 2.5 14.0938 2.5625C14.7812 2.15625 15.2812 1.53125 15.5312 0.75C14.9062 1.125 14.1875 1.40625 13.4688 1.5625C12.8438 0.90625 12 0.53125 11.0625 0.53125C9.25 0.53125 7.78125 2 7.78125 3.8125C7.78125 4.0625 7.8125 4.3125 7.875 4.5625C5.15625 4.40625 2.71875 3.09375 1.09375 1.125C0.8125 1.59375 0.65625 2.15625 0.65625 2.78125C0.65625 3.90625 1.21875 4.90625 2.125 5.5C1.59375 5.46875 1.0625 5.34375 0.625 5.09375V5.125C0.625 6.71875 1.75 8.03125 3.25 8.34375C3 8.40625 2.6875 8.46875 2.40625 8.46875C2.1875 8.46875 2 8.4375 1.78125 8.40625C2.1875 9.71875 3.40625 10.6562 4.84375 10.6875C3.71875 11.5625 2.3125 12.0938 0.78125 12.0938C0.5 12.0938 0.25 12.0625 0 12.0312C1.4375 12.9688 3.15625 13.5 5.03125 13.5C11.0625 13.5 14.3438 8.53125 14.3438 4.1875C14.3438 4.03125 14.3438 3.90625 14.3438 3.75Z"
      fill="currentColor"
    />
  </svg>
);

const facebookIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.75 8C15.75 3.71875 12.2812 0.25 8 0.25C3.71875 0.25 0.25 3.71875 0.25 8C0.25 11.875 3.0625 15.0938 6.78125 15.6562V10.25H4.8125V8H6.78125V6.3125C6.78125 4.375 7.9375 3.28125 9.6875 3.28125C10.5625 3.28125 11.4375 3.4375 11.4375 3.4375V5.34375H10.4688C9.5 5.34375 9.1875 5.9375 9.1875 6.5625V8H11.3438L11 10.25H9.1875V15.6562C12.9062 15.0938 15.75 11.875 15.75 8Z"
      fill="currentColor"
    />
  </svg>
);

const linkedInIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 800 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M186.219 257.368H25.6181C18.4903 257.368 12.7148 263.146 12.7148 270.271V786.214C12.7148 793.342 18.4903 799.117 25.6181 799.117H186.219C193.347 799.117 199.123 793.342 199.123 786.214V270.271C199.123 263.146 193.347 257.368 186.219 257.368Z"
      fill="currentColor"
    />
    <path
      d="M105.977 0.879883C47.5407 0.879883 0 48.3689 0 106.741C0 165.138 47.5407 212.645 105.977 212.645C164.366 212.645 211.868 165.135 211.868 106.741C211.871 48.3689 164.366 0.879883 105.977 0.879883Z"
      fill="currentColor"
    />
    <path
      d="M594.72 244.544C530.217 244.544 482.534 272.273 453.613 303.781V270.271C453.613 263.146 447.837 257.368 440.71 257.368H286.906C279.778 257.368 274.003 263.146 274.003 270.271V786.214C274.003 793.342 279.778 799.117 286.906 799.117H447.156C454.284 799.117 460.059 793.342 460.059 786.214V530.942C460.059 444.921 483.425 411.409 543.388 411.409C608.694 411.409 613.884 465.133 613.884 535.368V786.217C613.884 793.344 619.659 799.12 626.787 799.12H787.097C794.225 799.12 800 793.344 800 786.217V503.213C800 375.303 775.61 244.544 594.72 244.544Z"
      fill="currentColor"
    />
  </svg>
);

const globeIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 664 668"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M439.478 457.349L436.351 476.075C415.826 589.65 372.836 667.333 332 667.333C291.164 667.333 248.174 589.65 227.649 476.075L224.522 457.349C220.352 430.206 217.456 401.264 216.138 371.038H447.862C446.544 401.264 443.648 430.206 439.478 457.349ZM449.944 645.866C487.037 579.592 510.35 481.503 514.622 371.038L663.299 371.039C649.333 497.366 564.774 602.416 449.944 645.866ZM214.058 645.862C99.2256 602.415 14.6666 497.365 0.701174 371.039L149.378 371.038C153.65 481.503 176.963 579.592 214.058 645.862ZM214.054 22.1343C176.962 88.4088 153.649 186.498 149.378 296.963L0.701172 296.961C14.6665 170.635 99.2253 65.5847 214.054 22.1343ZM332 0.666504C372.836 0.666504 415.826 78.35 436.351 191.925L439.478 210.651C443.648 237.794 446.544 266.737 447.862 296.962H216.138C217.456 266.737 220.352 237.794 224.522 210.651L227.649 191.925C247.969 79.4858 290.306 2.22376 330.774 0.689767L332 0.666504ZM449.945 22.1343C564.774 65.5847 649.333 170.635 663.299 296.961L514.622 296.963C510.368 186.946 487.226 89.2049 450.393 22.9461L449.945 22.1343Z"
      fill="currentColor"
    />
  </svg>
);

export default Footer;
