import VideoPlayer from "@components/VideoPlayer";
import { useTransitionPage } from "../contexts/TransitionContext";
import { motion } from "framer-motion";

const Videos = () => {
  const { isVideosPage } = useTransitionPage();

  return (
    <motion.div
      className="fade"
      initial={{ x: -250, opacity: isVideosPage ? 0 : 1 }}
      animate={{ x: 0, opacity: isVideosPage ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="videos-container">
        <VideoPlayer />
      </div>
    </motion.div>
  )
}

export default Videos
