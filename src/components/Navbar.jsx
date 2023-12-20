import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from '../assets/img/logo.svg';
import LogoWhite from '../assets/img/logoWhite.svg';
import BurgerIcon from "../assets/img/icon-burger.svg";
import CloseIcon from "../assets/img/icon-close.svg";
import { useVideo } from "@contexts/VideoContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { playAnimation } = useVideo();
  const [activeButton, setActiveButton] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [targetStyle, setTargetStyle] = useState({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0
  });

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

    // Attendre la fin du mouvement (par exemple, après 300 ms)
    setTimeout(() => {
      setIsAnimating(false);
    }, 60);
  };

  useEffect(() => {
    const handleResize = () => {
      // Mettez à jour le style de l'élément animated-target en cas de redimensionnement de la fenêtre
      if (activeButton) {
        const buttonRect = activeButton.getBoundingClientRect();

        setTargetStyle({
          bottom: `${buttonRect.bottom}px`,
          height: `${buttonRect.height}px`,
          left: `${buttonRect.left}px`,
          right: `${buttonRect.right}px`,
          top: `${buttonRect.top}px`,
          width: `${buttonRect.width}px`,
          x: `${buttonRect.x}px`,
          y: `${buttonRect.y}px`,
        });
      }
    };

    // Ajouter un écouteur d'événements pour le redimensionnement de la fenêtre
    window.addEventListener('resize', handleResize);

    // Supprimer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeButton]);


  return (
    <>
      <div
        className={playAnimation ? `animated-target ${isAnimating ? 'blur' : ''} hide` : `animated-target ${isAnimating ? 'blur' : ''}`}
        style={targetStyle}
      >
        <span className="tlv"></span>
        <span className="tlh"></span>
        <span className="trv"></span>
        <span className="trh"></span>
        <span className="brv"></span>
        <span className="brh"></span>
        <span className="blv"></span>
        <span className="blh"></span>
      </div>
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

            <button className="btn-primary first" onMouseOver={handleButtonClick}>
              <NavLink to="cgi" className={({ isActive }) => (isActive ? "clicked" : "unclicked")}>
                <li><p>CGI</p><span></span></li>
              </NavLink>
            </button>

            <button className="btn-primary" onMouseOver={handleButtonClick}>
              <NavLink to="videos" className={({ isActive }) => (isActive ? "clicked" : "unclicked")}>
                <li><p>Videos</p><span></span></li>
              </NavLink>
            </button>

            <NavLink to="/" className={({ isActive }) => (isActive ? "logo-clicked" : "logo-unclicked")} id="logoLink" onMouseOver={handleButtonClick}>
              <li> <img id="logo" src={Logo} alt="Logo" title="Accueil" />
                <img id="logo-white" src={LogoWhite} alt="Logo white" title="Accueil" />
              </li>
            </NavLink>

            <button className="btn-primary" onMouseOver={handleButtonClick}>
              <NavLink to="devweb" className={({ isActive }) => (isActive ? "clicked" : "unclicked")}>
                <li><p>Dev Web</p><span></span></li>

              </NavLink>
            </button>
            <button className="btn-primary" onMouseOver={handleButtonClick}>
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
