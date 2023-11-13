import React from "react";
import mainHero from "../assets/hero1.webp";
import heroElementImg1 from "../assets/heroElement1.webp";
import heroElementImg2 from "../assets/heroElement2.webp";
import heroElementImg3 from "../assets/heroElement3.webp";

const HomeHero = () => {
const Elements = [
  {
    id: 1,
    heading: "Interior Design – A Comprehensive Guide for Enthusiasts",
    link: "#",
    tag: "lifestyle",
    date: "november 7th 2022",
    imgSrc: heroElementImg1,
  },
  {
    id: 2,
    heading: "8 Homemade Coconut Oil Shampoo Recipes For Beautiful Hair",
    link: "#",
    tag: "home decor",
    date: "november 7th 2022",
    imgSrc: heroElementImg2,
  },
  {
    id: 3,
    heading: "6 DIY Summer Crafts for Your Home, Outdoor, and Family Fun",
    link: "#",
    tag: "lifestyle",
    date: "november 7th 2022",
    imgSrc: heroElementImg3,
  },
];
  return (
    <div className="w-[70%] flex mx-[15%] flex-col py-14">
      <h2 className="font-[600] text-4xl capitalize tracking-wide py-14">
        top stories
      </h2>
      <div
        className="grid grid-cols-2 gap-10"
        style={{ gridTemplateColumns: "55% 40%" }}
      >
        <div className="w-full flex-col h-auto border border-1 border-gray-500 rounded-lg">
          <a className="flex-col cursor-pointer">
            <img
              src={mainHero}
              className="w-full h-auto rounded-lg aspect-[1.8/1] object-cover"
            />
            <div className="px-5">
              <p className="uppercase pt-7 tracking-[2px] font-semibold text-[#312e81] ">
                lifestyle
              </p>
              <p className="text-3xl font-bold pt-7">
                24 Summer Wardrobe Staples That Are Simple, Sustainable, and
                Editor-Approved
              </p>
              <p className="py-7 uppercase text-[#737373] text-sm">
                november 7th, 2022
              </p>
            </div>
          </a>
        </div>
        <div className="w-full space-between flex-col align-center justify-center flex items-center gap-y-[42.5px]">
          {Elements.map((element) => (
            <a
              key={element.id}
              className="flex cursor-pointer h-[165px] duration-300 hover:scale-90"
            >
              <img
                src={element.imgSrc}
                alt="Square Image"
                class="h-full rounded-lg aspect-4/3 object-cover"
              />
              <div className="flex-col pl-3 ">
                <p className="uppercase tracking-[2px] font-semibold text-[#312e81] mb-4">
                  {element.tag}
                </p>
                <p className="text-xl font-bold mb-4">{element.heading}</p>
                <p className="uppercase text-[#737373] text-[12px] mb-4">
                  {element.date}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
