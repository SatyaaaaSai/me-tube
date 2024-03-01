import React from "react";

const VideoCard = ({ info }) => {

  const viewFormat=(count)=>{
    if(count>1000000){
        return (count/1000000).toFixed(2)+"M";
    } else if(100000){
       return (count/1000).toFixed(0)+"K"
    } else {
      return count.toString();
    }
  }
  //console.log(info);
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <ul>
        <li>
          <img alt="video" className="rounded-lg" src={info?.snippet?.thumbnails?.medium?.url} />
        </li>
        <li>{info?.snippet?.localized?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{viewFormat(info?.statistics?.viewCount)} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
