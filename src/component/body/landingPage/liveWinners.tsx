import DropDown from "../../common/dropDown";
import LiveWinnerCard from "../../common/liveWinnerCard";
import WeekCard from "../../common/weekCard";

const LiveWinners = () => {
  const weekCardDB = [
    {
      imgSrc: [
        "./avatar/ (1).png",
        "./avatar/ (2).png",
        "./avatar/ (3).png",
        "./avatar/ (4).png",
      ],
      cryptoAmount: "11.89 SOL",
      contestName: "King Punk 2023 Edition",
      joinedDesc: "+147 Joined Lucidpunk winner",
      joinedAvatar: ["(1).png", "(1).png", "(1).png"],
    },
    {
      imgSrc: [
        "./avatar/ (1).png",
        "./avatar/ (2).png",
        "./avatar/ (3).png",
        "./avatar/ (4).png",
      ],
      cryptoAmount: "11.89 SOL",
      contestName: "King Punk 2023 Edition",
      joinedDesc: "+147 Joined Lucidpunk winner",
      joinedAvatar: ["(1).png", "(1).png", "(1).png", "(1).png"],
    },
    {
      imgSrc: [
        "./avatar/ (1).png",
        "./avatar/ (2).png",
        "./avatar/ (3).png",
        "./avatar/ (4).png",
      ],
      cryptoAmount: "11.89 SOL",
      contestName: "King Punk 2023 Edition",
      joinedDesc: "+147 Joined Lucidpunk winner",
      joinedAvatar: ["(1).png", "(1).png", "(1).png", "(1).png"],
    },
    {
      imgSrc: [
        "./avatar/ (1).png",
        "./avatar/ (2).png",
        "./avatar/ (3).png",
        "./avatar/ (4).png",
      ],
      cryptoAmount: "11.89 SOL",
      contestName: "King Punk 2023 Edition",
      joinedDesc: "+147 Joined Lucidpunk winner",
      joinedAvatar: ["(1).png", "(1).png", "(1).png", "(1).png"],
    },
    {
      imgSrc: [
        "./avatar/ (1).png",
        "./avatar/ (2).png",
        "./avatar/ (3).png",
        "./avatar/ (4).png",
      ],
      cryptoAmount: "11.89 SOL",
      contestName: "King Punk 2023 Edition",
      joinedDesc: "+147 Joined Lucidpunk winner",
      joinedAvatar: ["(1).png", "(1).png", "(1).png", "(1).png"],
    },
  ];

  return (
    <div className="flex flex-col justify-between gap-[30px] -mt-[90px] py-[150px] text-white border">
      <div className="flex flex-row justify-between px-[130px] gap-[10px]">
        <p className="flex flex-row gap-[10px] items-center text-[48px] leading-[58px] font-bold capitalize">
          <div className="rounded-full bg-red-700 w-[12px] h-[12px]"></div>
          <p>Live Winners</p>
        </p>
        <div className="flex flex-row gap-[16px] items-center">
          <p className="text-[18px] leading-[22px] font-semibold capitalize text-[#676A71]">
            Sort1
          </p>
          <div>
            <DropDown />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-[24px] overflow-auto relative z-10">
        <LiveWinnerCard imgSrc="./avatar/ (1).png" />
        <LiveWinnerCard imgSrc="./avatar/ (2).png" />
        <LiveWinnerCard imgSrc="./avatar/ (3).png" />
        <LiveWinnerCard imgSrc="./avatar/ (4).png" />
        <LiveWinnerCard imgSrc="./avatar/ (1).png" />
      </div>
      <div>
        <img
          src="./landing/wind.png"
          alt="wind png"
          className="w-full -mt-[160px]"
        ></img>
      </div>
      <div className="py-[100px] gap-[48px]">
        <p className="text-[56px] leading-[67px] text-white font-extrabold capitalize">
          🔥 Top 10 NFT’s of the week
        </p>
        <div className="flex flex-row justify-center gap-[32px]">
          {
            weekCardDB.map((value, index) => 
              <WeekCard 
                imgSrc={value.imgSrc} 
                cryptoAmount={value.cryptoAmount}
                contestName={value.contestName}
                joinedDesc={value.joinedDesc}
                joinedAvatar={value.joinedAvatar}
              />)
          }
        </div>
      </div>
    </div>
  );
};

export default LiveWinners;
