import React from "react";
import Auctions from "../../common/auctions";
import EntryItem from "../firstPage/entryItem";

import { BiSolidBadgeCheck } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";

interface detailPageProp {
  finishFlag: boolean;
}

const Content: React.FC<detailPageProp> = ({ finishFlag }) => {
  const entryDB = [
    {
      entryId: "1d8h71...12389y ",
      entryCount: 1,
      time: "Just Now",
    },
    {
      entryId: "1d8h71...12389y ",
      entryCount: 1,
      time: "Just Now",
    },
    {
      entryId: "1d8h71...12389y ",
      entryCount: 50,
      time: "2 seconds ago",
    },
    {
      entryId: "1d8h71...12389y ",
      entryCount: 1,
      time: "Just Now",
    },
    {
      entryId: "1d8h71...12389y ",
      entryCount: 1,
      time: "10 seconds ago",
    },
    {
      entryId: "1d8h71...12389y ",
      entryCount: 1,
      time: "Just Now",
    },
    {
      entryId: "1d8h71...12389y ",
      entryCount: 1,
      time: "4 Seconds ago",
    },
    {
      entryId: "1d8h71...12389y ",
      entryCount: 1,
      time: "Just Now",
    },
  ];

  return (
    <div className="flex lg:flex-row max-lg:flex-col gap-[40px] w-full">
      {/* <img src="./avatar/ (3).png" className="w-2/5 detail-page-avatar-style" alt="avatar png"></img> */}
      <div className="flex flex-col gap-[24px] w-full lg:w-5/12">
        <div>
          <Auctions imgSrc="./avatar/ (2).png" />
        </div>
        <div className="hidden p-[2px] auction2-border lg:block relative">
          <div className="flex flex-col gap-[16px] p-[24px] pb-[16px] auction2-style ">
            <div className="flex flex-col gap-[8px]">
              <img
                src="./crown.png"
                alt="crown png"
                className="h-[32px] w-[32px] mx-auto"
              ></img>
              <p className="text-[24px] leading-[32px] font-bold finish-raffle-detail-style">
                Raffle Winner
              </p>
            </div>
            <div className="rounded-[24px] p-[16px] border-[#292C31] bg-[#1B1E20] text-white text-center">
              <p className="text-[32px] leading-[40px] font-normal hidden sm:!block">
                @amandafumiko
              </p>
              <p className="text-[20px] leading-[24px] font-normal block sm:!hidden">
                @amandafumiko
              </p>
              <p className="text-[14px] leading-[24px] font-normal ">
                Won with 1 Ticket(s)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[24px] w-full lg:w-7/12">
        <div>
          <div className="flex md:flex-row flex-col gap-[8px] items-center text-left">
            <p className="text-[32px] text-white mr-[8px] font-[Lato]">
              King Punk 2023
            </p>
            <div className="flex flex-row items-center  justify-start">
              <p className="text-[32px] text-white mr-[8px] font-[Lato] text-left">
                Edition
              </p>
              <BiSolidBadgeCheck size={"24px"} color="#E42B2B" />
            </div>
          </div>
          <p className="text-[24px] font-medium leading-[32px] text-[#E5E1A8]">
            #93272
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[32px] text-left w-full">
          <div className="flex flex-col gap-[8px]">
            <p className="text-white text-[18px] font-bold leading-[20px]">
              Ticket Sales Ends in:
            </p>
            <div className="flex items-center border border-[#444645] rounded-[21.4px] px-[16px] py-[8px] gap-[8px] first-page-detail-clock-bg mr-auto">
              <FiClock size={"24px"} color="white" />
              <p className="text-[24px] text-white leading-[24px] font-semibold text-center">
                15h : 01m: 02s
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[8px] text-left">
            <p className="text-white text-[18px] font-bold leading-[20px]">
              Ticket Start in:
            </p>
            <p className="text-[24px] font-bold leading-[32px] text-white">
              June 23, 2023
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[8px] w-full">
          <div className="gap-[8px] grid text-left">
            <p className="text-[18px] text-white font-bold leading-[20px]">
              Floor
            </p>
            <div className="gap-[8px] flex items-center">
              <div className="flex items-center justify-center rounded-full h-[24px] w-[24px] bg-[#505050]">
                <img src="./Sol.png" alt="sol png"></img>
              </div>
              <p className="text-[24px] font-bold leading-[32px] text-[#E5E1A8]">
                11.24SOL
              </p>
            </div>
          </div>
          <div className="gap-[8px] grid text-left">
            <p className="text-[18 px] text-white  font-bold leading-[20px]">
              Top Offer
            </p>
            <div className="gap-[8px] flex items-center">
              <div className="flex items-center justify-center rounded-full h-[24px] w-[24px] bg-[#505050]">
                <img src="./Sol.png" alt="sol png"></img>
              </div>
              <p className="text-[24px] font-bold leading-[32px] text-[#E5E1A8]">
                13.95 SOL
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] text-white text-left">
          <p className="text-[18px] font-bold leading-[24px]">Description</p>
          <p className="text-[18px] leading-[24px] font-medium">
            Enter now for a chance to win Mutant Ape Yacht Club #10735. The
            MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes
            that can only be created by exposing an existing Bored Ape to a vial
            of MUTANT SERUM or by minting a Mutant Ape in the public sale...
            <a href="./detail" className=" text-red-700">
              See more
            </a>
          </p>
        </div>
        <div className="flex flex-row justify-between border gap-[16px] p-[24px] text-white  w-full bodyInfo-right-start-bg">
          <div className="flex flex-col text-[18px] font-normal leading-[24px] text-left">
            <p>CONTRACT:</p>
            <p className="hidden md:block">
              0X4F9343FA110E8C5C1276B810FBBBB70A19678...
            </p>
            <p className="block md:!hidden">0X4F9343FA110E8...</p>
          </div>
          <RiExternalLinkLine size={"24px"} />
        </div>
        <div className="flex flex-col gap-[16px] p-[24px] detail-page-avatar-style ">
          <div className="grid grid-cols-2 gap-[16px]">
            <div className="py-[12px] px-[24px] text-center text-white red-btn-style">
              <p className="text-[18px] font-semibold capitalize">Activity</p>
            </div>
            <div className="py-[12px] px-[24px] text-center text-white black-btn-style">
              <p className="text-[18px] font-semibold capitalize">
                Prize History
              </p>
            </div>
          </div>
          <ul className="flex flex-col gap-[1px]">
            {entryDB.map((value, index) => (
              <li className="odd:bg-[#232528] even:bg-[#292C31] first:rounded-t-[15px]">
                <EntryItem
                  entryId={value.entryId}
                  entryCount={value.entryCount}
                  time={value.time}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
