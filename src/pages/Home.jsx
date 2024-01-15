import about from '@videoSources/about.mp4';
import lookAround from '@videoSources/lookaround.mp4';
import { useTransitionPage } from "../contexts/TransitionContext";
import { motion } from "framer-motion";
import { useWatchPlay } from '../contexts/watchPlayContext';
import { useSound } from '../contexts/soundContext';
import { useEffect, useRef, useState } from 'react';
import avatar from '../assets/img/avatar.png';

const Home = () => {
  const { isAboutPlayed, setIsAboutPlayed, currentVideo, setCurrentVideo } = useWatchPlay();
  const { isHomePage } = useTransitionPage();
  const { isMuted } = useSound();
  const [isVideoMode, setIsVideoMode] = useState(true);
  const videoRef = useRef(null);

  const toggleMode = () => {
    if (isVideoMode) videoRef.current.play();
    setIsVideoMode(!isVideoMode);
  }

  useEffect(() => {
    const handleVideoEnd = () => {
      // Quand la vidéo 'about' se termine, passez à la vidéo 'lookAround'
      setCurrentVideo('lookAround');
    };

    // Si c'est la première fois que l'on arrive sur la page Home
    if (!isAboutPlayed) {
      setIsAboutPlayed(true);
      setCurrentVideo('about');
    }
    const currentVideoRef = videoRef.current;
    // Écoutez l'événement 'ended' pour détecter la fin de la vidéo 'about'
    if (currentVideoRef) {
      currentVideoRef.addEventListener('ended', handleVideoEnd);
      currentVideoRef.onloadeddata = () => {
        currentVideoRef.play();
      };
    }

    // Nettoyez l'écouteur d'événements lors du démontage du composant
    return () => {
      if (currentVideoRef) {
        currentVideoRef.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [isAboutPlayed, setIsAboutPlayed, currentVideo, setCurrentVideo, isVideoMode]);

  return (
    <motion.div
      className="fade"
      initial={{ scale: 1.1, opacity: isHomePage ? 0 : 1 }}
      animate={{ scale: 1, opacity: isHomePage ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='home-container'>
        <button className='mode' onClick={toggleMode}>Mode : <span> {isVideoMode ? "Vidéo" : "Texte"}</span> </button>
        {isVideoMode ? (currentVideo === 'lookAround' ?
          <video id='lookAroundId' className='fade-out' ref={videoRef} src={lookAround} muted={isMuted ? "muted" : ""} loop type='video/mp4' /> :
          <>
            <video id='aboutId' className='fade-out' ref={videoRef} muted={isMuted ? "muted" : ""} type='video/mp4'>
              <source src={about} type='video/mp4' />
              <track default kind="subtitles" src="about_captions.vtt" srcLang="fr" label="Français" type="text/vtt" />
            </video>
          </>
        ) : (
          <div className="text-mode">
            <img src={avatar} alt="Picture of me" />
            <h1>Bienvenue sur mon portfolio !</h1>

            <p> Je suis Adrien Davy, <strong>développeur web full-stack</strong> passionné par la convergence entre la <strong>technologie</strong>, l&apos;<strong>art digital</strong> et les <strong>effets spéciaux</strong>.<br />

              J&apos;ai réalisé ce <strong>portfolio</strong> en me basant sur une <strong>maquette</strong> et du <strong>prototypage</strong> que j’ai créé avec <strong>Figma</strong>, puis je l’ai développé avec le framework <strong>React</strong>.<br />

              J’ai utilisé <strong>Metahuman Creator</strong> et <strong>Substance Painter</strong> pour les textures et je me suis animé sous <strong>Unreal Engine</strong>.<br />

              Je vous invite à explorer les différentes sections pour découvrir une collection de projets et de <strong>vidéos</strong> auxquels j&apos;ai participé ou que j&apos;ai créés,
              reflétant ma passion pour l&apos;<strong>innovation</strong> et la <strong>créativité</strong>.<br />

              J’utilise notamment les logiciels <strong>Adobe Premiere Pro</strong> et <strong>After Effect</strong> concernant mes vidéos.<br />
              Pour mes vidéos en <strong>3D</strong> j’utilise <strong>Cinema 4D</strong> et j’apprends à me servir de <strong>Blender</strong> et Unreal Engine.<br />

              Vous verrez également des <strong>sites</strong> <strong>web</strong> et <strong>applications</strong> auxquels j’ai participé.<br />
              J’utilise la <strong>méthode agile</strong> et <strong>SCRUM</strong> pour la <strong>gestion de projet</strong> et <strong>Git</strong>, <strong>GitHub</strong> pour le <strong>versionning</strong>.<br />

              Je peux me servir de <strong>Figma</strong> ou <strong>Adobe XD</strong> pour le <strong>maquettage</strong>.<br />
              <strong>Illustrator</strong>, <strong>Photoshop</strong> ou encore <strong>Adobe InDesign</strong> pour du <strong>design</strong>, des <strong>logos</strong> ou du <strong>print</strong>.<br />
              Je maîtrise les langages et frameworks <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React Js</strong>, <strong>Express</strong>, <strong>Node Js</strong> et <strong>MySql</strong> pour les <strong>bases de données</strong>.<br />

            </p>
            <p> Je vous souhaite une bonne visite sur mon portfolio, où la <strong>créativité</strong> et la <strong>technologie</strong> s&apos;entremêlent !
            </p>
          </div>
        )}

      </div>
    </motion.div>
  )
}

export default Home
