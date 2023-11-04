import React, { useState } from "react";
import Link from "next/link";
import { icon, menu, submenu } from "../utils/constant";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";
import axios from "axios";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";

const Menu = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log("toggle");
  };

  const logout = async () => {
    try {
      await axios.get("/api/logout"); // Make sure your logout API endpoint is correctly defined.
      toast.success("Logout successful");
      router.push("/login");
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");

      if (response?.data?.success === true) {
        alert("Login Successful");
        router.push("/");
      } else {
        alert("Invalid Password");
      }
    } catch (error) {
      console.error("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center fixed z-10  gap-44   bg-green-800   text-1xl font-sans  text-white ">
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
                        <li
                          key={index}
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
      <div className="flex items-center justify-center ">
        <Link className="text-[1.5rem]" href="/profile">
          <FaUserCircle />
        </Link>

        <div className="p-3  hidden lg:block">
          {/* <button className=" rounded-full  px-8 py-1 bg-white">
            <span className="text-1xl font-sans  text-gray-400 capitalize  hover:text-black">
              <Link href="/signup"> Signup </Link>
            </span>
          </button> */}
          <button
            onClick={logout}
            className="p-1 rounded-full px-8 py-1 mx-3 focus:outline-none focus:border-gray-600 bg-lime-600 text-[#fff]"
          >
            Logout
          </button>
        </div>

        {/* <div
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
          </div> */}
      </div>
    </div>
  );
};

export default Menu;
