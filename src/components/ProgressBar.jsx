import { formatCurrency, formatNumber } from "@/utils/formatters";

const ProgressBar = ({ contractData, soldPercentage, lang = "en" }) => {
  console.log(soldPercentage, "soldPercentage");
  let integerPart = Math.trunc(soldPercentage);

  const roundOff = (num) => {
    // convert string to int
    let number = parseFloat(num);
    // round off to 2 decimal
    return number.toFixed(2);
  };

  return (
    <div className="flex w-full flex-col gap-y-1">
      <div className="flex justify-between">
        <h3 className="px-1 font-sans text-sm sm:leading-[18px]">
          Stage 2 / 10
        </h3>
        <div className="flex flex-col items-end sm:items-center sm:flex-row">
          <h3 className="px-1 font-sans text-sm sm:leading-[18px]">
            {formatCurrency(roundOff(contractData?.raisedAmount))} /
            {formatCurrency(10000000)}
          </h3>
          <span className="pb-0.5 font-sans text-sm text-gray2">
            ({formatNumber(
              (roundOff(contractData?.raisedAmount) / 10000000) * 100,
            )})%
          </span>
        </div>
      </div>
      <div className="h-4 w-full rounded-full border-4 border-ash sm:h-[17px]">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${integerPart}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
