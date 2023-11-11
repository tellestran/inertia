import React from "react";
import carouselImg1 from "../assets/carouselImg1.webp";
import carouselImg2 from "../assets/carouselImg2.webp";
import carouselImg3 from "../assets/carouselImg3.webp";
import carouselImg4 from "../assets/carouselImg4.webp";

const Carousel = () => {
    const Carousels = [
      {
        id: 1,
        srcImg: carouselImg1,
        description: "the beginner's guide to the paleo diet",
        src: "#",
      },
      {
        id: 2,
        srcImg: carouselImg2,
        description: "according to nutritionists, these are ..",
        src: "#",
      },
      {
        id: 3,
        srcImg: carouselImg3,
        description: "the beginner's guide to the paleo diet",
        src: "#",
      },
      {
        id: 4,
        srcImg: carouselImg4,
        description: "the beginner's guide to the paleo diet",
        src: "#",
      },
    ];
  return (
    <div className="bg-[#ebe9eb] w-full h-[144px] justify-center">
      <div className="grid grid-cols-4 gap-5 px-[120px] py-6 align-center justify-center items-center">
        {Carousels.map((carousel) => (
          <div key={carousel.id} className="bg-[#fff] rounded-lg">
            <a className="cursor-pointer">
              <div className="flex justify-center align-middle items-center">
                <img
                  src={carousel.srcImg}
                  className="aspect-1/1 object-cover w-[96px] rounded-lg"
                />
                <p className="uppercase text-[0.75rem] text-black overflow-hidden px-2.5 font-bold hover:underline">
                  {carousel.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
