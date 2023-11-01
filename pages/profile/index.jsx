import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const Profile = (props) => {
  console.log("props");
  console.log(props);
  const router = useRouter();

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
      <div className="flex flex-col items-center min-h-screen justify-center bg-white  ">
        <div className="wrapper w-[28rem] flex flex-col items-center justify-center gap-3 font-sans bg-gray-100 text-black  rounded-lg  px-16 py-8 h-[30rem] shadow-[0px_6px_25px_0px_#43454944] ">
          <h1>Profile</h1>
          <hr className="border w-[12rem] my-0.5" />
          <p>Profile Page</p>

          <h2 className="p-1 rounded ">
            Want to continue with
            <span className=" text-2xl text-black font-sans font-bold px-2">
              {/* {data === null ? (
                " "
              ) : (
                )} */}
                <Link href={`/profile/`}>fdbdkfj</Link>
            </span>
          </h2>

          {/* <button
          onClick={logout}
          className="p-1 rounded-lg mt-4 focus:outline-none focus:border-gray-600 bg-blue-500 text-[#fff]"
        >
          Logout
        </button> */}
          {/* <button
            onClick={getUserDetails}
            className="p-1 rounded-lg mt-4 focus:outline-none focus:border-gray-600 bg-lime-700 text-[#fff]"
          >
            GetUser Details
          </button> */}

          <button className="p-1 rounded-lg mt-4 focus:outline-none focus:border-gray-600 bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff]">
            <Link href="/">Back to home page</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
