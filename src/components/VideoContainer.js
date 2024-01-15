import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/contants";
import axios from "axios";
import { AdVideoCard } from "./VedioCard";
import VideoCard from "./VedioCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await axios.get(YOUTUBE_VIDEOS_API);
    setVideos(data.data.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]} key={videos[0].id}/>}
      {videos.map((video) => (
       <Link to={'/watch?v='+video.id} key={video.id}><VideoCard info={video} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;