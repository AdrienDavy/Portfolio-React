/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import React, { createContext, useContext, useState } from "react";

const TargetContext = createContext(null);
export function useTarget() {
  return useContext(TargetContext);
}

export function TargetProvider({ children }) {
  const [activeButton, setActiveButton] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [targetStyle, setTargetStyle] = useState({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0
  });
  const value = React.useMemo(() => ({ activeButton, setActiveButton, isAnimating, setIsAnimating, targetStyle, setTargetStyle }), [activeButton, setActiveButton, isAnimating, setIsAnimating, targetStyle, setTargetStyle]);

  return <TargetContext.Provider value={value}>{children}</TargetContext.Provider>;
}
TargetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};