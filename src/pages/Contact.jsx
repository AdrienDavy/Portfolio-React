import FormTemplate from "@components/FormTemplate"
import background from '@videoSources/home.mp4';

const Contact = () => {
  return (
    <div className="contact-container">
      <FormTemplate />
      <video src={background} autoPlay muted loop />
    </div>
  )
}

export default Contact
