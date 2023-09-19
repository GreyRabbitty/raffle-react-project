import React from "react";
import { RxLightningBolt } from "react-icons/rx";

interface auction2Prop {
  imgSrc: string;
}

const LiveWinnerCard: React.FC<auction2Prop> = ({ imgSrc }) => {
  return (
    <div className="p-[2px] auction2-border min-w-[362px] relative">
      <div className="flex flex-row gap-[10px] p-[16px] live-winner-card-style w-full">
        <div className="w-2/5">
          <div className="flex justify-center items-center p-[12px] rounded-tl-[24px] rounded-br-[24px] bg-red-600 h-[56px] w-[56px] absolute top-0 left-0">
            <img
              src="./crown.png"
              alt="crown png"
              className="rounded-[16px] max-w-[115px]"
            />
          </div>
          <img src={imgSrc} alt="avatar png" className=" w-full h-full" />
        </div>
        <div className="flex flex-col gap-[8px] text-left w-3/5">
          <div className="flex flex-col gap-[4px] text-white">
            <p className="text-[12px] font-bold leading-[20px]">#12739</p>
            <p className="text-[14px] font-normal leading-[20px]">
              King Punk 2023 Edition{" "}
            </p>
          </div>
          <div className="flex flex-col gap-[8px] p-[8px]">
            <p className="text-[18px] leading-[24px] font-bold">@amandafumiko</p>
            <div className="flex flex-row gap-[4px]">
              <div className="gap-[8px] flex items-center">
                <div className="flex items-center justify-center rounded-full h-[24px] w-[24px] bg-[#505050]">
                  <img src="./Sol.png" alt="sol png"></img>
                </div>
                <p className="text-[16px] font-semibold capitalize leading-[18px] text-[#E5E1A8]">
                  11.89 SOL
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center text-[#676A71] text-left gap-[4px]">
            <RxLightningBolt size='14px' />
            <p className="text-[14px] font-normal leading-[20px]">Won with 1 Ticket(s)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveWinnerCard;
