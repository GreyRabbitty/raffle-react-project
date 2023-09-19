import React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";

const BodyInfoBelow = () => {
  return (
    <div className="flex flex-col gap-[10px] mt-[32px]">
      <div className="flex flex-row gap-[8px]">
        <HiOutlineInformationCircle size={"24px"} color="#E5E1A8" />
        <p className="text-[24px] font-bold leading-[24px] text-[#E5E1A8]">
          Instructions on how to play
        </p>
      </div>
      <p className="text-[18px] font-normal leading-[24px] text-left text-white">
        When it comes to Raffle Tickets, there are a couple of strategies. Which
        strategy you choose depends on your risk tolerance. Some people who
        prefer to take guaranteed returns on their tickets will elect to sell
        them in the Lucidpunks. Those who enjoy taking a chance will enter their
        tickets into the NFT raffles. There is definitely some easy GHST to be
        made by selling tickets in the Lucidpunks. Although, the idea of winning
        a raffle for a Godlike item can be tantalizing. It all comes down to
        your personal preference! Regardless of how you choose to make use of
        your Raffle Tickets we wish you the best of luck!
      </p>
    </div>
  );
};

export default BodyInfoBelow;
