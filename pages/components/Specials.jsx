import React from "react";
import { specials } from "../utils/constant";

const Specials = () => {
  return (
    <>
      <div className="wrapper border border-[#f9f9f9] bg-slate-100 my-5 h-[85vh] w-[19rem] p-4 rounded-md shadow-[0px_6px_22px_-10px_#686868] overflow-y-scroll">
        <h1 className="text-left text-[30px] font-bold ">Specials</h1>
        {specials?.map((element, index) => {
          return (
            <div key={index}>
              <img
                className="my-4 rounded-md"
                src={element?.img?.src}
                alt="team"
              />
              <p className="text-justify tracking-tighter  text-gray-500">
               {element?.desc}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Specials;
