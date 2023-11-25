import React from 'react'
import frontPageImg from '../../assets/frontPageEditorial1.webp'
import {BsArrowRightShort} from 'react-icons/bs'

const FrontPageEditorial = () => {
  return (
    <div className="w-full h-auto justify-center ">
      <div className="grid grid-cols-2 mx-[220px] py-12 ">
        <div
          className="w-[540px] items-center justify-center align-center 
        "
        >
          <img
            src={frontPageImg}
            className="w-[100%] aspect-1/1 object-cover align-middle"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center w-[560px]">
          <a className="text-[36px] font-semibold leading-11  mx-5 leading-10.5 py-6 cursor-pointer">
            Why you should use packing cubes to improve your (traveling) life
          </a>
          <p className="text-[16px] opacity-[0.7] overflow-hidden pb-8 text-[#515151]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.
            Rhoncus dolor purus non
          </p>
          <div>
            <a className="flex uppercase font-[600] hover:underline justify-center items-center cursor-pointer text-[15px] duration-300 hover:scale-90">
              Continue Reading{" "}
              <BsArrowRightShort className="h-5 w-5 hover:underline" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPageEditorial
