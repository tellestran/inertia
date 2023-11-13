import React from "react";
import FrontPageImg1 from "../assets/FrontPageImg1.webp";
import FrontPageImg2 from "../assets/FrontPageImg2.webp";
import FrontPageImg3 from "../assets/FrontPageImg3.webp";
import FrontPageImg4 from "../assets/FrontPageImg4.webp";
import { BsArrowRightShort } from "react-icons/bs";

const FrontPagePick = () => {
  const Pagepicks = [
    {
      id: 1,
      imgSrc: FrontPageImg1,
      description: "Interior Design – A Comprehensive Guide for Enthusiasts",
    },
    {
      id: 2,
      imgSrc: FrontPageImg2,
      description: "5 Design Books You Can Get This Summer",
    },
    {
      id: 3,
      imgSrc: FrontPageImg3,
      description: "Furnished Versus Unfurnished Apartments: The Pros and Cons",
    },
    {
      id: 4,
      imgSrc: FrontPageImg4,
      description:
        "Kitchen Essentials – What Your Brand New Apartment Really Needs",
    },
  ];
  return (
    <div className="py-12 w-full flex justify-center items-center">
      <div className="max-w-[1200px] w-[1200px]">
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold capitalize align-bottom">
            {" "}
            home decor{" "}
          </h2>
          <button className=" group mr-0 text-[14px] uppercase text-[#312e81] font-semibold flex hover:underline duration-300 hover:scale-90 align-flex-end">
            more home color
            <span>
              <BsArrowRightShort className="h-5 w-5 group-hover:underline" />
            </span>
          </button>
        </div>
        <div className="grid grid-cols-4 pt-8 gap-6">
          {Pagepicks.map((pagepick) => (
            <div key={pagepick.id} className="flex-col duration-300 hover:scale-90">
              <div>
                <img
                  src={pagepick.imgSrc}
                  className="aspect-1.5/1 w-[282px] object-cover"
                />
              </div>
              <p className="pt-6 text-xl font-semibold w-full hover:underline ">
                {pagepick.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrontPagePick;
