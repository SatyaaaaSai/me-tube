import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sideBarOpen } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsConatiner from "./CommentsConatiner";
import Livepage from "./Livepage";
const WatchPage = () => {
  const dispath = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  useEffect(() => {
    dispath(sideBarOpen());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full">
        <div className=" w-full">
          <iframe
            className="ml-6 mt-3"
            width="1100px"
            height="550px"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <Livepage />
        </div>
      </div>
      <CommentsConatiner />
    </div>
  );
};

export default WatchPage;
