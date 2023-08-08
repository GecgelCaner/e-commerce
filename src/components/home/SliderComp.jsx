import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex  items-center bg-gray-100 px-5">
          <div>
            <div className="text-6xl font-bold ">
              Lorem ipsum dolor sit amet consectetur.{" "}
            </div>
            <div className="text-lg my-4 mt-5 mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              nesciunt beatae iste quibusdam blanditiis, placeat consequuntur
              quas sapiente vero tempore ex deleniti perferendis error,
              temporibus sint inventore, rerum ab excepturi?
            </div>
            <div className="border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center bg-gray-200 ">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f67930e0-a953-43b5-9214-86dcef9dad1a/air-force-1-shadow-ayakkab%C4%B1s%C4%B1-s07s35.png"
            alt=""
            width={500}
            height={200}
          />
        </div>
        <div className="!flex  items-center bg-gray-100 px-5">
          <div>
            <div className="text-6xl font-bold ">
              Lorem ipsum dolor sit amet consectetur.{" "}
            </div>
            <div className="text-lg my-4 mt-5 mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              nesciunt beatae iste quibusdam blanditiis, placeat consequuntur
              quas sapiente vero tempore ex deleniti perferendis error,
              temporibus sint inventore, rerum ab excepturi?
            </div>
            <div className="border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center bg-gray-200 ">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/8bfa48ec-3ba3-42a6-839e-04dae8e64619/air-force-1-07-ayakkab%C4%B1s%C4%B1-MSJ6C8.png"
            alt=""
            width={500}
            height={200}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
