import React from "react";

const WelcomeBelow = () => {
  return (
    <div className="flex flex-col gap-[10px] pr-[30px] pl-[100px]">
      <div className="flex flex-row">
        <img src="./landing/red-sphere.png" alt="red sphere png" className="-mt-[110px] w-[73px] h-[73px]"/>
        <img
          src="./landing/png2.png"
          alt="land1"
          className="w-[823px] h-[138px] ml-auto -mt-[130px]"
        />
      </div>

      <div className="flex flex-row">
        <img
          src="./landing/png1.png"
          alt="lamd2"
          className="w-[1084px] h-[215px] mr-auto"
        />
        <img
          src="./landing/sphere.png"
          alt="sphere png"
          className="w-[97px] h-[97px] -mt-[35px]"
        />
        <img
          src="./landing/sphere.png"
          alt="sphere png"
          className="w-[34px] h-[34px] rotate-45 mt-[80px] mr-[30px]"
        />
      </div>
    </div>
  );
};

export default WelcomeBelow;
