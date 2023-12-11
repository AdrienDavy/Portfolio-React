import { useEffect, useRef, useState } from "react";
import cgiLibrary from "@cgi/index.cgi";

const VideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState(cgiLibrary[0]);
  const videoRef = useRef(null);

  useEffect(() => {
    if (selectedVideo !== null) {
      videoRef.current.src = selectedVideo.video;
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
            <iframe title={selectedVideo.title} src={selectedVideo.video} allowFullScreen />
          </div>
        )}
      </div>
      {cgiLibrary.map((video) => (
        <div onClick={() => handleClickVideo(video)} key={video.id} style={{ background: "red", margin: "20px 0" }}>
          <p>{video.number}</p>
          <h2>{video.title}</h2>
          <h3>{video.year} </h3>
          <p>{video.description}</p>
          <p>{video.software.join(" | ")} </p>
          <iframe title={video.title} src={video.video} allowFullScreen />
        </div>
      )
      )}
    </div>
  );
};

export default VideoPlayer;
