const ProgressBar = ({soldPercentage}) => {
  console.log(soldPercentage, "soldPercentage");
  return (
    <div className="flex w-full flex-col gap-y-1">
      <div className="flex justify-between">
        <h3 className="px-1 text-sm sm:text-base sm:leading-[18px]">$6M</h3>
        <h3 className="px-1 text-sm text-primary sm:text-base sm:leading-[18px]">
          $50M
        </h3>
      </div>
      <div className="border-ash h-4 w-full rounded-full border-4 sm:h-[17px]">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${soldPercentage}` }}
        ></div>
      </div>
      <div className="flex justify-between py-1 md:py-1.5">
        <span className="px-1 text-xs text-gray2 sm:text-sm sm:leading-6">
          Softcap in 976 days
        </span>
        <span className="text-xs text-gray2 sm:text-sm sm:leading-6">
          Hardcap
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
