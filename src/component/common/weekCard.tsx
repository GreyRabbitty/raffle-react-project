import React from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import CryptoIconTitle from "./cryptoIconTitle";
import DetailsBtn from "./detailsBtn";

interface auctionProp {
  imgSrc: string[];
  cryptoAmount?: string;
  contestName: string,
  joinedDesc: string,
  joinedAvatar: string[]
}

const WeekCard: React.FC<auctionProp> = ({
  imgSrc,
  cryptoAmount,
  contestName,
  joinedDesc,
  joinedAvatar
}) => {
  return (
    <div className="rounded-[24px] bg-[#292C31] p-[12px] flex flex-col gap-[12px] w-full min-w-[350px]">
      <div className="flex flex-row">
        <img src={imgSrc[0]} alt="avatar png"></img>
        <div className="grid grid-rows-3">
          { imgSrc.map((url, index) => index ? 
            <img src={url} alt="avatar png"></img>
          : '') }
        </div>
      </div>
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
      <div className="flex flex-row gap-[8px] items-center">
        <p className="text-[32px] text-white mr-[8px] font-[Lato]">
          {contestName}
        </p>
        <BiSolidBadgeCheck size={"24px"} color="#E42B2B" />
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row">
          {joinedAvatar.map((url, index) => !index ? 
            <img className="gap-[8px] w-[18px] h-[18px] rounded-full" alt="avatar png" src={joinedAvatar[index]}></img>
            :
            <img className="gap-[8px] w-[18px] h-[18px] rounded-full -ml-[8px]" alt="avatar png" src={joinedAvatar[index]}></img>
          )}
        </div>
        <p className="text-white text-[12px] leading-[16px]">
          {joinedDesc}
        </p>
      </div>
      <DetailsBtn />
    </div>
  );
};

export default WeekCard;
