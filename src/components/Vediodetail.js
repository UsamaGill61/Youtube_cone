import React from "react";
import "./css.css";

const Vediodetail = ({ video }) => {
  if (!video) return <h4 className="pl-4">Loading......</h4>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  console.log(videoSrc);
  return (
    <div className="container-fluid ">
      <div className="container">
        <iframe
          class="responsive-iframe"
          allowFullScreen
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        ></iframe>
      </div>

      <div className="row mr-auto">
        <div className="col-12">
          <h4>
            {video.snippet.title} - {video.snippet.channelTitle}
          </h4>
          <h6>{video.snippet.channelTitle}</h6>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Vediodetail;
