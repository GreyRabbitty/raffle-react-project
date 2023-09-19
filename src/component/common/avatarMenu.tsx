import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import {
  HiOutlineDuplicate,
  HiOutlineCreditCard,
  HiOutlineUserAdd,
  HiOutlineCog,
  HiLogout,
} from "react-icons/hi";

const AvatarMenu = () => {
  const [displayFlag, setDisplayFlag] = useState(false);

  const setDisplayFlagTrueHandle = () => {
    setDisplayFlag(true);
  };

  const setDisplayFlagFalseHandle = () => {
    setDisplayFlag(false);
  }

  return (
    <div className="relative">
      <img
        src="./avatar/loginAvatar.png"
        alt="login avatar"
        className="hover:scale-125 transition-all cursor-pointer"
        onClick={setDisplayFlagTrueHandle}
      />
      <div className={`flex flex-col absolute top-0 -left-[220px] border-[2px] border-[#292C31] rounded-[24px] bg-[#131619] w-[289px] ${displayFlag ? '' : 'hidden'}`}>
        <div className="flex flex-row gap-[16px] p-[16px] border-b-[2px] border-b-[#292C31]">
          <img
            src="./avatar/loginAvatar.png"
            alt="avatar png"
            className="h-[48px] w-[48px]"
          ></img>
          <div className="flex flex-col text-left">
            <p className="text-white text-[18px] leadig-[24px]">Account 1</p>
            <div className="flex flex-row text-[#676A71] items-center gap-[8px]">
              <p className="">1236asd...98yh12e86g</p>
              <HiOutlineDuplicate color="#676A71" size={"14px"} />
            </div>
          </div>
        </div>
        <div className="grid grid-rows-5">
          <div className="flex flex-row p-[16px] gap-[16px] items-center" onClick={setDisplayFlagFalseHandle}>
            <BiUserCircle color="white" size={"24px"} />
            <p className="text-[18px] leading-[22px] font-extrabold capitalize text-white cursor-pointer">
              My Profile
            </p>
          </div>
          <div className="flex flex-row p-[16px] gap-[16px] items-center"  onClick={setDisplayFlagFalseHandle}>
            <HiOutlineCreditCard color="white" size={"24px"} />
            <p className="text-[18px] leading-[22px] font-extrabold capitalize text-white cursor-pointer">
              Wallet
            </p>
          </div>
          <div className="flex flex-row p-[16px] gap-[16px] items-center"  onClick={setDisplayFlagFalseHandle}>
            <HiOutlineUserAdd color="white" size={"24px"} />
            <p className="text-[18px] leading-[22px] font-extrabold capitalize text-white cursor-pointer">
              Referrals
            </p>
          </div>
          <div className="flex flex-row p-[16px] gap-[16px] items-center"  onClick={setDisplayFlagFalseHandle}>
            <HiOutlineCog color="white" size={"24px"} />
            <p className="text-[18px] leading-[22px] font-extrabold capitalize text-white cursor-pointer">
              Setting
            </p>
          </div>
          <div className="flex flex-row p-[16px] gap-[16px] items-center"  onClick={setDisplayFlagFalseHandle}>
            <HiLogout color="white" size={"24px"} />
            <p className="text-[18px] leading-[22px] font-extrabold capitalize text-white cursor-pointer">
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarMenu;
