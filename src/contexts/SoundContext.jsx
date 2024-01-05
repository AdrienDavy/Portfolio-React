/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import React, { createContext, useContext, useState } from "react";

const SoundContext = createContext(null);
export function useSound() {
  return useContext(SoundContext);
}

export function SoundProvider({ children }) {
  const [isMuted, setIsMuted] = useState(true);
  const value = React.useMemo(() => ({ isMuted, setIsMuted }), [isMuted, setIsMuted]);

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}
SoundProvider.propTypes = {
  children: PropTypes.node.isRequired,
};