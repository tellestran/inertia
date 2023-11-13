import React from "react";

const FrontPageCover = () => {
  return (
    <div className="w-full h-screen bg-[url('assets/BackgroundImage.webp')]  bg-no-repeat bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute flex items-center justify-center text-white left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] flex-col w-[780px]">
        <p className="text-5xl text-center font-bold leading-[60px] capitalize duration-300">
          <a className="hover:underline duration: 300">Furnished Versus Unfurnished Apartments: The Pros and Cons</a>
        </p>
        <p className="pt-8 max-w-[480px] text-[1.1rem] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <button className="mt-10 px-7 py-4 text-[14px] uppercase  border-2 border-white font-[500] hover:bg-white hover:text-black duration-300 hover:scale-20">
          <a className="tracking-[1px]">continue reading</a>
        </button>
      </div>{" "}
    </div>
  );
};

export default FrontPageCover;
