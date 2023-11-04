import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { FaUserLarge } from "react-icons/fa";
import { Avatar } from "@mui/material";

const Profile = () => {
  const [data, setData] = useState("*******");
  const router = useRouter();

  console.log("data");
  console.log(data);

  const getUserDetails = async () => {
    try {
      console.log("Hello_________________________");
      const res = await axios.get("/api/me");
      router.push("/profile");
      console.log("res.data");
      console.log(res.data);
      setData(res.data.data.username);
    } catch (error) {
      console.log("Bye_________________________");
      console.log(error.message);
    }
  };

  // const logout = async () => {
  //   try {
  //     await axios.get("/api/logout");
  //     toast.success("Logout successful");
  //     router.push("/login");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <>
      <div className="flex h-[100vh] flex-col items-center min-h-screen justify-center bg-white  ">
        <div className="wrapper w-[28rem] flex flex-col items-center justify-center  gap-5 font-sans bg-gray-200 text-black  rounded-lg  px-16 py-8 h-[30rem] shadow-[0px_6px_25px_0px_#43454944] ">
          <h1 className="text-[2rem] font-semibold ">Profile</h1>
          <hr className="border border-gray-300 w-[16rem] my-0.5 " />
          {/* <p>Profile Page</p> */}
          <Avatar className="">
            {/* <FaUserLarge/> */}
          </Avatar>

          <h2 className="p-1 rounded mb-2">
            Want to continue with
            <span className=" text-2xl text-black font-sans font-bold px-2">
              {data === null ? (
                " "
              ) : (
                <Link href={`/profile/${data}`}>{data}</Link>
              )}
            </span>
          </h2>

          {/* <button
          onClick={logout}
          className="p-1 rounded-lg mt-4 focus:outline-none focus:border-gray-600 bg-blue-500 text-[#fff]"
        >
          Logout
        </button> */}
          <button
            onClick={getUserDetails}
            className="p-2 rounded-lg mt-4 focus:outline-none focus:border-gray-600 bg-lime-700 text-[#fff]"
          >
            GetUser Details
          </button>

          <button className="p-1 rounded-lg mt-4 focus:outline-none focus:border-gray-60  bg-lime-700 text-[#fff]">
            <Link href="/">Back to home page</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
