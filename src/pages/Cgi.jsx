import VideoPlayer from "@components/VideoPlayer";
import { useTransitionPage } from "../contexts/TransitionContext";
import { motion } from "framer-motion";

const Cgi = () => {
  const { isCgiPage } = useTransitionPage();
  return (
    <motion.div
      className="fade"
      initial={{ x: -100, opacity: isCgiPage ? 0 : 1 }}
      animate={{ x: 0, opacity: isCgiPage ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      <div className="cgi-container">
        <VideoPlayer />
      </div>
    </motion.div>
  )
}

export default Cgi
