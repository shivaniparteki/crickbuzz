import React, { useState } from "react";
import Link from "next/link";
import { icon, menu, submenu } from "../utils/constant";
import { AiOutlineCaretDown } from "react-icons/ai";

const Menu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = (element) => {
    if (element === 1) {
      setIsDropdownOpen(!isDropdownOpen);
      console.log("toggle");
    }
  };

  return (
    <div className="w-full flex justify-center gap-16   bg-green-800   text-1xl font-sans  text-white">
      <div className="hidden lg:block">
        <ul className="flex justify-center cursor-pointer gap-2 ">
          {submenu?.map((element, index) => {
            return (
              <div key={index}>
                <Link href={`/menu/${element.route.toLowerCase()}`}>
                  <li className="p-4 hover:bg-green-900">{element?.item}</li>
                </Link>
              </div>
            );
          })}
        </ul>
      </div>

      <div>
        <ul className=" flex justify-center gap-1 lg:gap-2">
          {menu?.map((element, index) => {
            return (
              <>
                <div key={index} className="  dropdown-menu relative group ">
                  <li className="capitalize hover:bg-green-900  p-4  cursor-pointer flex items-center gap-1  ">
                    <span>{element?.item}</span>
                    <AiOutlineCaretDown />
                  </li>

                  <ul className="absolute z-50 left-0  hidden group-hover:block duration-300 rounded-md shadow-[0px_6px_22px_-10px_#686868]  bg-[#F9F9F9]">
                    {element?.dropdown?.map((dropdown, index) => {
                      return (
                        <li key={index}
                          className={`${element?.style} capitalize w-36 cursor-pointer px-3 py-2 text-[#000]  hover:rounded-md hover:bg-[#eee] ease-in-out duration-150`}
                        >
                          {dropdown}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center">
        <div className="p-3 hidden lg:block">
          <button className=" rounded-full  px-8 py-1 bg-white">
            <span className="text-1xl font-sans  text-gray-400 capitalize  hover:text-black">
              crickbuzz plus
            </span>
          </button>
        </div>
        <div className="relative hidden lg:block">
          <ul className="flex justify-center text-2xl gap-4">
            {icon?.map((element, index) => {
              return (
                  <li
                    key={index}
                    onClick={() => handleDropdownToggle(index)}
                    className=" cursor-pointer p-4 flex justify-center"
                  >
                    {element?.item}
                  </li>
              );
            })}
          </ul>

          <ul
            className={`absolute right-0 top-12 border w-28 flex flex-col gap-1.5 rounded  bg-[#F9F9F9] text-[#000] ${
              isDropdownOpen ? "block" : "hidden"
            }`}
          >
            <li className="cursor-pointer hover:bg-[#eee] px-4 py-1">
              <Link href="/signup"> Signup </Link>
            </li>
            <li className="cursor-pointer hover:bg-[#eee] px-4 py-1">
              <Link href="/login"> Login </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
