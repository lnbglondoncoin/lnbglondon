const ProgressBar = ({ soldPercentage, lang = "en" }) => {
  console.log(soldPercentage, "soldPercentage");
  let integerPart = Math.trunc(soldPercentage);
  return (
    <div className="flex w-full flex-col gap-y-1">
      <div className="flex justify-between">
        <h3 className="px-1 text-sm sm:text-base sm:leading-[18px]">$6M</h3>
        <h3 className="px-1 text-sm text-primary sm:text-base sm:leading-[18px]">
          $50M
        </h3>
      </div>
      <div className="h-4 w-full rounded-full border-4 border-ash sm:h-[17px]">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${integerPart}%` }}
        ></div>
      </div>
      <div className="flex justify-between py-1 md:py-1.5">
        <span className="px-1 text-xs text-gray2 sm:text-sm sm:leading-6">
          {lang === "en"
            ? "Softcap in 976 days"
            : lang === "ru"
              ? "Мягкий кап в 976 дней"
              : lang === "fr"
                ? "Casquette souple en 976 jours"
                : "Tapa blanda en 976 días"}
        </span>
        <span className="text-xs text-gray2 sm:text-sm sm:leading-6">
          {lang === "en"
            ? "Hardcap"
            : lang === "ru"
              ? "Хардкап"
              : lang === "fr"
                ? "Casquette rigide"
                : "tapa dura"}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
