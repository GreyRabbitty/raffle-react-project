import React from "react";
import { HiLogout } from "react-icons/hi";
import { AiOutlineShareAlt, AiOutlineTwitter } from "react-icons/ai";
import { RiPencilLine } from "react-icons/ri";
import { HiOutlineDuplicate } from "react-icons/hi";
import { BsDiscord } from "react-icons/bs";

const ProfileDetail = () => {
  return (
    <div className="lg:w-4/12 sm:w-full ">
      <div className="flex flex-col gap-[24px] p-[24px] profile-detail-style">
        <div className="flex flex-row justify-between rounded-full bg-[292C31]">
          <HiLogout
            fontSize={"16px"}
            color="white"
            className="rounded-full bg-[#292C31] p-[12px] h-[40px] w-[40px] cursor-pointer"
          />
          <AiOutlineShareAlt
            size={"16px"}
            color="white"
            className="rounded-full bg-[#292C31] p-[12px] h-[40px] w-[40px] cursor-pointer"
          />
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="./avatar/profileDetailAvatar.png"
              alt="login avatar"
              className="w-[100px] h-[100px]"
            />
            <RiPencilLine
              className=" hover:bg-red-400 hover:text-[#FED030] absolute bottom-0 right-0 bg-[#E42B2B] w-[34px] h-[34px] p-[8px] rounded-full"
              color="white"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] text-center border-b-[1px] border-b-[#292C31]">
          <div className="flex flex-row gap-[8px] justify-center items-center text-white">
            <RiPencilLine size={"18px"} color="white" className=" invisible" />
            <p className="text-[24px] font-bold leading-[40px]">@amandafumiko</p>
            <RiPencilLine size={"18px"} color="white" />
          </div>
          <div className="flex flex-row items-center justify-center border-[2px] border-[#404244] gap-[8px] py-[4px] px-[8px] rounded-[100px] profile-detail-btn-style">
            <p className="text-[14px] text-white font-normal leading-[24px]">
              1236asd1...e12dwsh12e86g
            </p>
            <HiOutlineDuplicate color="white" size={"18px"} />
          </div>
          <p className="text-[14px] font-normal leading-[24px] text-center pb-[24px] text-[#676A71]">
            Joined march 2023
          </p>
        </div>
        <div className="flex flex-col gap-[16px] text-white text-center border-b-[1px] border-b-[#292C31]">
          <p className="text-[18px] font-normal leading-[24px] text-[#F7F7F7]">
            Social Account
          </p>
          <div className="flex flex-row justify-center gap-[10px] pb-[24px]">
            <div className="flex items-center justify-center rounded-full border-b-[#292C31] h-[32px] w-[32px] bg-[#0A49AF] p-[8px]">
              <BsDiscord color="white" size={"16px"} />
            </div>
            <div className="flex items-center justify-center rounded-full h-[32px] w-[32px] bg-[#2E9AD0] p-[8px]">
              <AiOutlineTwitter color="white" size={"16px"} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <p className="text-[18px] font-normal leading-[24px] text-[#F7F7F7]">
            User Interface
          </p>
          <div className="flex flex-row items-center gap-[10px] text-left">
            <p className="text-[18px] text-[#676A71] font-normal">
              Videos autoplay in competition thumbnails (disable this if your
              device is running slow)
            </p>
            <div className="flex justify-end border border-[#131619] bg-[#E42B2B] rounded-[100px] w-[124px] p-[4px]">
              <div className="rounded-full bg-white w-[16px] h-[16px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
