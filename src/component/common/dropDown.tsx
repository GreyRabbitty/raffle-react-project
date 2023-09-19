import React, { useState } from "react";

export default function DropDown() {
  const [dropDown, setDropDown] = useState(false);

  const droDownHandle = () => {
    console.log('here => ', dropDown)
    setDropDown((dropDown) => !dropDown);
  }

  return (
    <div>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="flex flex-row rounded-[24px] gap-[16px] py-[12px] pr-[12px] pl-[24px] !bg-[#292C31] ease-in duration-300 hover:scale-110"
            id="menu-button"
            onClick={droDownHandle}
            aria-expanded="true"
            aria-haspopup="true"
          >
            <p className="text-[18px] leading-[22px] capitalize font-semibold text-white">
              Today
            </p>
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className={`ease-in duration-300 linear absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md !bg-[#292C31]  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${dropDown ? 'hidden' : ''}`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1 " role="none">
            <a
              href="./land"
              className="block px-4 py-2 text-sm text-white hover:bg-[#3a3d42]"
              role="menuitem"
              id="menu-item-0"
            >
              1 days ago
            </a>
            <a
              href="./land"
              className="text-white hover:bg-[#3a3d42] block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-1"
            >
              2 days ago
            </a>
            <a
              href="./land"
              className="text-white hover:bg-[#3a3d42] block px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-2"
            >
              3 days ago
            </a>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                className="text-white hover:bg-[#3a3d42] block w-full px-4 py-2 text-left text-sm "
                role="menuitem"
                id="menu-item-3"
              >
                a weeks ago
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
