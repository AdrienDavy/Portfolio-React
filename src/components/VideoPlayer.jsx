import { useEffect, useRef, useState } from "react";
import cgiLibrary from "@cgi/index.cgi";
import videoLibrary from "@videos/index.videos";
import { useLocation } from "react-router-dom";
import playButton from '../assets/img/play.svg';
import backtoLibrary from '../assets/img/backtoLibrary.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import { useVideo } from "@contexts/VideoContext";

const VideoPlayer = () => {

  const { playAnimation, setPlayAnimation } = useVideo();
  const location = useLocation();
  const isCgiPage = location.pathname.includes("/cgi");
  const libraryToDisplay = isCgiPage ? cgiLibrary : videoLibrary;
  const [selectedVideo, setSelectedVideo] = useState(isCgiPage ? cgiLibrary[0] : videoLibrary[0]);
  const videoRef = useRef(null);



  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = selectedVideo.video;
      videoRef.current.load();
    }
  }, [selectedVideo]);


  const handleClickVideo = (video) => {
    setSelectedVideo(video);
  };

  const handleTogglePlayPause = () => {
    !playAnimation ?
      setTimeout(() => {
        videoRef.current.play();
      }, 150) :
      videoRef.current.pause();
    setPlayAnimation(!playAnimation)
  };


  return (
    <div>
      <div className={playAnimation ? "slider hide" : "slider"} >
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          direction={'vertical'}
          scrollbar={true}
          mousewheel={true}
          modules={[FreeMode, Scrollbar, Mousewheel]}
          className="mySwiper"
        >

          {
            libraryToDisplay.map((video) => (
              <SwiperSlide onClick={() => handleClickVideo(video)} key={video.id} className="swiper-wrapper">
                <p>{video?.number}</p>
                <h2>{video?.title}</h2>
                <div className="thumbnail-filter" ></div>
                <img src={video?.thumbnail} alt={video?.title} style={{ width: "400px", height: "100%" }} />
              </SwiperSlide>
            )
            )
          }
        </Swiper>
      </div>
      <div>
        {selectedVideo && (
          <div className={playAnimation ? "selected-video playing" : "selected-video"}>
            <div className={playAnimation ? "text hide" : "text"}>
              <p className="number">{selectedVideo?.number}</p>
              <h2>{selectedVideo?.title}</h2>
              <h4>{selectedVideo?.year} </h4>
              <p className="description">{selectedVideo?.description}</p>
              <h3>{selectedVideo?.work ? selectedVideo.work.join(" | ") : null} </h3>
              <h3>{selectedVideo?.software.join(" | ")} </h3>
              <button onClick={() => handleTogglePlayPause()}>
                <img src={playButton} alt="Button play" />
              </button>
            </div>
            <div className={playAnimation ? "thumbnail-filter hide" : "thumbnail-filter"} onClick={() => handleTogglePlayPause()}  ></div>
            <img src={selectedVideo?.thumbnail} alt={selectedVideo?.title} className={playAnimation ? "thumbnail hide" : "thumbnail"} />
            <video ref={videoRef} src={selectedVideo?.video} muted controls className="video-selected" />

            <div className={playAnimation ? "back-button" : "back-button hide"} title="Retour à la librarie" onClick={() => handleTogglePlayPause()} >
              <img src={backtoLibrary} alt="Back to Library" />
            </div>
          </div>
        )}
      </div>
    </div >
  );
};

export default VideoPlayer;