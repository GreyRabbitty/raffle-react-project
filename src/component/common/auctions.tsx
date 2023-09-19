import React from "react";
import CryptoIconTitle from "./cryptoIconTitle";
import DetailsBtn from "./detailsBtn";

interface auctionProp {
  imgSrc: string;
  cardIndex?: string;
  cardIndexCustomStyle?: string;
  cryptoAmount?: string;
  btndisable?: boolean;
  extraElement?: any
}

const Auctions: React.FC<auctionProp> = ({
  imgSrc,
  cardIndex,
  cardIndexCustomStyle,
  cryptoAmount,
  btndisable,
  extraElement
}) => {
  return (
    <div className="rounded-[24px] bg-[#292C31] p-[12px] flex flex-col gap-[12px] w-full min-w-[200px] aspect-square h-full">
      <img src={imgSrc} alt="avatar png"></img>
      <div className="flex justify-between gap-[4px]">
        {cardIndexCustomStyle ? (
          <p className={cardIndexCustomStyle}>
            {cardIndex ? cardIndex : " "}
          </p>
        ) : (
          <p className="text-[white] text-[18px] leading-[24px] font-bold">
            {cardIndex ? cardIndex : " "}
          </p>
        )}
        {cryptoAmount ? (
          <CryptoIconTitle
            iconBgSize="14px"
            iconSize={"10px"}
            fontSize={"14px"}
            cryptoAmount={cryptoAmount}
          />
        ) : (
          <></>
        )}
      </div>
      {extraElement}
      {!btndisable ? <DetailsBtn /> : ""}
    </div>
  );
};

export default Auctions;
