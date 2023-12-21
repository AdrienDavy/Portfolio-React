/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import React, { createContext, useContext, useState } from "react";

const VideoContext = createContext(null);
export function useVideo() {
  return useContext(VideoContext);
}

export function VideoProvider({ children }) {
  const [playAnimation, setPlayAnimation] = useState();
  const value = React.useMemo(() => ({ playAnimation, setPlayAnimation }), [playAnimation, setPlayAnimation]);

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
}
VideoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};