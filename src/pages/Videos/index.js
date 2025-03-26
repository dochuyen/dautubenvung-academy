import React, { useEffect } from "react";
import VideoJS from "./VideoJS";
import videojs from "video.js";
import { useParams } from "react-router-dom";
import axios from "axios";
export const VideoGlobal = () => {
  const playerRef = React.useRef(null);

  // const getVideo = async (videoId: any) => {
  //   let videoResponse = await axios.get(`${process.env.REACT_APP_PORT}/videos/19/${videoId}`);
  //   let video = videoResponse.data;
  //   console.log("video: ", video);
  // }

  let videoId = useParams().videoId;
  let courseId = useParams().courseId;
  useEffect(() => {
    console.log("videoId: ", videoId);
    // getVideo(videoId)
  }, [videoId, courseId]);
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates: [0.5, 1, 1.5, 2],
    sources: [
      {
        src: `${process.env.REACT_APP_PORT}/videos/${courseId}/${videoId}`,
        type: "video/mp4",
      },
    ],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />;
};
