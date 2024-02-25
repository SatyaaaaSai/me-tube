import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sideBarOpen } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  const dispath = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  useEffect(() => {
    dispath(sideBarOpen());
  }, []);
  return (
    <div >
      <iframe
      className="ml-12 mt-3"
        width="1100"
        height="600"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
