import background from '@videoSources/home.mp4';
import { useTransitionPage } from "../contexts/TransitionContext";
import { motion } from "framer-motion";


const Home = () => {
  const { isHomePage } = useTransitionPage();
  return (
    <motion.div
      className="fade"
      initial={{ scale: 1.1, opacity: isHomePage ? 0 : 1 }}
      animate={{ scale: 1, opacity: isHomePage ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='home-container'>
        <video src={background} autoPlay muted loop />
      </div>
    </motion.div>
  )
}

export default Home
