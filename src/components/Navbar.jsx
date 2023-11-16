import React from "react";
import logo from "../assets/logo.webp";
import { BsSearch, BsPinterest, BsInstagram, BsTwitter } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
      <nav className="flex items-center p-6 bg-[#ffffff] text-[#171717] uppercase text-sm border-b-[1px] border-gray header-shadow">
        <div className="flex items-center space-x-4 w-[40%]">
          <a href="#" className="">
            home
          </a>
          <a href="#" className="">
            feature
          </a>
          <a href="#" className="">
            pages
          </a>
          <a href="#" className="">
            shop
          </a>
        </div>
        <div className="flex w-[20%] justify-center align-center items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto " />
        </div>
        <div className="flex items-center space-x-8 w-[40%] justify-end uppercase">
          <a href="#" className="flex items-center justify-center space-x-4">
            <BsSearch className="h-6 w-6 mr-4" />
            Search
          </a>
          <a href="#" className="">
            <BsPinterest className="h-6 w-6" />
          </a>
          <a href="#" className="">
            <BsTwitter className="h-6 w-6" />
          </a>
          <a href="#" className="">
            <BsInstagram className="h-6 w-6" />
          </a>
          <a href="#" className="">
            <AiOutlineShopping className="h-7 w-7" />
          </a>
          <button className="uppercase px-5 py-3 border border-1  border-[#312e81] text-[#312e81] cursor-pointer rounded-md">
            subcribe
          </button>
        </div>
      </nav>
  );
};

export default Navbar;
