import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sideBarOpen } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsConatiner from "./CommentsConatiner";
const WatchPage = () => {
  const dispath = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  useEffect(() => {
    dispath(sideBarOpen());
  }, []);
  return (
    <div className="flex flex-col">
    <div>
      <iframe
        className="ml-12 mt-3"
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <div>
      <CommentsConatiner/>
    </div>
    </div>
  );
};

export default WatchPage;
