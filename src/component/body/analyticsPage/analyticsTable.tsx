import React from "react";
import { RiExternalLinkLine } from "react-icons/ri";

interface analyticsTableProps {
  propsList: any[];
}

const AnalyticsTable: React.FC<analyticsTableProps> = ({ propsList }) => {
  return (
    <>
    <div className="hidden lg:block">
      <table className="analytics-table-style w-full text-white text-left">
        <thead className="">
          <tr className="bg-[#131619]">
            <th className="text-[16px] font-bold capitalize py-[16px] first:pl-[24px] last:pr-[24px] last:text-right">
              Competition
            </th>
            <th className="text-[16px] font-bold capitalize py-[16px] first:pl-[24px] last:pr-[24px] last:text-right">
              Winner
            </th>
            <th className="text-[16px] font-bold capitalize py-[16px] first:pl-[24px] last:pr-[24px] last:text-right">
              Prize Value On Date
            </th>
            <th className="text-[16px] font-bold capitalize py-[16px] first:pl-[24px] last:pr-[24px] last:text-right">
              Other
            </th>
          </tr>
        </thead>
        <tbody>
          {propsList.map((propList, propIndex) => (
            propIndex >= 16 ? null :
            <tr className=" even:bg-[#131619] odd:bg-[#191C1E] hover:bg-[#242729] transition-all ease-linear">
              <td className="py-[16px] first:pl-[24px] last:pr-[24px] last:text-right">
                <div className="flex text-[16px] font-bold capitalize gap-[16px]">
                  <img
                    src={propList.competition.avatarUrl}
                    alt="avatar png"
                    className="w-[32px] h-[32px] rounded-[6px]"
                  />
                  <div className="flex flex-col gap-[3px]">
                    <p className="text-[14px] font-semibold capitalize">
                      {propList.competition.name}
                    </p>
                    <p className="text-[10px] font-semibold">{propList.competition.index}</p>
                  </div>
                </div>
              </td>
              <td className="py-[16px] first:pl-[24px] last:pr-[24px] last:text-right">
                <div className="flex flex-row items-center text-[16px] font-bold capitalize gap-[16px]">
                  <img
                  //   src={propList.winner.avatarUrl}
                  src="(1).png"
                  //   src={`./winner/(${propIndex % 8}).png`}
                    alt="avatar png"
                    className="w-[32px] h-[32px] rounded-full border border-[131619]"
                  />
                  <p className="text-[14px] leading-[17px] font-semibold capitalize">
                    {propList.winner.name}
                  </p>
                </div>
              </td>
              <td className="py-[16px] first:pl-[24px] last:pr-[24px] last:text-right">
                <div className="flex flex-row gap-[10px] items-center">
                  <div className="gap-[8px] flex items-center">
                    <div className="flex items-center justify-center rounded-full h-[24px] w-[24px] bg-[#505050]">
                      <img src="./Sol.png" alt="sol png"></img>
                    </div>
                    <p className="text-[16px] font-semibold capitalize leading-[18px] text-[#E5E1A8]">
                      {propList.prize.ether}
                    </p>
                  </div>
                  <p className="text-[16px] leading-[19px] text-[#676A71] font-medium capitalize">
                    ${propList.prize.dollar}
                  </p>
                </div>
              </td>
              <td className="py-[16px] first:pl-[24px] last:pr-[24px]">
                <div className="flex gap-[8px] items-center text-[#E5E1A8] hover:text-white justify-end cursor-pointer">
                  <p className="text-[14px] font-medium capitalize">{propList.time}</p>
                  <RiExternalLinkLine size={"24px"} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="block lg:hidden ">
      <table className="analytics-table-style w-full text-white text-left">
        <thead className="">
          <tr className="bg-[#131619]">
            <th className="text-[16px] font-bold capitalize py-[16px] first:pl-[24px] last:pr-[24px] last:text-right">
              Game
            </th>
            <th className="text-[16px] font-bold capitalize py-[16px] first:pl-[24px]">
              Account
            </th>
          </tr>
        </thead>
        <tbody>
          {propsList.map((propList, propIndex) => (
            propIndex >= 16 ? null :
            <tr className=" even:bg-[#131619] odd:bg-[#191C1E] hover:bg-[#242729] transition-all ease-linear">
              <td className="py-[16px] first:pl-[24px] last:pr-[24px] last:text-right">
                <div className="flex text-[16px] font-bold capitalize gap-[16px]">
                  <div className="relative">
                    <img
                      src={propList.competition.avatarUrl}
                      alt="avatar png"
                      className="w-[32px] h-[32px] rounded-[6px]"
                    />
                    <img
                    src="(1).png"
                      alt="avatar png"
                      className="absolute bottom-[6px] right-0 w-[16px] h-[16px] rounded-full border border-[131619]"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-[3px]">
                    <p className="text-[14px] font-semibold capitalize">
                      {propList.competition.name}
                    </p>
                    <p className="text-[10px] font-semibold">{propList.time}</p>
                  </div>
                </div>
              </td>
              <td className="py-[16px] first:pl-[24px] last:pr-[24px] last:text-right">
                <div className="flex flex-row gap-[10px] items-center">
                  <div className="gap-[8px] flex items-center">
                    <div className="flex items-center justify-center rounded-full h-[24px] w-[24px] bg-[#505050]">
                      <img src="./Sol.png" alt="sol png"></img>
                    </div>
                    <p className="text-[16px] font-semibold capitalize leading-[18px] text-[#E5E1A8]">
                      {propList.prize.ether}
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    </>
  );
};

export default AnalyticsTable;
