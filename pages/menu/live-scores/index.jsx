import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

function LiveScores() {
  return (
    <>
      <div className=" bg-gradient-to-b from-black   to-gray-700 h-[100vh]">
        <Link href={"/"}>
          {" "}
          <BsArrowLeft className="text-white px-3 text-[4rem] cursor-pointer " />{" "}
        </Link>
        <h1 className=" flex justify-center text-[2rem] text-white mt-5 ">
          Live Scores Page
        </h1>
      </div>
    </>
  );
}

export default LiveScores;
