const ProgressBar = ({ contractData ,soldPercentage, lang = "en" }) => {

  console.log(soldPercentage, "soldPercentage");
  let integerPart = Math.trunc(soldPercentage);
  
  const roundOff = (num) => {
    // convert string to int
    let number = parseFloat(num);
    // round off to 2 decimal
    return number.toFixed(4);
  };
  
  return (
    <div className="flex w-full flex-col gap-y-1">
      <div className="flex justify-between">
        <h3 className="px-1 font-sans text-sm sm:leading-[18px]">
          Stage 1 / 10
        </h3>
        <h3 className="px-1 text-sm font-sans sm:leading-[18px]">
        ${roundOff(contractData?.raisedAmount)} / $300,000
        </h3>
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
