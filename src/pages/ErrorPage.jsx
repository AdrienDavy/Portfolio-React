import { useNavigate } from "react-router-dom"
import logo from "../assets/img/logo.svg"
import HexBrick from "../components/HexBrick";
const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/");
  }
  return (
    <div className="error-container" style={{ background: `url("${logo}") no-repeat center`, backgroundSize: "50dvh" }}>
      <div className="error-message">
        <div className="loader">
          <HexBrick />
        </div>
        <p>Oops! Quelque chose s&apos;est mal passé. Veuillez réessayer plus tard.</p>
        <p>Ce n&apos;est pas une faute, juste un accident qui n&apos;était pas intentionnel.</p>
        <button className="btn-secondary"><p><input type="text" value="Revenir à l'accueil..." onClick={handleClickButton} /></p><span></span></button>
      </div>
    </div>
  )
}

export default ErrorPage
