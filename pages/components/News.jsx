import React from "react";
import { news } from "../utils/constant";

const News = () => {
  return (
    <>
      <div className="wrapper border border-[#f9f9f9] my-5 h-[85vh] w-[19rem] p-4 rounded-md shadow-[0px_6px_22px_-10px_#686868] overflow-y-scroll">
        <h1 className="text-left text-[30px] font-bold ">Latest News</h1>
        <div className="flex ">
          <ul>
            {news?.map((element, index) => {
              return (
                <li key={index} className="border-b py-2 ">
                  <a href="#" className="hover:underline justify-center pt-2">
                    {element?.blog}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default News;
