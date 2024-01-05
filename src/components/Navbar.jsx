import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import Logo from '../assets/img/logo.svg';
import LogoWhite from '../assets/img/logoWhite.svg';
import BurgerIcon from "../assets/img/icon-burger.svg";
import CloseIcon from "../assets/img/icon-close.svg";
import { useTarget } from '@contexts/TargetContext';
import { useVideo } from "@contexts/VideoContext";
import TargetStyle from "./TargetStyle";
import selectSound from "../assets/sounds/selectSound.mp3";
import clickMenuSound from "../assets/sounds/clickMenu.mp3";
import soundOnIcon from '../assets/img/volume.svg';
import muteIcon from '../assets/img/volume-x.svg';
import { useSound } from "../contexts/soundContext";

const Navbar = () => {
  const { setActiveButton, setIsAnimating, setTargetStyle } = useTarget();
  const { playAnimation } = useVideo();
  const [isOpen, setIsOpen] = useState(false);
  const { isMuted, setIsMuted } = useSound();
  const selectSoundRef = useRef();
  const clickMenuSoundRef = useRef();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = async (event) => {

    const targetButton = event.currentTarget;
    const buttonRect = await targetButton.getBoundingClientRect();
    const defaultWidth = 10;
    const defaultHeight = 10;
    const defaultLeft = 5;
    const defaultTop = 5;

    setTargetStyle({
      bottom: `${buttonRect.bottom}px`,
      height: `${buttonRect.height + defaultHeight}px`,
      left: `${buttonRect.left - defaultLeft}px`,
      right: `${buttonRect.right}px`,
      top: `${buttonRect.top - defaultTop}px`,
      width: `${buttonRect.width + defaultWidth}px`,
      x: `${buttonRect.x}px`,
      y: `${buttonRect.y}px`,
    });

    setActiveButton(targetButton);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 60);
  };

  const handleSelectSound = () => {
    if (!isMuted) {
      selectSoundRef.current.pause();
      selectSoundRef.current.currentTime = 0.2;
      selectSoundRef.current.play()
    }
  }

  const handleMouseEnter = () => {
    // Mettez en pause le son s'il est en cours de lecture et rembobinez au début
    handleSelectSound();
  }
  const handleclickMenuSoundRef = () => {
    if (!isMuted) {
      clickMenuSoundRef.current.pause();
      clickMenuSoundRef.current.currentTime = 0.2;
      clickMenuSoundRef.current.play();
    }
  }

  const handleMouseClick = () => {
    // Mettez en pause le son s'il est en cours de lecture et rembobinez au début
    handleclickMenuSoundRef();
  }
  const toggleMuteButton = () => {
    if (!isMuted) {
      selectSoundRef.current.play();
      selectSoundRef.current.currentTime = 0.2;
    }
    setIsMuted(!isMuted);
  }

  return (
    <>
      <TargetStyle />
      <div onClick={toggleMuteButton}>
        {isMuted ? <img src={muteIcon} alt="Sound On button" className={playAnimation ? 'toggleMute hide' : 'toggleMute'} /> : <img src={soundOnIcon} alt="Mute button" className={playAnimation ? 'toggleMute hide' : 'toggleMute'} />}
      </div>
      <audio type="audio/mpeg" ref={!isMuted ? selectSoundRef : null} src={selectSound ? selectSound : null} style={{ display: "none" }} ></audio>
      <audio type="audio/mpeg" ref={!isMuted ? clickMenuSoundRef : null} src={clickMenuSound ? clickMenuSound : null} style={{ display: "none" }} ></audio>
      <button type="button" className="burger" onClick={toggleMenu}>
        <img
          src={isOpen ? CloseIcon : BurgerIcon}
          alt="Burger icon and cross close icon"
          className="burger-icon"
        />
      </button>
      <header className={isOpen ? (playAnimation ? "header open isPlaying" : "header open") : (playAnimation ? "header isPlaying" : "header")}>
        <nav className={isOpen ? "navbar-container open" : "navbar-container"} onClick={() => toggleMenu()}>
          <ul className="overlay">

            <button className="btn-primary first"
              onMouseOver={handleButtonClick}
              onMouseEnter={handleMouseEnter}
              onClick={handleMouseClick}
            >
              <NavLink to="cgi" className={({ isActive }) => (isActive ? "clicked" : "unclicked")} onClick={() => toggleMenu()}>
                <li><p>CGI</p><span></span></li>
              </NavLink>
            </button>

            <button className="btn-primary"
              onMouseOver={handleButtonClick}
              onMouseEnter={handleMouseEnter}
              onClick={handleMouseClick}
            >
              <NavLink to="videos" className={({ isActive }) => (isActive ? "clicked" : "unclicked")} onClick={() => toggleMenu()}>
                <li><p>Videos</p><span></span></li>
              </NavLink>
            </button>

            <NavLink to="/" className={({ isActive }) => (isActive ? "logo-clicked" : "logo-unclicked")} id="logoLink"
              onMouseOver={handleButtonClick}
              onClick={() => { toggleMenu(), handleMouseClick() }} onMouseEnter={handleSelectSound} >
              <li> <img id="logo" src={Logo} alt="Logo" title="Accueil" />
                <img id="logo-white" src={LogoWhite} alt="Logo white" title="Accueil" />
              </li>
            </NavLink>

            <button className="btn-primary"
              onMouseOver={handleButtonClick}
              onMouseEnter={handleMouseEnter}
              onClick={handleMouseClick}
            >
              <NavLink to="devweb" className={({ isActive }) => (isActive ? "clicked" : "unclicked")} onClick={() => toggleMenu()}>
                <li><p>Dev Web</p><span></span></li>

              </NavLink>
            </button>
            <button className="btn-primary"
              onMouseOver={handleButtonClick}
              onMouseEnter={handleMouseEnter}
              onClick={handleMouseClick}
            >
              <NavLink to="contact" className={({ isActive }) => (isActive ? "clicked" : "unclicked")} onClick={() => toggleMenu()}>
                <li><p>Contact</p><span></span></li>
              </NavLink>
            </button>
          </ul>
        </nav>
      </header >
    </>
  )
}

export default Navbar
