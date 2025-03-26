import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-overlay/dist/videojs-overlay.css"; // Ensure overlay CSS is imported
import overlay from "videojs-overlay"; // Import the overlay plugin

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, onReady } = props;
  const info = localStorage.getItem("info");

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = document.createElement("video");
      videoElement.classList.add("video-js");

      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));

      // Initialize the overlay plugin
      player.overlay({
        overlays: [
          {
            content: `<div class='overlay-text'>${info}</div>`,
            start: "play",
            end: "pause",
            align: "top-right",
          },
        ],
      });

      // Prevent context menu on right click
      videoElement.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, onReady]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div className="margin-video" data-vjs-player>
      <button
        style={{
          background: "#1877F2",
          marginTop: "70px",
          border: "none",
          color: "#fff",
          fontWeight: 600,
          padding: "10px 30px",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          window.history.back();
        }}
      >
        Back
      </button>
      <div
        style={{ width: "100%", marginTop: "20px" }}
        ref={videoRef}
        className="video-js vjs-big-play-centered"
      ></div>
    </div>
  );
};

export default VideoJS;
