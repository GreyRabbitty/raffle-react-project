import React from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { FiClock } from 'react-icons/fi'

const MyRafflePart = () => {
  return (
    <div className="flex flex-col gap-[24px] pb-[32px] text-white text-left border-b-[#292C31] border-b-[1px]">
      <p className="text-[24px] font-extrabold leading-[32px] text-[#F7F7F7]">
        My Raffle
      </p>
      <div className="flex flex-row gap-[16px] rounded-[24px] border-[#292C31] bg-[#292C31] p-[16px]">
        <img
          src="./avatar/ (4).png"
          alt="avatar png"
          className="rounded-[16px] w-[94px] h-[120px]"
        />
        <div className="flex flex-col gap-[12px] w-full">
          <div className="flex xl:flex-row max-xl:flex-col items-center justify-between gap-[4px] pb-[16px] border-b-[2px] border-b-[#3A3D42]">
            <div className="flex flex-row gap-[4px]">
              <div className="flex flex-row gap-[8px] items-center">
                <p className="text-[24px] font-bold leading-[32px] text-white mr-[8px] font-[Lato]">
                  King Punk 2023 Edition
                </p>
                <BiSolidBadgeCheck size={"24px"} color="#E42B2B" className="hidden lg:block" />
                <p className="text-[14px] font-medium leading-[16px] hidden lg:block text-[#E5E1A8]">
                  #93272
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[8px]">
              <div className="flex items-center justify-center rounded-full h-[24px] w-[24px] bg-[#505050]">
                <img src="./Sol.png" alt="sol png"></img>
              </div>
              <div className="text-[18px] text-white font-bold leading-[32px]">
                $8,782
              </div>
            </div>
          </div>
          <div className="grid 2xl:grid-cols-4 max-2xl:grid-rows-4 gap-[12px] text-left w-full">
            <div className="flex flex-col gap-[8px]">
              <p className="text-white text-[14px] font-semibold leading-[20px]">
                Sales Ends in:
              </p>
              <div className="flex items-center border border-[#444645] rounded-[21.4px] pr-[16px] pl-[8px] py-[4px] gap-[8px] h-[28px] first-page-detail-clock-bg mr-auto">
                <FiClock size={"18px"} color="white" />
                <p className="text-[14px] text-white leading-[20px] font-semibold text-center">
                  15h : 01m: 02s
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] text-left">
              <p className="text-white text-[14px] font-semibold leading-[20px]">
                Start in:
              </p>
              <p className="text-[18px] font-bold leading-[20px] text-white">
                June 23, 2023
              </p>
            </div>
            <div className="flex flex-col gap-[8px] text-left">
              <p className="text-white text-[14px] font-semibold leading-[20px]">
                Sold ticket amount:
              </p>
              <p className="text-[18px] font-bold leading-[20px] text-white">
                23 Ticket
              </p>
            </div>
            <div className="flex flex-col gap-[8px] text-left">
              <p className="text-white text-[14px] font-semibold leading-[20px]">
                Total ticket amount:
              </p>
              <p className="text-[18px] font-bold leading-[20px] text-white">
                23/50
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRafflePart;
