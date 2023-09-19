import React from "react";
import AnalyticsTable from "./analyticsTable";

const AnalyticsPage = () => {
  const tableDB: object[] = [
    {
      competition: {
        avatarUrl: "./avatar/ (2).png",
        name: "King Punk 2023 Edition",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (1).png",
        name: "Lucid Punk on Discord",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Alissa Soe",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (3).png",
        name: "Green Hat Punk",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Adid Hdo",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "2 Second Ago",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (4).png",
        name: "Badass Smoker",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Ananata Makasih",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "2 Second Ago",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (2).png",
        name: "King Punk 2023 Edition",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Jesicca Jane",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "4 Second Ago",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (1).png",
        name: "Lucid Punk on Discord",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "James Totem",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "4 Second Ago",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (3).png",
        name: "Green Hat Punk",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Solomon Yiu",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (4).png",
        name: "Badass Smoker",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "5 Second Agp",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (2).png",
        name: "King Punk 2023 Edition",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (1).png",
        name: "Lucid Punk on Discord",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (3).png",
        name: "Green Hat Punk",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (4).png",
        name: "Badass Smoker",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "2 Second Ago",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (2).png",
        name: "King Punk 2023 Edition",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (1).png",
        name: "Lucid Punk on Discord",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (3).png",
        name: "Green Hat Punk",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (4).png",
        name: "Badass Smoker",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Gerald Adam",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (1).png",
        name: "Lucid Punk on Discord",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (3).png",
        name: "Green Hat Punk",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (4).png",
        name: "Badass Smoker",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (2).png",
        name: "King Punk 2023 Edition",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (1).png",
        name: "Lucid Punk on Discord",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (3).png",
        name: "Green Hat Punk",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./avatar/ (4).png",
        name: "Badass Smoker",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./avatar (2).png",
        name: "Gerald Adam",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
  ];

  return (
    <div className="flex flex-col gap-[24px] py-[50px] lg:px-[130px] max-lg:px-[30px] text-white">
      <p className="text-[48px] font-extrabold text-left text-white">Winners</p>
      <div className="flex justify-start overflow-auto">
        <div className="flex flex-row gap-[16px]">
          <div className="flex bg-[#E42B2B] rounded-[24px] py-[12px] px-[24px] text-white items-center min-w-[120px] justify-center">
            <p className="text-[18px] leading-[22px] font-semibold capitalize">
              Competitions
            </p>
          </div>
          <div className="rounded-[24px] bg-[rgba(71, 71, 71, 0.08)] border border-[#292C31] py-[12px] px-[24px]  min-w-[120px]">
            <p className="text-[18px] leading-[22px] font-semibold capitalize">
              Head 2 Head
            </p>
          </div>
          <div className="rounded-[24px] bg-[rgba(71, 71, 71, 0.08)] border border-[#292C31] py-[12px] px-[24px]  min-w-[120px]">
            <p className="text-[18px] leading-[22px] font-semibold capitalize">
              Winbox
            </p>
          </div>
        </div>
      </div>
      <AnalyticsTable propsList={tableDB} />
      <div className="flex justify-center">
        <div className="text-center w-[184px] h-[50px] py-[10px] px-[32px] justify-center align-middle cursor-pointer rounded-full view-more-style text-white hover:bg-[#393d42]">
          View more
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
