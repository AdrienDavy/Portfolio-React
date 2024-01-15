/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import React, { createContext, useContext, useState } from "react";

const WatchPlayContext = createContext(null);
export function useWatchPlay() {
  return useContext(WatchPlayContext);
}

export function WatchPlayProvider({ children }) {
  const [isAboutPlayed, setIsAboutPlayed] = useState(true);
  const [isContactPlayed, setIsContactPlayed] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentContactVideo, setCurrentContactVideo] = useState(null);
  const value = React.useMemo(() => ({ isAboutPlayed, setIsAboutPlayed, isContactPlayed, setIsContactPlayed, currentVideo, setCurrentVideo, currentContactVideo, setCurrentContactVideo }), [isAboutPlayed, setIsAboutPlayed, isContactPlayed, setIsContactPlayed, currentVideo, setCurrentVideo, currentContactVideo, setCurrentContactVideo]);

  return <WatchPlayContext.Provider value={value}>{children}</WatchPlayContext.Provider>;
}
WatchPlayProvider.propTypes = {
  children: PropTypes.node.isRequired,
};