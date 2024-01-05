import FormTemplate from "@components/FormTemplate"
import background from '@videoSources/home.mp4';
import { useTransitionPage } from "../contexts/TransitionContext";
import { motion } from "framer-motion";

const Contact = () => {
  const { isContactPage } = useTransitionPage();
  return (
    <motion.div
      className="fade"
      initial={{ x: 250, opacity: isContactPage ? 0 : 1 }}
      animate={{ x: 0, opacity: isContactPage ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-container">
        <div className="form">
          <h1>Contactez moi</h1>
          <FormTemplate />
        </div>
        <video src={background} autoPlay muted loop />
      </div>
    </motion.div >
  )
}

export default Contact
