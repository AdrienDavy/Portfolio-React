import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from '../assets/img/logo.svg';
import LogoWhite from '../assets/img/logoWhite.svg';
import BurgerIcon from "../assets/img/icon-burger.svg";
import CloseIcon from "../assets/img/icon-close.svg";
import { useVideo } from "@contexts/VideoContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { playAnimation } = useVideo();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [targetStyle, setTargetStyle] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });





  const handleButtonClick = (event) => {
    const targetButton = event.currentTarget;
    const buttonRect = targetButton.getBoundingClientRect();

    setTargetStyle({
      width: `${buttonRect.width}px`,
      height: `${buttonRect.height}px`,
      top: `${buttonRect.top}px`,
      left: `${buttonRect.left}px`,
    });
    console.log(buttonRect);
  };

  return (
    <>
      <button type="button" className="burger" onClick={toggleMenu}>
        <img
          src={isOpen ? CloseIcon : BurgerIcon}
          alt="Burger icon and cross close icon"
          className="burger-icon"
        />
      </button>
      <header className={playAnimation ? "header hide" : "header"}>
        <nav className={isOpen ? "navbar-container open" : "navbar-container"}>
          <ul className="overlay">
            <div
              className="animated-target"
              style={targetStyle}
            ></div>

            <button className="btn-primary first" onClick={handleButtonClick}>
              <NavLink to="cgi" className={({ isActive }) => (isActive ? "clicked" : "unclicked")}>
                <li><p>CGI</p><span></span></li>
              </NavLink>
            </button>

            <button className="btn-primary" onClick={handleButtonClick}>
              <NavLink to="videos" className={({ isActive }) => (isActive ? "clicked" : "unclicked")}>
                <li><p>Videos</p><span></span></li>

              </NavLink>
            </button>

            <NavLink to="/" className={({ isActive }) => (isActive ? "logo-clicked" : "logo-unclicked")} id="logoLink">
              <li> <img id="logo" src={Logo} alt="Logo" title="Accueil" />
                <img id="logo-white" src={LogoWhite} alt="Logo white" title="Accueil" />
              </li>
            </NavLink>

            <button className="btn-primary" onClick={handleButtonClick}>
              <NavLink to="devweb" className={({ isActive }) => (isActive ? "clicked" : "unclicked")}>
                <li><p>Dev Web</p><span></span></li>

              </NavLink>
            </button>
            <button className="btn-primary" onClick={handleButtonClick}>
              <NavLink to="contact" className={({ isActive }) => (isActive ? "clicked" : "unclicked")}>
                <li><p>Contact</p><span></span></li>

              </NavLink>
            </button>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
