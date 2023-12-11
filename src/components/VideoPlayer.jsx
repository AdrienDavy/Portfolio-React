import { useEffect, useRef, useState } from "react";
import cgiLibrary from "@cgi/index.cgi";
import videoLibrary from "@videos/index.videos";
import { useLocation } from "react-router-dom";

const VideoPlayer = () => {

  const location = useLocation();
  const isCgiPage = location.pathname.includes("/cgi");
  const libraryToDisplay = isCgiPage ? cgiLibrary : videoLibrary;
  const [selectedVideo, setSelectedVideo] = useState(isCgiPage ? cgiLibrary[0] : videoLibrary[0]);
  const videoRef = useRef(null);


  useEffect(() => {
    if (selectedVideo !== null) {
      videoRef.current = selectedVideo.video;
    }
  }, [selectedVideo]);

  const handleClickVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div style={{ background: "black" }}>
      <div style={{ position: "fixed", background: "blue" }}>
        {selectedVideo && (
          <div ref={videoRef}>
            <p>{selectedVideo.number}</p>
            <h2>{selectedVideo.title}</h2>
            <img src={selectedVideo.thumbnail} alt={selectedVideo.title} />
            <iframe title={selectedVideo.title} src={selectedVideo.video} allowFullScreen />
          </div>
        )}
      </div>
      {libraryToDisplay.map((video) => (
        <div onClick={() => handleClickVideo(video)} key={video.id} style={{ background: "red", margin: "20px 0" }}>
          <p>{video.number}</p>
          <h2>{video.title}</h2>
          <h3>{video.year} </h3>
          <p>{video.description}</p>
          <p>{video.software.join(" | ")} </p>
          <img src={video.thumbnail} alt={video.title} />
        </div>
      )
      )}
    </div>
  );
};

export default VideoPlayer;
