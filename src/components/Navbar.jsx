import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from '../assets/img/logo.svg';
import LogoWhite from '../assets/img/logoWhite.svg';
import BurgerIcon from "../assets/img/icon-burger.svg";
import CloseIcon from "../assets/img/icon-close.svg";
import { useTarget } from '@contexts/TargetContext';
import TargetStyle from "./TargetStyle";

const Navbar = () => {
  const { setActiveButton, setIsAnimating, setTargetStyle } = useTarget();
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <>
      <TargetStyle />
      <button type="button" className="burger" onClick={toggleMenu}>
        <img
          src={isOpen ? CloseIcon : BurgerIcon}
          alt="Burger icon and cross close icon"
          className="burger-icon"
        />
      </button>
      <header className="header">
        <nav className={isOpen ? "navbar-container open" : "navbar-container"} onClick={() => toggleMenu()}>
          <ul className="overlay">

            <button className="btn-primary first" onMouseOver={handleButtonClick}>
              <NavLink to="cgi" className={({ isActive }) => (isActive ? "clicked" : "unclicked")} onClick={() => toggleMenu()}>
                <li><p>CGI</p><span></span></li>
              </NavLink>
            </button>

            <button className="btn-primary" onMouseOver={handleButtonClick}>
              <NavLink to="videos" className={({ isActive }) => (isActive ? "clicked" : "unclicked")} onClick={() => toggleMenu()}>
                <li><p>Videos</p><span></span></li>
              </NavLink>
            </button>

            <NavLink to="/" className={({ isActive }) => (isActive ? "logo-clicked" : "logo-unclicked")} id="logoLink" onMouseOver={handleButtonClick} onClick={() => toggleMenu()}>
              <li> <img id="logo" src={Logo} alt="Logo" title="Accueil" />
                <img id="logo-white" src={LogoWhite} alt="Logo white" title="Accueil" />
              </li>
            </NavLink>

            <button className="btn-primary" onMouseOver={handleButtonClick}>
              <NavLink to="devweb" className={({ isActive }) => (isActive ? "clicked" : "unclicked")} onClick={() => toggleMenu()}>
                <li><p>Dev Web</p><span></span></li>

              </NavLink>
            </button>
            <button className="btn-primary" onMouseOver={handleButtonClick}>
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
