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

  return (
    <>
      <header className={playAnimation ? "header hide" : "header"}>
        <button type="button" className="burger" onClick={toggleMenu}>
          <img
            src={isOpen ? CloseIcon : BurgerIcon}
            alt="Burger icon and cross close icon"
            className="burger-icon"
          />
        </button>
        <div className={isOpen ? "background open" : "background"}></div>
        <nav className={isOpen ? "navbar-container open" : "navbar-container"}>
          <ul className="overlay">
            <button className="btn-primary">
              <NavLink to="cgi" className={({ isActive }) => (isActive ? "clicked" : "unclicked")}>
                <li><p>CGI</p><span></span></li>
              </NavLink>
            </button>
            <button className="btn-primary">
              <NavLink to="videos" className={({ isActive }) => (isActive ? "clicked" : "unclicked")}>
                <li><p>Videos</p><span></span></li>

              </NavLink>
            </button>

            <NavLink to="/" className={({ isActive }) => (isActive ? "logo-clicked" : "logo-unclicked")} id="logoLink">
              <li> <img id="logo" src={Logo} alt="Logo" title="Accueil" />
                <img id="logo-white" src={LogoWhite} alt="Logo white" title="Accueil" />
              </li>
            </NavLink>

            <button className="btn-primary">
              <NavLink to="devweb" className={({ isActive }) => (isActive ? "clicked" : "unclicked")}>
                <li><p>Dev Web</p><span></span></li>

              </NavLink>
            </button>
            <button className="btn-primary">
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
