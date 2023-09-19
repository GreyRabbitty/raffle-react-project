import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col py-[50px] px-[130px] gap-[8px] text-left">
      <p className="text-[18px] leading-[28px] font-bold text-white ">
        WELCOME TO LUCIDIA
      </p>
      <div className="flex flex-row gap-[130px] text-white">
        <div className="text-[56px] leading-[67px] w-[720px] capitalize landing-page-welcome-style text-left">
          <p>
            <span className="bg-white background-clip-style">Win Huge</span>{" "}
            crypto prizes,{" "}
          </p>
          <p className="flex flex-row items-center">
            digital collectibles and
            <span className="flex h-4/5 ml-[35px]">
              <img src="./landing/slash/Vector.png" alt="slash png"></img>
              <img src="./landing/slash/Vector.png" alt="slash png"></img>
              <img src="./landing/slash/Vector.png" alt="slash png"></img>
              <img src="./landing/slash/Vector.png" alt="slash png"></img>
              <img src="./landing/slash/Vector.png" alt="slash png"></img>
            </span>
          </p>
          <p>play our instant win games</p>
        </div>
        <div className="flex flex-col gap-[24px] w-[318px]">
          <p className="text-[20px] leading-[24px] font-normal">
            With only just one click you can Win huge crypto prizes, digital
            collectibles And play our instant win games.
          </p>
          <div className="flex flex-row gap-[14px]">
            <div className="min-w-[32px] block">
              <img
                src="avatar/loginAvatar.png"
                alt="avatar png"
                className="rounded-full border-[2px]"
              ></img>
              <img
                src="avatar/loginAvatar.png"
                alt="avatar png"
                className="rounded-full -mt-[21px] border-[2px]"
              ></img>
              <img
                src="avatar/loginAvatar.png"
                alt="avatar png"
                className="rounded-full -mt-[21px] border-[2px]"
              ></img>
            </div>
            <div className="flex">
              <p className="text-white text-[14px] leading-[17px] font-medium">
                Join with 6,423 Connected participants and experience the future
                of winning. Experience Lucidpunk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
