import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FaRegBookmark, FaChartSimple } from "react-icons/fa6";

const entryhead = () => {
  return (
    <div className="flex justify-center items-center py-8 ">
      <div
        className="text-center max-w-[1200px] w-[--container] 
    ml-auto mr-auto"
      >
        <div className="mb-3 inline-block">
          <ul className="list-none">
            <li>
              <a
                href=""
                className="bg-white rounded-[50px] box-shadow px-[12px] py-[12px] text-[12px] font-[700] tracking-[1px] my-[4px] uppercase text-[--color-accent] cursor-revert"
              >
                Lifestyle
              </a>
            </li>
          </ul>
        </div>
        <h1 className="mb-2 max-w-[840px] font-[700] break-words text-[2.67rem] text-center">
          24 Summer Wardrobe Staples That Are Simple, Sustainable, and
          Editor-Approved
        </h1>
        <h2 className="pt-4 max-w-[640px] text-[--color-500] font-[400] text-[1.2rem] tracking-[1.5] transform-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </h2>
        <div className="pt-8 text-[--color-500] text-[0.9rem] tracking-[3.2] font-[500] flex align-center justify-center items-center gap-4">
          <div className="flex align-center justify-center items-center gap-1.5">
            <img
              src="https://secure.gravatar.com/avatar/0c5070b44eac296bedb98b94a9062902?s=35&d=mm&r=g"
              className="rounded-[50%] box-shadow mr-2 align-middle max-w-[100%] h-auto"
            />
            <a className="">
              <span className=""> Lucas Sebastian</span>
            </a>
          </div>
          <div className="flex mr-4  align-center justify-center items-center gap-1.5">
            <FaRegClock className="w-5 h-5 mr-2" />
            <time> November 4, 2022 </time>
            <span className=" border-[1px] border-solod border-gray-50 rounded-[4px] ml-2 p-2 text-[0.75rem]">
              {" "}
              Updated{" "}
            </span>
          </div>
          <div className="flex  align-center justify-center items-center gap-1.5">
            <FaRegBookmark className="h-5 w-5" />
            <p>1 min Read</p>
          </div>
          <div className="flex  align-center justify-center items-center gap-1.5">
            <FaChartSimple className="h-5 w-5" />
            181 views
          </div>
        </div>
      </div>
    </div>
  );
};

export default entryhead;
