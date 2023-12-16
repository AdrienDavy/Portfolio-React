import { NavLink } from "react-router-dom";
import Logo from '../assets/img/logo.svg';
import LogoWhite from '../assets/img/logoWhite.svg';

const Navbar = () => {
  return (
    <header>
      <NavLink to="cgi" className={({ isActive }) => (isActive ? "clicked" : "unclicked")}>
        CGI
        <span></span>
      </NavLink>
      <NavLink to="videos" className={({ isActive }) => (isActive ? "clicked" : "unclicked")}>
        Videos
        <span></span>
      </NavLink>
      <NavLink to="/" className={({ isActive }) => (isActive ? "logo-clicked" : "logo-unclicked")} id="logoLink">
        <img id="logo" src={Logo} alt="Logo" title="Accueil" />
        <img id="logo-white" src={LogoWhite} alt="Logo white" title="Accueil" />
      </NavLink>
      <NavLink to="devweb" className={({ isActive }) => (isActive ? "clicked" : "unclicked")}>
        Dev Web
        <span></span>
      </NavLink>
      <NavLink to="contact" className={({ isActive }) => (isActive ? "clicked" : "unclicked")}>
        Contact
        <span></span>
      </NavLink>
    </header>
  )
}

export default Navbar
