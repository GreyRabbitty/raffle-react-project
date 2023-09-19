import React from "react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { FiClock } from 'react-icons/fi'

const Detail = () => {
  return (
    <div className="lg:flex lg:flex-rows gap-[24px] pb-[32px] mb-[32px] border-[#292C31]">
      <img alt="body detail png" src="./Details.png" className="w-[120px] h-[120px] mx-auto"></img>
      <div className="lg:flex lg:flex-rows gap-[24px] w-full">
        <div className="flex flex-col gap-[8px] w-full lg:w-1/2">
          <div className="flex items-center">
            <p className="text-[32px] text-white mr-[8px] font-[Lato]">
              King Punk 2023 Edition
            </p>
            <BiSolidBadgeCheck size={"24px"} color="#E42B2B" />
          </div>
          <p className="text-[18px] text-[#676A71] text-left">
            Step into the vast Ether universe by purchasing an Avatar. These
            characters were opened through Ether Capsules. After purchasing your
            Avatar, verify your NFT in the official Discord server to join our
            universe. We look forward to seeing you there.
          </p>
        </div>
        <div className="grid grid-rows-3 gap-[8px] xl:px-[80px] px-auto w-full lg:w-1/2">
          <div></div>
          <div className="grid grid-cols-2 gap-[8px]">
            <div className="gap-[8px] grid text-left">
              <p className="text-[14px] text-white font-bold leading-[20px]">Floor</p>
              <div className="gap-[8px] flex">
                <div className="flex items-center justify-center rounded-full h-[24px] w-[24px] bg-[#505050]">
                  <img src="./Sol.png" alt="sol png"></img>
                </div>
                <p className="text-[18px] text-white font-bold leading-[24px]">11.24SOL</p>
              </div>
            </div>
            <div className="gap-[8px] grid text-left">
              <p className="text-[14px] text-white  font-bold leading-[20px]">Top Offer</p>
              <div className="gap-[8px] flex">
                <div className="flex items-center justify-center rounded-full h-[24px] w-[24px] bg-[#505050]">
                  <img src="./Sol.png" alt="sol png"></img>
                </div>
                <p className="text-[18px] text-white font-bold leading-[24px]">13.95 SOL</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[8px] text-left">
            <div className="flex flex-col gap-[8px]">
                <p className="text-white text-[14px] font-bold leading-[20px] mr-auto">Ticket Sales Ends in:</p>
                <div className="flex items-center border border-[#444645] rounded-[21.4px] px-[8px] gap-[8px] first-page-detail-clock-bg mr-auto">
                    <FiClock size={'16px'} color="white"/>
                    <p className="text-[14px] text-white leading-[24px] font-semibold text-center">15h : 01m: 02s</p>
                </div>
            </div>
            <div className="flex flex-col gap-[8px] text-left">
                <p className="text-white text-[14px] font-bold leading-[20px]">Ticket Start in:</p>
                <p className="text-[18px] font-bold leading-[24px] text-white">June 23, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
