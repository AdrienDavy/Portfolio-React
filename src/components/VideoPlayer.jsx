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
  console.log(videoRef);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = selectedVideo.video;
      videoRef.current.load();
    }
  }, [selectedVideo]);

  const handleClickVideo = (video) => {
    setSelectedVideo(video);
  };

  const handlePlayButton = () => {
    videoRef.current.play();
  };


  return (
    <div style={{ background: "black" }}>
      <div style={{ position: "fixed", background: "blue" }}>
        {selectedVideo && (
          <div>
            <button onClick={() => handlePlayButton()}>Play</button>
            <p>{selectedVideo?.number}</p>
            <h2>{selectedVideo?.title}</h2>
            <img src={selectedVideo?.thumbnail} alt={selectedVideo?.title} style={{ opacity: "0.5", width: "500px", height: "auto" }} />
            <video ref={videoRef} src={selectedVideo?.video} muted controls width="400" />
          </div>
        )}
      </div>
      {
        libraryToDisplay.map((video) => (
          <div onClick={() => handleClickVideo(video)} key={video.id} style={{ background: "red", margin: "20px 0" }}>
            <p>{video?.number}</p>
            <h2>{video?.title}</h2>
            <h4>{video?.year} </h4>
            <p>{video?.description}</p>
            <h3>{video?.work ? video.work.join(" | ") : null} </h3>
            <h3>{video?.software.join(" | ")} </h3>
            <img src={video?.thumbnail} alt={video?.title} style={{ width: "500px", height: "auto" }} />
          </div>
        )
        )
      }
    </div >
  );
};

export default VideoPlayer;