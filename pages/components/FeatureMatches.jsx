import React from "react";
import { featureMatches } from "../utils/constant";
import Slider from "react-slick";

const FeatureMatches = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  // };

  return (
    <>
      <div className="wrapper ">
        <h1 className="text-left text-[30px] font-bold mt-6 ">
          Feature Matches
        </h1>
        <div className="flex gap-8 mt-5">
          {featureMatches?.map((element, index) => {
            // console.log("element");
            // console.log(element);
            return (
              // <Slider {...settings}>
                <div key={index} className="w-80 relative group ">
                  <div className="group-hover:scale-105 duration-150 ">
                    <img
                      className="w-full rounded-md "
                      src={element?.img?.src}
                      alt="cricket"
                    />
                  </div>
                  <p className="absolute hover:underline w-full py-4 bottom-2 bg-[#d3d3d366] text-[#fff] text-center">
                    {element?.desc}
                  </p>
                </div>
              // </Slider>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FeatureMatches;
