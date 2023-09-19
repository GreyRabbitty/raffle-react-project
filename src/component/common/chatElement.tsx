import React from "react";

interface chatElementProp {
  replyElem: any;
  chatAvatar: string;
  chatName: string;
  chatNameColor: string;
  chatDate: string;
  chatContent: string[];
}

const ChatElement: React.FC<chatElementProp> = ({
  replyElem,
  chatAvatar,
  chatName,
  chatNameColor,
  chatDate,
  chatContent,
}) => {
  return (
    <div className="flex flex-col">
      {replyElem ? (
        <div className="p-[16px] flex flex-row">
          <img src="./chat/line.png" alt="line png" className="" />
          <div className="flex flex-row gap-[8px] rounded-[100px] bg-[#292C31] justify-center py-[4px] px-[10px]">
            <img
              src={replyElem.senderAvatar}
              alt="png"
              className="h-[16px] w-[16px] mt-[5px]"
            ></img>
            <p className={`text-[${replyElem.senderNameColor}]`}>
              {replyElem.senderName}
            </p>
            <p className="text-white">{replyElem.content}</p>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-row gap-[8px]">
        <img
          src={chatAvatar}
          alt="chat avatar"
          className="w-[32px] h-[32px]"
        ></img>
        {chatNameColor ? (
          <div className="flex flex-col gap-[8px]">
            <p className="text-[14px] leading-[17px] font-normal">
              <span className={`text-[${chatNameColor}]`}>{chatName}</span>
              <span className="text-white"> • </span>
              <span className="text-[#80848D] ">{chatDate}</span>
            </p>
            <p className="text-[14px] leading-[17px] font-normal text-white">
              {chatContent}
            </p>
          </div>
        ) : (
          <p className="flex justify-center text-white">•••</p>
        )}
      </div>
    </div>
  );
};

export default ChatElement;
