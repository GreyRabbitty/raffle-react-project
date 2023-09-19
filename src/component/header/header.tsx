import { Link } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoTelegram, BiLogoDiscordAlt } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import AvatarMenu from "../common/avatarMenu";
import { Web3Button } from "@web3modal/react";
import { useTranslation } from "react-i18next";

const Header = () => {
  // const [isLogin, setIsLogin] = useState(false);
  const isLogin = true;
  const { i18n, t } = useTranslation();

  return (
    <div>
      <div className="md:hidden">
        <div className="flex flex-row items-center justify-between">
          <p className="text-[14px] leading-[20px] text-white ml-[20.5px]">9:41</p>
          <img src="./header/symbol.png" alt="header symbol png" className="mr-[13.5px]"></img>
        </div>
      </div>

      <div className="flex justify-between items-center header-bg border border-[#555659] w-full md:rounded-full py-[18px] pl-[32px] pr-[18px] ">
        <div className="hidden lg:block">
          <ul className="flex gap-[32px] text-white my-auto">
            <li key={1}>
              <Link className="cursor-pointer" to="./">
                DeFi
              </Link>
            </li>
            <li key={2}>
              <Link className="cursor-pointer" to="./profile">
                Colourize
              </Link>
            </li>
            <li key={3}>
              <Link className="cursor-pointer" to="./detail">
                Arm Protocol
              </Link>
            </li>
            <li key={4}>
              <Link className="cursor-pointer" to="./analytics">
                Winners
              </Link>
            </li>
            <li key={5}>
              <Link className="cursor-pointer" to="./land">
                Landing
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <img
            src="./header.png"
            alt="header png"
            className="w-[44px] h-[48px]"
          ></img>
          <img
            src="./headerTitle.png"
            alt="headerTitle png"
            className="w-[158px] h-[43px]"
          ></img>
        </div>
        {isLogin ? (
          <div className="flex items-center">
            <div className="w-[46px] p-[11px]">
              <AiOutlineTwitter size={"24px"} color="#E5E1A8" />
            </div>
            <div className="w-[46px] p-[11px]">
              <BiLogoTelegram size={"24px"} color="#E5E1A8" />
            </div>
            <div className="w-[46px] p-[11px]">
              <BiLogoDiscordAlt size={"24px"} color="#E5E1A8" />
            </div>
            {/* <div className="w-[184px] h-[50px] py-[10px] px-[32px] justify-center align-middle cursor-pointer rounded-full header-border-style text-white">
              Connect Wallet
            </div> */}
            <Web3Button balance="hide" label={t("Connect wallet")}/>
          </div>
        ) : (
          <div className="flex flex-row gap-[16px] items-center">
            <div className="flex flex-row">
              <div className="flex flex-row items-center gap-[8px] py-[12px] px-[24px] rounded-l-[100px] bg-[#131619] text-white">
                <div className="flex justify-center items-center rounded-full w-[20px] h-[20px] bg-[#505050]">
                  <FaEthereum color="#D2D3D3" size={"10px"} />
                </div>
                <p className="text-[14px] text-white font-semibold leading-[14px]">
                  0.023 SOL
                </p>
              </div>
              <div className="cursor-pointer py-[10px] pl-[8px] pr-[12px] rounded-r-[24px] border border-l-0 border-t-[#131619] border-r-[#131619] border-b-[#131619]">
                <AiOutlinePlus color="white" size={"24px"} />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="h-full w-[1px] border border-[#676A71]"></div>
            </div>
            <div className="hidden md:block">
              <div className="cursor-pointer flex items-center justify-center p-[10px]">
                <img
                  src="./bell.png"
                  alt="bell png"
                  className="w-[24px] h-[24px]"
                />
              </div>
            </div>
            <AvatarMenu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
