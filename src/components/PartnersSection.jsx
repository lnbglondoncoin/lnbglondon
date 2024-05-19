import Image from "next/image";

const PartnersSection = () => {
  return (
    <div className="flex items-center justify-center px-5 py-10">
      <div className="flex w-full max-w-7xl items-center justify-center gap-x-10 px-5">
        <div className="text-darkgray hover:text-primary">{arrowLeft}</div>
        <div className="flex flex-wrap items-center justify-center gap-x-10">
          <div className="">
            <Image
              src="/clients/client1.png"
              width={160}
              height={50}
              alt="client1"
            />
          </div>
          <div className="">
            <Image
              src="/clients/client2.png"
              width={160}
              height={50}
              alt="client1"
            />
          </div>
          <div className="">
            <Image
              src="/clients/client3.png"
              width={160}
              height={50}
              alt="client1"
            />
          </div>
          <div className="">
            <Image
              src="/clients/client4.png"
              width={160}
              height={50}
              alt="client1"
            />
          </div>
          <div className="">
            <Image
              src="/clients/client5.png"
              width={160}
              height={50}
              alt="client1"
            />
          </div>
        </div>
        <div className="rotate-180 text-darkgray hover:text-primary">
          {arrowLeft}
        </div>
      </div>
    </div>
  );
};

const arrowLeft = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 368 398"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.2479 190.474L168.469 96.278C168.571 96.174 168.774 96.074 168.977 95.972L331.692 1.97798C336.36 -0.66402 342.452 0.962979 345.092 5.63198C347.02 8.98198 346.817 12.94 344.785 15.986L223.996 199L344.785 382.016C347.83 386.585 346.512 392.674 341.945 395.72C338.695 397.85 334.636 397.748 331.488 395.923L168.468 301.724L5.2479 207.525C2.1019 205.7 0.274902 202.451 0.274902 199V198.898V198.796V198.694V198.593V198.491L0.372902 198.389V198.288V198.186V198.084V197.982V197.878V197.78V197.576V197.471H0.477898V197.373V197.269V197.171V197.066V196.968L0.575897 196.864V196.766V196.661V196.563V196.459H0.679901V196.361V196.256V196.155H0.7799V196.051V195.949V195.848H0.883904V195.746V195.644V195.542H0.985901V195.441V195.339L1.0879 195.237V195.135V195.034L1.1899 194.932V194.83L1.2919 194.728L1.3939 194.627V194.525V194.423H1.4959V194.321V194.22L1.5979 194.114C2.5059 192.502 3.7229 191.286 5.2479 190.474ZM254.447 208.949L254.142 208.544L253.939 208.135V208.034L253.834 207.93V207.828L253.734 207.727V207.625L253.632 207.523V207.421L253.53 207.32C252.413 204.785 251.805 202.144 251.704 199.503V199.199V199V198.797V198.695V198.391V198.29V198.188C251.806 195.851 252.311 193.62 253.225 191.488V191.386L253.327 191.183L253.429 190.981L253.531 190.675L253.633 190.573V190.471C254.143 189.556 254.649 188.646 255.156 187.832L331.59 72.014C337.58 62.979 349.76 60.441 358.793 66.43C367.93 72.421 370.467 84.601 364.481 93.633L294.945 199L364.48 304.363C370.466 313.397 367.929 325.577 358.792 331.566C349.759 337.557 337.579 335.018 331.589 325.982L258.101 214.63L255.257 210.267L255.155 210.165C254.953 209.762 254.648 209.354 254.447 208.949Z"
      fill="currentColor"
    />
  </svg>
);

export default PartnersSection;
