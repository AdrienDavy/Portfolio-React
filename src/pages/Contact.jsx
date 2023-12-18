import FormTemplate from "@components/FormTemplate"
import background from '@videoSources/home.mp4';

const Contact = () => {
  return (
    <div className="contact-container">

      <div className="form">
        <h1>Contactez moi</h1>
        <FormTemplate />
      </div>
      <video src={background} autoPlay muted loop />
    </div>
  )
}

export default Contact
