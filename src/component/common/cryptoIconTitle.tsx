import React from "react";

interface cryptoCurrentProp {
  iconBgSize: string
  iconSize: string
  fontSize: string
  cryptoAmount: string
}

const CryptoIconTitle: React.FC<cryptoCurrentProp> = ({
  iconBgSize,
  iconSize,
  fontSize,
  cryptoAmount
}) => {
  return (
    <div className="gap-[8px] flex items-center">
      <div className={`flex items-center justify-center rounded-full h-[${iconBgSize}] w-[${iconBgSize}] bg-[#505050]`}>
        <img src="./Sol.png" alt="sol png" className={`h-[${iconSize}] w-[${iconSize}]`}></img>
      </div>
      <p className={`text-[${fontSize}] text-white font-bold leading-[24px]`}>
        {cryptoAmount}
      </p>
    </div>
  );
};

export default CryptoIconTitle;
