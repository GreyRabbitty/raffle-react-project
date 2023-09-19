import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoTelegram, BiLogoDiscordAlt } from "react-icons/bi";
import LiveChat from "../common/liveChat";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col py-[100px] px-[20px] md:px-[136px] gap-[90px] border-t-[2px] border-t-[#292C31]">
      <div className="flex flex-col gap-[24px] lg:w-1/2 x-full">
        <div className="flex flex-row gap-[5px]">
          <img
            src="./header.png"
            className="w-[45px] h-[48px]"
            alt="header png"
          ></img>
          <img
            src="./headerTitle.png"
            className="w-[206px] h-[48px]"
            alt="headerTItle png"
          ></img>
        </div>
        <p className="text-left text-white text-[18px] font-normal leading-[24px]">
          The purchase of a LucidPunk or RevMark digital asset can lead to loss
          of money over short or even long periods. The holders of the
          LucidPunks or RevMarks digital assets should expect prices to have
          large range fluctuations. The information published on the Website
          cannot guarantee that the investors in LucidPunks or RevMark digital
          assets would not lose money. Anyone wishing to invest should not. This
          a community movement not a business.
        </p>
        <div className="flex">
          <div className="w-[46px] p-[11px] cursor-pointer">
            <AiOutlineTwitter size={"24px"} color="#E5E1A8" />
          </div>
          <div className="w-[46px] p-[11px] cursor-pointer">
            <BiLogoTelegram size={"24px"} color="#E5E1A8" />
          </div>
          <div className="w-[46px] p-[11px] cursor-pointer">
            <BiLogoDiscordAlt size={"24px"} color="#E5E1A8" />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-[90px] lg:w-1/2 x-full ">
        <div className="flex flex-col gap-[24px] text-white text-left">
          <p className="text-[24px] font-bold leading-[30px]">Lucidpunk</p>
          <ul className="flex flex-col gap-[16px] font-semibold leading-[24px] text-[18px]">
            <li className="cursor-pointer">DeFi</li>
            <li className="cursor-pointer">Colourize</li>
            <li className="cursor-pointer">Arm Protocol</li>
            <li className="cursor-pointer">Winners</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[24px] text-white text-left relative">
          <LiveChat />
          <p className="text-[24px] font-bold leading-[30px]">About</p>
          <ul className="flex flex-col gap-[16px] font-semibold leading-[24px] text-[18px]">
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Career</li>
            <li className="cursor-pointer">Terms and Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
