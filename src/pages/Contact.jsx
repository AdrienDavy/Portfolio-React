import FormTemplate from "@components/FormTemplate"
import contact from '@videoSources/contact.mp4';
import lookAround from '@videoSources/lookaround.mp4';
import { useTransitionPage } from "../contexts/TransitionContext";
import { motion } from "framer-motion";
import { useSound } from "../contexts/soundContext";
import { useWatchPlay } from "../contexts/watchPlayContext";
import { useEffect, useRef } from "react";

const Contact = () => {
  const { isContactPage } = useTransitionPage();
  const { isMuted } = useSound();
  const { isContactPlayed, setIsContactPlayed, currentContactVideo, setCurrentContactVideo } = useWatchPlay();
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnd = () => {
      // Quand la vidéo 'contact' se termine, passez à la vidéo 'lookAround'
      setCurrentContactVideo('lookAround');
    };

    // Si c'est la première fois que l'on arrive sur la page Home
    if (!isContactPlayed) {
      setIsContactPlayed(true);
      setCurrentContactVideo('contact');
    }
    const currentContactVideoRef = videoRef.current;
    // Écoutez l'événement 'ended' pour détecter la fin de la vidéo 'contact'
    if (currentContactVideoRef) {
      currentContactVideoRef.addEventListener('ended', handleVideoEnd);
      currentContactVideoRef.onloadeddata = () => {
        currentContactVideoRef.play();
      };
    }

    // Nettoyez l'écouteur d'événements lors du démontage du composant
    return () => {
      if (currentContactVideoRef) {
        currentContactVideoRef.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [isContactPlayed, setIsContactPlayed, currentContactVideo, setCurrentContactVideo]);

  return (
    <motion.div
      className="fade"
      initial={{ x: 100, opacity: isContactPage ? 0 : 1 }}
      animate={{ x: 0, opacity: isContactPage ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-container">
        <div className="form">
          <h1>Contactez moi</h1>
          <FormTemplate />
          <div className="cv-container">
            <a href="cv.pdf" target="_blank" rel="noreferrer" download="CV Adrien Davy 2023 - Développeur Web et Web Mobile.pdf" title="Télécharger mon CV">
              Télécharger mon CV
            </a>

          </div>
        </div>
        {currentContactVideo === 'lookAround' ?
          <video id='lookAroundId' className='fade-out' ref={videoRef} src={lookAround} muted={isMuted ? "muted" : ""} loop type='video/mp4' /> :
          <>
            <video id='contactId' className='fade-out' ref={videoRef} muted={isMuted ? "muted" : ""} type='video/mp4'>
              <source src={contact} type='video/mp4' />
              <track default kind="subtitles" src="./contact_captions.vtt" srcLang="fr" label="Français" type="text/vtt" />
            </video>
          </>}
      </div>
    </motion.div >
  )
}

export default Contact
