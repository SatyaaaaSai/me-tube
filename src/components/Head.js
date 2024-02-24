import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispath = useDispatch();

  const handleMenu = () => {
    dispath(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg ">
      <div className="flex col-span-1 mx-10">
        <img
          onClick={() => handleMenu()}
          className="w-12 h-12 m-2 p-2 cursor-pointer"
          alt="hamburger-menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <img
          className="w-24 h-16 cursor-pointer"
          alt="youtube-logo"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
        />
      </div>
      <div className="col-span-10 my-5 mx-16">
        <input
          className="w-1/2 border border-black bg-gray-100 rounded-l-full py-2 px-4"
          type="text"
          placeholder="Search"
        />
        <button className="border bg-slate-100 py-2 px-3 rounded-r-full border-black">
          🔍
        </button>
      </div>
      <div className="col-span-1 m-4 cursor-pointer">
        <img
          className="w-12 h-12"
          alt="user-logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
