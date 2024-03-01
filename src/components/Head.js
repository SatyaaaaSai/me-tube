import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheInsert } from "../utils/searchSlice";

const Head = () => {
  //subscribing the store cache Search
  const cacheResult = useSelector((store) => store.search);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const dispath = useDispatch();
  const handleMenu = () => {
    dispath(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheResult[search]) {
        setSearchData(cacheResult[search]);
      } else {
        fetchSearchData();
      }
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, [search]);

  const fetchSearchData = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + search);
    const json = await data.json();
    setSearchData(json[1]);
    dispath(
      cacheInsert({
        [search]: json[1],
      })
    );
    
  };

  return (
    <div className="grid grid-flow-col shadow-lg m-auto ">
      <div className="flex col-span-1 mx-10">
        <img
          onClick={() => handleMenu()}
          className="w-12 h-12 m-2 p-2 cursor-pointer"
          alt="hamburger-menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
          <img
            className="w-24 h-16 cursor-pointer"
            alt="youtube-logo"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 my-5 mx-16">
        <div>
          <input
            className="w-1/2 border border-black bg-gray-100 rounded-l-full py-2 px-6"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowSearch(true)}
            onBlur={() => setShowSearch(false)}
          />
          <button className="border bg-slate-100 py-2 px-3 rounded-r-full border-black">
            🔍
          </button>
        </div>
        {showSearch && (
          <div className="absolute bg-white  w-[29.5rem] px-3 py-3 shadow-lg rounded-lg">
            <ul>
              {searchData.map((s) => (
                <li key={s} className="px-2 py-2 hover:bg-gray-50 shadow-sm">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
