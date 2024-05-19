import CountdownTimer from "./CountdownTimer";
import ProgressBar from "./ProgressBar";

const JoinUsSection = () => {
  return (
    <section className="flex items-center justify-center px-5 pt-20">
      <div className="w-full max-w-7xl border-t border-darkgray pt-20">
        <div className="grid w-full grid-cols-1 gap-10 bg-[url('/bgs/clock.svg')] bg-contain bg-center bg-no-repeat py-20 lg:grid-cols-2 px-3 sm:px-7">
          <div className="flex flex-col gap-y-10">
            <div className="flex gap-x-1 px-1">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div className="h-2 w-2 rounded-full bg-primary"></div>
            </div>
            <h1 className="text-5xl leading-[3.5rem] tracking-tighter sm:text-6xl sm:leading-[4.5rem]">
              Join us on this exciting journey{" "}
              <span className="text-primary">!</span>
            </h1>
            <span className="text-gray2">
              In today's rapidly evolving financial landscape, Lnbg Coin emerges
              as a trailblazer, offering a gateway to decentralized funding and
              a world of untapped potential. Our mission is to revolutionize the
              way asset owners raise funds globally, harnessing the
              transformative capabilities of blockchain technology.
            </span>
            <span className="text-gray2">
              Lnbg Coin aligns perfectly with the principles of decentralized
              finance (DeFi), a paradigm that seeks to democratize financial
              services and make them accessible to everyone. Our platform
              embraces the tenets of transparency, security, and efficiency,
              providing individuals and businesses with a seamless experience in
              navigating the decentralized funding landscape.
            </span>
            <span className="text-gray2">
              Invest in Lnbg Coin today and become part of a global movement
              that is reshaping the future of funding. Unleash the power of
              tokenization, unlock new horizons of financial opportunity, and
              embark on a path towards a decentralized and prosperous future.
              The time is now to embrace the potential of decentralized funding
              with Lnbg London Coin.
            </span>
            <div className="flex gap-x-3">
              <div className="text-darkgray">{peopleIcon}</div>
              <div className="flex flex-col gap-y-1">
                <h1 className="text-3xl font-bold text-primary">
                  68000<span className="text-darkgray">+</span>
                </h1>
                <span className="text-xl tracking-tighter">
                  ICO Participants
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-10 rounded-lg bg-black/50 p-10">
            <span className="text-center text-2xl font-bold tracking-tighter text-white">
              Distribution <br /> Ends in:
            </span>
            <CountdownTimer />
            <button className="rounded-full border-4 border-green-600 bg-green-600 px-10 py-4 font-bold uppercase tracking-tighter transition-all duration-200 ease-in-out hover:bg-transparent hover:text-green-600">
              Buy LNBG Coin
            </button>
            <div className="mt-10 w-full">
              <ProgressBar />
            </div>
            <div className="flex h-full w-full items-end justify-between">
              <div className="flex flex-col">
                <span className="text-xs tracking-tighter text-gray2 sm:text-sm">
                  Token Price:
                </span>
                <span className="text-2xl font-bold text-lightgray sm:text-4xl">
                  $10.00
                </span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-xs tracking-tighter text-gray2 sm:text-sm">
                  LNBG Total Supply:
                </span>
                <span className="text-2xl font-bold text-lightgray sm:text-4xl">
                  10,000,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const peopleIcon = (
  <svg
    width="82"
    height="60"
    viewBox="0 0 82 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M78 33.102C77.1993 32.3012 76.3008 31.602 75.3008 31.0004C76.1016 29.6996 76.6016 28.1996 76.6016 26.602C76.6016 22.102 73 18.5004 68.5 18.5004H68.1993V17.8011C68.1993 15.1995 67.1993 12.6995 65.3009 10.9027C64.8009 10.4027 64.1993 9.90274 63.6017 9.50434C64.1017 8.6059 64.4024 7.60594 64.4024 6.50434C64.4024 3.20354 61.7032 0.504337 58.4024 0.504337C55.1016 0.504337 52.4024 3.20354 52.4024 6.50434C52.4024 7.60594 52.7032 8.60594 53.2032 9.50434C51.6016 10.5043 50.3048 11.9027 49.504 13.6059C47.504 11.1059 44.4024 9.40674 40.9024 9.40674C37.4024 9.40674 34.3008 11.0083 32.3008 13.6059C31.8008 12.6059 31.1992 11.6059 30.4024 10.8051C29.9024 10.3051 29.3008 9.80514 28.7032 9.40674C29.2032 8.5083 29.504 7.50834 29.504 6.40674C29.504 3.10594 26.8048 0.406738 23.504 0.406738C20.2032 0.406738 17.504 3.10594 17.504 6.40674C17.504 7.50834 17.8048 8.50834 18.3048 9.40674C15.504 11.2075 13.7032 14.3051 13.7032 17.7075V18.4068H13.4024C8.9024 18.4068 5.3008 22.0084 5.3008 26.5084C5.3008 28.11 5.8008 29.61 6.6016 30.9068C2.6016 33.399 0 37.8013 0 42.6018V53.4998C0 53.8005 0.19922 54.1013 0.39844 54.3005C0.59766 54.4021 0.79688 54.4998 1 54.4998C1.10156 54.4998 1.19922 54.4998 1.30078 54.3982C8.10158 52.0974 15.6018 51.7966 22.4028 53.4998V58.3982C22.4028 58.6989 22.602 58.9997 22.8012 59.1989C23.102 59.3982 23.4028 59.3982 23.6997 59.3005C29.1997 57.4021 35.0007 56.4997 40.8987 56.4997C46.7971 56.4997 52.5977 57.3981 58.0977 59.3005C58.1992 59.3005 58.2969 59.4021 58.3984 59.4021C58.5977 59.4021 58.7969 59.3005 59 59.2028C59.3008 59.0036 59.3984 58.7028 59.3984 58.4021V53.5037C66.1992 51.8045 73.6994 52.1053 80.5004 54.4021C80.602 54.4021 80.6997 54.5037 80.8012 54.5037C81.0004 54.5037 81.1997 54.4021 81.4028 54.3044C81.7036 54.1052 81.8012 53.8044 81.8012 53.5037V42.6017C82.0004 39.0001 80.6016 35.602 78 33.102ZM74.6016 26.602C74.6016 28.102 74.0001 29.5004 73 30.7036C71.8984 32.0044 70.1992 32.7036 68.5 32.7036C66.8008 32.7036 65.1016 32.0043 64 30.7036C63 29.602 62.3984 28.102 62.3984 26.602C62.3984 23.2036 65.0976 20.5004 68.5 20.5004C71.8984 20.5004 74.6016 23.1996 74.6016 26.602ZM54.1016 30.0004C52.9024 28.8012 51.5 27.6996 50 26.8988C50.1016 26.6995 50.3008 26.5003 50.3985 26.3988C53.0001 25.598 55.6993 25.098 58.5001 25.098C59.1993 25.098 59.8985 25.098 60.6017 25.1995C60.5001 25.6995 60.5001 26.098 60.5001 26.5979C60.5001 28.1995 61.0001 29.6995 61.8009 30.9963C60.1993 31.9963 58.6993 33.2971 57.6017 34.7971C56.6994 33.0002 55.6016 31.3989 54.1016 30.0004ZM58.5 2.50036C60.6992 2.50036 62.5 4.30116 62.5 6.50036C62.5 7.50036 62.1016 8.39876 61.5 9.19956C60.6993 10.0003 59.6992 10.5004 58.5 10.5004C57.3008 10.5004 56.3008 10.0004 55.5 9.19956C54.8008 8.50034 54.5 7.50036 54.5 6.50036C54.3985 4.30116 56.1992 2.50036 58.5 2.50036ZM54.6016 11.102C55.7032 12.0004 57.1016 12.5004 58.5 12.5004C59.8984 12.5004 61.3008 12.0004 62.3984 11.102C63 11.4027 63.5 11.8012 64 12.3012C65.5 13.8012 66.3008 15.6996 66.3008 17.8012V18.8012C64.1016 19.5004 62.1992 21.102 61.1992 23.1996C60.3008 23.098 59.3984 23.098 58.5 23.098C56.1016 23.098 53.8008 23.3988 51.5 23.9964C51.8985 22.8948 52.1016 21.7972 52.1016 20.598C52.1016 18.8988 51.7032 17.2972 51 15.8988C51.5 13.8011 52.8008 12.102 54.6016 11.102ZM40.9996 11.5004C45.9996 11.5004 49.9996 15.602 49.9996 20.5004C49.9996 22.102 49.6012 23.602 48.8004 25.0004C48.4997 25.5004 48.1012 26.0004 47.6988 26.5004C45.9996 28.3988 43.5972 29.5004 40.9996 29.5004C38.398 29.5004 35.9996 28.3988 34.3004 26.5004C33.902 26.0004 33.4997 25.5004 33.1988 25.0004C32.3981 23.602 31.9996 22.102 31.9996 20.5004C31.9996 15.602 35.9996 11.5004 40.9996 11.5004ZM24.3976 34.8014C23.9992 34.1998 23.4992 33.6022 22.8976 33.1022C22.0969 32.3014 21.1984 31.6022 20.1984 31.0006C20.9992 29.6998 21.4992 28.1998 21.4992 26.6022C21.4992 26.1022 21.3977 25.6022 21.3977 25.2038C22.0969 25.1022 22.7961 25.1022 23.4993 25.1022C26.3001 25.1022 28.9993 25.5007 31.6009 26.403C31.7024 26.6023 31.8001 26.8015 31.9993 26.903C28.6985 28.6999 26.1008 31.5007 24.3976 34.8014ZM23.4992 2.5004C25.6984 2.5004 27.4992 4.3012 27.4992 6.5004C27.4992 7.5004 27.1008 8.3988 26.4992 9.1996C25.6984 10.0004 24.6984 10.5004 23.4992 10.5004C22.3 10.5004 21.3 10.0004 20.4992 9.1996C19.8 8.50038 19.4992 7.5004 19.4992 6.5004C19.4992 4.3012 21.3 2.5004 23.4992 2.5004ZM15.8 17.8014C15.8 15.0006 17.3 12.5006 19.6984 11.1022C20.8 12.0006 22.1984 12.5006 23.5968 12.5006C24.9952 12.5006 26.3976 12.0006 27.4952 11.1022C28.0968 11.403 28.5968 11.8014 29.0968 12.3014C30.0968 13.3014 30.796 14.5006 31.0968 15.8014C30.3976 17.1998 29.9952 18.8014 29.9952 20.5006C29.9952 21.6998 30.1944 22.8014 30.5968 23.899C28.296 23.2974 25.9952 23.0006 23.5968 23.0006C22.6983 23.0006 21.796 23.1021 20.8976 23.1021C19.8976 21.0005 18.0968 19.4029 15.796 18.7037L15.8 17.8014ZM13.4992 20.5006C16.8976 20.5006 19.6008 23.1998 19.6008 26.6022C19.6008 28.1022 18.9992 29.5006 17.9992 30.7038C16.8976 32.0046 15.1984 32.7038 13.4992 32.7038C11.8 32.7038 10.1008 32.0046 8.9992 30.7038C7.9992 29.6022 7.3976 28.1022 7.3976 26.6022C7.3976 23.1999 10.1007 20.5006 13.4992 20.5006ZM1.9992 52.1026V42.6026C1.9992 38.4034 4.3 34.6026 7.8976 32.6026C9.3976 34.001 11.296 34.7042 13.3976 34.7042C15.3976 34.7042 17.3976 33.9034 18.8976 32.6026C19.796 33.1026 20.6984 33.7042 21.4992 34.501C22.3 35.3018 22.8976 36.1026 23.3976 37.1026C22.6984 39.001 22.3976 41.001 22.3976 43.1026V51.501C15.7999 50.001 8.6982 50.2002 1.9992 52.1026ZM57.6012 57.1026C46.9022 53.8018 35.2032 53.8018 24.4992 57.1026V43.1026C24.4992 36.9034 27.9992 31.3016 33.3976 28.4036C35.3976 30.4036 38.1984 31.5052 41.0968 31.5052C43.9952 31.5052 46.6984 30.4036 48.796 28.4036C50.296 29.2044 51.5968 30.1028 52.796 31.302C55.8976 34.4036 57.5968 38.6028 57.5968 43.001L57.6012 57.1026ZM79.9992 52.1026C73.3976 50.1026 66.1982 49.9034 59.6012 51.501V43.1026C59.6012 41.001 59.2028 39.001 58.6012 37.1026C59.6012 35.2042 61.2028 33.6026 63.1012 32.6026C64.6012 34.001 66.4996 34.7042 68.6012 34.7042C70.6012 34.7042 72.6012 33.9035 74.1012 32.6026C74.9996 33.1026 75.902 33.7042 76.7028 34.501C78.902 36.7002 80.0036 39.501 80.0036 42.6026L79.9992 52.1026Z"
      fill="currentColor"
    />
  </svg>
);

export default JoinUsSection;
