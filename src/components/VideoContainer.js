import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const json = await data.json();
    setvideos(json.items);
    //  console.log(json.items);
  };
  return (
    <div className="flex flex-wrap">

      
      {videos.map((video) => (
       <Link to={"/watch?v="+video.id} key={video.id}> <VideoCard  info={video} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
