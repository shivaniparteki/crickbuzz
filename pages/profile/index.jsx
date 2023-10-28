import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      console.log("Hello_________________________");
      const res = await axios.get("/api/me");
      console.log("res.data");
      console.log(res.data);
      setData(res.data.data.username);
    } catch (error) {
      console.log("Bye_________________________");
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="text-1xl flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile</h1>
        <hr className="border w-[12rem] my-4" />
        <p>Profile Page</p>

        <h2 className="p-1 rounded bg-slate-600">
          {data === null ? " " : <Link href={`/profile/${data}`}>{data}</Link>}
        </h2>

        <button
          onClick={logout}
          className="p-1 rounded-lg mt-4 focus:outline-none focus:border-gray-600 bg-blue-500 text-[#fff]"
        >
          Logout
        </button>
        <button
          onClick={getUserDetails}
          className="p-1 rounded-lg mt-4 focus:outline-none focus:border-gray-600 bg-lime-700 text-[#fff]"
        >
          GetUser Details
        </button>

        <button className="p-1 rounded-lg mt-4 focus:outline-none focus:border-gray-600 bg-gradient-to-r from-cyan-500 to-blue-500 text-[#fff]">
          <Link href="/">Back to home page</Link>
        </button>
      </div>
    </>
  );
};

export default Profile;
