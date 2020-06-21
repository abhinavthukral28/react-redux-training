import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderList = videos.map((video) => {
    return (
      <div key={video.id.videoId} className="ui divided list">
        <VideoItem video={video} onVideoSelect={onVideoSelect}></VideoItem>
      </div>
    );
  });
  return <div>{renderList}</div>;
};
export default VideoList;
