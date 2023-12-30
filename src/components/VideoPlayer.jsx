import { useEffect, useRef, useState } from "react";
import cgiLibrary from "@cgi/index.cgi";
import videoLibrary from "@videos/index.videos";
import { useLocation } from "react-router-dom";
import playButton from '../assets/img/play.svg';
import toggleLibrary from "../assets/img/toggleLibrary.svg"
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
  const [isSlided, setIsSlided] = useState(true);
  const videoRef = useRef(null);
  useEffect(() => {
    // Fonction de gestionnaire de redimensionnement
    const handleResize = () => {
      // Mettre à jour l'état en fonction de la largeur de la fenêtre
      setIsSlided(window.innerWidth <= 660);
    };

    // Ajouter un écouteur d'événement de redimensionnement
    window.addEventListener('resize', handleResize);

    // Appeler la fonction de gestionnaire de redimensionnement une fois lors du montage
    handleResize();

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = selectedVideo.video;
      videoRef.current.load();
    }
  }, [selectedVideo]);


  const handleClickVideo = (video) => {
    setSelectedVideo(video);
  };

  const responsiveToggleLibraryButton = () => {
    if (window.innerWidth <= 660)
      setIsSlided(!isSlided);
  }

  const handleTogglePlayPause = () => {
    !playAnimation ?
      setTimeout(() => {
        videoRef.current.play();
      }, 150) :
      videoRef.current.pause();
    setPlayAnimation(!playAnimation);
    responsiveToggleLibraryButton();
  };



  return (
    <>
      <div className={playAnimation ? "toggle-description hide" : "toggle-description"} onClick={() => responsiveToggleLibraryButton()}>
        <img className={isSlided ? "toggle-library-img switch" : "toggle-library-img"} src={toggleLibrary} alt="Back to Library" />
      </div>

      <div>
        {selectedVideo && (
          <div className={playAnimation ? "selected-video playing" : "selected-video"}>
            <div className={playAnimation ? "text hide" : "text"} onClick={() => handleTogglePlayPause()}>
              <p className="number">{selectedVideo?.number}</p>
              <h2>{selectedVideo?.title}</h2>
              <h4>{selectedVideo?.year} </h4>
              <p className="description">{selectedVideo?.description}</p>
              {selectedVideo?.work ? <h3>{selectedVideo.work.join(" | ")}</h3> : null}
              <h3>{selectedVideo?.software.join(" | ")} </h3>
              <button onClick={() => handleTogglePlayPause()}>
                <img src={playButton} alt="Button play" />
              </button>
            </div>
            <div className={playAnimation || isSlided ? "slider hide" : "slider"} >
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
                    <SwiperSlide onClick={() => { handleClickVideo(video), responsiveToggleLibraryButton() }} key={video.id} className="swiper-wrapper">
                      <div className="swiper-slide-content" style={{ background: `url(${video?.thumbnail}) no-repeat center`, backgroundSize: 'cover' }}>
                        <p>{video?.number}</p>
                        <h2>{video?.title}</h2>
                        <div className="thumbnail-filter" ></div>
                      </div>
                    </SwiperSlide>
                  )
                  )
                }
              </Swiper>
            </div >
            <div className={playAnimation ? "thumbnail-filter hide" : "thumbnail-filter"} onClick={() => { handleTogglePlayPause(), responsiveToggleLibraryButton() }}  ></div>
            <img src={selectedVideo?.thumbnail} alt={selectedVideo?.title} className={playAnimation ? "thumbnail hide" : "thumbnail"} />
            <video ref={videoRef} src={selectedVideo?.video} muted controls className="current-video" />
            <div className={playAnimation ? "back-button" : "back-button hide"} title="Retour à la librarie" onClick={() => handleTogglePlayPause()} >
              <img src={backtoLibrary} alt="Back to Library" />
            </div>

          </div>
        )}
      </div >
    </ >
  );
};

export default VideoPlayer;