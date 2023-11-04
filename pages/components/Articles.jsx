import React from "react";
import { articles } from "../utils/constant";

const Articles = () => {
  return (
    <>
      <div className="wrapper border border-[#f9f9f9] bg-gray-100 mx-6 my-5 w-[44rem] px-6 rounded-md ">
        {articles?.map((element, index) => {
          return (
            <div key={index} className="my-8">
              <h3 className="text-[1.1rem] mb-2 font-semibold uppercase ">
                {element?.title}
              </h3>
              <div className="w-auto">
                <img
                  className="w-full rounded-md "
                  src={element?.img?.src}
                  alt="indian team"
                />
              </div>
              <h2 className="text-[1.5rem] text-blue-600 capitalize mt-3 hover:scale-100 hover:text-blue-800 hover:underline">
                <a href="#">
                  {element?.heading}
                </a>
              </h2>

              <p className="my-3 text-justify text-gray-500 text-[1.1rem]">
               {element?.dec}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Articles;
