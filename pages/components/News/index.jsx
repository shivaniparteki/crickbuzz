import React from "react";
import Link from "next/link";

export default function News({ posts }) {
  // console.log("posts______________");
  // console.log(posts);
  return (
    <>
      <div className="wrapper border border-[#f9f9f9] bg-slate-100 my-5 h-[85vh] w-[19rem] p-4 rounded-md shadow-[0px_6px_22px_-10px_#686868] overflow-y-scroll">
        <h1 className="text-left text-[30px] font-bold ">Latest News</h1>
        <div className="flex ">
          <ul>
            {posts?.map((data, index) => {
              return (
                <li key={index}  className=" capitalize text-gray-500 mt-5 mb-2 border-b hover:underline ">
                  <Link href={`/components/News/${data.id}`}>{data.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}


