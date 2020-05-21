import React from "react";
import './Vediolistitem.css'

export const Vediolistitem = ({ video,onVideoSelect }) => {
  return (
    <div className="container-fluid  mr-auto  px-0">
      <div className="row">
        <div onClick={()=>{onVideoSelect(video)}} className="col hlo my-3">
          <img className="" src={video.snippet.thumbnails.medium.url}></img>
          <h5 >{video.snippet.title}</h5>
        </div>
      </div>
    </div>
  );
};
