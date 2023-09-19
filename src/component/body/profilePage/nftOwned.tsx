import React from "react";
import Auctions from "../../common/auctions";

const NftOwned = () => {
  return (
    <div className="flex flex-col gap-[24px] pb-[32px] text-left overflow-auto">
      <p className="text-[24px] font-extrabold capitalize leading-[32px] text-white">
        NFTS Owned
      </p>
      <div className="sm:grid sm:grid-cols-3 max-sm:flex max-sm:flex-row gap-[24px]">
        <Auctions
          imgSrc="./avatar/ (3).png"
          cardIndex="#3810"
          btndisable={true}
          cardIndexCustomStyle="text-[14px] font-bold leading-[20px] text-[#E5E1A8]"
          extraElement={
            <p className="text-[18px] font-bold leading-[24px] text-[#F7F7F7] -mt-[8px]">
              Green Hat Punk
            </p>
          }
        />
        <Auctions
          imgSrc="./avatar/ (1).png"
          cardIndex="#3810"
          btndisable={true}
          cardIndexCustomStyle="text-[14px] font-bold leading-[20px] text-[#E5E1A8]"
          extraElement={
            <p className="text-[18px] font-bold leading-[24px] text-[#F7F7F7] -mt-[8px]">
              Blue Lucid Punk
            </p>
          }
        />
      </div>
    </div>
  );
};

export default NftOwned;
