import React from "react";
import { featureMatches } from "../utils/constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeatureMatches = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="wrapper ">
        <h1 className="text-left text-[30px] font-bold mt-6 ">
          Feature Matches
        </h1>
        <Slider className="flex gap-8 mt-5" {...settings}>
          {featureMatches?.map((element, index) => {
            console.log("featureMatches");
            console.log(featureMatches);
            return (
              <div key={index} className="w-80 relative group ">
                <div className="group-hover:scale-105 duration-150 mx-5">
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
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default FeatureMatches;
