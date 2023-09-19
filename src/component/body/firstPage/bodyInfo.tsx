import React from "react";
import Auctions from "../../common/auctions";
import EntryItem from "./entryItem";

const BodyInfo = () => {
  return (
    <div className="flex flex-col xl:!flex-row gap-[32px] justify-center xl:!justify-between">
      <div className="flex flex-row lg:!grid lg:!grid-cols-3 lg:mx-0  mx-[20px] min-w-[480px] justify-between overflow-auto gap-[24px]">
        <Auctions
          imgSrc="./avatar/ (2).png"
          cardIndex="#912723"
          cryptoAmount="11.89 SOL"
        />
        <Auctions
          imgSrc="./avatar/ (3).png"
          cardIndex="#912723"
          cryptoAmount="11.89 SOL"
        />
        <Auctions
          imgSrc="./avatar/ (4).png"
          cardIndex="#912723"
          cryptoAmount="11.89 SOL"
        />
        <Auctions
          imgSrc="./avatar/ (1).png"
          cardIndex="#912723"
          cryptoAmount="11.89 SOL"
        />
        <Auctions
          imgSrc="./avatar/ (4).png"
          cardIndex="#912723"
          cryptoAmount="11.89 SOL"
        />
        <Auctions
          imgSrc="./avatar/ (2).png"
          cardIndex="#912723"
          cryptoAmount="11.89 SOL"
        />
        <Auctions
          imgSrc="./avatar/ (4).png"
          cardIndex="#912723"
          cryptoAmount="11.89 SOL"
        />
        <Auctions
          imgSrc="./avatar/ (2).png"
          cardIndex="#912723"
          cryptoAmount="11.89 SOL"
        />
        <Auctions
          imgSrc="./avatar/ (3).png"
          cardIndex="#912723"
          cryptoAmount="11.89 SOL"
        />
        <Auctions
          imgSrc="./avatar/ (3).png"
          cardIndex="#912723"
          cryptoAmount="11.89 SOL"
        />
      </div>
      <div className="flex flex-col xl:w-[353px] text-white gap-[24px] sm:w-full">
        <div className="bodyInfo-right-start-bg p-[24px] flex flex-col gap-[24px]">
          <>
            <p className="text-[32px] text-white font-bold leading-[48px] mb-[6px]">
              Start to raffle
            </p>
            <p className="text-[#676A71]">
              You can enter the raffle by connecting you solana wallet
            </p>
          </>
          <div className=" border-t-[0.5px] border-r-[0.5px] border-b-[3px] border-l-[0.5px] border-[#E5E1A8] rounded-[100px] py-[12px] px-[32px] bg-[#E42B2B] text-[18px] font-semibold leading-[18px]">
            Connect wallet
          </div>
        </div>
        <div className="bodyInfo-right-start-bg p-[24px]">
          <div className="grid grid-cols-2 gap-[16px] mb-[16px]">
            <div className="py-[12px] px-[24px] text-center text-white rounded-[24px] border-[1px] border-[#292C31] bg-[#E42B2B]">
              <p className="text-[18px] font-semibold capitalize">Activity</p>
            </div>
            <div className="py-[12px] px-[24px] text-center text-white rounded-[24px] border-[1px] border-[#292C31] bg-[#1A1D1F]">
              <p className="text-[18px] font-semibold capitalize">Part. (23)</p>
            </div>
          </div>
          <ul className="flex flex-col gap-[1px]">
            <li className="odd:bg-[#232528] even:bg-[#292C31] first:rounded-t-[15px]"><EntryItem entryId="1d8h71...12389y " entryCount={1} time="Just Now" /></li>
            <li className="odd:bg-[#232528] even:bg-[#292C31] first:rounded-t-[15px]"><EntryItem entryId="1d8h71...12389y " entryCount={50} time="Just Now" /></li>
            <li className="odd:bg-[#232528] even:bg-[#292C31] first:rounded-t-[15px]"><EntryItem entryId="1d8h71...12389y " entryCount={1} time="Just Now" /></li>
            <li className="odd:bg-[#232528] even:bg-[#292C31] first:rounded-t-[15px]"><EntryItem entryId="1d8h71...12389y " entryCount={1} time="2 Second Ago" /></li>
            <li className="odd:bg-[#232528] even:bg-[#292C31] first:rounded-t-[15px]"><EntryItem entryId="1d8h71...12389y " entryCount={3} time="2 Second Ago" /></li>
            <li className="odd:bg-[#232528] even:bg-[#292C31] first:rounded-t-[15px]"><EntryItem entryId="1d8h71...12389y " entryCount={50} time="4 Second Ago" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BodyInfo;
