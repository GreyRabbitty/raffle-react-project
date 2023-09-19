import React, { useState } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import ChatElement from "./chatElement";

const LiveChat = () => {
  const chatDB = [
    {
      replyElem: null,
      chatAvatar: "./chat/ (1).png",
      chatName: "Diana_lamvert",
      chatNameColor: "#E42B2B",
      chatDate: "5min ago",
      chatContent: ["Hi, how’s going?"],
    },
    {
      replyElem: null,
      chatAvatar: "./chat/ (2).png",
      chatName: "Monica22",
      chatNameColor: "#F7931A",
      chatDate: "Just now",
      chatContent: ["Yes, you can swap with paying you network power."],
    },
    {
      replyElem: null,
      chatAvatar: "./chat/ (3).png",
      chatName: "Sarah012",
      chatNameColor: "#D129C5",
      chatDate: "2min ago",
      chatContent: [
        "I want to ask about how to swap and why we need power?",
        "Hi, I am fine",
      ],
    },
    {
      replyElem: {
        senderAvatar: "./chat/ (1).png",
        senderName: "Diana_lamvert",
        senderNameColor: "#E42B2B",
        content: "Hi",
      },
      chatAvatar: "./chat/ (2).png",
      chatName: "Monica22",
      chatNameColor: "#F7931A",
      chatDate: "Just now",
      chatContent: ["Hai, i am good"],
    },
    {
      replyElem: null,
      chatAvatar: "./chat/ (2).png",
      chatName: "",
      chatNameColor: "",
      chatDate: "",
      chatContent: [],
    },
  ];

  const [displayFlag, setDisplayFlag] = useState(false);

  const setDisplayFlagHandle = () => {
    setDisplayFlag((displayFlag) => !displayFlag);
  };

  const setHiddleHandle = () => {
    setDisplayFlag(false);
  };

  return (
    <div className="absolute lg:-top-[81px] lg:left-[198px] md:-top-[81px] md:left-[98px] hidden md:block">
      <div
        className={`absolute -top-[510px] -left-[290px] flex flex-col w-[352px] h-[500px] border border-[#292C31] rounded-[24px] bg-[#171A1D] ${
          displayFlag ? "" : "hidden"
        }`}
      >
        <div className="flex flex-row gap-[10px] p-[16px] justify-between border-b-[1px] border-b-[#292C31]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-white text-[18px] leading-[22px] font-bold">
              Live chat
            </p>
            <div className="flex flex-row gap-[4px] items-center">
              <p className="text-[#2C971A]">•</p>
              <p className="text-[#80848D] text-[14px] leading-[17px]">
                152 user online
              </p>
            </div>
          </div>
          <div
            className="rounded-full border w-[36px] h-[36px] border-[#676A71] p-[8px] cursor-pointer"
            onClick={setHiddleHandle}
          >
            <RxCross1 color="#676A71" size={"20px"} />
          </div>
        </div>
        <div className="flex flex-col gap-[16px] p-[24px]">
          {chatDB.map((value, index) => (
            <ChatElement
              replyElem={value.replyElem}
              chatAvatar={value.chatAvatar}
              chatName={value.chatName}
              chatNameColor={value.chatNameColor}
              chatDate={value.chatDate}
              chatContent={value.chatContent}
            />
          ))}
        </div>
      </div>

      <div
        className=" relative w-[64px] h-[61px] cursor-pointer"
        onClick={setDisplayFlagHandle}
      >
        <div className="mt-[7px] mr-[8px] live-chat-btn-style py-[15px] px-[16px]">
          <BsChatDotsFill size={"24px"} color="white" />
        </div>
        <div className="absolute flex justify-center items-center rounded-full bg-white w-[27px] h-[27px] p-[4px] -top-1 right-0">
          <p className="text-[14px] font-extrabold leading-[22px] text-[#292C31]">
            45
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
