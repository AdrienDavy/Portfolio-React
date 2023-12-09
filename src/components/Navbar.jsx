import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="cgi">
        CGI
      </NavLink>
      <NavLink to="devweb">
        Dev Web
      </NavLink>
      <NavLink to="videos">
        Videos
      </NavLink>
      <NavLink to="contact">
        Contact
      </NavLink>
    </header>
  )
}

export default Navbar