/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import React, { createContext, useContext } from "react";
import { useLocation } from "react-router-dom";

const TransitionPageContext = createContext(null);
export function useTransitionPage() {
  return useContext(TransitionPageContext);
}

export function TransitionPageProvider({ children }) {
  const locationPage = useLocation();
  const isCgiPage = locationPage.pathname.includes("/cgi");
  const isContactPage = locationPage.pathname.includes("/contact");
  const isDevwebPage = locationPage.pathname.includes("/devweb");
  const isHomePage = locationPage.pathname.includes("/");
  const isVideosPage = locationPage.pathname.includes("/videos");
  const value = React.useMemo(() => ({ isCgiPage, isContactPage, isDevwebPage, isHomePage, isVideosPage }), [isCgiPage, isContactPage, isDevwebPage, isHomePage, isVideosPage]);

  return <TransitionPageContext.Provider value={value}>{children}</TransitionPageContext.Provider>;
}
TransitionPageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};